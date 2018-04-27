import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class Footer extends Component {
  static propTypes = {}

  render() {
    const currentYear = new Date().getFullYear()
    return <Wrapper>© {currentYear} Mark Foster</Wrapper>
  }
}

export default Footer

const Wrapper = styled.div`
  margin: 30px 0;
  text-align: center;
`
