import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from './Alert';
import useAlert from './hooks/useAlert';

jest.mock('./hooks/useAlert', () => jest.fn());

let visible;
const alertText = 'Alert text';
const renderComponent = () => render(<Alert alertText={alertText} />);

describe('Alert', () => {
  beforeEach(() => {
    useAlert.mockReturnValue(true);
    visible = true;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render text passed buy parameter when displayAlert parameter is true', () => {
    renderComponent();
    expect(useAlert).toHaveBeenCalledWith();
    expect(screen.getByText(alertText)).toBeInTheDocument();
  });

  it('should not render alert component when displayAlert parameter is false', () => {
    useAlert.mockReturnValue(false);
    visible = false;
    renderComponent();
    expect(useAlert).toHaveBeenCalledWith();
    expect(screen.queryByText(alertText)).not.toBeInTheDocument();
  });
});
