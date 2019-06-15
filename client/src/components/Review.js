import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Comment, Header, Button, Icon} from 'semantic-ui-react';
import {StyledButton} from '../Styles/Styles';

class Review extends React.Component {
  state = {
    reviews: [],
  };

  componentDidMount(){
    const {itemId} = this.props
    axios.get(`/api/items/${itemId}/reviews`)
      .then( res => this.setState({reviews: res.data}))
  };

  handleDelete = (e, {id}) => {
    const {itemId} = this.props
    axios.delete(`/api/items/${itemId}/reviews/${id}`)
      .then( res => {console.log('review deleted')})
    const {reviews} = this.state
    this.setState({reviews: reviews.filter(r => (r.id !== id )),});
  };

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