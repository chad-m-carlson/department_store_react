import React from 'react';
import axios from 'axios';
import {Link, } from 'react-router-dom';
import {ContentContainer, ShowCard, StyledButton } from '../Styles/Styles';


const ItemShow = (props) => {
  const {item} = props.location

  const renderItem = () => {
    if (item) {
      return (
      <>
        <h1>{item.name}</h1>
        <h3>{item.description}</h3>
        <h4>${item.price}</h4>
      </>
      )
    }return (
      <>
        <h2>Oops, look like something went wrong or this item doesn't exist anymore</h2>
      </>
    )
  }

  const removeItem = (props) => {
    // const {department_id, id} = props.location.item
    axios.delete(`/api/departments/${props.location.department}/items/${props.location.item.id}`)
      .then(props.history.goBack)
  }


  return(
    <ContentContainer>
      <ShowCard>

      {renderItem()}
      <StyledButton onClick={props.history.goBack}>Go back</StyledButton>
      <StyledButton  as={Link}to={{
        pathname: '/item/new/',
        itemInfo: {item}}}
        > Edit Item 
      </StyledButton > 
      <StyledButton onClick={() => removeItem(props)}>Delete Item</StyledButton>
      </ShowCard>
    </ContentContainer>
  )
};

export default ItemShow;