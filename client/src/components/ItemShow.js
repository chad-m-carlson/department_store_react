import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Item from './Item';
import Review from './Review';
import {Link, } from 'react-router-dom';
import {ContentContainer, ShowCard, StyledButton } from '../Styles/Styles';


const ItemShow = (props) => {
  const [rating, setRating] = useState(0)
  const {id} = props.match.params
  const  dId = props.location.state

  const removeItem = (props) => {
    axios.delete(`/api/departments/${dId}/items/${id}`)
      .then(props.history.goBack)
  }

  useEffect(() => {
    axios.get(`/api/items/${id}/reviews`)
      .then( res => {
        const ratings = res.data.map( r => r.rating).reduce((acc, c) => acc + c, 0)/res.data.length.toFixed(1);
        setRating(ratings)
      })
  },[])

// rating only changes on double click

  const ratingChanged = (newReview) => {
    // let x = newReview.newReview
    // console.log(x)
    // console.log(rating)
    axios.get(`/api/items/${id}/reviews`)
    .then( res => {
      const ratings = res.data.map( r => r.rating).reduce((acc, c) => acc + c, 0)/res.data.length.toFixed(1);
      setRating(ratings)
    })
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