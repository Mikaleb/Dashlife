# Dashlife

Dashlife is an offline dashboard to remember for you important data while your mind is somewhere else.

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

## Functionalities

So far it saves your infos locally, you can check the project panel to see the ideas of functionality coming soon or directly submit a ticket.

### Offline and cross-devices

The project is built for user to store the data's on their own machines via the browser, given the obvious privacy concerns that can come with that project.
However, I envision that, if the need and demand is big enough, I can always setup a service to let users pay a monthly fee to host their data on a remote secured instance.
The need may be various but the main reason I see is that if you don't want to bother maintaining the data on two or more device in sync manually by exporting JSON files,
you'd want to have us do that for you.

So far, the flexibility I'm going to give this project may lead to a lot of theses kind of demand so we'll see how it goes. Be assured that if we need to setup something like that, it'll be on remote secured server (surely a split choice between Google firebase or AWS).

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
