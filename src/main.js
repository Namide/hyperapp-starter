import { app } from 'hyperapp'
import Body from './Body'
import router from './router'
import Home from './view/Home'

app({
  init: {
    url: '',
    params: {},
    view: Home
  },
  view: Body,
  subscriptions: () => [ router ],
  node: document.body
})
