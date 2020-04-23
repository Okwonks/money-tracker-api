module.exports = {
  attributes: {
    id:     { type:'string', required:true, isUUID:true, unique:true },
    name:   { type:'string', required:true },
    email:  { type:'string', required:true, unique:true },
    status: { type:'string', isIn:['active', 'inactive'] },
  },
};

