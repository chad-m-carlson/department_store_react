import React, {useState, useEffect} from 'react';
import {Card, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { ContentContainer, StyledButton, Header, IndexGroup } from '../Styles/Styles';

const Departments = (props) => {
  const [departments, setDepartments] = useState([]);

  useEffect(  () => {
    axios.get('/api/departments')
      .then( res => {
        setDepartments(res.data);
    })
  }, []);




  const renderDepartments = () => {
    if (departments.length <= 0) return <h2>No Departments</h2>
    return departments.map(d => (
        <Link 
          to={`/departments/${d.id}`}
          key={d.id}
          >
          <Card>
            <Card.Content>
              <Card.Header>{d.name}</Card.Header>
              <Card.Description>{d.description}</Card.Description>
            </Card.Content>
          </Card>
        </Link>
    ))
  }

  return (
    <ContentContainer>
      <Header>
      <h1>Departments</h1>
      <StyledButton as={Link}
        to={'/departments/new'}>New Department</StyledButton>
     </Header>
    <IndexGroup>
      {renderDepartments()}
    </IndexGroup>
    
    </ContentContainer>
    )
};



export default Departments;