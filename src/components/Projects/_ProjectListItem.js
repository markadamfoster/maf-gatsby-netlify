import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import ProjectStatus from './_ProjectStatus'

class PortfolioListItem extends Component {
  render() {
    const { project } = this.props

    return (
      <Wrapper>
        <Link to={`/projects/${project.slug}`}>
          <Cover src={project.cover} />
        </Link>
        <Title>
          {project.name}
          <ProjectStatus status={project.status} />
        </Title>
        <Subtitle>{project.subtitle}</Subtitle>
      </Wrapper>
    )
  }
}

export default PortfolioListItem

const Wrapper = styled.div`
  display: block;
  position: relative;
  width: 30%;
  max-width: 100%;
  margin-bottom: 30px;
  text-decoration: none;
  color: black;
  text-align: center;

  @media (max-width: 700px) {
    max-width: 100%;
    width: 100%;
    margin-bottom: 20px;
  }
`

const Cover = styled.img`
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  transition: 300ms;

  &:hover {
    transform: scale(1.03);
  }
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 22px;
  margin-top: 5px;

  @media (max-width: 850px) {
    font-size: 20px;
  }

  @media (max-width: 700px) {
    font-size: 24px;
  }
`

const Subtitle = styled.div`
  text-align: left;
  margin-top: 3px;
  font-size: 14px;
  font-weight: 300;
`
