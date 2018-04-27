import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Intro from 'components/Projects/ProjectEntry/IntroSection'
import Content from 'components/Projects/ProjectEntry/Content'
import { projectData } from 'components/Projects/ProjectData'

const CheckIn = () => {
  const project = projectData.find(project => project.name === 'Check-In')

  return (
    <Wrapper>
      <Helmet title="Project: Check-In" />

      <Intro project={project} />

      <Content>More details coming soon...</Content>
    </Wrapper>
  )
}

export default CheckIn

const Wrapper = styled.div``
