import React from 'react'
import ProjectCardList from './ components/ProjectCardList';
import { Route } from 'react-router-dom'
import HomePage from './ components/HomePage';
import NavHeader from './ components/NavHeader';
import CreateProjectForm from './ components/CreatProjectForm';
import ProjectPage from './ components/ProjectPage';
import { Container } from 'semantic-ui-react';


function App() {

  return (
    <div className="App">
      <NavHeader />
      < Container style={{ marginTop: '7em' }}>
        <Route
          exact
          path="/"
          render={props => <HomePage
            {...props}
          />}
        />
        <Route
          exact path="/projects"
          render={props => <ProjectCardList
            {...props}
          />}
        />
        <Route
          exact path="/create-project"
          render={props => <CreateProjectForm
            {...props}
          />}
        />
        <Route
          exact path="/projects/:id"
          render={props => <ProjectPage
            {...props}
          />}
          />
      </Container>
    </div>
  );
}

export default App;
