<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-icon class="mr-2">mdi-account</v-icon>
      <nuxt-link :to="localePath('/elements/who')">WHO AM I</nuxt-link>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Index',
  setup(props, ctx) {
    return {}
  }
})
</script>
