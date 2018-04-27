import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Intro from 'components/Projects/ProjectEntry/IntroSection'
import Content from 'components/Projects/ProjectEntry/Content'
import ProjectLinks from 'components/Projects/ProjectEntry/ProjectLinks'
import Screenshots from 'components/Projects/ProjectEntry/ScreenshotSection'
import { projectData } from 'components/Projects/ProjectData'

import ss01 from 'img/projects/BSUYoungLife/bsu-younglife.jpg'

const BoiseStateYoungLife = () => {
  const project = projectData.find(
    project => project.name === 'Boise State Young Life'
  )

  return (
    <Wrapper>
      <Helmet title="Project: Boise State Young Life" />

      <Intro project={project} />

      <Content>
        <p>
          Boise State Young Life is a thriving college ministry. They were in
          need of a clean, friendly site to engage donors and get information to
          students. Other requirements included it being easy to update and
          maintain, and to be flexible for ongoing (and unforeseen) needs.
        </p>

        <p>
          This WordPress site does just that. Rather than starting from scratch,
          we adapted an existing theme to help speed up the development process
          and reduce cost. Updates to the site are easy to make (even by those
          with no coding experience), and new pages for announcing events and
          fundraisers can be added easily. And though the use of a child theme,
          I am able to make ongoing customizations to their theme while still
          allow theme updates to happen without a hitch.
        </p>

        <p>Key technical aspects of the project:</p>
        <ul>
          <li>Exploration and implementation of site objectives and goals</li>
          <li>WordPress site creation, including customized child theme</li>
        </ul>

        <ProjectLinks liveSite="http://www.boisestateyounglife.org/" />
      </Content>

      <Screenshots
        data={[
          {
            image: ss01,
            caption: 'The home page.'
          }
        ]}
      />
    </Wrapper>
  )
}

export default BoiseStateYoungLife

const Wrapper = styled.div``
