import React, { Component } from 'react';
import {
  Container,
  Col,
  Row
} from 'reactstrap';
import {SignIn, GraphStatic, OncMap, Profile, Table, TimeTracker} from '../docs/assets';

class AppScreenshots extends Component {
  render() {
    return (
        <Container fluid>
          <Row>
            <Col xs="12" md="4">
              <img src={SignIn} alt="Oncology Map" width="240px"/>
            </Col>
            <Col xs="12" md="4">
              <img src={OncMap} alt="Oncology Map" width="240px"/>
            </Col>
            <Col xs="12" md="4">
              <img src={TimeTracker} alt="Time Tracker" width="240px"/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs="12" md="4">
              <img src={Table} alt="Stats Table" width="240px"/>
            </Col>
            <Col xs="12" md="4">
              <img src={GraphStatic} alt="Stats Graph" width="240px"/>
            </Col>
            <Col xs="12" md="4">
              <img src={Profile} alt="Patient Profile" width="240px"/>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default AppScreenshots;
