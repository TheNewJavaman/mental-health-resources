import React from 'react';
import '../style/Test.css';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      score: null
    });
  }

  render() {
    return (
      <div className='test'>
        { this.score
          ? <div className='test-result'></div>
          : <div className='test-questions'>{
            Object.entries(this.props.questions).forEach((index, question) => {
              return <div className='test-question'>
                <p className='test-question-title'>{index + ". " + question}</p>
                <div className='test-question-options'>{

                }</div>
              </div>
            })
          }</div>
        }
      </div>
    );
  }
}