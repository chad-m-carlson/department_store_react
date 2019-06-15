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
        <div>

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
          <StyledButton 
            as={Link} 
            style={{float: 'right', marginRight: '100px'}}
            to={{
              pathname: '/item/new',
              state: 1 }}>Add an item</StyledButton>
        </div>
        </ContentContainer>
          <ItemIndex 
            dId={id}
            />
      </>
      )
    }
}


export default DepartmentShow;