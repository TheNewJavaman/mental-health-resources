import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <p className='footer-text'><Link to='/' className='link'>Get support.</Link></p>
      </div>
    );
  }
}