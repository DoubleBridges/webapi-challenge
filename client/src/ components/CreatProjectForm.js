import React from 'react'
import axios from 'axios'
import { Container, Segment, Form, Button } from 'semantic-ui-react'
import { useFormInput } from '../hooks/useFormInput'

const CreateProjectForm = props => {

  const [values, changeHandler] = useFormInput({
    name: '',
    description: ''
  })

  async function postNewProject() {
    try {
      const res = await axios.post(`http://localhost:5555/api/projects`, values)
      const projectId = await res.data.projectId
      props.history.push(`/projects/${projectId}`)
    } catch (err) {
      console.log('catch', err)
    }
  }

  const handleFormSubmit = () => {
    postNewProject()
  }

  return (
    <Container>
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
          />
        </Form>
      </Segment>
    </Container>
  )
}

export default CreateProjectForm