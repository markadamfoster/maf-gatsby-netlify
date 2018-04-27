import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Intro from 'components/Projects/ProjectEntry/IntroSection'
import Content from 'components/Projects/ProjectEntry/Content'
import ProjectLinks from 'components/Projects/ProjectEntry/ProjectLinks'
import Screenshots from 'components/Projects/ProjectEntry/ScreenshotSection'
import { projectData } from 'components/Projects/ProjectData'

// Screenshots
import ss01 from 'img/projects/Brookside/brookside-front.jpg'

const BrooksideDentistry = () => {
  const project = projectData.find(
    project => project.name === 'Brookside Dentistry'
  )

  return (
    <Wrapper>
      <Helmet title="Project: Brookside Dentistry" />

      <Intro project={project} />

      <Content>
        <p>
          A website for an award winning dental office in St. Louis Park,
          Minnesota.
        </p>

        <p>
          For many people, going the dentist isn't their <em>favorite</em>{' '}
          activity. We focused this project on feeling warm and inviting, to
          help begin the process of putting patients at ease. Given Brookside
          Dentistry's outstanding track record, we also wanted to prominently
          feature their recent awards and BBB rating.
        </p>

        <p>
          Other than presenting the office well, the other practical benefit of
          the site is a way for patients to quickly and easy acquire the
          necessary forms. This was built in, as well as an easily-updated blog
          to keep patients informed.
        </p>

        <p>Key technical aspects of the project:</p>
        <ul>
          <li>Exploration and implementation of site objectives and goals</li>
          <li>WordPress site creation, including customized theme work</li>
        </ul>

        <ProjectLinks liveSite="http://www.boisestateyounglife.org/" />
      </Content>

      <Screenshots
        data={[
          {
            image: ss01,
            caption: 'The home page:'
          }
        ]}
      />
    </Wrapper>
  )
}

export default BrooksideDentistry

const Wrapper = styled.div``
