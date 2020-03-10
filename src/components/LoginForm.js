import React from 'react'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullname: '',
      username: '',
      password: ''
    }
  }

  handleClick = () => {
    alert(`${this.state.fullname}, ${this.state.username}, ${this.state.password}`)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="mx-auto">
        <h1>Login</h1><hr />
        <Form>
          <FormGroup>
            <Label for="fullname">Fullname: <span>{this.state.fullname}</span></Label>
            <Input type="text" name="fullname" id="fullname" placeholder="Enter your fullname" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="username">Username: <span>{this.state.username}</span></Label>
            <Input type="text" name="username" id="username" placeholder="Enter your username" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password: <span>{this.state.password}</span></Label>
            <Input type="text" name="password" id="password" placeholder="Enter your password" onChange={this.handleChange}/>
          </FormGroup>
          <Button outline color="primary" onClick={this.handleClick}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default LoginForm