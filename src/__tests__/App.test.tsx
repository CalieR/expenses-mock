import { render, act, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  it('renders headline', () => {
    act(() => {
      render(<App />);
      const headline = screen.queryByTestId('headline')
      expect(headline).toBeDefined();
    });
  });
});
