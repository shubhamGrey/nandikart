import Footer from './Footer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const { getByText } = render(<Footer />);
    const copyrightElement = getByText(/Copyright © Deloitte Development LLC 2023. All Rights Reserved./i);
    expect(copyrightElement).toBeInTheDocument();
  });
});