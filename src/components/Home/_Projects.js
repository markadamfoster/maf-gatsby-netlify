import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import get from 'lodash/get'
import Link from 'gatsby-link'

import { projectData } from 'components/Projects/ProjectData'
import ProjectItem from 'components/Projects/_ProjectListItem'

class Projects extends Component {
  render() {
    const photoInvoice = projectData.find(
      project => project.name === 'Photo Invoice'
    )
    const panoractives = projectData.find(
      project => project.name === 'Panoractives'
    )
    const showAndTour = projectData.find(
      project => project.slug === 'show-and-tour'
    )

    return (
      <Wrapper>
        <TitleWrapper>
          <Title>
            Recent Projects
            <SeeAll to="/projects">
              See All <span className="fa fa-chevron-right" />
            </SeeAll>
          </Title>
        </TitleWrapper>

        <Row>
          <ProjectItem project={photoInvoice} />
          <ProjectItem project={panoractives} />
          <ProjectItem project={showAndTour} />
        </Row>
      </Wrapper>
    )
  }
}

export default Projects

const Wrapper = styled.section`
  width: 1200px;
  max-width: 90%;
  margin: 0 auto;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.h2`
  font-size: 54px;
`

const SeeAll = styled(Link)`
  margin-left: 20px;
  font-size: 20px;
  margin-top: 22px;
  font-weight: 400;

  span {
    font-size: 16px;
    margin-left: 3px;
  }
`

const SectionTitleWrapper = styled.div`
  background-color: #f2f2f1;
  padding: 10px;
`
const SectionTitle = styled.div`
  width: 1200px;
  max-width: 96%;
  margin: 0 auto;
  font-size: 22px;
  color: #4a4a4a;
`

const Row = styled.div`
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
