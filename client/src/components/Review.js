import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Comment, Header, Button, Icon, Rating} from 'semantic-ui-react';
import {StyledButton} from '../Styles/Styles';

class Review extends React.Component {
  state = {
    reviews: [],
    newReview: {}
  };
  


  componentDidMount(){
    const {itemId} = this.props
    axios.get(`/api/items/${itemId}/reviews`)
      .then( res => {
        // const ratings = res.data.map( r => r.rating).reduce((acc, c) => acc + c, 0)/res.data.length
        this.setState({reviews: res.data,})
      });
  };

  handleDelete = (e, {id}) => {
    const {itemId} = this.props
    axios.delete(`/api/items/${itemId}/reviews/${id}`)
    .then( res => {console.log('review deleted')})
    const {reviews} = this.state
    this.setState({reviews: reviews.filter(r => (r.id !== id )),});
  };
  
  handleRate = (e, { rating }) =>  {
    const {itemId} = this.props;
    const {reviews} = this.state
    const updatedReview = reviews.filter(r => (r.id === Number(e.target.parentElement.id)))
      .map( r => {
        r.rating = rating; 
        axios.put(`/api/items/${itemId}/reviews/${e.target.parentElement.id}`, r)});
    this.props.ratingChanged()
  }

  render() {
    const {reviews} = this.state
    const {itemId} = this.props
    return (
      <Comment.Group style={{marginLeft: '100px'}}>
      <Header as='h3' dividing>
        Reviews
      </Header>
      {reviews.map( r => (
        <Comment key={r.id}>
        <Button 
          icon 
          id={r.id}
          size='mini'
          color='red' 
          style={{float: 'right'}}
          onClick={this.handleDelete}
          ><Icon name='trash'/></Button>
        <Comment.Content>
          <Rating 
            id={r.id}
            icon='heart' 
            defaultRating={r.rating} 
            maxRating={5} size='mini' 
            onRate={this.handleRate} 
            />
          <Comment.Author>{r.author}</Comment.Author>
          <Comment.Metadata>
            {/* <div>{r.updated_at.slice(11, -8)}</div> */}
            <div>{r.created.slice(0, -15)}</div>
            <div>{r.created.slice(11, -8)}</div>
          </Comment.Metadata>
          <Comment.Text>{r.body}</Comment.Text>
        </Comment.Content>
      </Comment>
      ))}
      <br />
      <StyledButton as={Link} to={`/item/${itemId}/review`}>Submit a Review</StyledButton>
    </Comment.Group>
    );
  };
};

export default Review;