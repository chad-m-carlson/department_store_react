import React from 'react';
import {Link, } from 'react-router-dom';
import {Button, } from 'semantic-ui-react';
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
      </ShowCard>
    </ContentContainer>
  )
};

export default ItemShow;