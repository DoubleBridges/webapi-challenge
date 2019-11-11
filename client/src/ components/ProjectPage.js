import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Header, Segment, Button, Grid } from 'semantic-ui-react'

const ProjectPage = props => {

  const [project, setProject] = useState()

  async function getProject() {
    const id = props.match.params.id
    try {
      const res = await axios.get(`http://localhost:5555/api/projects/${id}`)
      const thisProject = await res.data
      setProject(thisProject)
    } catch (err) {
      console.log(err)
    }    
  }

  async function deleteProject() {
    const id = project.id
    try {
      await axios.delete(`http://localhost:5555/api/projects/${id}`)
      props.history.push(`/projects`)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProject()
  }, [])

  const handleDelete = () => deleteProject()

  if (!project) {
    return (
      <h2>Loading ...</h2>
    )
  }

  const actions = project.actions

  const listactions = (

    actions.map(action => {
      return (
        <Container key={action.id} fluid style={{margin: '10px'}}>
          <Header attached='top' as='h4' content={`Step ${action.id}`} inverted />
          <Segment attached='bottom'>
            <Container text as='p' content={action.description} />
            <Container text as='p' label='Notes' content={action.notes} />
          </Segment>
        </Container>
      )
    })
  )

  return (
    <Container>
      <Segment>
        <Header as='h1' content={project.name} />
        <Container text as='h3' content={project.description} />
        <Grid.Column>
          {listactions}
        </Grid.Column>
        <Button onClick={handleDelete}>
          Delete Project
        </Button>
      </Segment>
    </Container>
  )
}

export default ProjectPage