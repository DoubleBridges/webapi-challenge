import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ProjectCard = props => {

  return (
    <Card
      header={props.title}
      description={props.description}
      as={Link}
      to={`/projects/${props.id}`}
    />
  )
}

export default ProjectCard
