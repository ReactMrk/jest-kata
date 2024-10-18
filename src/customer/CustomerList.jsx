import { useEffect, useContext } from 'react';
import { CustomerContext } from './CustomerContext';
import Alert from './Alert';
import useAlert from './hooks/useAlert';

const CustomerList = ({ setHomeAlertText, setHomeAlertVisible }) => {
  const { customers } = useContext(CustomerContext);
  const displayAlert = useAlert();

  const showHomeAlert = (timeout, text)=> {
    setHomeAlertText(text);
    setHomeAlertVisible(true);
    setTimeout(() => {
      setHomeAlertVisible(false);
    }, timeout);
  };

  useEffect(() => {
    showHomeAlert(3000, "Welcome to the Client List")
    return ()=> {
      showHomeAlert(3000, "Goodbye")
    }
  }, []);

  return (
    <>
      <Alert visible={displayAlert} text={"New client has been added"}/>
      <ul className="customer-list">
        {
          customers.map(customer => {
            return (
              <li key={customer.email}>
                <strong>{customer.name}</strong><br/>
                <span>Email: {customer.email}</span><br/>
                <span>Phone: {customer.phone}</span><br/>
                <span>Address: {customer.address}</span><br/>
              </li>
            )
          })
        }
      </ul>
    </>
  );
};

export default CustomerList;