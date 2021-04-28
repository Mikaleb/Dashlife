<template>
  <v-card>
    <v-card-title class="headline">
      Welcome to the Vuetify + Nuxt.js template
    </v-card-title>
    <v-card-text>
      I am :
      <template v-if="user">
        {{ user.first_name }}
        {{ user.last_name }}<br /><br />
        Tel : {{ user.phoneNumber }} <br />
        Mail: {{ user.email }}<br />
      </template>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Index',
  setup(props, ctx) {
    const user = computed<any>(() => ctx.root.$store.getters['getUser'])

    return {
      user
    }
  }
})
</script>
