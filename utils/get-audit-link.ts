import type { Audit, Axe } from 'types/database'

export const getAuditLink = ({
  id,
  axeId,
  status,
  reportType,
}: {
  id: Audit['id']
  axeId?: Axe['id']
  status: Audit['status']
  reportType: Audit['report_type']
}) => {
  let urlPath = ''

  if (status === 'completed') {
    urlPath = `/audit/report/${id}?type=${reportType}`
  } else {
    urlPath = `/audit/${id}`

    if (axeId) {
      urlPath += `?resultId=${axeId}`
    }
  }

  return urlPath
}
