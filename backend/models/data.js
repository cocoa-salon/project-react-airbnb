const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
    {
      name: String,
      location: String,
      type: String,
      num: Number
    }
  );
  
  // export the new Schema so we could modify it using Node.js
  // module.exports = mongoose.model("Inn", DataSchema);
  const Inn = mongoose.model("Inn", DataSchema);


  const HostSchema = new Schema(
    { 
      name : String,
      tier: Number
    }
  )

  const HostInfo = mongoose.model("HostInfo", HostSchema);

  // module.exports = HostInfo; 

  exports.Inn = Inn;
  exports.HostInfo = HostInfo;
