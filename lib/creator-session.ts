export type CreatorSession = {
  name: string
  email: string
}

const KEY = "ngampus-creator-session"

export function readCreatorSession(): CreatorSession | null {
  if (typeof window === "undefined") return null
  const raw = sessionStorage.getItem(KEY)
  if (!raw) return null
  try {
    const data = JSON.parse(raw) as CreatorSession
    if (!data.email || !data.name) return null
    return data
  } catch {
    return null
  }
}

export function writeCreatorSession(session: CreatorSession) {
  sessionStorage.setItem(KEY, JSON.stringify(session))
}

export function clearCreatorSession() {
  sessionStorage.removeItem(KEY)
}
