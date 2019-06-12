import React from 'react';
import axios from 'axios';
import ItemIndex from './ItemIndex';

import {Link, } from 'react-router-dom';
import {Header, Button, Item} from 'semantic-ui-react';

class DepartmentShow extends React.Component {
  state = {
    department: {},
  }

  componentDidMount(){
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({department: res.data})
      })
  }

  removeDepartment = () => {
    axios.delete(`/api/departments/${this.props.match.params.id}`)
      .then(this.props.history.goBack)
  }



  render() {
    const {department} = this.state
    const {remove} = this.props.location
    return(
      <>
        <Item>
          <h1>{this.state.department.name}</h1>
          <h3>{this.state.department.description}</h3>
        <Button  as={Link}to={{
          pathname: '/departments/new/',
          dInfo: {department}}}
            > Edit Department 
        </Button > 
        <Button  onClick={this.removeDepartment}>Delete Department</Button>
        <Button onClick={this.props.history.goBack}>Go back</Button>
        </Item>
        <br />
        <ItemIndex 
          dId={department.id}
        />
      </>
      )
    }
}


export default DepartmentShow;