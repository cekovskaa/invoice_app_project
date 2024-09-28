// src/components/InvoiceDates.jsx
import React, { useState } from 'react';
import '../styles/InvoiceDates.css'; 

const InvoiceDates = () => {
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split('T')[0]);
  const [dueDate, setDueDate] = useState('');

  return (
    <div className="invoice-dates">
      <div className="invoice-date">
        <label>Invoice Date:</label>
        <input type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />
      </div>
      <div className="due-date">
        <label>Due Date:</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </div>
    </div>
  );
};

export default InvoiceDates;