import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { colors } from 'Constants'

class ReturnButton extends Component {
  render() {
    return (
      <Wrapper>
        <Button to="/">
          <Icon className="fa fa-chevron-left" /> Back
        </Button>
      </Wrapper>
    )
  }
}

ReturnButton.propTypes = {}

export default ReturnButton

const Wrapper = styled.div`
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
`

const Button = styled(Link)`
  display: inline-block;
  background-color: ${colors.action};
  color: white;
  padding: 16px 34px;
  border-radius: 30px;
  font-size: 18px;
  transition: background-color 250ms;

  &:hover {
    color: white;
    background-color: ${colors.actionHover};
  }
`

const Icon = styled.span`
  margin-right: 10px;
`
