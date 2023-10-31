const { request } = require("graphql-request");
const { addUser, getUsuario } = require("./controllers");

const userInfo = async (req, res) => {
    try {
      const query = `
        query GetUser($id: String!) {
          users(id: $id) {
            _id
            firstName
            lastName
            username
            email
          }
        }
      `;

      const variables = {
        id: req.params.id_usuario,
      };

      const endpoint = "http://localhost:3000/graphql";

      const data = await request(endpoint, query, variables);
    

      await addUser(req, res, data.users);

//    const test = {
//      _id: '653891b999ad54d62eb40182',
//      firstName: 'Daniel',
//      lastName: 'Cisneros',
//      username: 'danielcisneros',
//      email: 'danielcis@hotmail.com'
//    }
//    console.log("aa",test._id)
//
//    req.session.idUser = test._id
      req.session.idUser = data.users._id
//    
//    const idd = test._id
      const idd = data.users._id
      console.log("Usuario obtenido: ", data.users);
      res.json({idd})
  } catch (error) {
    console.error(error);
  }
};


module.exports = { userInfo };



