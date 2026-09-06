# Content Contract — Foundation Grade 8 Maths

One-page schema and rules for `content/questions/foundation/math/grade-8/<chapter-slug>/`
and `content/formulas/foundation/<chapter-slug>.json`. This is the only content the
Foundation worksheet generator reads. Do not add chapters outside this contract.

## Locked chapters (do not break generate/score)

- `rational-numbers-and-integers`
- `linear-equations-in-one-variable`
- `comparing-quantities`

## Item schema (`items-*.json`)

Each shard file is a JSON array of item objects. Required fields:

| Field       | Type              | Rules                                                              |
|-------------|-------------------|---------------------------------------------------------------------|
| `id`        | string            | Globally unique across all shards.                                 |
| `type`      | `"MCQ" \| "NAT"`  |                                                                      |
| `chapter`   | string            | Must exactly equal the shard's folder name (slug).                 |
| `subtopic`  | string            | Should exist in `content/taxonomy.yaml` for the chapter.            |
| `stem`      | string            | The question text.                                                 |
| `options`   | string[4]         | Required for `MCQ` only. Exactly 4 options.                        |
| `answer`    | string            | See rules below.                                                   |
| `solution`  | string            | Full worked solution. Its final stated numeric value must match the answer. |
| `formulaIds`| string[]          | Optional. IDs of matching cards in the chapter's formula file.      |
| `gold`      | boolean           | Optional. `true` once an item is verified to score correctly.      |

### Answer rules

- **MCQ**: `answer` is a single letter `A`–`D` that matches the correct option
  (`A` = `options[0]`, `B` = `options[1]`, etc).
- **NAT**: `answer` is an integer (e.g. `"1800"`) or a `p/q` fraction string
  (e.g. `"1/10"`, `"-3/8"`).
- Scoring is always against `item.answer` for that specific item. There is no
  global/shared answer key.

## Formula card schema (`content/formulas/foundation/<chapter-slug>.json`)

JSON array of cards: `{ id, name, latex, vars, example }`. `id` values are what
`formulaIds` on items reference.

## Generate/score rules

- `generateWorksheet` loads **only**
  `content/questions/foundation/math/grade-8/<chapter-slug>/` for Foundation
  Grade 8 Mathematics. It never falls back to the Physics/JEE question bank.
- Each generated Foundation question is scored against its own `item.answer`.
- Syllabus map (mastery) is tracked per chapter id independently; submitting
  one chapter must not reset another chapter's score.

## Repo rules

- Never commit the `.next` build directory.
- Run `npm run qa:content` before committing content changes; it must pass.
