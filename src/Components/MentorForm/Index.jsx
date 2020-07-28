import React, { Component } from "react";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

class MentorForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      module: "",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    let value = event.target.value;
    let inputName = event.target.name;
    console.log([inputName]);
    this.setState({ [inputName]: value });
    console.log(value);
  }

  onSubmitHandler() {
    let name = this.state.name;
    let module = this.state.module;
    let email = this.state.email;

    let mentorObject = { name, module, email };

    console.log(mentorObject);

    var url = 'https://react-vercel-now.firebaseio.com/mentors.json';
    var data = mentorObject;

    fetch(url,{
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }

  componentDidMount() {
    console.log("Hola koders");
    fetch("https://react-vercel-now.firebaseio.com/.json").then((response) => {
      response.json().then((json) => {
        console.log(json);
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <Form className="bg-dark text-white p-3 mt-3 border rounded">
                <FormGroup>
                  <Label>Nombre</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Escribe tu nombre"
                    onChange={this.onChangeHandler}
                    value={this.state.name}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Módulo</Label>
                  <Input
                    type="text"
                    name="module"
                    placeholder="Escribe tu módulo"
                    onChange={this.onChangeHandler}
                    value={this.state.module}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Escribe tu mail"
                    onChange={this.onChangeHandler}
                    value={this.state.email}
                  />
                </FormGroup>

                <Button onClick={this.onSubmitHandler}>Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MentorForm;
