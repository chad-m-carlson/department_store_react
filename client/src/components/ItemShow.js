import React from 'react';
import {Link, } from 'react-router-dom';
import {Button, } from 'semantic-ui-react';


const ItemShow = (props) => {
const {item} = props.location

const renderItem = () => {
  if (item) {
    return (
    <>
      <h2>{item.name}</h2>
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
    <>
      <h1>ItemShow</h1>
      {renderItem()}
      <Button onClick={props.history.goBack}>Go back</Button>
      <Button  as={Link}to={{
          pathname: '/item/new/',
          itemInfo: {item}}}
            > Edit Item 
        </Button > 
    </>
  )
};

export default ItemShow;