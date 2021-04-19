<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          I am :
          <template v-if="user">
            {{user.first_name}}
            {{user.last_name}}<br /><br />
            Tel : {{user.phoneNumber}} <br />
            Mail: {{user.email}}<br />
          </template>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default defineComponent({
  name: 'Index',
  components: {
    Logo,
    VuetifyLogo
  },
  setup(props, ctx) {
    const user = computed<any>(() => ctx.root.$store.getters['getUser'])

    return {
      user
    }
  }
})
</script>
