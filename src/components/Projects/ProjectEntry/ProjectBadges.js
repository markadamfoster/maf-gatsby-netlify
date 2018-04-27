import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

// Project badge icons
import bootstrapIcon from 'img/projects/badges/bootstrap.png'
import cssIcon from 'img/projects/badges/css3.png'
import expoIcon from 'img/projects/badges/expo.png'
import gulpIcon from 'img/projects/badges/gulp.png'
import htmlIcon from 'img/projects/badges/html5.png'
import jqueryIcon from 'img/projects/badges/jquery.png'
import jsIcon from 'img/projects/badges/js.png'
import mongoIcon from 'img/projects/badges/mongo.png'
import railsIcon from 'img/projects/badges/rubyonrails.png'
import reactIcon from 'img/projects/badges/react.png'
import reduxIcon from 'img/projects/badges/redux.png'
import sassIcon from 'img/projects/badges/sass.png'
import sketchIcon from 'img/projects/badges/sketch.png'
import styledComponents from 'img/projects/badges/styled-components.png'
import webpackIcon from 'img/projects/badges/webpack.png'
import wordpressIcon from 'img/projects/badges/wordpress.png'

const renderBadges = ({ badges, size }) => {
  return badges.map(badge => {
    switch (badge) {
      case 'bootstrap':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={bootstrapIcon}
          />
        )
      case 'css':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={cssIcon}
          />
        )
      case 'expo':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={expoIcon}
          />
        )
      case 'gulp':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={gulpIcon}
          />
        )
      case 'html':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={htmlIcon}
          />
        )
      case 'jquery':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={jqueryIcon}
          />
        )
      case 'js':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={jsIcon}
          />
        )
      case 'mongo':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={mongoIcon}
          />
        )
      case 'rails':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={railsIcon}
          />
        )
      case 'react':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={reactIcon}
          />
        )
      case 'redux':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={reduxIcon}
          />
        )
      case 'sass':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={sassIcon}
          />
        )
      case 'sketch':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={sketchIcon}
          />
        )
      case 'styled-components':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={styledComponents}
          />
        )
      case 'webpack':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={webpackIcon}
          />
        )
      case 'wordpress':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={wordpressIcon}
          />
        )
      default:
        return null
    }
  })
}

class ProjectBadges extends Component {
  render() {
    const { badges, size } = this.props
    return <Wrapper>{renderBadges({ badges, size })}</Wrapper>
  }
}

export default ProjectBadges

ProjectBadges.propTypes = {
  badges: PropTypes.array,
  size: PropTypes.number
}

ProjectBadges.defaultProps = {
  badges: [],
  size: 36
}

const Wrapper = styled.div`
  text-align: center;
`

const Badge = styled.img`
  height: 36px;
  width: 36px;
  margin: 12px 4px 8px;
`
