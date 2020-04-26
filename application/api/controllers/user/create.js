module.exports = {
  inputs: {
    email: { type:'string', isEmail:true },
    name:  { type:'string', required:true },
  },

  exits: {
    badRequest: { statusCode:400 },
  },

  fn: async function(inputs, exits) {
    const { email, name } = inputs;
    try {
      await sails
        .getDatastore()
        .transaction(async db => {
          await User
            .create({
              email,
              name: normaliseName(name),
            })
            .usingConnection(db);
        });
    } catch(err) {
      // TODO: filter out duplicates and send exits.success
      return exits.badRequest(err);
    }
  },
};

function normaliseName(name) {
  return name
    .split(/\s+/)
    .filter(it => it)
    .map(name => name[0].toUpperCase() + name.substring(1).toLowerCase())
    .join(' ');
}
