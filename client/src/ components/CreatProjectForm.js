import React, { useState } from 'react'
import axios from 'axios'
import { Container, Segment, Form, Button, Header } from 'semantic-ui-react'
import { useFormInput } from '../hooks/useFormInput'
import ProgressBar from './ProgressBar'
import ActionForm from './ActionForm'

const CreateProjectForm = props => {

  const [progress, setProgress] = useState(0)
  const [project, setProject] = useState()
  const [actionsVisible, setActionsVisible] = useState('hidden')
  const [buttons, setButtons] = useState({
    addSteps: false
  })
  const [values, changeHandler] = useFormInput({
    name: '',
    description: ''
  })

  async function postNewProject() {
    try {
      const res = await axios.post(`http://localhost:5555/api/projects`, values)
      const newProject = await res.data
      console.log(newProject)
      setProject(newProject)
      setProgress(50)
      setActionsVisible('visible')
      setButtons({ ...buttons, addSteps: true })
    } catch (err) {
      console.log('catch', err)
    }
  }

  const handleFormSubmit = () => {
    postNewProject()
  }

  return (
    <Container>
      <Header as='h2' content='Create a Project' />
      <Segment>
        <Form onSubmit={handleFormSubmit}>
          <Form.Input
            label='Title'
            name='name'
            value={values.name}
            placeholder='Enter a Title'
            onChange={changeHandler}
          />
          <Form.Input
            label='Description'
            name='description'
            value={values.description}
            placeholder='Enter a Description'
            onChange={changeHandler}
          />
          <Button
            // basic            
            color='grey'
            content='Add Steps'
            type='submit'
            disabled={buttons.addSteps}
            style={{ marginTop: '1em'}}
          />
        </Form>
        <Container style={{ visibility: `${actionsVisible}`, marginTop: '1em' }}>
          <ActionForm
            history={props.history}
            project={project}            
          />
        </Container>
      </Segment>
      <ProgressBar progress={progress} />
    </Container>
  )
}

export default CreateProjectForm