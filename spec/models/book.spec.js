var Book = require('../../models/book.js');

test('has a message', () => {
  var book = new Book({ title: 'some title' } );
  expect(book.title).toEqual('some title');
});