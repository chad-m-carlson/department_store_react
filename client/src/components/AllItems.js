import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ContentContainer} from '../Styles/Styles'

const AllItems = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get(`/api/all_items`)
      .then( res => { setItems(res.data)})
  },[])

  return (
    <ContentContainer>
      <h1>All Items</h1>
      <p>This page is real ugly, but uses custom rails routing to show ALL of the items regardless of department</p>
      {items.map( i => 
        <h2 key={i.id}>{i.name}</h2>)}
    </ContentContainer>
  )
};

export default AllItems;