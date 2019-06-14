import React from 'react';
import axios from 'axios';
import Item from './Item';
import {Link, } from 'react-router-dom';
import {ContentContainer, ShowCard, StyledButton } from '../Styles/Styles';


const ItemShow = (props) => {
  const {id} = props.match.params
  const  dId = props.location.state.department

  const removeItem = (props) => {
    axios.delete(`/api/departments/${dId}/items/${id}`)
      .then(props.history.goBack)
  }


  return(
    <ContentContainer>
      <ShowCard>
      <Item 
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
    </ContentContainer>
  )
};

export default ItemShow;