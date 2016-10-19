import React from 'react';
import '../styles/Error.css';

export const Error = ({msg}) => (
  <div className="Error">
    Something went wrong. Error message: {msg}. Please refresh to try again.
  </div>
);