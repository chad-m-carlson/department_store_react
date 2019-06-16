import React from 'react';
import axios from 'axios';
import {Form, Button} from 'semantic-ui-react';

class DepartmentForm extends React.Component {
  defaultValues = {name: '', description: '', }
  state = {...this.defaultValues};

  componentDidMount() {
    const {id,} = this.props.match.params
    if (id){
      axios.get(`/api/departments/${id}`)
        .then( res => (
          this.setState({...res.data})
        ))
      }
  };
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  
  handleSubmit = (e) => {
    const {id} = this.props.match.params
    e.preventDefault();
    const department = {...this.state,};
    if (!id){
      axios.post('/api/departments', department)
      .then( res => {
        this.props.history.push(`/departments/${id}`);
      })
    }this.handleEdit(id, department)
  };
  
  handleEdit = (id, department) => {
    const dId = this.props.match.params.id
    axios.patch(`/api/departments/${id}`, department )
      .then(this.props.history.push(`/departments/${dId}`))}

  render() {
    const {name, description, } = this.state
    const {id,} = this.props.match.params
    // const {pName, pDescription} = this.props.location.dInfo.department
    return(
      <> 
      <Form onSubmit={this.handleSubmit}>
        {!id ? <h1>New Department</h1> : <h1>Edit Department</h1>}
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