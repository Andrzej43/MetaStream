// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MetaStream title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MetaStream/i);
    expect(titleElement).toBeInTheDocument();
});
