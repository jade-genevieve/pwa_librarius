const axios = require('axios');

const callGoogle = async (isbn) => {

    const link ='https://www.googleapis.com/books/v1/volumes?q=isbn:'
    const authKey ='&key=AIzaSyDBKstfgRaGEnp-H2qZVttsVp3PvGROY6E'
    const requestLink = link + isbn + authKey

    try {
        const response = await axios.get(requestLink);
        const bookInfo = response.data.items[0].volumeInfo;
        console.log(response.data.items[0].volumeInfo);
        return bookInfo;
      } catch (error) {
        console.error(error);
      } 

};

module.exports = { callGoogle };