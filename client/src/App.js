import React from 'react';
import Home from './components/Home';
import Departments from './components/Departments';
import DepartmentShow from './components/DepartmentShow';
import NoMatch from './components/NoMatch';
import ItemShow from './components/ItemShow';
import ItemForm from './components/ItemForm';
import DepartmentForm from './components/DepartmentForm';
import Navbar from './components/Navbar';
import ReviewForm from './components/ReviewForm';
import AllItems from './components/AllItems';
import {Route, Switch, } from 'react-router-dom';



function App() {
  return (
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/departments' component={Departments} />
          <Route exact path='/item/new' component={ItemForm} />
          <Route exact path='/departments/new' component={DepartmentForm} />
          <Route exact path='/items' component={AllItems} />
          <Route exact path='/item/:id/edit' component={ItemForm} />
          <Route exact path='/departments/:id/edit' component={DepartmentForm} />
          <Route exact path='/departments/:id' component={DepartmentShow} />
          <Route exact path='/departments/:id/items/:id' component={ItemShow} />
          <Route exact path='/item/:id/review' component={ReviewForm} />
          <Route  component={NoMatch} />
        </Switch>
      </>
  );
}


export default App;
