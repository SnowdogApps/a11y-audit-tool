export const checkTimeElapsedInMinutes = (
  eventCreationDate: string,
  minutes: number = 1
): boolean => {
  const OneMinuteInMilliseconds = 1000 * 60
  const creationUTCDateTime = eventCreationDate
  const currentUTCDateTime = new Date().toISOString()
  const timezoneOffset = new Date().getTimezoneOffset()

  const timeDifference =
    Date.parse(currentUTCDateTime) - Date.parse(creationUTCDateTime)
  const timeElapsedInMinutes = timeDifference / OneMinuteInMilliseconds // convert milliseconds to minutes

  return timeElapsedInMinutes + timezoneOffset >= minutes
}
