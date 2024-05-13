import type { AxeResults, NodeResult } from 'axe-core'
import type { ViewportSize } from 'playwright'
import type {
  TestResult,
  TrimmedResults,
  TrimmedNodes,
  ResultError,
} from '@/types/axe-runner'

function trimNodes(nodes: NodeResult[]) {
  return nodes.reduce<TrimmedNodes[]>(
    (acc, { html, target, failureSummary }) => {
      acc.push({
        html,
        target,
        failureSummary,
      })

      return acc
    },
    []
  )
}

function trimResults({
  url,
  violations,
  passes,
  toolOptions,
  timestamp,
  testRunner,
  testEngine,
  testEnvironment,
}: AxeResults): TrimmedResults {
  return {
    // @ts-ignore - @todo: fix me
    passes: passes.map((pass) => ({
      ...pass,
      nodes: trimNodes(pass.nodes),
    })),
    testEnvironment,
    testEngine,
    testRunner,
    timestamp,
    toolOptions,
    url,
    // @ts-ignore - @todo: fix me
    violations: violations.map((violation) => ({
      ...violation,
      nodes: trimNodes(violation.nodes),
    })),
  }
}

export const parseResults = function (
  auditId: string,
  size: ViewportSize,
  errors?: ResultError[],
  results?: AxeResults,
  selector?: string,
  endSelector?: string
): TestResult {
  return {
    audit_id: auditId,
    selector: selector || null,
    end_selector: endSelector || null,
    size: `${size.width},${size.height}`,
    results: results ? trimResults(results) : null,
    errors,
  }
}
