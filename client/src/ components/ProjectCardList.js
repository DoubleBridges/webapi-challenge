import React, { useEffect, useState } from 'react'
import { Card, Container, Segment } from 'semantic-ui-react'
import axios from 'axios'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'

const ProjectCardList = props => {

  const [projects, setProjects] = useState();

  async function getProjects() {
    try {
      const res = await axios.get(`http://localhost:5555/api/projects`)
      const projectList = res.data
      setProjects(projectList)
      // console.log(projectList)
    } catch (err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
    getProjects()
  }, [])
  
  if (!projects) {
    return (
      <h3>Loading...</h3>
    )
  }

  const projectCards = projects.map(project => {
    return (
      <ProjectCard
        id={project.id}
        key={project.id}
        title={project.name}
        description={project.description}
      />
    )
  })

  return (
    <Container>
      <Segment>
        <Card.Group itemsPerRow={2}>
          {projectCards}
        </Card.Group>
      </Segment>
      <Link exact to='/create-project'>
        Create a new Project
      </Link>
    </Container>
  )
}

export default ProjectCardList