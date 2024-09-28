import React from 'react';
import '../styles/ClientDetails.css';

const ClientDetails = ({ details, setClient, countries }) => {
    return (
        <div className ="client-details-container">
          <h4>Client's Details</h4>
          <label className="small-label">To:</label>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="First Name"
            value={details.firstName}
            onChange={(e) => setClient({ ...details, firstName: e.target.value })}
          />
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Last Name"
            value={details.lastName}
            onChange={(e) => setClient({ ...details, lastName: e.target.value })}
          />
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Client/Company"
            value={details.profession}
            onChange={(e) => setClient({ ...details, profession: e.target.value })}
          />
          <select
            className="form-control mt-2"
            value={details.country}
            onChange={(e) => setClient({ ...details, country: e.target.value })}
          >
            <option value="Country" disabled>
              Country
            </option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Address(Street, City)"
            value={details.address}
            onChange={(e) => setClient({ ...details, address: e.target.value })}
          />
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Email"
            value={details.email}
            onChange={(e) => setClient({ ...details, email: e.target.value })}
          />
        </div>
      );
};

export default ClientDetails;