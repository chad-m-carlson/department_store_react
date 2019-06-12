import React, {useState, useEffect} from 'react';
import {Card, } from 'semantic-ui-react';
import {Link, } from 'react-router-dom';
import axios from 'axios';

// class ItemIndex extends React.Component {
//     state = {
//       items: [{ }],
//     }

const ItemIndex = (props) => {
  const [items, setItems] = useState([])
  

  
  useEffect(() => {
    axios.get(`/api/departments/${props.dId}/items`)
    .then( res => {setItems(res.data)})}, [props])
  
  
  const renderItems = () => {
    // const {items, } = this.state
    if (items.length <= 0) return <h2>No Items</h2>
    return items.map(i => (
    <Link 
    to={`/departments/${props.dId}/items/${i.id}`}
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
  console.log(props)
    return(
      <>
    <h1>ItemIndex</h1>
    {renderItems()}
    </>
  );
}

export default ItemIndex;