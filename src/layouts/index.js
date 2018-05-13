import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Navbar from '../components/Navbar'
import Footer from 'components/Footer'
import 'styles/normalize.css'
import 'styles/styles.css'
import 'font-awesome/css/font-awesome.css'

class TemplateWrapper extends Component {
  render() {
    const { children } = this.props
    return (
      <Wrapper>
        <Helmet title="Mark Foster" />
        <Navbar />

        <Body>{children()}</Body>
        <Footer />
      </Wrapper>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Body = styled.div`
  flex: 1;
`
