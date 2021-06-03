import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <p className='header-text'><Link to='/' className='link'>Mental Health Resources</Link></p>
      </div>
    );
  }
}