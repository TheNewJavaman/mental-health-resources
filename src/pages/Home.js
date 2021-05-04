import React from 'react';
import Background from '../components/Background';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default class Home extends React.Component {
  render() {
    return (
      <Background contents={[
        <Main key="content" />,
        <Footer key="footer" />,
      ]} />
    );
  }
}
