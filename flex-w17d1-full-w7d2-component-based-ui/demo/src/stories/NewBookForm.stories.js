import { within, userEvent } from '@storybook/testing-library';
import NewBookForm from '../NewBookForm';

export default {
  title: 'New Book Form',
  component: NewBookForm,
};


export const UnpopulatedBookForm = () => <NewBookForm />

export const NoTitlePopForm = () => <NewBookForm />

NoTitlePopForm.play = async ({ canvasElement }) => {
  // Starts querying the component from its root element

  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('author'), 'Ian Bentley', {
    delay: 100,
  });

  await userEvent.click(canvas.getByRole('button'));
};
