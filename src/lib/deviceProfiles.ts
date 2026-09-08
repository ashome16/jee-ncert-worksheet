export type ProfileTrack = "foundation" | "jee";

export type DeviceProfile = {
  id: string;
  name: string;
  avatar?: string;
  track: ProfileTrack;
  grade: string;
};

export const GUEST_PROFILE: DeviceProfile = {
  id: "guest",
  name: "Guest",
  track: "foundation",
  grade: "8",
};

export const PROFILES_KEY = "device-profiles-v1";
export const ACTIVE_PROFILE_KEY = "device-active-profile-id";
export const LEGACY_PROFILE_KEY = "student-profile";

export function newProfileId(): string {
  return `p_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
}

export function loadProfiles(): DeviceProfile[] {
  if (typeof window === "undefined") return [GUEST_PROFILE];
  try {
    const raw = window.localStorage.getItem(PROFILES_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as DeviceProfile[];
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
    const legacy = window.localStorage.getItem(LEGACY_PROFILE_KEY);
    if (legacy) {
      const old = JSON.parse(legacy) as Partial<DeviceProfile>;
      const migrated: DeviceProfile = {
        id: newProfileId(),
        name: (old.name || "").trim() || "Student",
        avatar: old.avatar,
        track: old.track === "jee" ? "jee" : "foundation",
        grade: old.grade || "8",
      };
      saveProfiles([migrated]);
      window.localStorage.setItem(ACTIVE_PROFILE_KEY, migrated.id);
      return [migrated];
    }
  } catch {
    // ignore
  }
  return [];
}

export function saveProfiles(profiles: DeviceProfile[]): void {
  window.localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
}

export function loadActiveId(profiles: DeviceProfile[]): string {
  const stored = window.localStorage.getItem(ACTIVE_PROFILE_KEY);
  if (stored && (stored === "guest" || profiles.some((p) => p.id === stored))) return stored;
  if (profiles[0]) return profiles[0].id;
  return "guest";
}

export function profileById(profiles: DeviceProfile[], id: string): DeviceProfile {
  if (id === "guest") return GUEST_PROFILE;
  return profiles.find((p) => p.id === id) ?? GUEST_PROFILE;
}

export function resetThisDevice(): void {
  const keys = [
    PROFILES_KEY,
    ACTIVE_PROFILE_KEY,
    LEGACY_PROFILE_KEY,
    "syllabus_mastery_map_v1",
    "student-workspace-papers-v1",
  ];
  keys.forEach((key) => window.localStorage.removeItem(key));
}