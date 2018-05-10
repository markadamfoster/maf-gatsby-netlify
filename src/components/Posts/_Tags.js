import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TagIcon from './_TagIcon'

class Tags extends Component {
  static propTypes = {
    tags: PropTypes.array
  }

  renderTag(tagName) {
    return <Tag>tagName</Tag>
  }

  render() {
    const { tags } = this.props

    return (
      <Wrapper>
        {tags.map(tag => (
          <Tag key={tag}>
            <TagIcon size="16" style={{ marginRight: 3 }} /> {tag}
          </Tag>
        ))}
      </Wrapper>
    )
  }
}

export default Tags

const Wrapper = styled.div`
  display: flex;
`

const Tag = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  margin-right: 8px;
  color: #747373;
`
