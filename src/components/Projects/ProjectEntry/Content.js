import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { colors } from 'Constants'

const Content = ({ children }) => <Wrapper>{children}</Wrapper>

export default Content

Content.propTypes = {
  children: PropTypes.object,
}

const Wrapper = styled.div`
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
  border-left: 10px solid ${colors.action};
  padding: 10px 30px;

  @media (max-width: 400px) {
    font-size: 16px;
    padding: 10px 14px;
  }
`
