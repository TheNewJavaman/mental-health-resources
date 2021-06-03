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
            return <p>{text}</p>
          })
        }</div>
        <div className='card-spacer'></div>
        <div className='card-link'>{
          this.props.data.link.map((link) => {
            return <a href={"tel:" + link}><b>{link}</b></a>
          })
        }</div>
      </div>
    );
  }
}