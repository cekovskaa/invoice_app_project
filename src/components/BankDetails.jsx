// src/Components/BankDetails.jsx
import React, { useState } from 'react';
import '../styles/BankDetails.css';

const BankDetails = () => {
  const [bankName, setBankName] = useState('');
  const [accountName, setAccountName] = useState(''); // Added state for Account Name
  const [accountNumber, setAccountNumber] = useState('');

  return (
    <div className="bank-details">
      <h3>Bank Details</h3>
      
      <div className="form-group">
        <label htmlFor="bank-name">Bank Name:</label>
        <input
          type="text"
          id="bank-name"
          className="form-control"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          placeholder="Enter Bank Name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="account-name">Bank Account Name:</label> {/* Added label for account name */}
        <input
          type="text"
          id="account-name"
          className="form-control"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
          placeholder="Enter Account Name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="account-number">Bank Account Number:</label>
        <input
          type="text"
          id="account-number"
          className="form-control"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          placeholder="Enter Account Number"
        />
      </div>
    </div>
  );
};

export default BankDetails;
