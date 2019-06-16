import React from 'react';
import {Form, } from 'semantic-ui-react';
import {ContentContainer, StyledButton } from '../Styles/Styles';
import Axios from 'axios';

class ReviewForm extends React.Component {
  state = {author: '', body: '' };

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {id} = this.props.match.params
    const date = Date();
    const {author, body} = this.state
    const review = {author, body, created: date}
    Axios.post(`/api/items/${id}/reviews`, review)
      .then( res => {this.props.history.goBack()})
  }


  render() {
    const {author, body, } = this.state
    return (
      <ContentContainer>
      <h1>ReviewForm</h1>
      <Form widths='equal' style={{width: '400px', marginLeft: '100px'}} onSubmit={this.handleSubmit}>
        <Form.Input
          label='Your name'
          name='author'
          value={author}
          placeholder='Name'
          onChange={this.handleChange}
        >
          
        </Form.Input> 
        <Form.TextArea 
          label='Your Review'
          name='body'
          value={body}
          placeholder='Type review here'
          onChange={this.handleChange}
        />
        <StyledButton as='button'>Add Review</StyledButton>
      </Form>
      </ContentContainer>
    );
  }
}

export default ReviewForm;