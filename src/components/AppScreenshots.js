import React, { Component } from 'react';
import {
  Container,
  Col,
  Row
} from 'reactstrap';
import {SignIn, CreateAcct, DrawerNav, LookUp, MainMenu, OncMap, PatientStats} from '../docs/assets';

class AppScreenshots extends Component {
  render() {
    return (
        <Container fluid>
          <Row>
            <Col xs="12" md="4">
              <img src={SignIn} alt="Sign In" width="240px"/>
            </Col>
            <Col xs="12" md="4">
              <img src={MainMenu} alt="Main Menu" width="240px"/>
            </Col>
            <Col xs="12" md="4">
              <img src={DrawerNav} alt="Drawer Nav" width="240px"/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs="12" md="4">
              <img src={OncMap} alt="Oncology Map" width="240px"/>
            </Col>
            <Col xs="12" md="4">
              <img src={LookUp} alt="Look Up Acct" width="240px"/>
            </Col>
            <Col xs="12" md="4">
              <img src={CreateAcct} alt="Create Acct" width="240px"/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs="12" md="4">
              <img src={PatientStats} alt="Patient Stats" width="240px"/>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default AppScreenshots;
