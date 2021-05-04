import React from 'react';
import '../style/Background.css';

export default class Background extends React.Component {
  render() {
    return (
      <div className='background'>
        {this.props.contents}
      </div>
    );
  }
}