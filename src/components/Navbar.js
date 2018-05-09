import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logoImgSrc from 'img/home/family.jpg'
import nameScriptSrc from 'img/home/mark-foster-script.svg'
import { colors, MAX_CONTENT_WIDTH } from 'Constants'

class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <LogoArea>
          <Logo src={logoImgSrc} />
          <Name src={nameScriptSrc} />
        </LogoArea>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink activeStyle={{ color: '#fb3640' }} to="/projects">
            Projects
          </NavLink>
        </NavLinks>
      </Wrapper>
    )
  }
}

export default Navbar

const Wrapper = styled.nav`
  width: ${MAX_CONTENT_WIDTH};
  max-width: 96%;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoArea = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 100%;
`

const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
  margin-left: 20px;
`

const Name = styled.img`
  margin-left: 10px;
  width: 276px;
  margin-top: 10px;
`

const NavLinks = styled.ul``

const NavLink = styled(Link)`
  margin: 0 10px;
  opacity: 0.7;
  color: ${colors.richBlack};
`
