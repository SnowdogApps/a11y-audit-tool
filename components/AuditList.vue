<script setup lang="ts">
import type { ExtendedAudit } from 'types/database'
import { getAuditLink } from '~/utils/get-audit-link'

const props = withDefaults(
  defineProps<{
    audits: ExtendedAudit[]
    initialCount?: number
    isLoading?: boolean
  }>(),
  {
    initialCount: 0,
    isLoading: false,
  }
)

const count = ref(props.initialCount ? props.initialCount : props.audits.length)
const visibleAudits = computed(() => props.audits.slice(0, count.value))
</script>

<template>
  <Card>
    <template #title>
      <h2 id="audits-card-title">Your recent audits</h2>
    </template>
    <template #content>
      <Spinner
        v-if="isLoading"
        class="mx-auto w-20"
      />
      <ul
        v-else-if="audits.length"
        aria-labelledby="audits-card-title"
      >
        <li
          v-for="{ id, config, axe, status, report_type } in visibleAudits"
          :key="id"
        >
          <NuxtLink
            v-if="status === 'completed' || config.noAxe || axe?.length"
            class="p-button p-button-text w-full justify-between"
            :to="
              getAuditLink({
                id,
                axeId: axe[0]?.id,
                status,
                reportType: report_type,
              })
            "
          >
            <span class="text-left">{{ config.title }}</span>
            <span
              class="p-button p-button-info ml-4 min-w-[116px] justify-center"
            >
              <template v-if="status === 'completed'">See report</template>
              <template v-else>See results</template>
            </span>
          </NuxtLink>
          <div
            v-else
            class="border border-transparent px-4 py-3.5 text-left leading-normal"
          >
            {{ config.title }}
          </div>
        </li>
      </ul>
      <p v-else>Your audit list is empty</p>
    </template>
    <template
      v-if="audits.length"
      #footer
    >
      <NuxtLink
        class="p-button"
        to="/audit/?user=me"
      >
        See all my audits
      </NuxtLink>
    </template>
  </Card>
</template>
