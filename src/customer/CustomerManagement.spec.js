import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import CustomerManagement from './CustomerManagement';

jest.mock('./CustomerForm', () => jest.fn());
jest.mock('./CustomerList', () => jest.fn());

const renderComponent = () => render(<CustomerManagement/>);

describe('Customer Management', (() => {

  beforeEach(() => {
    CustomerForm.mockImplementation(() => <div>Customer Form</div>);
    CustomerList.mockImplementation(() => <div>Customer List</div>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should not render Customer Form and Customer list when log out', async () => {
    renderComponent();
    userEvent.click(screen.getByRole('button', { name: 'Log out' }));
    await waitFor(() => {
      expect(screen.queryByText('Customer Form')).not.toBeInTheDocument();
      expect(screen.queryByText('Customer List')).not.toBeInTheDocument();
    });
  });

  it('should render Customer Form and Customer list when log in', () => {
    renderComponent();
    expect(screen.getByText('Customer Form')).toBeInTheDocument();
    expect(screen.getByText('Customer List')).toBeInTheDocument();
    expect(CustomerForm).toHaveBeenCalled();
    expect(CustomerList).toHaveBeenCalledWith(
      {
        setHomeAlertVisible: expect.any(Function),
        setHomeAlertText: expect.any(Function)
      },
      {}
    );
  });
}));