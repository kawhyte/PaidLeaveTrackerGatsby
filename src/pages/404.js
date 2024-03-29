import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <section class="vh-100 bg-washed-blue baskerville">
        <header class="tc ph5 lh-copy">
          <h1 class="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">
            404
          </h1>
          <h2 class="tc f1-l fw1">
            Sorry, we can't find the page you are looking for.
          </h2>
        </header>
        <p class="fw1 i tc mt4 mt5-l f4 f3-l">
          Are you looking for one of these?
        </p>
        <ul class="list tc pl0 w-100 mt5">
          <Link to="/">
            <li class="dib">
              <a
                class="f5 f4-ns link black db pv2 ph3 hover-light-purple"
                href="/"
              >
                Home
              </a>
            </li>
          </Link>

          <li class="dib">
            <a
              class="f5 f4-ns link black db pv2 ph3 hover-light-purple"
              href="/about"
            >
              About
            </a>
          </li>
          <li class="dib">
            <a
              class="f5 f4-ns link black db pv2 ph3 hover-light-purple"
              href="/careers"
            >
              Careers
            </a>
          </li>
          <li class="dib">
            <a
              class="f5 f4-ns link black db pv2 ph3 hover-light-purple"
              href="/contact"
            >
              Contact
            </a>
          </li>
          <li class="dib">
            <a
              class="f5 f4-ns link black db pv2 ph3 hover-light-purple"
              href="/signup"
            >
              Sign Up
            </a>
          </li>
          <li class="dib">
            <a
              class="f5 f4-ns link black db pv2 ph3 hover-light-purple"
              href="/help"
            >
              Help
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  )
}
export default NotFoundPage
