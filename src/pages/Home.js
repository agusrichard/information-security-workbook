import React from 'react'
import { 
  Container,
  Row,
  Col
} from 'reactstrap'

import NavBar from '../components/NavBar'
import LoginForm from '../components/LoginForm'

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <LoginForm />
          </Col>
          </Row>
        </Container>
      </div>
    )
  }
}


export default Home