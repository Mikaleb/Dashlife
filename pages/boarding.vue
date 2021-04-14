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
          <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submit">
              <validation-provider
                v-slot="{ errors }"
                name="Prénom"
                rules="required|max:10"
              >
                <v-text-field
                  v-model="first_name"
                  :error-messages="errors"
                  label="Prénom"
                  required
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="Name"
                rules="required|max:10"
              >
                <v-text-field
                  v-model="name"
                  :error-messages="errors"
                  label="Nom"
                  required
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="phoneNumber"
                :rules="{
                  required: true,
                }"
              >
                <v-text-field
                  v-model="phoneNumber"
                  :error-messages="errors"
                  label="Phone Number"
                  required
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="email"
                rules="required|email"
              >
                <v-text-field
                  v-model="email"
                  :error-messages="errors"
                  label="E-mail"
                  required
                ></v-text-field>
              </validation-provider>
              <v-btn class="mr-4" type="submit" :disabled="invalid">
                submit
              </v-btn>
              <v-btn @click="clear"> clear </v-btn>
            </form>
          </validation-observer>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from 'vee-validate'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})',
})

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}',
})

extend('email', {
  ...email,
  message: 'Email must be valid',
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return this.initialState()
  },

  methods: {
    initialState() {
      return {
        first_name: '',
        name: '',
        phoneNumber: '',
        email: '',
      }
    },
    submit() {
      const isValid = this.$refs.observer.validate()
      if (isValid) {
        console.log('is valid')
      }
    },
    clear() {
      Object.assign(this.$data, this.initialState())
      this.$refs.observer.reset()
    },
  },
}
</script>
