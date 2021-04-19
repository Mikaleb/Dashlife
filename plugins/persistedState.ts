/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'
import { Context } from '@nuxt/types'

export default ({ store }: Context) => {
  createPersistedState({
    paths: ['user'],
    storage: {
      getItem: (key) => window.localStorage.getItem(key),
      setItem: (key, value) => window.localStorage.setItem(key, value),
      removeItem: (key) => window.localStorage.removeItem(key)
    }
  })(store)
}
