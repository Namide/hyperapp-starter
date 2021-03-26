import html from 'hyperlit'
import { routeTo } from 'hyperway'

export default ({ to }, text) => html`
  <a href=${to} onclick=${routeTo(to)}>${ text }</a>
`
