
import Book from '../Book';

export default {
  title: 'Book',
  component: Book,
};


export const SampleBook = () => <Book title="foo" author="bar" />

export const BookSansAuthor = () => <Book title="lord" />

export const BookSansTitle = () => <Book author="Ian" />