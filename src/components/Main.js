import React from 'react';
import '../style/Main.css';

export default class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        {this.props.contents}
      </div>
    );
  }
}