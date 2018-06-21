import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { colors } from 'Constants'
import heroImgSrc from 'img/home/banner.jpg'
import profilePicSrc from 'img/home/family.jpg'

class Hero extends Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    marginBottom: PropTypes.string,
    button: PropTypes.bool
  }

  render() {
    return (
      <Wrapper>
        <HeroImage image={heroImgSrc}>
          <Content>
            <CopyTop>👋 Hi! I'm Mark.</CopyTop>
            <CopyBottom>
              I build things. Usually with 💻 JavaScript, most often in ⛰ Boise,
              USA.
            </CopyBottom>
          </Content>
        </HeroImage>
        <ProfilePic src={profilePicSrc} />
      </Wrapper>
    )
  }
}

export default Hero

const Wrapper = styled.section``

const HeroImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${props => props.image});
  background-size: cover;
  background-position: 100% 100%;
  padding: 20px;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '0')};
  height: 500px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-top: -100px;
  color: white;
`

const CopyTop = styled.h2`
  font-size: 87px;
  margin-bottom: 20px;

  @media (max-width: 1080px) {
    font-size: 38px;
  }

  @media (max-width: 560px) {
    font-size: 28px;
  }
`

const CopyBottom = styled.div`
  font-size: 22px;
`

const ProfilePic = styled.img`
  display: block;
  border-radius: 100%;
  width: 200px;
  border: 7px solid ${colors.offWhite};
  margin: -100px auto 0;

  @media (max-width: 620px) {
    width: 160px
    margin: -80px auto 0;
  }
`
