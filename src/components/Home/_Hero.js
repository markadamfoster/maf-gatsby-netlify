import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors, MAX_CONTENT_WIDTH } from 'Constants'
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
            <Title>Mark Foster</Title>
            <Subtitle>
              👋 Hi! I'm a developer & digital maker in Boise, USA
            </Subtitle>
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${props => props.image});
  background-size: cover;
  background-position: 100% 100%;
  padding: 30px;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '0')};
  height: 420px;
`

const Content = styled.div`
  width: ${MAX_CONTENT_WIDTH};
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-top: -50px;
`

const Title = styled.h1`
  color: white;
  font-size: 120px;
  margin: 0;
  line-height: 1;

  @media (max-width: 750px) {
    font-size: 80px;
  }

  @media (max-width: 540px) {
    // font-size: 54px;
  }
`

const Subtitle = styled.h3`
  margin-top: 20px;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.6;
  color: white;

  @media (max-width: 900px) {
    font-size: 24px;
  }

  @media (max-width: 750px) {
    font-size: 22px;
  }
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
