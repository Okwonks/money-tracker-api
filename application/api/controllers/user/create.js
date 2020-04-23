module.exports = {
  inputs: {
    email: { type:'string', isEmail:true },
    name:  { type:'string', required:true },
  },

  exits: {
    badRequest: { statusCode:400 },
  },

  fn: async function(inputs, exits) {
    // TODO: add functionality here
  },
};

