const data = [
  {
    id: 1,
    name: 'Alice',
    points: 15
  },
  {
    id: 2,
    name: 'Bob',
    points: 10
  },
  {
    id: 3,
    name: 'Carol',
    points: 5
  },
];

export default {
  defaults: { baseUrl: '' },
  get: jest.fn((url) => {
    if (url === '/high-scores') {
      return Promise.resolve({
        status: 200,
        data: data
      });
    }
  })
};
