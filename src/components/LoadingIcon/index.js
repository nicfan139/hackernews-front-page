import React from 'react';
import './index.scss';

const LoadingIcon = ({ message }) => {
  return (
    <div
      data-testid='loading-icon'
      className='loading-icon'
    >
      <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>&nbsp;&nbsp;
      { !message && 'Loading...' }
      { message && `${message}...` }
    </div>
  )
}

export default LoadingIcon;