<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="menuData.drawer"
      :mini-variant="menuData.miniVariant"
      :clipped="menuData.clipped"
      fixed
      app
    >
      <v-list>
        <!-- LEFT MENU -->
        <v-list-item
          v-for="(item, i) in menuData.items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="menuData.clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="menuData.drawer = !menuData.drawer" />
      <v-btn icon @click.stop="menuData.miniVariant = !menuData.miniVariant">
        <v-icon
          >mdi-{{
            `chevron-${menuData.miniVariant ? 'right' : 'left'}`
          }}</v-icon
        >
      </v-btn>
      <nuxt-link :to="localePath('/')">
        <v-toolbar-title v-text="menuData.title" />
      </nuxt-link>
      <v-spacer />
      <!-- H-MENU -->
      <current-time></current-time>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="transparent" depressed dark v-bind="attrs" v-on="on">
            <v-icon class="mr-2">mdi-account</v-icon> {{ userName }}
          </v-btn>
        </template>
        <v-list>
          <!-- USER BTN -->
          <v-list-item
            nuxt
            :to="item.to"
            v-for="(item, index) in menuData.menuHorizontal"
            :key="index"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="menuData.rightDrawer"
      :right="menuData.right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="menuData.right = !menuData.right">
          <v-list-item-action>
            <v-icon light> mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!menuData.fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from '@nuxtjs/composition-api'
import CurrentTime from '@/components/CurrentTime.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    CurrentTime
  },
  setup(props, ctx) {
    const user = computed<any>(() => ctx.root.$store.getters['getUser'])

    const userName = computed<string | null>(() => {
      if (!user) return null
      const firstName =
        (user.value.first_name || '').substring(0, 12) +
        (user.value.first_name.length > 12 ? '…' : '')
      const lastName =
        (user.value.last_name || '').substring(0, 12) +
        (user.value.last_name.length > 12 ? '…' : '')

      return `${firstName} ${lastName}`
    })

    const menus = {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [],
      menuHorizontal: [
        {
          icon: 'mdi-account',
          title: 'Edit my profile',
          to: process.client ? ctx.root.localePath('user-edit') : ''
        },
        {
          icon: 'mdi-power',
          title: 'Logout',
          to: '/logout'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Dashlife'
    }

    const menuData = reactive<any>(menus)
    return {
      user,
      menuData,
      userName
    }
  }
})
</script>
