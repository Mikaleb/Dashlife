<template>
  <div>
    <v-text-field
      :label="$t(field.labelI18nKey + '.' + field.input.id)"
      v-bind="field.input"
      @input="$emit('input', $event)"
      :value="value"
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
      required: false
    },
    name: {
      type: String
    },
    value: {
      type: String
    }
  },
  setup(props, ctx) {
    return {}
  }
})
</script>
