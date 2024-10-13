// Example of ShippingAddressProvider setup
import React, { createContext, useState } from 'react';

export const ShippingAddressContext = createContext();

const ShippingAddressProvider = ({children}) => {
    const [shippingAddress, setShippingAddress] = useState("");

    // Example function to update shipping address
    const updateShippingAddress = (newAddress) => {
      setShippingAddress(newAddress);
    };
  

    return (
        <ShippingAddressContext.Provider  value={{ shippingAddress, updateShippingAddress }}>
            {children}
        </ShippingAddressContext.Provider>
    );
};

export default ShippingAddressProvider;