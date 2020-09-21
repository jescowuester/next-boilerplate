import React from 'react';
import { render, fireEvent } from 'test-utils';

import { Default } from './radio.stories';

test('receives change events', async () => {
  const { getByLabelText, getByTestId } = render(<Default />);
  const firstRadio: any = getByLabelText(/one/i);

  expect(firstRadio.checked).toBeFalsy();

  const firstLabel = getByTestId('radio-1');
  fireEvent.click(firstLabel);

  expect(firstRadio.checked).toBeTruthy();
});
