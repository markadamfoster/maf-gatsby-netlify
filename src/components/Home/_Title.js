import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import scriptImgSrc from 'img/home/mark-foster-script-white.svg'

class ScriptTitle extends Component {
  static propTypes = {}

  render() {
    return (
      <Wrapper>
        <Img src={scriptImgSrc} />
      </Wrapper>
    )
  }
}

export default ScriptTitle

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`

const Img = styled.img`
  width: 100%;
`
