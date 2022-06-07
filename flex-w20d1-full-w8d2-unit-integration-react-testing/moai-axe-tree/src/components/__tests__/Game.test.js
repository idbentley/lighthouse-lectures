import React from 'react';
import Game from '../Game';
import { render, fireEvent } from '@testing-library/react';

describe('tests for the Game component', () => {

  test('it can toggle the cheating state by clicking on the robot head icon', () => {
    const {container, getByTestId} = render(<Game />);
    // console.log(something);

    // getByTestId(container, 'robot-head')
    // find the robot head icon
    const robotHeadIcon = getByTestId('robot-head');

    // click on the robot head icon
    fireEvent.click(robotHeadIcon);
    
    // check if the robotHeadIcon has the class "cheating"
    expect(robotHeadIcon).toHaveClass('cheating');
    
    // click on the robot head again
    fireEvent.click(robotHeadIcon);
    
    // check if the robotHeadIcon does not have the class "cheating"
    expect(robotHeadIcon).not.toHaveClass('cheating');
  });

});
