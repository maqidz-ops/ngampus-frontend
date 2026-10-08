export type CreatorSubmitStatus = "Diproses" | "Ditolak" | "Diterima"

export type CreatorPlatform = "TikTok" | "Instagram" | "X / Thread"

export type CreatorSubmission = {
  link: string
  platform: CreatorPlatform
  submittedAt: string
  status: CreatorSubmitStatus
  reward: number
}

export type CreatorWithdrawal = {
  at: string
  amount: number
  status: string
  bank: string
  note: string
}

export const creatorSubmissions: CreatorSubmission[] = [
  {
    link: "https://tiktok.com/xxxxx",
    platform: "TikTok",
    submittedAt: "2026-10-04 13:01:52",
    status: "Diterima",
    reward: 0,
  },
]

export const creatorWithdrawals: CreatorWithdrawal[] = []
