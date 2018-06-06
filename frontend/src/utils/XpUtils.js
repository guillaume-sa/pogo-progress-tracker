export const MAX_XP = 20000000

export function getDaysTo40(user_xp, daily_xp){
  if (daily_xp <= 0) return Number.Infinity;

  return (user_xp > MAX_XP) ? (
    0
  ) : (
    Math.ceil((MAX_XP - user_xp) / daily_xp)
  )
}

export function getCurrentXP(user_xp_entries){
  return (user_xp_entries.length > 0) ? (
    user_xp_entries[user_xp_entries.length - 1].value
  ) : (
    0
  )
}
