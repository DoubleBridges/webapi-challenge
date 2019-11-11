import React from 'react'
import axios from 'axios'
import { Form, Button } from 'semantic-ui-react'
import { useFormInput } from '../hooks/useFormInput'

const ActionForm = props => {

  const project = props.project || { id: 1 }

  const [values, changeHandler] = useFormInput({
    project_id: 0,
    description: ''
  })

  // if (!project) {
  //   return (
  //     <h3>Loading ...</h3>
  //   )
  // }

  let actions = project.actions || [{ values }]

  

  async function postProjectAction() {
    try {
      const res = await axios.post(`http://localhost:5555/api/actions`, values)
      actions = [...actions, res.data]
    } catch (err) {
      console.log(err)
    }
  }

  const handleAddStep = () => {
    postProjectAction()
  }

  const handleFormSubmit = () => {
    postProjectAction()
    props.history.push(`/projects/${project.id}`)
  }

  const actionSteps = actions.map((action, i) => {
    let step = i + 1
    const numberOfSteps = actions.length

    return (
      <Form.Input
        key={step}
        label={`Step ${step}`}
        name='description'
        value={step < numberOfSteps ? actions[i].description
          : values.description}
        placeholder='Enter a step'
        onChange={changeHandler}
        disabled={step < numberOfSteps}
      />
    )
  })

  return (
    <Form onSubmit={handleFormSubmit}>
      {actionSteps}
      <Button
        content='Add Another Step'
        onClick={handleAddStep}
      />
      <Button
        type='submit'
        content='Submit Project'
      />
    </Form>
  )
}

export default ActionForm

