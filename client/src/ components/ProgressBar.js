import React from 'react'
import { Progress } from 'semantic-ui-react'

const ProgressBar = () => {
  const progress = props.progress

  return (
    <Progress percent={progress} indicating />
  )
}

export default ProgressBar