import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { MAX_CONTENT_WIDTH } from 'Constants'
import LearningItem from 'components/Learning/_LearningItem'

class LevelUp extends Component {
  static propTypes = {}

  render() {
    return (
      <Wrapper>
        <Helmet title="Learning | Mark Foster" />
        <h1>Learning</h1>
        <p>
          I'm studying and learning and growing like crazy... here are the
          resources I've been using lately.
        </p>
        <List>
          <LearningItem
            source="Frontend Masters"
            name="Advanced React Patterns"
            link="https://frontendmasters.com/courses/advanced-react-patterns/"
            status="inProgress"
          />
          <LearningItem
            source="Udemy"
            name="GraphQL with React"
            link="https://www.udemy.com/graphql-with-react-course/"
            completedDate="May 2018"
            status="complete"
          />
          <LearningItem
            source="Egghead.io"
            name="The Beginner's Guide to React"
            link="https://egghead.io/courses/the-beginner-s-guide-to-reactjs"
            completedDate="March 2018"
            status="complete"
          />
        </List>
      </Wrapper>
    )
  }
}

export default LevelUp

const Wrapper = styled.div`
  width: ${MAX_CONTENT_WIDTH};
  max-width: 92%;
  margin: 0 auto;
`

const List = styled.ul`
  margin-top: 30px;
  list-style: none;
`
