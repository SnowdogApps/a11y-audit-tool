import type { Audit, Axe } from 'types/database'

export const getAuditLink = ({
  id,
  axeId,
  status,
  reportType,
}: {
  id: Audit['id']
  axeId: Axe['id']
  status: Audit['status']
  reportType: Audit['report_type']
}) => {
  if (status === 'completed') {
    return `/audit/report/${id}?type=${reportType}`
  }
  return `/audit/${id}?resultId=${axeId}`
}
