import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from 'Constants'

class LearningItem extends Component {
  static propTypes = {
    source: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string,
    completedDate: PropTypes.string,
    status: PropTypes.string
  }

  renderStatus() {
    const { status } = this.props

    switch (status) {
      case 'complete':
        return '✅'
      case 'inProgress':
        return '🚧'
      default:
        null
    }
  }

  render() {
    const { name, source, link, completedDate } = this.props
    return (
      <Wrapper>
        <Status>{this.renderStatus()}</Status>
        <Source>{source}: </Source>
        <a href={link}>
          <Name>{name}</Name>
        </a>
        {completedDate && <CompletedDate>({completedDate})</CompletedDate>}
      </Wrapper>
    )
  }
}

export default LearningItem

const Wrapper = styled.li`
  margin-bottom: 16px;
`

const Status = styled.span`
  font-size: 24px;
  margin-right: 10px;
`

const Source = styled.span`
  text-transform: uppercase;
  color: #999;
  margin-right: 5px;
`

const Name = styled.span`
  font-size: 32px;
  color: black;
  border-bottom: 1px dotted ${colors.action};
`

const CompletedDate = styled.span`
  display: inline-block;
  margin-left: 10px;
  opacity: 0.7;
  font-size: 14px;
`
