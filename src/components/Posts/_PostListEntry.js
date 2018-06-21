import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LinkStarter from 'gatsby-link'

import Tags from 'components/Posts/_Tags'
import { colors } from 'Constants'

class PostListEntry extends Component {
  static propTypes = {
    post: PropTypes.object
  }

  render() {
    const { post } = this.props
    return (
      <PostWrapper>
        <Link to={post.fields.slug}>
          <PostInfo>
            <PostDate>{post.frontmatter.date}</PostDate>
            <PostTitle>{post.frontmatter.title}</PostTitle>
            <Tags tags={post.frontmatter.tags} />
          </PostInfo>
          <ReadMore>Read →</ReadMore>
        </Link>
      </PostWrapper>
    )
  }
}

export default PostListEntry

const PostWrapper = styled.li`
  margin-bottom: 20px;
  width: 800px;
  max-width: 100%;
`

const Link = styled(LinkStarter)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 250ms, transform 100ms;

  &:hover {
    background-color: #fff3f4;
  }

  &:active {
    transform: scale(0.98);
  }
`

const PostInfo = styled.div``

const PostDate = styled.div`
  font-size: 14px;
  color: #757575;
`

const PostTitle = styled.div`
  display: inline-block;
  margin: 5px 0 10px;
  font-size: 28px;
  font-weight: 400;
  color: ${colors.richBlack};

  @media (max-width: 700px) {
    font-size: 24px;
  }

  @media (max-width: 520px) {
    font-size: 18px;
  }
`

const ReadMore = styled.div`
  white-space: nowrap;
  margin-left: 12px;

  @media (max-width: 400px) {
    display: none;
  }
`
