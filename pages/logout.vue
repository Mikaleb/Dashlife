<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, computed, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Logout',
  setup(props, ctx) {
    const user = computed<any>(() => ctx.root.$store.getters['getUser'])

    if (user) {
      const emptyUser = {
        first_name: '',
        last_name: '',
        phoneNumber: '',
        email: ''
      }
      ctx.root.$store.dispatch('updateUser', emptyUser)
      const route = useRouter()
      route.push('/')
    }

    return {}
  }
})
</script>
