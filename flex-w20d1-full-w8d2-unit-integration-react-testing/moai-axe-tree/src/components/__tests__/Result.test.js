import React from 'react';
import { render, getByTestId, fireEvent, prettyDOM } from '@testing-library/react';
import Result from '../Result';

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('can display results from an API call', () => {
  // render the Result component
  const {getByTestId, findByText, container, debug} = render(<Result status="Waiting" />);

  // console.log(prettyDOM(container));
  // debug();

  // find the fetch high scores button
  const fetchHighScores = getByTestId('high-scores');

  // click on the fetch high scores button
  fireEvent.click(fetchHighScores);

  // look for "Alice" in the DOM
  return findByText('Alice', { exact: false });
});
