import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { kebabCase } from 'lodash'

import TagIcon from './_TagIcon'
import { colors } from 'Constants'

class Tags extends Component {
  static propTypes = {
    tags: PropTypes.array,
    includeLinks: PropTypes.bool
  }

  static defaultProps = {
    includeLinks: false
  }

  renderTag(tag) {
    const { tags, includeLinks } = this.props

    return (
      <Tag showHoverColor={includeLinks}>
        <TagIcon size="16" style={{ marginRight: 3 }} /> {tag}
      </Tag>
    )
  }

  render() {
    const { tags, includeLinks } = this.props

    if (includeLinks) {
      return (
        <Wrapper>
          {tags.map(tag => (
            <Link to={`/tags/${kebabCase(tag)}/`} key={tag}>
              {this.renderTag(tag)}
            </Link>
          ))}
        </Wrapper>
      )
    }

    return <Wrapper>{tags.map(tag => this.renderTag(tag))}</Wrapper>
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
  transition: color 250ms;

  &:hover {
    color: ${props => (props.showHoverColor ? colors.action : '#747373')};
  }
`
