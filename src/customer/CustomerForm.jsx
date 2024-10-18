import { useReducer, useContext } from 'react';
import { CustomerContext } from './CustomerContext';

const initalFormValue = {
    name: '',
    email: '',
    phone: '',
    address: '',
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME': {
      return {
        ...state,
        name: action.value
      }
    }
    case 'SET_EMAIL': {
      return {
        ...state,
        email: action.value
      }
    }
    case 'SET_PHONE': {
      return {
        ...state,
        phone: action.value
      }
    }
    case 'SET_ADDRESS': {
      return {
        ...state,
        address: action.value
      }
    }
    case 'CLEAR' : {
      return initalFormValue;
    }
  }
};

const CustomerForm = () => {
  const [form, dispatchForm] = useReducer(reducer, initalFormValue);
  const { setCustomers } = useContext(CustomerContext);
  const submitEmployee = () => {
    setCustomers(prev => [
      ...prev,
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        address: form.address
      }
    ]);
    dispatchForm({ type: 'CLEAR' });
  };
  return (
    <div className="form">
      <input type="text" placeholder="Name" onChange={value => dispatchForm({ type: 'SET_NAME', value: value.target.value})} value={form.name} />
      <input type="email" placeholder="Email" onChange={value => dispatchForm({ type: 'SET_EMAIL', value: value.target.value})} value={form.email} />
      <input type="tel" placeholder="Phone" onChange={value => dispatchForm({ type: 'SET_PHONE', value: value.target.value})} value={form.phone} />
      <input type="text" placeholder="Address" onChange={value => dispatchForm({ type: 'SET_ADDRESS', value: value.target.value})} value={form.address} />
      <button onClick={() => submitEmployee()}>Add customer</button>
      <button onClick={() => dispatchForm({ type: 'CLEAR' })}>Clear</button>
    </div>
  )
}

export default CustomerForm