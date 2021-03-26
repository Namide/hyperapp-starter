import html from 'hyperlit'

export default ({ state }) => html`
  <h2>Error 404</h2>
  <p>The page ${ state.params.wild } not found</p>
`
