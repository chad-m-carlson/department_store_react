import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Item = (props) => {
  const [item, setItem] = useState([])
  
  useEffect(  () => {
    axios.get(`/api/departments/${props.departmentId}/items/${props.itemId}`)
    .then( res => {setItem(res.data)})},[]);
  

  return(
    <>
      <h1>{item.name}</h1>
      <h3>{item.description}</h3>
      <h4>${item.price}</h4>
    </>
  )
};

export default Item;