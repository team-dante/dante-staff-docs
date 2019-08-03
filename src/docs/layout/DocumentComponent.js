import React from 'react';
import { PrismCode } from 'react-prism';
import { dedent } from 'dentist';

const DocumentProptypes = (props) => {
  const {
    name,
    proptypes
  } = props.component;
  return (
    <div className="docs-component-props mt-5">
      <h3>{name}</h3>
      <pre>
        <PrismCode className="language-jsx">
          {dedent(proptypes)}
        </PrismCode>
      </pre>
    </div>
  );
};

const DocumentExamples = (props) => {
  const {
    name,
    demo
  } = props.component;
  return (
    <div className="docs-component-props mt-5">
      <h3>{name}</h3>
      { demo && (
        <div className="docs-example">
          {demo}
        </div>
      )}
    </div>
  );
};

const DocumentFAQs = (props) => {
  const {
    question,
    answer
  } = props.component;

  const paragraphStyle = {
    fontSize: 15,
    color: "#676767",
    marginBottom: 40
  }
  return (
    <div>
      <h5>>> {question}</h5>
      <div style={paragraphStyle}>{answer}</div>
    </div>

  );
};

const DocumentComponent = (props) => {
  const {
    name,
    children,
    components = [],
    examples = [],
    faqs = []
   } = props;
  return (
    <div className="docs-component-section">
      <h1>{name}</h1>
      {children}
      { components.map((component,i) => <DocumentProptypes key={i} component={component} />)}
      <br/>
      <h3>App Walkthrough</h3><hr/>
      { examples.map((example,i) => <DocumentExamples key={i} component={example} />)}
      <h3 style={{marginTop: '2.6em'}}>Patient FAQs</h3><hr/>
      { faqs.map((faq,i) => <DocumentFAQs key={i} component={faq} />)}
    </div>
  );
};

export default DocumentComponent;
