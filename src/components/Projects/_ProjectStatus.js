import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class ProjectStatus extends Component {
  static propTypes = {
    status: PropTypes.String
  }

  render() {
    switch (this.props.status) {
      case 'active':
        return <Active>Active</Active>
      case 'inactive':
        return <Inactive>Inactive</Inactive>
      case 'clientWork':
        return <ClientWork>Client/Job</ClientWork>
      case 'sold':
        return <Sold>Sold</Sold>
      default:
        return null
    }
  }
}

export default ProjectStatus

const StatusBase = styled.div`
  font-size: 14px;
  border-radius: 4px;
  display: inline-block;
  padding: 2px 6px;
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`

const Active = styled(StatusBase)`
  background-color: #3ccd3c;
`

const Inactive = styled(StatusBase)`
  background-color: #ccc;
`

const ClientWork = styled(StatusBase)`
  background-color: #5b89f4;
`

const Sold = styled(StatusBase)`
  background-color: #ff7076;
`
