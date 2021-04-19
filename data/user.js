export default [
  {
    component: 'FInput',
    labelI18nKey: 'form.user',
    validation: null,
    model: 'first_name',
    group: {
      id: 'name',
      labelFor: 'first_name'
    },
    input: {
      id: 'first_name',
      required: false
    }
  },
  {
    component: 'FInput',
    model: 'last_name',
    labelI18nKey: 'form.user',
    validation: 'required',
    group: {
      id: 'name',
      labelFor: 'last_name'
    },
    input: {
      id: 'last_name',
      required: false
    }
  },
  {
    component: 'FInput',
    model: 'phoneNumber',
    labelI18nKey: 'form.user',
    validation: null,
    group: {
      id: 'nb',
      labelFor: 'phoneNumber'
    },
    input: {
      id: 'phoneNumber',
      required: false
    }
  },
  {
    component: 'FInput',
    labelI18nKey: 'form.user',
    model: 'email',
    validation: 'required',
    group: {
      id: 'email',
      labelFor: 'email'
    },
    input: {
      id: 'email',
      required: false,
      type: 'email'
    }
  }
]
