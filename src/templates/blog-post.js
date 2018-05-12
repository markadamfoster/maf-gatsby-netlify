import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import styled from 'styled-components'

import Tags from '../components/Posts/_Tags'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content

  return (
    <Wrapper>
      {helmet || ''}

      <Title>{title}</Title>
      <p>{description}</p>
      <PostContent content={content} />
      {tags && tags.length ? (
        <div style={{ marginTop: `4rem` }}>
          <h4>Tags</h4>
          <Tags tags={tags} includeLinks={true} />
        </div>
      ) : null}
    </Wrapper>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`

const Wrapper = styled.section`
  width: 800px;
  max-width: 90%;
  margin: 50px auto;

  @media (max-width: 600px) {
    margin: 20px auto 40px;
  }

  img {
    width: 100%;
  }

  p {
    line-height: 1.4;
  }
`

const Title = styled.h1`
  font-size: 3em;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`
