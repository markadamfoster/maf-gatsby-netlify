import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'

import PostListEntry from 'components/Posts/_PostListEntry'
import { MAX_CONTENT_WIDTH } from 'Constants'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = this.props.pathContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const pageTitle = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”:`

    return (
      <Wrapper>
        <Helmet title={`${tag} | ${title}`} />
        <h1>{pageTitle}</h1>
        <PostsList>
          {posts.map(({ node: post }) => (
            <PostListEntry key={post.slug} post={post} />
          ))}
        </PostsList>
        <p>
          <Link to="/tags/">Browse all tags</Link>
        </p>
      </Wrapper>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`

const Wrapper = styled.div`
  width: ${MAX_CONTENT_WIDTH};
  max-width: 90%;
  margin: 0 auto;
`

const PostsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
