import React from 'react';
import axios from 'axios';
import ItemIndex from './ItemIndex';
import {Link, } from 'react-router-dom';
// import {Item} from 'semantic-ui-react';
import {ContentContainer, ShowCard, StyledButton } from '../Styles/Styles';


class DepartmentShow extends React.Component {
  state = {
    department: {},
  }

  componentDidMount(){
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({department: res.data})
      })
  }

  removeDepartment = () => {
    axios.delete(`/api/departments/${this.props.match.params.id}`)
      .then(this.props.history.goBack)
  }



  render() {
    const {department: {id, name, description}} = this.state
    // const {id} = this.props.match.params
    return(
      <>
      <ContentContainer>
        <ShowCard>
          <h1>{name}</h1>
          <h4>{description}</h4>
          <StyledButton  as={Link}to={{
            pathname: `/departments/${id}/edit/`,
          }}
            > Edit Department 
          </StyledButton > 
          <StyledButton  onClick={this.removeDepartment}>Delete Department</StyledButton>
          <StyledButton onClick={this.props.history.goBack}>Go back</StyledButton>
        </ShowCard>
        </ContentContainer>
        <br />
        <ContentContainer>
          <StyledButton as={Link} to={'/item/new'}>Add an item</StyledButton>
          <ItemIndex 
            dId={id}
            />
        </ContentContainer>
      </>
      )
    }
}


export default DepartmentShow;