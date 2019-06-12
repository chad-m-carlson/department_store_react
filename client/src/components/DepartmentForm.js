import React from 'react';
import axios from 'axios';
import {Card, Form, Button} from 'semantic-ui-react';

class DepartmentForm extends React.Component {
  defaultValues = {name: '', description: '', }
  state = {...this.defaultValues};

  // componentDidMount() {
  //   const {dInfo} = this.props.location
  //   if (this.props.location.dInfo) {
  //     this.setState({department: {
  //                     name: dInfo.department.name, 
  //                     description: dInfo.department.description,
  //                     edit: true}})
  //   };
  // };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const department = {...this.state,};
    axios.post('/api/departments', department)
      .then( res => {
        this.props.history.goBack();
      })
    this.setState({...this.defaultValues, })
  };


  render() {
    const {name, description, } = this.state
    return(
      <>
      <h1>New Department</h1>
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
        label="Name"
        name='name'
        value={name}
        placeholder="Department Name"
        onChange={this.handleChange}
        required
        />
        <Form.Input
        label="Description"
        name='description'
        value={description}
        placeholder="Department Description"
        onChange={this.handleChange}
        />
        <Button>Submit</Button>
          
      </Form>
      </>
      )
    }
}

export default DepartmentForm;