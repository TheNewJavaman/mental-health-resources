import React from 'react';
import Background from '../components/Background';
import Main from '../components/Main';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default class Home extends React.Component {
  render() {
    let intro = require('../data/intro.json');
    let inventories = require('../data/home-inventories.json');
    let hotlines = require('../data/home-hotlines.json');

    return (
      <Background contents={[
        <Header key="header" />,
        <Main key="intro" title="Get Support" isTop={1} contents={
          [
            <Card style={{ maxWidth: "880px" }} key={"hotlines"} data={intro.main} internalLink={false}></Card>,
            intro.sub.map((full, index) => {
              return <Card style={{ maxWidth: "400px" }} key={"hotlines" + index} data={full} internalLink={false}></Card>
            })
          ]
        } />,
        <Main key="inventories" title="Inventories" contents={
          inventories.map((full, index) => {
            return <Card hasLink={1} style={{ maxWidth: "400px" }} key={"inventories" + index} data={full} internalLink={true}></Card>
          })
        } />,
        <Main key="hotlines" title="Hotlines" contents={
          hotlines.map((full, index) => {
            return <Card hasLink={1} style={{ maxWidth: "400px" }} key={"hotlines" + index} data={full} internalLink={false}></Card>
          })
        } />,
        <Footer key="footer" />,
      ]} />
    );
  }
}
