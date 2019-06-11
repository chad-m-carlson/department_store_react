import React from 'react';
import {Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import Departments from './components/Departments';
import NoMatch from './components/NoMatch';
import Item from './components/Item';
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
          {/* <Route exact path='/' component={Home} /> */}
          <Route  component={NoMatch} />
        </Switch>
      </Container>
    </>

  );
}

export default App;
