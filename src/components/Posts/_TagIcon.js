import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class TagIcon extends Component {
  static propTypes = {
    size: PropTypes.string,
    style: PropTypes.object
  }

  render() {
    const { style, size } = this.props

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={style}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-tag"
      >
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7" y2="7" />
      </svg>
    )
  }
}

export default TagIcon