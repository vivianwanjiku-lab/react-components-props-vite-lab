import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders the correct child components', () => {
  render(<App />);
  
  // Check if Header component is rendered
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
  
  // Check if main content is rendered
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
});
