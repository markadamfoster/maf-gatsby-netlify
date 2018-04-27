import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Hero from './_Hero'
import Projects from './_Projects'
import Articles from './_Articles'

export default class HomePage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <main>
        <Hero />
        <Projects />
        <Articles data={data} />
      </main>
    )
  }
}
