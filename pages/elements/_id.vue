<template>
  <div>
    yo

    {{ localElements }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import elements from '~/data/elements.js'

export default defineComponent({
  name: '_id',
  setup(props, ctx) {
    const localElements = reactive<any[]>(elements)

    return {
      localElements
    }
  }
})
</script>
