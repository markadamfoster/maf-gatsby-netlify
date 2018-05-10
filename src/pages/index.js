import React from 'react'
import PropTypes from 'prop-types'

import HomePage from 'components/Home/HomePage'

export default class IndexPage extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array
      })
    })
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return <HomePage data={data} />
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
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
