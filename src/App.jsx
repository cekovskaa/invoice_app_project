import React, { useState } from 'react';
import UserDetails from './components/UserDetails';
import ClientDetails from './components/ClientDetails';
import LogoUploader from './components/LogoUploader';
import InvoiceDates from './components/InvoiceDates';
import InvoiceTable from './components/InvoiceTable';
import ConfirmModal from './components/ConfirmModal';
import BankDetails from './components/BankDetails';
import Notes from './components/Notes';
import './App.css'; 

function App() {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    profession: '', 
    country: 'Country',
    address: '',
    email: '',
  });

  const [clientDetails, setClientDetails] = useState({
    firstName: '',
    lastName: '',
    profession: '',
    country: 'Country',
    address: '',
    email: '',
  });

  const [logo, setLogo] = useState(null);

  const [invoiceInfo, setInvoiceInfo] = useState({
    items: [],
    currency: '$',
  });
  

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleItemChange = (index, field, value) => {
    const newItems = [...invoiceInfo.items];
    newItems[index][field] = value;
    setInvoiceInfo({ ...invoiceInfo, items: newItems });
  };

  const handleItemDone = (index) => {
    const newItems = [...invoiceInfo.items];
  
    if (!isItemValid(newItems[index])) {
      newItems[index].showErrors = true;
      setInvoiceInfo({ ...invoiceInfo, items: newItems });
    } else {
      newItems[index].isDone = true;
      setInvoiceInfo({ ...invoiceInfo, items: newItems });
    }
  };
  

  const handleItemEdit = (index) => {
    const newItems = [...invoiceInfo.items];
    newItems[index].isDone = false;
    setInvoiceInfo({ ...invoiceInfo, items: newItems });
  };

  const handleItemRemove = (index) => {

    setItemToDelete(index); 
    setShowConfirmModal(true);
  };

  const confirmDeleteItem = () => {
    if (itemToDelete !== null) {
      const newItems = invoiceInfo.items.filter((_, i) => i !== itemToDelete);
      setInvoiceInfo({ ...invoiceInfo, items: newItems });
      setItemToDelete(null); // Reset the itemToDelete after deletion
    }
    setShowConfirmModal(false); // Close the confirmation modal
  };

  const cancelDeleteItem = () => {
    setItemToDelete(null); // Reset the item to delete
    setShowConfirmModal(false); // Close the confirmation modal
  };
  

  const handleAddItem = () => {
    setInvoiceInfo({
      ...invoiceInfo,
      items: [
        ...invoiceInfo.items,
        { name: '', quantity: 0, price: 0, tax: 0, isDone: false },
      ],
    });
  };

  const isItemValid = (item) => {
    return (
      item.name !== '' &&
      item.description !== '' &&
      item.quantity > 0 &&
      item.price > 0
    );
  };

  const currencies = [
    { code: 'EUR', symbol: '€' },
    { code: 'USD', symbol: '$' },
    { code: 'GBP', symbol: '£' },
    { code: 'JPY', symbol: '¥' },
    { code: 'AUD', symbol: 'A$' },
    // Add more currencies here
  ];
  

  const europeanCountries = [
    "Austria", "Albania", "Belgium", "Bulgaria", "Bosnia and Hercegovina", "Croatia", "Cyprus", "Czech Republic",
    "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary",
    "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Montenegro",
    "Netherlands", "North Macedonia", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", 
    "Spain", "Sweden", "Serbia", "Turkey"
  ];
  


  return (
    <div className="invoice-editor">
      <div className="header">
      <div className="title-section">
          <h1>Invoice</h1>
        </div>
        <div className="logo-section">
          <LogoUploader logo={logo} setLogo={setLogo} /> 
        </div>
      </div>
      
      <div className="content">
        <div className="section">
          <UserDetails
            details={userDetails}
            setUser={setUserDetails}
            countries={europeanCountries}
          />
        </div>
        <div className="section">
          <ClientDetails
            details={clientDetails}
            setClient={setClientDetails}
            countries={europeanCountries}
          />
        </div>
      </div>

      <div className="section">
      <InvoiceDates
            
          />
        </div>
     
      <div className="section">

       <InvoiceTable
        invoiceInfo={invoiceInfo}
        handleItemChange={handleItemChange}
        handleItemDone={handleItemDone}
        handleItemEdit={handleItemEdit}
        handleItemRemove={handleItemRemove}
        handleAddItem={handleAddItem}
        currencies={currencies} // Pass the currencies array
        setInvoiceInfo={setInvoiceInfo} // To update invoiceInfo (currency selection)
        />

      </div>

     <ConfirmModal
        show={showConfirmModal}
        handleClose={cancelDeleteItem}
        handleConfirm={confirmDeleteItem}
      />
      
      
      <div className="section">
        <BankDetails /> 
        <Notes /> 
      </div>
      
      

    </div>
  );
}

export default App;
