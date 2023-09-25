export const getStatus = (
  automaticTestResultsStatus: string,
  manualTestResultsStatus: string
) => {
  if (
    ['Passed', 'Not applicable', automaticTestResultsStatus].includes(
      manualTestResultsStatus
    )
  ) {
    return manualTestResultsStatus
  }
  if (automaticTestResultsStatus === 'Failed') {
    return automaticTestResultsStatus
  }
  return manualTestResultsStatus
}
