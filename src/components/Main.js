import React from 'react';
import '../style/Main.css';

export default class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <div className="main-title">
          <p>{this.props.title}</p>
        </div>
        {this.props.contents}
      </div>
    );
  }
}