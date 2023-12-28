const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/Registration").then(()  => {
    console.log(`connection sucessful`);
}).catch((e) => {
    console.log(`no connection`);
})