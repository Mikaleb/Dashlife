<template>
  <div>
    <v-text-field
      :label="field.labelI18nKey"
      v-bind="field.input"
      @input="$emit('input', $event)"
    ></v-text-field>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'FInput',
  props: {
    field: {
      type: Object,
      required: false,
    },
    name: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  setup(props, ctx) {
    return {}
  },
})
</script>
