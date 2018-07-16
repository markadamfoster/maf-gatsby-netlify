import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import PostListEntry from 'components/Posts/_PostListEntry'

class Articles extends Component {
  static propTypes = {
    posts: PropTypes.array,
  }

  render() {
    const { posts } = this.props

    return (
      <Wrapper>
        <Title>Articles</Title>
        <PostsList>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'blog-post')
            .filter(post => post.node.frontmatter.published)
            .map(({ node: post }) => (
              <PostListEntry key={post.slug} post={post} />
            ))}
        </PostsList>
      </Wrapper>
    )
  }
}

export default Articles

const Wrapper = styled.section`
  width: 1200px;
  max-width: 90%;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 54px;
`

const PostsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
