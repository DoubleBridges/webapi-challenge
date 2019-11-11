import React from 'react'
import { Container, Header } from 'semantic-ui-react'
const headerStyle = {
  margin: '0 auto'
}
const HomePage = () => {
  return (
    <Container>
      <Header
        style={headerStyle}
        content='Web API Sprint Challenge'
      />
    </Container>
  )
}

export default HomePage