import React from 'react';
import {Card, } from 'semantic-ui-react';
import {Link, } from 'react-router-dom';
import axios from 'axios';

class ItemIndex extends React.Component {
    state = {
      items: [{}], 
    }

  componentDidMount(){
  const {dId} = this.props
  axios.get(`/api/departments/${dId}/items`)
  .then( res=> {
    this.setState({items: res.data});
  })}

  
renderItems = () => {
  const {items, } = this.state
  if (items.length <= 0) return <h2>No Departments</h2>
  return items.map(i => (
    <Link 
    to={`/departments/1/items/${i.id}`}
    key={i.id}
    >
    <Card style={{padding: '10px', margin: '20px'}}>
      <Card.Content>
        <Card.Header>{i.name}</Card.Header>
        <Card.Description>{i.description}</Card.Description>
      </Card.Content>
    </Card>
    </Link>
    ));
  };

  render() {
    return(
      <>
    <h1>ItemIndex</h1>
    {this.renderItems()}
    </>
  );
}
}

export default ItemIndex;