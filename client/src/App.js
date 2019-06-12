import React from 'react';
import {Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import Departments from './components/Departments';
import DepartmentShow from './components/DepartmentShow';
import NoMatch from './components/NoMatch';
import ItemShow from './components/ItemShow';
import ItemForm from './components/ItemForm';
import DepartmentForm from './components/DepartmentForm';
import Navbar from './components/Navbar';
import {Container, } from 'semantic-ui-react';



function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/departments' component={Departments} />
          <Route exact path='/item/new' component={ItemForm} />
          <Route exact path='/departments/new' component={DepartmentForm} />
          <Route exact path='/departments/:id' component={DepartmentShow} />
          <Route exact path='/departments/:id/items/:id' component={ItemShow} />
          <Route  component={NoMatch} />
        </Switch>
      </Container>
    </>

  );
}

export default App;
