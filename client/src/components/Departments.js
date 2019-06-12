import React, {useState, useEffect} from 'react';
import {Card, Header, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
        <Card style={{padding: '10px', margin: '20px'}}>
          <Card.Content>
            <Card.Header>{d.name}</Card.Header>
            <Card.Description>{d.description}</Card.Description>
          </Card.Content>
        </Card>
      </Link>
    ))
  }

  return (
    <>
    <Header as="h1">Departments</Header>
    <Card.Group>
      {renderDepartments()}
    </Card.Group>
    <Button as={Link}
     to={'/departments/new'}>New Department</Button>
    
    </>
    )
};

export default Departments;