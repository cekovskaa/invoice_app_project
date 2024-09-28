import React from 'react';
import '../styles/InvoiceTable.css';

function InvoiceTable({ invoiceInfo, handleItemChange, handleItemDone, handleItemEdit, handleItemRemove, handleAddItem, currencies, setInvoiceInfo }) {

  const calculateSubtotal = () => {
    return invoiceInfo.items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
  };

  const calculateTax = () => {
    return invoiceInfo.items.reduce(
      (acc, item) => acc + (item.quantity * item.price * item.tax) / 100,
      0
    );
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  return (
    <div className="row mt-4">
      <div className="col-12">
        <h4>Invoice Table</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>QTY/HRS</th>
              <th>Unit Price/Rate</th>
              <th>Tax (%)</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {invoiceInfo.items.map((item, index) => (
              <tr key={index}>
                <td>
                  {item.isDone ? (
                    <div className="item-name-wrapper">
                      <span className="item-name">{item.name}</span>
                      <div className="item-description">{item.description}</div>
                    </div>
                  ) : (
                    <div className="item-edit">
                      <input
                        type="text"
                        className="form-control item-name"
                        placeholder="Item name"
                        value={item.name}
                        onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                      />
                      {item.showErrors && !item.name && (
                        <div className="text-danger">This field is required</div>
                      )}
                      <input
                        type="text"
                        className="form-control item-description"
                        placeholder="Item description"
                        value={item.description}
                        onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                      />
                      {item.showErrors && !item.description && (
                        <div className="text-danger">This field is required</div>
                      )}
                    </div>
                  )}
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="0"
                    value={item.quantity === 0 ? '' : item.quantity}
                    onChange={(e) =>
                      handleItemChange(index, 'quantity', Number(e.target.value))
                    }
                    disabled={item.isDone} // Disable input when item is done
                  />
                  {item.showErrors && item.quantity <= 0 && (
                    <div className="text-danger">This field is required</div>
                  )}
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="0"
                    value={item.price === 0 ? '' : item.price}
                    onChange={(e) =>
                      handleItemChange(index, 'price', Number(e.target.value))
                    }
                    disabled={item.isDone} // Disable input when item is done
                  />
                  {item.showErrors && item.price <= 0 && (
                    <div className="text-danger">This field is required</div>
                  )}
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="0"
                    value={item.tax === 0 ? '' : item.tax}
                    onChange={(e) =>
                      handleItemChange(index, 'tax', Number(e.target.value))
                    }
                    disabled={item.isDone} // Disable input when item is done
                  />
                </td>
                <td>
                  {invoiceInfo.currency}{(item.quantity * item.price).toFixed(2)}
                </td>
                <td>
                  {item.isDone ? (
                    <>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleItemEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger ml-2"
                        onClick={() => handleItemRemove(index)}
                      >
                        Remove
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-success"
                        onClick={() => handleItemDone(index)}
                      >
                        Done
                      </button>

                      {/* Add the Remove button below the Done button */}
                      <button
                        className="btn btn-danger mt-2"
                        onClick={() => handleItemRemove(index)}
                      >
                        Remove
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="7">
                <button
                  className="btn btn-secondary btn-block"
                  onClick={handleAddItem}
                >
                  + Add new invoice item
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Currency selector and invoice summary */}
      <div className="col-12 col-md-4 offset-md-8">
        <div className="summary-box">
          <h5>Invoice Summary</h5>
          <div className="currency-selector">
            <label htmlFor="currency">Currency</label>
            <select
              id="currency"
              className="form-control"
              value={invoiceInfo.currency}
              onChange={(e) =>
                setInvoiceInfo({ ...invoiceInfo, currency: e.target.value })
              }
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.symbol}>
                  {currency.symbol} ({currency.code})
                </option>
              ))}
            </select>
          </div>
          <div className="invoice-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>{invoiceInfo.currency}{calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax:</span>
              <span>{invoiceInfo.currency}{calculateTax().toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>{invoiceInfo.currency}{calculateTotal().toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceTable;