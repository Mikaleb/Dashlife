import { FormField } from '@/types/components/FormInputs'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const state = () => ({
  user: {
    first_name: '',
    last_name: '',
    phoneNumber: '',
    email: ''
  }
})
export const mutations = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  UPDATE_USER(state: { user: { payload: FormField } }, payload: any) {
    state.user = {
      ...payload
    }
  }
}

export const actions = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  updateUser({ commit }: any, payload: FormField): void {
    commit('UPDATE_USER', payload)
  }
}

export const getters = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getUser: (state: any) => state.user
}
