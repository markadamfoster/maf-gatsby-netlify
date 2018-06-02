import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { MAX_CONTENT_WIDTH } from 'Constants'
import { learningData } from 'components/Learning/LearningData'
import LearningItem from 'components/Learning/LearningItem'

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
          {learningData.map(item => {
            return (
              <LearningItem
                key={item.name}
                source={item.source}
                name={item.name}
                link={item.link}
                status={item.status}
                completedDate={item.completedDate}
              />
            )
          })}
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
  padding-left: 0;
`
