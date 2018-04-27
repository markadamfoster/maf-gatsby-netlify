import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { colors } from 'Constants'

class Articles extends Component {
  static propTypes = {}

  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Wrapper>
        <Title>Articles</Title>
        <ComingSoon>Coming soon!</ComingSoon>
        {/* {posts
          .filter(post => post.node.frontmatter.templateKey === 'blog-post')
          .map(({ node: post }) => (
            <PostWrapper key={post.id}>
              <PostDate>{post.frontmatter.date}</PostDate>
              <Link to={post.fields.slug}>
                <PostTitle>{post.frontmatter.title}</PostTitle>
              </Link>
              <PostExcerpt>{post.excerpt}</PostExcerpt>
              <ReadMore>
                <Link to={post.fields.slug}>Keep Reading →</Link>
              </ReadMore>
            </PostWrapper>
          ))} */}
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

const PostWrapper = styled.div`
  margin-bottom: 50px;
  width: 800px;
  max-width: 100%;
`

const PostTitle = styled.h3`
  margin: 5px 0 10px;
  font-size: 28px;
  color: ${colors.richBlack};
  transition: color 250ms;

  &:hover {
    color: ${colors.action};
  }
`

const PostDate = styled.div`
  font-size: 15px;
  color: #474747;
`

const PostExcerpt = styled.div``

const ReadMore = styled.div`
  margin-top: 10px;
`

const ComingSoon = styled.div``
