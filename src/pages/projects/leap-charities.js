import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Intro from 'components/Projects/ProjectEntry/IntroSection'
import Content from 'components/Projects/ProjectEntry/Content'
import ProjectLinks from 'components/Projects/ProjectEntry/ProjectLinks'
import Screenshots from 'components/Projects/ProjectEntry/ScreenshotSection'
import { projectData } from 'components/Projects/ProjectData'

// Screenshots
import ssFront from 'img/projects/leap-charities/front-page.jpg'
import ssBlog from 'img/projects/leap-charities/blog.jpg'

const LeapCharities = () => {
  const project = projectData.find(project => project.slug === 'leap-charities')

  return (
    <Wrapper>
      <Helmet title="Project: LEAP Charities" />

      <Intro project={project} />

      <Content>
        <ProjectLinks liveSite="http://www.leapcharities.org" />
      </Content>
      <Screenshots
        data={[
          {
            image: ssFront,
            caption: 'The front page.'
          },
          {
            image: ssBlog,
            caption: 'The blog page.'
          }
        ]}
      />
    </Wrapper>
  )
}

export default LeapCharities

const Wrapper = styled.div``
