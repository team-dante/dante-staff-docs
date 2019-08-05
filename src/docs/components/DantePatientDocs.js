import React from 'react';
import DocumentComponent from '../layout/DocumentComponent';
import { Section } from '../../components';
import {SignIn, Graph, OncMap, Profile, Table, TimeTracker} from '../assets';

const components = [];
// Add your component proptype data here
// multiple component proptype documentation supported
components.push({
  name: 'App Specifications',
  proptypes: `
      App Name:      Dante Patient
      Developer:     Xinhao Liang, Hung Phan
      Last Updated:  Aug 1, 2019
      Version:       2.0 (7)
      Size:          9.8 MB
      Compatibility: Requires iOS 12.2 or later
  `
});

const examples = [];
// Add your component example data here
// multiple examples supported
examples.push({
  name: 'Sign In',
  demo: (
    <Section imgSrc={SignIn}>
      <p>Patient accounts will be <strong>pre-created</strong> by the staff (see Dante Staff for more details) 
      using their own apps. Each patient will be assigned a <code>PIN</code> number as the password 
      to log in. On the sign-in page, a patient will be asked to enter his/her <code>phone number </code> 
      and <code>PIN</code> to log in; if successful, they will be redirected to the <strong>Oncology Map</strong> tab. 
      In particular, for patients who use the app the first time, they need to click <code>Activate Account</code> button 
      to activate their accounts first. For future sign-ins, patients may use 
      their <strong>Face IDs / Touch IDs</strong> instead of manually 
      typing <code>phone number</code> and <code>PIN</code>.</p>
    </Section>
  )
});

examples.push({
  name: 'Real-Time Physician Location Tracking',
  demo: (
    <Section imgSrc={OncMap} imgToRight={false}>
      <p>Patients will see the <strong>radiation oncology map</strong> after signing in. At the top, that is 
      the <code>waiting list</code> feature telling the current patient how many people are ahead of him/her. 
      At the bottom, patients will see the <code>floating panel</code> (expandable and collapsible) that serves 
      as a reference for which doctor will be represented by which pin color (Dr. Roa is green). On the map, if a 
      doctor enters a room, the patient who is holding the phone can see the 
      doctor’s <code>location changing</code> in <strong>real-time</strong>, by which the 
      corresponding pin of a doctor will be shown inside the room. This 
      physician tracking feature serves to provide <strong>clinic transparency</strong> for patients.</p>
    </Section>
  )
});

examples.push({
  name: 'Time Tracker',
  demo: (
    <Section imgSrc={TimeTracker}>
      <p>On the second tab, there is a <code>clock</code> as well as a <code>text label</code> that tells 
      which room the patient is currently in. The clock will be <code>auto-triggered</code> once a patient 
      enters a room (e.g. Examination 1). The clock will keep ticking if a patient does not leave a room. 
      Once a patient leaves a room and enters another room, the timer will be set back to <code>00:00</code> and 
      time tracking process will start over. </p>
      <p><small>
      (Limitations: due to the nature of signal inconsistency of <a target="_blank" href="https://kontakt.io/beacon-basics/what-is-a-beacon/">beacons</a>, there 
      will be minor delays for the timer to reflect how much time a patient has actually spent in a particular room in real-time).
      </small></p>
    </Section>
  )
});

examples.push({
  name: 'Time Tracking Statistics - Table',
  demo: (
    <Section imgSrc={Table} imgToRight={false}>
      <p>On the third tab, patients can see the collected time tracking data in forms 
      of <code>tables</code> and <code>graphs</code>.</p>
      <p>Tables are filtered by <code>day-to-day</code> basis to display how much time a patient has spent 
      at a clinic room on a particular day. </p>
    </Section>
  )
});

