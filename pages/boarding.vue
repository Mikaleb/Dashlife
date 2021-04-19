<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Bienvenue sur Dashlife ! Votre outil qui permet de gérer vos infos
          persos localement sans avoir à chercher.
        </v-card-title>
        <v-card-text>
          <p>Tout d'abord, les présentations s'imposent, qui êtes-vous?</p>
          <form @submit.prevent="onSubmit">
            <component
              v-for="field in formFields"
              :is="field.component"
              :key="field.group.id"
              v-model="formData[field.model]"
              :field="field"
              :name="field.input.id"
            />
            <v-btn class="mr-4" type="submit"> {{ $t('submit') }} </v-btn>
            <v-btn @click="clear"> clear </v-btn>
          </form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from 'vee-validate'
import FInput from '@/components/Form/FInput.vue'
import user from '~/data/user.js'
import { FormField } from '@/types/components/FormInputs'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})'
})

extend('required', {
  ...required,
  message: '{_field_} can not be empty'
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters'
})

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}'
})

extend('email', {
  ...email,
  message: 'Email must be valid'
})

export default defineComponent({
  name: 'Boarding',
  components: {
    ValidationProvider,
    ValidationObserver,
    FInput
  },
  setup(props, ctx) {
    console.log('ctx.root.$store', ctx.root.$store)

    const formFields = reactive<FormField[]>(user)

    const obj: any = {}
    user.map((data) => {
      obj[data.input.id] = ''
      return obj
    })

    const formData = reactive<any>(obj)

    // const observer = ref<any>(null)
    // const isValid = computed<Promise<boolean>>(() => observer.value.validate())

    async function onSubmit() {
      // await ctx.root.$store.dispatch('user/saveInfos', formFields.value)
    }

    function onReset() {
      return true
    }

    function clear() {
      // observer.value.reset()
    }

    return {
      onSubmit,
      onReset,
      clear,
      formFields,
      formData
    }
  }
})
</script>
