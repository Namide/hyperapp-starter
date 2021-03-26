import { app } from 'hyperapp'
import App from './App'
import router from './router'
import Home from './view/Home'

app({
  init: {
    url: '',
    params: {},
    view: Home
  },
  view: App,
  subscriptions: () => [ router ],
  node: document.body
})
