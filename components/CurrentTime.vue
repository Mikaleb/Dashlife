<template>
  <div class="clock">
    <p class="time shadow" v-text="currentTime"></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useCurrentTime } from '@/composables/useCurrentTime'

export default defineComponent({
  name: 'CurrentTime',
  setup(props, ctx) {
    const count = ref(0)
    const { currentTime } = useCurrentTime()
    return { count, currentTime }
  }
})
</script>
