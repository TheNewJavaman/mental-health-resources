import React from 'react';
import '../style/Card.css';
import { Link } from 'react-router-dom';

export default class Card extends React.Component {
  render() {
    return (
      <div className='card' style={this.props.style}>
        <p className='card-title'>{this.props.data.title}</p>
        <div className='card-spacer'></div>
        <div className='card-text'>{
          this.props.data.text.map((text) => {
            return <p key={text}>{text}</p>
          })
        }</div>
        {
          this.props.hasLink
            ? <div className='card-spacer'></div>
            : null
        }
        <div className='card-link'>{
          this.props.internalLink
            ? <Link to={this.props.data.linkLink}>
              <b>{this.props.data.linkText}</b>
            </Link>
            : <a href={this.props.data.linkLink}>
              <b>{this.props.data.linkText}</b>
            </a>
        }</div>
      </div>
    );
  }
}