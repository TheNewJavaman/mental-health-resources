import React from 'react';
import '../style/Main.css';

export default class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <div className={this.props.columns === 1 ? 'main-title-single' : 'main-title-double'}>
          <p className='main-title'>{this.props.title}</p>
        </div>
        <hr></hr>
        {this.props.contents}
      </div>
    );
  }
}