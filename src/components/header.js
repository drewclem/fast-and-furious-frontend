import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="pt-6 mb-8"
  >
    <nav className="px-4">
      <ul className="flex w-2/12 justify-center container sm:mx-auto">
        <li className="pr-4">
          <Link to="/" className="opacity-50 hover:opacity-100" activeClassName='active'>Drivers</Link>
        </li>
        <li>
          <Link to="/cars" className="opacity-50 hover:opacity-100" activeClassName='active'>Cars</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
