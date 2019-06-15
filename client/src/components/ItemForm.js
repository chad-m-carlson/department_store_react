import React from 'react';
import axios from 'axios';
import { Form, Button, Select} from 'semantic-ui-react';

class ItemForm extends React.Component {
  state = {
    name: '', description: '', price: '', department_id: '', id: '',
    department: [],
    item: {},
  };
  
  componentDidMount() {
    const {id} = this.props.match.params
    const {dId} = this.props.location.state
    axios.get('/api/departments')
    .then( res => {
      this.setState({department: res.data});
    })
    if (id){
      axios.get(`/api/departments/${dId}/items/${id}/`)
        .then(res => (
          this.setState({name: res.data.name, description: res.data.description, price: res.data.price, id: res.data.id})
        ))
    }
    
  };
  
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value});
  };

  handleDropDown = (e) => {
    this.setState({ department_id: e.currentTarget.id})
  }
  // FIX IDS THAT CHECK TO SEE IF THIS IS EDIT OR NEW TO SOMETHING OTHER THAN ID SINCE I USE THAT IN MANY PLACES
  handleSubmit = (e) => {
    e.preventDefault();
    const {name, description, price, department_id, id} = this.state
    const item = {name, description, price, department_id,};
    if (!this.props.match.params.id){
      axios.post(`/api/departments/${department_id}/items`, item)
      .then( res => {this.props.history.push(`/departments/${department_id}`);
      })
    }
    this.handleEdit(department_id, id, item)
  };

  handleEdit = (dId, iId, item) => {
    axios.patch(`/api/departments/${dId}/items/${iId}`, item ).then(this.props.history.push(`/departments/${dId}/items/${iId}`,dId));
  };

  

  render() {
    const {name, description, price, department} = this.state
    const {id,} = this.props.match.params
    return(
      <> 
      <Form onSubmit={this.handleSubmit}>
        {!id ? <h1>New Item</h1> : <h1>Edit Item</h1>}
        <Form.Input 
        label="Name"
        name='name'
        value={name}
        placeholder="Item Name"
        onChange={this.handleChange}
        required
        />
        <Form.Input
        label="Description"
        name='description'
        value={description}
        placeholder="Item Description"
        onChange={this.handleChange}
        />
        <Form.Input
        label="Price"
        name='price'
        value={price}
        placeholder="Item Price"
        onChange={this.handleChange}
        />
        <Select placeholder='Select Department'
          name='department_id'
          onChange={this.handleDropDown}
          options={
          department.map( d => ({
          key: d.id,
          text: d.name,
          value: d.name,
          id: d.id}))}
          // defaultValue={department.name}
          >

         </Select>
        <Button>Submit</Button>
      </Form>
      <Button onClick={()=>this.props.history.goBack()}>Go back</Button>

      </>
      )
    }
    
}

export default ItemForm;