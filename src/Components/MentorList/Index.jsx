import React, { Component } from "react";

import { Container, Row, Col, Table } from "reactstrap";

class MentorList extends Component {
  constructor() {
    super();
    this.state = {
      mentorsList: {},
    };
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

    var url = "https://react-vercel-now.firebaseio.com/mentors.json";
    var data = mentorObject;

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  }

  componentDidMount() {
    console.log("Hola koders");
    fetch("https://react-vercel-now.firebaseio.com/mentors.json").then(
      (response) => {
        response.json().then((json) => {
          console.log(json);
          this.setState({ mentorsList: json });
        });
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs="12" md="6">
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Módulo</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(this.state.mentorsList).map((key, index) => {
                    let mentorName = this.state.mentorsList[key].name;
                    let mentorEmail = this.state.mentorsList[key].email;
                    let mentorModule = this.state.mentorsList[key].module;
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{mentorName}</td>
                        <td>{mentorEmail}</td>
                        <td>{mentorModule}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MentorList;
