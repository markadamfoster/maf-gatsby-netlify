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
            <CopyTop>👋 Hi! I'm a developer in Boise, USA.</CopyTop>

            <Copy>
              <em>I'm currently focusing on two things:</em>
              <ul>
                <li>getting to $1,000/mo from side projects</li>
                <li>
                  <Link to="/learning">leveling up</Link> my dev & business
                  skills
                </li>
              </ul>
            </Copy>
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
  height: 420px;
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
  font-size: 48px;

  @media (max-width: 1080px) {
    font-size: 38px;
  }

  @media (max-width: 560px) {
    font-size: 28px;
  }
`

const Copy = styled.div`
  font-weight: 400;
  text-align: left;
  // width: 420px;
  max-width: 100%;
  font-size: 20px;
  line-height: 1.6;

  @media (max-width: 560px) {
    font-size: 16px;
  }

  ul {
    margin: 0;
    padding: 0;
    margin-top: 10px;
    margin-left: 22px;
  }

  li {
    text-align: left;

    a {
      color: white;
      border-bottom: 1px dotted white;
    }
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
