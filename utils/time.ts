export const oneMinuteInMilliseconds = 1000 * 60

export const timezoneOffsetInMilliseconds =
  new Date().getTimezoneOffset() * oneMinuteInMilliseconds

export const hasTimeElapsedInMinutes = (
  eventUTCDatetime: string, // UTC time from supabase
  minutes: number = 1
): boolean => {
  const timeDifference =
    Date.now() + timezoneOffsetInMilliseconds - Date.parse(eventUTCDatetime)

  return timeDifference - minutes * oneMinuteInMilliseconds >= 0
}
