import React from 'react';
import Home from './components/Home';
import Departments from './components/Departments';
import DepartmentShow from './components/DepartmentShow';
import NoMatch from './components/NoMatch';
import ItemShow from './components/ItemShow';
import ItemForm from './components/ItemForm';
import DepartmentForm from './components/DepartmentForm';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import {Route, Switch, } from 'react-router-dom';
import {Container, } from 'semantic-ui-react';



function App() {
  return (
      <AppContainer>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/departments' component={Departments} />
          <Route exact path='/item/new' component={ItemForm} />
          <Route exact path='/departments/new' component={DepartmentForm} />
          <Route exact path='/departments/:id' component={DepartmentShow} />
          <Route exact path='/departments/:id/items/:id' component={ItemShow} />
          <Route  component={NoMatch} />
        </Switch>
      </AppContainer>
  );
}

const AppContainer = styled.body`
  background: #ededed;
  height: 100vh;
`;

export default App;
