import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from 'components/Footer'
import 'styles/normalize.css'
import 'styles/styles.css'
import 'font-awesome/css/font-awesome.css'

class TemplateWrapper extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Helmet title="Mark Foster" />
        <Navbar />

        <div>{children()}</div>
        <Footer />
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
