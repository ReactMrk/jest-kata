
import React from 'react';
import { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import { CustomerContext } from './CustomerContext';
import useAlert from './hooks/useAlert';
import CustomerList from './CustomerList';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn()
}));

jest.mock('./hooks/useAlert', () => jest.fn());

const setHomeAlertText = jest.fn();
const setHomeAlertVisible = jest.fn();
const renderComponent = () => render(<CustomerList setHomeAlertText={setHomeAlertText} setHomeAlertVisible={setHomeAlertVisible}/>);
describe('CustomerList', () => {
  beforeEach(() => {
    useContext.mockReturnValue({
      customers: [
        {
          name: 'Bob',
          email: 'bob@sky.uk',
          phone: '77777777777',
          address: 'Watermark'
        }
      ]
    });
    useAlert.mockReturnValue(true);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('Client added alert', () => {
    it('should render an alert with text Welcome to the Client List when displayAlert from hook is true', () => {
      renderComponent();
      expect(useContext).toHaveBeenCalledWith(CustomerContext);
      expect(useAlert).toHaveBeenCalled();
      expect(screen.getByText('New client has been added')).toBeInTheDocument();
    });

    it('should not render an alert with text Welcome to the Client List when displayAlert from hook is false', () => {
      useAlert.mockReturnValue(false);
      renderComponent();
      expect(screen.queryByText('New client has been added')).not.toBeInTheDocument();
    });
  });

  describe('Display client list', () => {
    it('should display context clients',() => {
      renderComponent();
      expect(screen.getByText('Bob')).toBeInTheDocument();
      expect(screen.getByText(/bob@sky.uk/i)).toBeInTheDocument();
      expect(screen.getByText(/77777777777/i)).toBeInTheDocument();
      expect(screen.getByText(/Watermark/i)).toBeInTheDocument();
    })
  });
});