examples.push({
  name: 'Time Tracking Statistics - Graph',
  demo: (
    <Section imgSrc={Graph}>
      <p>By tapping <code>Graph</code> at the header, patients can see the collected time tracking data 
      in graphic forms. There is a <code>filter button</code> at the <strong>top-right</strong> corner in 
      which patients can decide to view time tracking data in <code>days, months, or years</code>. Our development team would use <code>pie chart</code> for day-to-day basis as it gives an idea 
      of the proportion of the overall time that a patient spends at a particular room. Also, we decide to 
      use <code>bar graphs</code> for time tracking data over months and/or years as it can present a big picture
      for patients the average time taken (in minutes) per room in a month span or year span.</p>

      <p>Notice we add an animated loading screen when the patient is about to re-enter the graph screen again as the 
        graph takes a few seconds to load. We also display our own legend in a table to accompany with the graph so that
        the presented data is more comprehensive.
      </p>
    </Section>
  )
});

examples.push({
  name: 'Profile',
  demo: (
    <Section imgSrc={Profile} imgToRight={false}>
      <p>On the last tab, patients will be provided the logout option. However, logout 
        will <code>clear all local data</code> the app has stored on the phone. 
        Thus, <code>FaceIDs/TouchIDs</code> cannot be activated the next time patients open 
        the app. Also, we <strong>discourage</strong> patients to logout when 
        the clock is running as it will interrupt the time tracking process. </p>
       <p>In addition, patients may fill out a survey (voluntarily) to tell staff their 
         visit experience so that staff can improve their service next time.</p>
    </Section>
  )
});

const faqs = []
faqs.push({
  question: 'How can the timer trigger automatically?',
  answer: (
    <p>Time tracking is dependent on Bluetooth Low Energy (BLE) devices called beacons. 
    Here is an <a target="_blank"href="https://docs.google.com/presentation/d/1ZbX-dFGWU8D-wlFcTfGmVYutPrsKSBZToBMFl86TaoE/edit?usp=sharing">introduction</a> of 
    BLE if you would like to know more. In short, beacons 
    will emit signals about 3 times per second. Each beacon will be placed and associated 
    with a room. As you enter a room, your app will detect the signal and notify you 
    where you currently are. However, this technology requires <code>location services</code>. When 
    you open the app the first time, there will be an prompt asking you to enable location 
    services. The app will work the best if you can choose the <code>Always Allow</code> option for 
    location services.</p>
  )
});

faqs.push({
  question: 'Why I need to see the collected time tracking data?',
  answer: (
    <p>Although individual data points may not be meaningful to patients, as more and more data are 
      collected, doctors can draw statistical conclusions from these data to improve patient experience. 
      For instance, the data may show patients usually spend _ minutes in a room but the time should 
      not be that long, thus improvements needed. Ultimately, time tracking data will be beneficial 
      to you.</p>
  )
});

faqs.push({
  question: 'Will I still be tracked outside of the clinic?',
  answer: (
    <p><strong>Absolutely NO</strong>. The location services will only work inside the clinic. We will not be 
      able to track you once you’re outside of the clinic. 
    </p>
  )
});

const Documentation = () => {
  return (
    <DocumentComponent
      name="Dante Patient Documentation"
      components={components}
      examples={examples}
      faqs={faqs}>
      <p>
      Dante Patient is a medical mobile app designated to improve patient visit experience 
      at the Department of Radiation Oncology, UCI Medical Center. Improving patient care experience 
      is an ongoing and noble goal in medical fields. Nonetheless, due to work overload in the clinic, 
      staff may try to take care of as many patients as possible, but on the other hand, they may ignore 
      the patient experience (imagine a patient waits for almost an hour but have no clue about the clinic 
      outside of the room at all). 
      </p>
      <p>Therefore, Dante Patient opens a solution for enhancing visit experience by providing the 
        following features: </p>
      <ol>
        <li>Real-time location tracking of physicians inside the radiation oncology clinic</li>
        <li>Auto timer (no button press) to track the time a patient spent at each treatment stage</li>
        <li>Collect all the time data and draw statistical conclusion via tables and/or graphs</li>
        <li>Survey page (voluntarily) for patients to give feedback to staff to improve service</li>
      </ol>
    </DocumentComponent>
  );
};

export default Documentation;
