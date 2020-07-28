import React from "react";
import "./App.css";
import MentorForm from "./Components/MentorForm/Index";
import MentorList from "./Components/MentorList/Index";

import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs="12">
            <h1>Registro de Mentores Kodemia </h1>
          </Col>
          <Col xs="12" md="6">
            <MentorForm />
          </Col>
          <Col xs="12" md="6">
            <MentorList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
