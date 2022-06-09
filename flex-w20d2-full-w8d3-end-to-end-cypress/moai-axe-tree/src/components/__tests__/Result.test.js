import React from 'react';
import { render, getByTestId, fireEvent, findByText, prettyDOM } from '@testing-library/react';
import Result from '../Result';

describe('tests for the Result component', () => {
  let container;
  beforeEach(() => {
    const fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting'
    };
    
    container = render(<Result status={fakeState.status} />).container;  
    // const { container, getByTestId, findByText, fireEvent } = render(<Result status={fakeState.status} />)
    // getByTestId('result_footer');
  });

  test('shows appropriate message when the status is "Waiting"', () => {
    expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
  });
  test('can display results from an API call', () => {
    const fetchHighScoresButton = getByTestId(container, 'high-scores');
    fireEvent.click(fetchHighScoresButton);

    return findByText(container, 'Alice', { exact: false});
  })
});

