export const getStatus = ({
  automaticTestResultsStatus,
  manualTestResultsStatus,
  reportType = 'functional',
}: {
  automaticTestResultsStatus: string
  manualTestResultsStatus: string
  reportType?: string
}) => {
  if (
    ['Passed', 'Not applicable', automaticTestResultsStatus].includes(
      manualTestResultsStatus
    )
  ) {
    return manualTestResultsStatus
  }
  if (
    automaticTestResultsStatus === 'Failed' ||
    (reportType === 'review' &&
      automaticTestResultsStatus === 'Passed' &&
      manualTestResultsStatus === 'Not tested')
  ) {
    return automaticTestResultsStatus
  }
  return manualTestResultsStatus
}
