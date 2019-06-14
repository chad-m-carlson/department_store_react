import React from 'react';
import axios from 'axios';
import { Form, Button, Select} from 'semantic-ui-react';

class ItemForm extends React.Component {
  state = {
    name: '', description: '', price: '', department_id: '', id: '',
    department: [],
  };


  // componentDidMount(){
  // };
  
  componentDidMount() {
    axios.get('/api/departments')
    .then( res => {
      this.setState({department: res.data});
    })
    const {itemInfo,} = this.props.location
    if (itemInfo){
      // const {name, description} = this.props.location.dInfo.department
      this.setState({department_id: itemInfo.item.department_id, description: itemInfo.item.description, price: itemInfo.item.price, name: itemInfo.item.name})
    }
  };
  
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value});
  };

  handleDropDown = (e) => {
    this.setState({ department_id: e.currentTarget.id})
  }
  
  handleSubmit = (e) => {
    const {itemInfo,} = this.props.location
    const {name, description, price, department_id,} = this.state
    e.preventDefault();
    const item = {name, description, price, department_id,};
    if (!itemInfo){
      axios.post(`/api/departments/${department_id}/items`, item)
      .then( res => {this.props.history.goBack();
      })
    }
    this.handleEdit(department_id, itemInfo.item.id, item)
  };

  handleEdit = (dId, iId, item) => {
    axios.patch(`/api/departments/${dId}/items/${iId}`, item ).then(this.props.history.push(`/departments/${dId}/items/${iId}`));
  };

  

  render() {
    
    
    const {name, description, price, department} = this.state
    const {itemInfo,} = this.props.location
    // const {pName, pDescription} = this.props.location.dInfo.department
    return(
      <> 
      <Form onSubmit={this.handleSubmit}>
        {!itemInfo ? <h1>New Item</h1> : <h1>Edit Item</h1>}
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
          id: d.id}))}>

         </Select>
        <Button>Submit</Button>
      </Form>
      <Button onClick={()=>this.props.history.goBack()}>Go back</Button>

      </>
      )
    }
    
}

export default ItemForm;