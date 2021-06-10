import React from 'react';
import '../style/Test.css';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: null,
      scores: {}
    };
    this.onChangeValue = this.onChangeValue.bind(this);
    this.score = this.score.bind(this);
    this.reset = this.reset.bind(this);
  }

  onChangeValue(event) {
    let levelRegex = /-.*/;
    let index = event.target.name;
    let id = event.target.id;
    let pos = id.search(levelRegex)
    let level = id.substring(pos + 1, pos + 2);
    let scores = this.state.scores;
    scores[index] = level;
    this.setState({
      ...this.state,
      scores: scores
    });
    console.log(scores);
  }

  score() {
    let values = Object.values(this.state.scores)
    if (values.length === Object.keys(this.props.questions).length) {
      let sum = 0;
      values.forEach((value) => {
        sum += parseInt(value);
      });
      this.setState({
        ...this.state,
        score: sum
      });
    } else {
      alert('Please fill in every field.');
    }
  }

  reset() {
    this.setState({
      score: null,
      scores: {}
    });
  }

  render() {
    return (
      <div className='test'>
        { this.state.score
          ? <div className='test-results'>
            <div className='test-result'>
              <p className='test-result-title'>Your result: {this.state.score}</p>
              {
                this.props.results.map((result) => {
                  console.log(result);
                  return <div className='test-result-possibility'>
                    <div className='test-result-range'><p>{result.min + ' - ' + result.max}</p></div>
                    <p className='test-result-result'>{result.result}</p>
                  </div>
                })
              }
            </div>
            <div className='test-button-container'>
              <button className='test-button' onClick={this.reset}><p>Reset</p></button>
            </div>
          </div>
          : <div className='test-questions'>
            {
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
                        <input className='test-question-radio' type='radio' id={index + '-' + level} name={index} onChange={this.onChangeValue}></input>
                        <label className='test-question-statement' htmlFor={index + '-' + level}>{statement}</label>
                      </div>
                    })
                  }</div>
                </div>;
              })
            }
            <div className='test-button-container'>
              <button className='test-button' onClick={this.score}><p>Submit</p></button>
            </div>
          </div>
        }
      </div>
    );
  }
}