import React from 'react';
import '../style/Card.css';

export default class Card extends React.Component {
  render() {
    return (
      <div className='card'>
        <p className='card-title'>{this.props.data.title}</p>
        <div className='card-spacer'></div>
        <div className='card-text'>{
          this.props.data.text.map((text) => {
            return <p key={text}>{text}</p>
          })
        }</div>
        <div className='card-spacer'></div>
        <div className='card-link'>{
          <a href={this.props.data.linkLink}>
            <b>{this.props.data.linkText}</b>
          </a>
        }</div>
      </div>
    );
  }
}