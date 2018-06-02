import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import dateformat from 'dateformat'

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
        <ContentWrapper>
          <Source>{source}</Source>

          <Name>
            <a href={link}>{name}</a>
          </Name>

          {completedDate && (
            <CompletedDate>
              {dateformat(completedDate, 'mmm yyyy')}
            </CompletedDate>
          )}
        </ContentWrapper>
      </Wrapper>
    )
  }
}

export default LearningItem

const Wrapper = styled.li`
  padding: 10px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px dotted #e1e1e1;
`

const Status = styled.span`
  font-size: 28px;
  margin-right: 15px;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Source = styled.span`
  font-size: 16px;
  text-transform: uppercase;
  opacity: 0.4;
  margin-bottom: -1px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`

const Name = styled.span`
  display: inline-flex;
  flex-direction: column;
  font-size: 30px;

  a {
    color: black;
  }

  @media (max-width: 880px) {
    font-size: 22px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }
`

const CompletedDate = styled.div`
  margin-top: 2px;
  opacity: 0.5;
  font-size: 14px;
`
