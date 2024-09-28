import React from 'react';
import '../styles/UserDetails.css';

const UserDetails = ({ details, setUser, countries }) => {
    
    return (
        <div className ="user-details-container">
          <h4>Your Details</h4>
          <label className="small-label">From:</label>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="First Name"
            value={details.firstName}
            onChange={(e) => setUser({ ...details, firstName: e.target.value })}
          />
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Last Name"
            value={details.lastName}
            onChange={(e) => setUser({ ...details, lastName: e.target.value })}
          />
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Seller/Company"
            value={details.profession}
            onChange={(e) => setUser({ ...details, profession: e.target.value })}
          />
          <select
            className="form-control mt-2"
            value={details.country}
            onChange={(e) => setUser({ ...details, country: e.target.value })}
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
            onChange={(e) => setUser({ ...details, address: e.target.value })}
          />
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Email"
            value={details.email}
            onChange={(e) => setUser({ ...details, email: e.target.value })}
          />
        </div>
      );



};
export default UserDetails;