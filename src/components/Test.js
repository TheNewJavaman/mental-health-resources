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
            Object.entries(this.props.questions).map((data) => {
              let index = data[0];
              let question = data[1];
              return <div className='test-question'>
                <p className='test-question-title'>{index + ". " + question.title}</p>
                <div className='test-question-options'>{
                  <p class></p>
                }</div>
                {
                  index === "0"
                    ? null
                    : null
                }
              </div>;
            })
          }</div>
        }
      </div>
    );
  }
}