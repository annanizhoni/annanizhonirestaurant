import React from 'react';
import { render, screen } from '@testing-library/react';
import Price from './Price'; // Adjust the import path as needed
import { ProductType } from "@/types/types"; // Adjust the import path as needed

describe('Price Component', () => {
  it('renders and displays the initial price', () => {
    const mockProduct: ProductType = {
      id: '1',
      title: 'Test Product',
      img: 'test-img-url',
      price: 100,
      options: [
        { title: 'Option 1', additionalPrice: 10 },
        { title: 'Option 2', additionalPrice: 20 }
      ]
    };

    render(<Price product={mockProduct} />);
    const priceElement = screen.getByText(/\$110/i); // Updated to $110
    expect(priceElement).toBeInTheDocument();
  });
});
