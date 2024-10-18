import { useState, useEffect, useContext } from 'react';
import { CustomerContext } from '../CustomerContext'

const useAlert = () => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const { customers } = useContext(CustomerContext);

  useEffect(() => {
    if (customers.length > 0) {
      setDisplayAlert(true);
      setTimeout(() => {
        setDisplayAlert(false);
      }, 2000);
    }
  }, [customers]);

  return displayAlert;
};

export default useAlert;