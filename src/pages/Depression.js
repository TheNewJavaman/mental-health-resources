import React from 'react';
import Background from '../components/Background';
import Main from '../components/Main';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Test from '../components/Test';

export default class Depression extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: null
    };
  }

  render() {
    let questions = require('../data/depression-questions.json');
    let results = require('../data/depression-results.json');
    return (
      <Background contents={[
        <Header key="header" />,
        <Main key="main" columns={1} isTop={1} title="Beck Depression Inventory" contents={
          <Test key="test" questions={questions} results={results}></Test>
        } />,
        < Footer key="footer" />,
      ]} />
    );
  }
}
