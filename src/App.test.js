import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './Components/Header';

test('renders learn react link', () => {
  render(<App />, <Header />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
