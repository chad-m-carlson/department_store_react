import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Item from './Item';
import Review from './Review';
import {Link, } from 'react-router-dom';
import {ContentContainer, ShowCard, StyledButton } from '../Styles/Styles';


const ItemShow = (props) => {
  const [rating, setRating] = useState(0);
  const [forceUpdate, setForceUpdate] = useState(false);
  const {id} = props.match.params;
  const  dId = props.location.state;

  const removeItem = (props) => {
    axios.delete(`/api/departments/${dId}/items/${id}`)
      .then(props.history.goBack)
  };

  useEffect(() => {
    axios.get(`/api/items/${id}/reviews`)
      .then( res => {
        const ratings = res.data.map( r => r.rating).reduce((acc, c) => acc + c, 0)/res.data.length.toFixed(1);
        setRating(ratings)
      })
    },);
    
  const ratingChanged = () => {
    axios.get(`/api/items/${id}/reviews`)
    .then( res => {
      const ratings = res.data.map( r => r.rating).reduce((acc, c) => acc + c, 0)/res.data.length.toFixed(1);
      setRating(ratings);
      toggleUpdate();
    });
  };

  const toggleUpdate = () => {
    setForceUpdate(!forceUpdate)
  }

  return(
    <ContentContainer>
      <ShowCard>
      <Item 
      rating={rating}
      departmentId={dId}
      itemId={id}/>
      <StyledButton onClick={props.history.goBack}>Go back</StyledButton>
      <StyledButton  as={Link}to={{
        pathname: `/item/${id}/edit/`,
        state: {dId}
      }}
        > Edit Item 
      </StyledButton > 
      <StyledButton onClick={() => removeItem(props)}>Delete Item</StyledButton>
      </ShowCard>
      <Review 
        ratingChanged={ratingChanged}
        itemId={id}/>
    </ContentContainer>
  )
};

export default ItemShow;