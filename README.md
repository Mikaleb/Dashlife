# Dashlife

Dashlife is a dashboard to remember for you important data while your mind is somewhere else.

## The problem it solves

The best user case is the following : someone call me and asks me what is the name of my car insurance that I recently got ?
I am in a rush, between lot of calls, lots of projects, and I forgot that.

Usually, I'd have to dig in my mails or my files to find this info.
But with Dashlife, just by checking on me -> transports -> car (or via me -> subscriptions ) I can easily find the informations linked to that specific subject.

So if you're like me, mind racing between lot of subjects and not enough space to remember everything or you're literary suffering from amnesia / dementia / Alzheimer etc ... it might come handy.

## Logic behind

The logic behind the code is the following : most of the data's can be split by subject (I also like the idea of brick) where for exemple :
You have a car, which also have an insurance on it, basically an insurance is a subscription brick, which is related to a company (another brick) who operates the contract with you.

## Technos

- Nuxt
- Vue 2
- IndexedDB (local storage)
- i18n
- Composition API
- Typescript


## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
