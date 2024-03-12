import { Meteor } from 'meteor/meteor'
import { createApp } from 'vue'
import { VueMeteor } from 'vue-meteor-tracker'
import { createNotivue } from 'notivue'

import 'notivue/notifications.css' // Only needed if using built-in notifications
import 'notivue/animations.css' // Only needed if using built-in animations

const notivue = createNotivue(/* options */)

import App from './App.vue'
import { router } from './router'

Meteor.startup(() => {
  const app = createApp(App)
  app.use(router)
  app.use(notivue)
  app.use(VueMeteor)
  app.mount('#app')
})
