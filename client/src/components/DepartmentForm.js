import React from 'react';
import axios from 'axios';
import {Form, Button} from 'semantic-ui-react';

class DepartmentForm extends React.Component {
  defaultValues = {name: '', description: '', }
  state = {...this.defaultValues};

  componentDidMount() {
    const {dInfo,} = this.props.location
    if (dInfo){
      // const {name, description} = this.props.location.dInfo.department
      this.setState({name: dInfo.department.name, description: dInfo.department.description})
    }
  };
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  
  handleSubmit = (e) => {
    const {dInfo,} = this.props.location
    e.preventDefault();
    const department = {...this.state,};
    if (!dInfo){
      axios.post('/api/departments', department)
      .then( res => {
        this.props.history.goBack();
      })
    }this.handleEdit(dInfo.department.id, department)
  };

  handleEdit = (id, department) => {
    axios.patch(`/api/departments/${id}`, department ).then(this.props.history.goBack());
  };

  render() {
    const {name, description, } = this.state
    const {dInfo,} = this.props.location
    // const {pName, pDescription} = this.props.location.dInfo.department
    return(
      <> 
      <Form onSubmit={this.handleSubmit}>
        {!dInfo ? <h1>New Department</h1> : <h1>Edit Department</h1>}
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