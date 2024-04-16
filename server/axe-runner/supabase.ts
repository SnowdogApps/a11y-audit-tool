import type { Config, TestResult } from '@/types/axe-runner'

export default async function (
  { supbaseUrl, supbaseKey, supbaseServiceKey }: Config,
  testResults: TestResult[]
) {
  if (!supbaseUrl || !supbaseKey || !supbaseServiceKey) {
    throw new Error('Missing supabase keys.')
  }

  const { status, statusText } = await fetch(`${supbaseUrl}/rest/v1/axe`, {
    method: 'POST',
    headers: {
      apikey: supbaseKey,
      Authorization: `Bearer ${supbaseServiceKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(testResults),
  }).catch((err) => {
    console.error('Supabase DB update issue: ', err)
    process.exit(1)
  })

  if (![200, 201].includes(status)) {
    console.error(`[${status}] Something went wrong: "${statusText}".`)
  }
}
