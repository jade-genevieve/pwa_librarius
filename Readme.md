# Librarius

PWA to save and manage books.

  - Uses Google Books API to get book details by ISBN
  - Uses Mongoose and MongoDB to save books
  - Service workers cache book details to continue browsing offline

### Tech

* [axios] - Promise based HTTP client for the browser and node.js
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework

### Installation

1. Fork this repository
1. Clone your fork to your local machine
1. Install Node.js dependencies
    ```
    npm install
    ```
1. Install an ESLint plugin for your editor. For example: [linter-eslint](https://github.com/AtomLinter/linter-eslint) for Atom.
1. Install MongoDB
    ```
    brew tap mongodb/brew
    brew install mongodb-community@4.2
    ```
1. Start MongoDB
    ```
    brew services start mongodb-community@4.2
    ```

  [axios]: <http://axios.com>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
