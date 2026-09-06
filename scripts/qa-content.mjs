#!/usr/bin/env node
// Validates the locked Foundation Grade 8 Maths content shards.
// Exits non-zero (and prints every failure) if any rule is violated.

import fs from "node:fs";
import path from "node:path";

const CONTENT_ROOT = path.join(process.cwd(), "content", "questions", "foundation", "math", "grade-8");
const VALID_MCQ_LETTERS = ["A", "B", "C", "D"];

const errors = [];
const seenIds = new Map(); // id -> location string

function fail(location, message) {
  errors.push(`${location}: ${message}`);
}

function extractLastNumber(text) {
  if (typeof text !== "string") return null;
  const matches = text.match(/-?\d+(?:\.\d+)?(?:\/-?\d+(?:\.\d+)?)?/g);
  if (!matches || matches.length === 0) return null;
  return matches[matches.length - 1];
}

function toNumeric(token) {
  if (token === null) return null;
  const fractionMatch = token.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
  if (fractionMatch) return Number(fractionMatch[1]) / Number(fractionMatch[2]);
  const value = Number(token);
  return Number.isFinite(value) ? value : null;
}

function numbersMatch(a, b) {
  if (a === null || b === null) return true; // nothing to compare, skip
  return Math.abs(a - b) < 1e-6;
}

if (!fs.existsSync(CONTENT_ROOT)) {
  console.error(`Content root not found: ${CONTENT_ROOT}`);
  process.exit(1);
}

const chapterSlugs = fs.readdirSync(CONTENT_ROOT).filter((name) =>
  fs.statSync(path.join(CONTENT_ROOT, name)).isDirectory()
);

for (const slug of chapterSlugs) {
  const chapterDir = path.join(CONTENT_ROOT, slug);
  const itemFiles = fs.readdirSync(chapterDir).filter((name) => /^items-\d+\.json$/.test(name));

  for (const fileName of itemFiles) {
    const filePath = path.join(chapterDir, fileName);
    const location = `${slug}/${fileName}`;
    const raw = fs.readFileSync(filePath, "utf8");

    let items;
    try {
      const parsed = JSON.parse(raw);
      items = Array.isArray(parsed) ? parsed : parsed.items;
    } catch (error) {
      fail(location, `invalid JSON (${error.message})`);
      continue;
    }

    if (!Array.isArray(items)) {
      fail(location, "expected a top-level array (or { items: [...] })");
      continue;
    }

    items.forEach((item, index) => {
      const itemLocation = `${location}#${index} (${item.id ?? "no id"})`;

      if (!item.id) {
        fail(itemLocation, "missing id");
      } else if (seenIds.has(item.id)) {
        fail(itemLocation, `duplicate id, also used at ${seenIds.get(item.id)}`);
      } else {
        seenIds.set(item.id, itemLocation);
      }

      if (item.chapter !== slug) {
        fail(itemLocation, `chapter field "${item.chapter}" does not match folder name "${slug}"`);
      }

      if (item.type !== "MCQ" && item.type !== "NAT") {
        fail(itemLocation, `type must be "MCQ" or "NAT", got "${item.type}"`);
        return;
      }

      if (!item.stem) fail(itemLocation, "missing stem");
      if (!item.solution) fail(itemLocation, "missing solution");
      if (item.answer === undefined || item.answer === null || item.answer === "") {
        fail(itemLocation, "missing answer");
        return;
      }

      const solutionValue = toNumeric(extractLastNumber(item.solution));

      if (item.type === "MCQ") {
        if (!Array.isArray(item.options) || item.options.length !== 4) {
          fail(itemLocation, `MCQ must have exactly 4 options, got ${item.options?.length ?? 0}`);
          return;
        }
        if (!VALID_MCQ_LETTERS.includes(item.answer)) {
          fail(itemLocation, `MCQ answer letter "${item.answer}" is not one of A-D`);
          return;
        }
        const answerIndex = VALID_MCQ_LETTERS.indexOf(item.answer);
        const optionValue = toNumeric(extractLastNumber(item.options[answerIndex]));
        if (!numbersMatch(solutionValue, optionValue)) {
          fail(
            itemLocation,
            `answer ${item.answer} ("${item.options[answerIndex]}") does not match solution's final value (${solutionValue})`
          );
        }
      } else {
        const isInteger = /^-?\d+$/.test(item.answer);
        const isFraction = /^-?\d+\/-?\d+$/.test(item.answer);
        if (!isInteger && !isFraction) {
          fail(itemLocation, `NAT answer "${item.answer}" must be an integer or p/q string`);
          return;
        }
        const answerValue = toNumeric(item.answer);
        if (!numbersMatch(solutionValue, answerValue)) {
          fail(
            itemLocation,
            `answer "${item.answer}" does not match solution's final value (${solutionValue})`
          );
        }
      }
    });
  }
}

if (errors.length > 0) {
  console.error(`qa:content found ${errors.length} problem(s):\n`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(`qa:content OK — validated ${seenIds.size} items across ${chapterSlugs.length} chapter(s).`);
