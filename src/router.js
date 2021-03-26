import { Hyperway } from 'hyperway'

import Home from './view/Home'
import About from './view/About'
import Error from './view/Error'

export default Hyperway({
  onNotFound: state => state,
  onRoute: (state, props) => {
    if (state.url !== props.path || JSON.stringify(state.params) !== JSON.stringify(props.params)) {
      return { ...state, url: props.path, params: props.params }
    } else {
      return state
    }
  },
  routes: [
    {
      path: '/',
      onEnter: state => ({ ...state, view: Home })
    },
    {
      path: '/about',
      onEnter: state => ({ ...state, view: About })
    },
    {
      path: '*',
      onEnter: state => ({ ...state, view: Error })
    }
  ]
})
