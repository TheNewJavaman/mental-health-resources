import React from 'react';
import Background from '../components/Background';
import Main from '../components/Main';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default class Home extends React.Component {
  render() {
    let cardData = require('../data/home-cards.json');

    return (
      <Background contents={[
        <Header key="header" />,
        <Main key="content" contents={
          cardData.map((full, index) => {
            return <Card key={index} data={full}></Card>
          })
        } />,
        <Footer key="footer" />,
      ]} />
    );
  }
}
