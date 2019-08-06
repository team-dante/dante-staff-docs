import React from 'react';
import DocumentComponent from '../layout/DocumentComponent';
import { Section } from '../../components';
import {SignIn, MainMenu, DrawerNav, OncMap, LookUp, CreateAcct, PatientStats} from '../assets';

const components = [];
// Add your component proptype data here
// multiple component proptype documentation supported
components.push({
  name: 'App Specifications',
  proptypes: `
      App Name:      Dante Staff
      Developer:     Hung Phan, Xinhao Liang
      Last Updated:  Aug 4, 2019
      Version:       2.0 (13)
      Size:          42.2 MB
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
      <p>Staff accounts will be <strong>pre-created</strong> by our development team. 
      Each staff will be assigned a <code>PIN</code> number as the password 
      to log in. On the sign-in page, a staff will be asked to enter his/her <code>phone number </code> 
      and <code>PIN</code> to log in; if successful, they will be redirected to the <strong>Main Menu</strong> page. 
      For future sign-ins, staff may use their <strong>Face IDs / Touch IDs</strong> instead of manually 
      typing <code>phone number</code> and <code>PIN</code>.</p>
    </Section>
  )
});

examples.push({
  name: 'Main Menu',
  demo: (
    <Section imgSrc={MainMenu} imgToRight={false}>
      <p>Patients will see this <strong>main menu</strong> after signing in. Tentatively, we 
      provide 6 features for staff:</p>
      <ol>
        <li><code>Broadcast My Location</code>: the staff location will be broadcasted to other staff
        inside the clinic; at the same time, only physicians' location will be broadcasted to patients.</li>
        <li><code>Look up Patient Account</code>: in case patients forget their accounts</li>
        <li><code>[Deprecated] Scan QR code</code>: the old way to report physicians' locations to patients</li>
        <li><code>Show Patient Statistics</code>: display collected patient stats in graphs</li>
        <li><code>Create Patient Account</code>: staff will create accounts for patients to log in</li>
        <li><code>Feedback</code>: staff can view patient feedback</li>
      </ol>
    </Section>
  )
});

examples.push({
  name: 'Sidebar',
  demo: (
    <Section imgSrc={DrawerNav}>
      <p>When staff toggle the hamburger icon at the top-left corner, they will see additional 
        small features. Staff may log out of the app by tapping the <code>Log out</code> at the side bar.
      </p>
    </Section>
  )
});

examples.push({
  name: 'Broadcast Your Location',
  demo: (
    <Section imgSrc={OncMap} imgToRight={false}>
      <p>When a staff taps on <code>Broadcast my Location</code>, he/she can see the oncology map
      that will display his/her current location. If other staff are using this feature at the 
      same time, he/she can see other staff's location as well. The legend floating panel at the
      bottom of the screen will map staff's name to the corresponding PIN shown onto the map.</p>
      <p>Note: Only staff who are <strong>physicians</strong>, their locations will be shown onto the map in 
        the Dante Patient app.</p>
    </Section>
  )
});

examples.push({
  name: 'Look up Patient Accounts',
  demo: (
    <Section imgSrc={LookUp}>
      <p>In case patients forget their accounts, they can come to staff to ask for their
        account information. Staff can simply enter a patient's phone number to look up the
        patient's account.
      </p>
    </Section>
  )
});

examples.push({
  name: 'Create Patient Accounts',
  demo: (
    <Section imgSrc={CreateAcct} imgToRight={false}>
      <p>All patient accounts will be created here by staff. Staff will create a new account for
        the first-time patient who will be using Dante Patient. To create an account, staff need to ask
        the patient's last name, first name, and phone number. Then, they will generate a unique PIN for
        the patient. If successful, a newly created account will be displayed onto the screen.
      </p>
    </Section>
  )
});

examples.push({
  name: 'View Patient Statistics',
  demo: (
    <Section imgSrc={PatientStats}>
      <p>Staff will be able to view all the collected patient time tracking statistics. In future,
        our development team will add a filter to display collected data 
        by <code>day, week, month, or year</code>. Collected data can be displayed in a variety of
        forms. For example, as shown in the picture, we will use bar graphs to display the number of 
        patients treated per month, the average time patients spent at each treatment room per month, etc.
        Also, we will use line graphs to display the trend of the overall time patients spent per visit 
        over a month span or a year span.
      </p>
    </Section>
  )
});

const faqs = []
faqs.push({
  question: 'Why should I download this app?',
  answer: (
    <p>This app has many admin features that will defintely help you oversee your patients
      speedily. With this app, you can see the collected patient data in all types of graph forms
      and view their feedback so that you could improve your service next time. Also, you are not
      longer "under the dark" to patients in which you can report your locations to patients in
      real-time. In addition, if your location is viewable by other staff, it definitely helps other 
      staff to locate you when they need help.
    </p>
  )
});

faqs.push({
  question: 'How is my location being broadcasted automatically?',
  answer: (
    <p>Location broadcasting is dependent on Bluetooth Low Energy (BLE) devices called beacons. 
    Here is an <a target="_blank"href="https://docs.google.com/presentation/d/1ZbX-dFGWU8D-wlFcTfGmVYutPrsKSBZToBMFl86TaoE/edit?usp=sharing">introduction</a> of 
    BLE if you would like to know more. In short, beacons 
    will emit signals about 3 times per second. Each beacon will be placed and associated 
    with a room. As you enter a room, your app will detect the signal of beacons. Then, the 
    app will send that signal to server and server will respond back where you currently are.
    However, this technology requires <code>location services</code>. When 
    you open the app the first time, there will be an prompt asking you to enable location 
    services. The app will work the best if you can choose the <code>Always Allow</code> option for 
    location services.</p>
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
      name="Dante Staff Documentation"
      components={components}
      examples={examples}
      faqs={faqs}>
      <p>
      Dante Staff is a medical mobile app designated to facilitate daily clinic operations 
      at the Department of Radiation Oncology, UCI Medical Center. Dante Staff is interdependent 
      with <a href="https://team-dante.github.io/dante-patient-docs/">Dante Patient</a>, a medical app
      dedicated to improve patient care experience. Dante Staff serves as an
      adminstrative dashboard to oversee collected patient data as well as to foster communication among 
      staff.
      </p>
      <p>Tentatively, Dante Staff provides the following administrative features to staff: </p>
      <ol>
        <li>Help patients create accounts for <code>Dante Patient</code> app</li>
        <li>Create accounts for patients</li>
        <li>View all feedbacks collected from patients</li>
        <li>Display the collected time tracking data (e.g. 
          how much time on average do all patients spend at CT Simulator?) from patients in graphs</li>
        <li>Report physician locations to Dante Patient in real-time as well as to other staff who are using
          the Dante Staff app at the same time
        </li>
      </ol>
    </DocumentComponent>
  );
};

export default Documentation;
