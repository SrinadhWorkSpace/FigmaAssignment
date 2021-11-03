import { render, screen } from '@testing-library/react';
import App from './App';
import BannerRightSection from './Components/BannerRightSection';

test('renders Hello and Welcome Text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello and Welcome!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Get Started Button Text', () => {
  render(<BannerRightSection />);
  const linkElement = screen.getByText(/Get Started/i);
  expect(linkElement).toBeInTheDocument();
});