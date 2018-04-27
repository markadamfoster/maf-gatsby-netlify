import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { fadeIn, bounceIn } from 'react-animations'

import ReturnButton from './ReturnButton'
import Badges from './ProjectBadges'
import { colors } from 'Constants'

class IntroSection extends Component {
  render() {
    const { project } = this.props
    return (
      <Wrapper>
        <ReturnButton />
        <Title>
          <TitleSmall>Project: </TitleSmall>
          {project.name}
        </Title>
        <FadeIn>
          <Content>
            <ColumnLeft>
              <Summary>{project.summary}</Summary>
              <BounceIn>
                <Badges badges={project.badges} size={56} />
              </BounceIn>
            </ColumnLeft>
            <ColumnRight>
              <Cover src={project.cover} />
            </ColumnRight>
          </Content>
        </FadeIn>
      </Wrapper>
    )
  }
}

export default IntroSection

IntroSection.propTypes = {
  project: PropTypes.object
}

IntroSection.defaultProps = {
  project: {}
}

const Wrapper = styled.div`
  background-color: ${colors.blue};
  width: 100%;
  padding: 60px 20px 30px;
`

const Title = styled.h1`
  font-size: 68px;
  margin: 0;
  padding: 40px 0 20px;
  color: white;
  text-align: center;

  @media (max-width: 850px) {
    font-size: 56px;
  }

  @media (max-width: 600px) {
    font-size: 38px;
  }
`

const TitleSmall = styled.span`
  font-size: 28px;
  font-weight: 400;

  @media (max-width: 850px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`

const fadeInAnimation = keyframes`${fadeIn}`

const FadeIn = styled.div`
  animation: 500ms ${fadeInAnimation};
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  max-width: 100%;
  margin: 20px auto;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`

const ColumnLeft = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 850px) {
    width: 100%;
    margin: 0 auto;
  }
`

const ColumnRight = styled.div`
  width: 48%;

  @media (max-width: 850px) {
    width: 100%;
    margin: 10px auto 0;
  }
`

const bounceInAnimation = keyframes`${bounceIn}`

const BounceIn = styled.div`
  animation: 800ms ${bounceInAnimation};
`

const Summary = styled.div`
  color: white;
  font-size: 22px;
  line-height: 1.3;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`

const Cover = styled.img`
  max-width: 100%;
  border: 5px solid white;
`
