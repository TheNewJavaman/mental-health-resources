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
            Object.entries(this.props.questions).map((data1) => {
              let index = data1[0];
              let question = data1[1];
              return <div key={'question-' + index} className='test-question'>
                <div className='test-question-index'><p>{index + '. '}</p></div>
                <p className='test-question-title'>{question.title}</p>
                <div className='test-question-options'>{
                  Object.entries(question.levels).map((data2) => {
                    let level = data2[0];
                    let statement = data2[1];
                    return <div key={'question-' + index + '-option-' + level} className='test-question-option'>
                      <input className='test-question-radio' type='radio' id={index + '-' + level} name={index}></input>
                      <label className='test-question-statement' htmlFor={index + '-' + level}>{statement}</label>
                    </div>
                  })
                }</div>
              </div>;
            })
          }</div>
        }
      </div>
    );
  }
}