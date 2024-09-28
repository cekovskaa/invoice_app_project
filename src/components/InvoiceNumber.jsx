// components/InvoiceNumber.jsx
import React from 'react';
import '../styles/InvoiceNumber.css';

const InvoiceNumber = ({ number }) => {
  return (
    <div className="invoice-number-container">
      <h2>Invoice Number: {number}</h2>
    </div>
  );
};

export default InvoiceNumber;
