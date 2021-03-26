import html from 'hyperlit'

export default ({ state }) => html`
  <h2>Home page</h2>
  <p>Data: ${ JSON.stringify(state) }</p>
`
