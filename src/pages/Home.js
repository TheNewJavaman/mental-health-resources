import React from 'react';
import Background from '../components/Background';
import Main from '../components/Main';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default class Home extends React.Component {
  render() {
    let inventories = require('../data/home-inventories.json');
    let hotlines = require('../data/home-hotlines.json');

    return (
      <Background contents={[
        <Header key="header" />,
        <Main key="inventories" title="Inventories (Work in Progress)" contents={
          inventories.map((full, index) => {
            return <Card key={"inventories" + index} data={full} internalLink={true}></Card>
          })
        } />,
        <Main key="hotlines" title="Hotlines" contents={
          hotlines.map((full, index) => {
            return <Card key={"hotlines" + index} data={full} internalLink={false}></Card>
          })
        } />,
        <Footer key="footer" />,
      ]} />
    );
  }
}
