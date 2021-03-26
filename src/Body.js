import html from 'hyperlit'
import Link from './part/Link'

export default state => {
  const isHome = state.url === '/'
  const isAbout = state.url === '/about'

  return html`
    <body>
      <header>
        <h1>
          Hyperapp starter
        </h1>
      </header>
      
      <nav>
        <ul>
          <li>
            <${Link} to="/" active=${ isHome }>home<//>
          </li>
          <li>
            <${Link} to="/about" active=${ isAbout }>about<//>
          </li>
        </ul>
      </nav>

      <main>
        <${state.view} state=${state} />
      </main>

      <footer></footer>
    </body>`
}
