import React, { Component } from 'react';
import {
  Col,
  Row,
  Container
} from 'reactstrap';

const defaultProps = {
  imgSrc: '',
  imgToRight: true
};

class Section extends Component {

  sectionLayout(toRight) {
    if (toRight) {
      return (
        <Row>
          <Col xs="12" md="8" style={{color: '#3d3d3d'}}>
            {this.props.children}
          </Col>
          <Col xs="12" md="4">
            <img src={this.props.imgSrc} alt="App snapshots" width="200px"/>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row>
          <Col xs="12" md="4">
            <img src={this.props.imgSrc} alt="App snapshots" width="200px"/>
          </Col>
          <Col xs="12" md="8" style={{color: '#3d3d3d'}}>
            {this.props.children}
          </Col>
        </Row>
      );
    }
  }
  render() {
    return (
      <Container fluid>
          {this.sectionLayout(this.props.imgToRight)}
      </Container>
    );
  }
}

Section.defaultProps = defaultProps;

export default Section;
