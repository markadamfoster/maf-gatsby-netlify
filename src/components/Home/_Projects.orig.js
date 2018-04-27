import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import get from 'lodash/get'

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
        <h2>Projects</h2>
        <SectionTitleWrapper>
          <SectionTitle>WordPress Websites</SectionTitle>
        </SectionTitleWrapper>

        <SectionContent>
          <PortfolioItem project={panoractives} />
          <PortfolioItem project={leapCharities} />
          <PortfolioItem project={brookside} />
        </SectionContent>

        <SectionTitleWrapper>
          <SectionTitle>Mobile Apps</SectionTitle>
        </SectionTitleWrapper>

        <SectionContent>
          <PortfolioItem project={adminConsole} />
        </SectionContent>

        <SectionTitleWrapper>
          <SectionTitle>Web Apps</SectionTitle>
        </SectionTitleWrapper>

        <SectionContent>
          <PortfolioItem project={photoInvoice} />
          <PortfolioItem project={showAndTour} />
          {/* <PortfolioItem project={checkIn} /> */}
          <Placeholder />
        </SectionContent>
      </Wrapper>
    )
  }
}

export default Projects

const Wrapper = styled.section``

const SectionTitleWrapper = styled.div`
  background-color: #f2f2f1;
  padding: 10px;
`
const SectionTitle = styled.div`
  width: 1000px;
  max-width: 96%;
  margin: 0 auto;
  font-size: 22px;
  color: #4a4a4a;
`

const SectionContent = styled.div`
  width: 1000px;
  max-width: 96%;
  margin: 20px auto 30px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`

const Placeholder = styled.div`
  width: 300px;
  margin: 5px;
`
