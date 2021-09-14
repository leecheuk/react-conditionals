import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { RxIf } from "..";

afterEach(cleanup)

describe('RxIf', () => {
  it('should hide content if condition is false', () => {
    render(<RxIf condition={false}>
              <span>Text</span>
            </RxIf>);

    const textEl = screen.queryByText('Text');

    expect(textEl).toBeNull();
  });

  it('should show content if condition is true', () => {
    render(<RxIf condition={true}>
              <span>Text</span>
            </RxIf>);

    const textEl = screen.getByText(/Text/i);
    expect(textEl.textContent).toBe('Text');
  });
});