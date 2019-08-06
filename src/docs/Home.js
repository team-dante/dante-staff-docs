import React from 'react';
import { Link } from 'react-router-dom';
import { PrismCode } from 'react-prism';
import {
  Jumbotron,
  Button,
  Container,
  Col,
  Row
} from 'reactstrap';
import { AppScreenshots } from '../components';
import { Logo } from './assets';

const Home = ({title, gh}) => {
  return (
    <div>
      <Jumbotron tag="section" className="jumbotron-header text-center my-5">
        <Container fluid>
          <Row>
            <Col sm={{ size: 10, offset: 1}}>
              <p className="lead">
                <img id="logo" src={Logo} alt="logo" width="120px"/>
              </p>
              <h1 className="display-4">{title}</h1>
              <p className="lead my-3">
                  An iOS mobile application to facilitate clinic operations
              </p>
              <p>
                <Button outline color="danger" href={`https://github.com/${gh}`}>View on Github</Button>
                <Button tag={Link} color="danger" to="/documentation">Documentation</Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <h2>Getting Started</h2>
            <hr/>
            <h5><strong>For technical users:</strong></h5>
            <p>
              Install/Clone the project to your local directory
            </p>
            <pre>
              <PrismCode className="language-bash">
                git clone https://github.com/team-dante/Dante-Staff-Swift.git
              </PrismCode>
            </pre>
            <p>Navigate inside the project directory: <code>cd Dante-Patient-Staff</code> </p>
            <p>Then, open <code>Dante Staff.xcworkspace</code>; hit play at the top-left corner of Xcode</p>
            <br/>
            <h5><strong>For non-technical users:</strong></h5>
            <p>If you would like to get a beta version of Dante Staff app:</p>
            <ol>
              <li>Install <strong>TestFlight</strong> from Apple Store</li>
              <li>Ask our development team to give you the <strong>Redeem Code</strong> to install the app</li>
            </ol>
            <br/>
            <h5><strong>A few notes before using the app:</strong></h5>
            <ol>
              <li>Please make sure your iOS version >= <code>12.2</code> (we highly recommend you to update to the lastest 
                version of iOS)</li>
              <li>Turn on <code>Bluetooth</code> in Settings.</li>
              <li>There will be an alert asking about the previlege of accessing your location the first 
                you open the app. Please select <code>Always Allow</code> as this app is highly dependent on location services.
              </li>
              <li>Please refer to our <Link to="/documentation">documentation</Link> page for any confusions you may have.</li>
            </ol>
            <div style={{marginTop: 50}}>
              <h2>App Screenshots</h2>
              <hr/>
              <div className="docs-example">
                <AppScreenshots />
              </div>
            </div>
            <div style={{marginTop: 50}}>
              <h4>Future Developments</h4>
              <hr/>
              <ul>
                <li>Continue to fine-tune the <strong>Graph</strong> section</li>
                <li>Let doctors to track their patients' locations in real-time</li>
                <li>AR rendering to illustrate patient's treatment progress</li>
                <li>Android version of Dante Staff</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
