const mongoose = require('mongoose');

async function connect() {
  try {
    // mongoose.connect('mongodb://127.0.0.1:27017/pb_database');
    mongoose.connect('mongodb+srv://phubinh:phubinh123@pbdatabase.4xzu6rg.mongodb.net/?retryWrites=true&w=majority');
    console.log('Kết nối database thành công^.^');
  } catch (error) {
    console.log('Kết nối database thất bại=.=');
  }
}

module.exports = { connect };
