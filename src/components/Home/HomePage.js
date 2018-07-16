import React from 'react'
import PropTypes from 'prop-types'

import Hero from './_Hero'
import Projects from './_Projects'
import Articles from './_Articles'

export default class HomePage extends React.Component {
  static propTypes = {
    posts: PropTypes.array,
  }

  render() {
    const { posts } = this.props

    return (
      <main>
        <Hero />
        <Projects />
        <Articles posts={posts} />
      </main>
    )
  }
}
