import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import get from 'lodash/get'

import { MAX_CONTENT_WIDTH } from 'Constants'
import { projectData } from 'components/Projects/ProjectData'
import PortfolioItem from 'components/Projects/_ProjectListItem'

class Projects extends Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    // WordPress Websites
    const panoractives = projectData.find(
      project => project.name === 'Panoractives'
    )
    const leapCharities = projectData.find(
      project => project.name === 'LEAP Charities'
    )
    const brookside = projectData.find(
      project => project.name === 'Brookside Dentistry'
    )

    // Mobile Apps
    const adminConsole = projectData.find(
      project => project.name === 'Admin Console'
    )

    // Web Apps
    const photoInvoice = projectData.find(
      project => project.name === 'Photo Invoice'
    )
    const checkIn = projectData.find(project => project.slug === 'check-in')
    const showAndTour = projectData.find(
      project => project.slug === 'show-and-tour'
    )

    return (
      <Wrapper>
        <Title>Projects</Title>

        <ProjectsWrapper>
          <PortfolioItem project={photoInvoice} />
          <PortfolioItem project={panoractives} />
          <PortfolioItem project={brookside} />
          <PortfolioItem project={leapCharities} />
          <PortfolioItem project={adminConsole} />

          <PortfolioItem project={showAndTour} />
        </ProjectsWrapper>
      </Wrapper>
    )
  }
}

export default Projects

const Wrapper = styled.section`
  width: ${MAX_CONTENT_WIDTH};
  max-width: 96%;
  margin: 20px auto 30px;
`

const Title = styled.h1`
  font-size: 54px;
`

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`
