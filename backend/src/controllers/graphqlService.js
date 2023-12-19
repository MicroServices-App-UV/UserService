const { request } = require("graphql-request");
const { addUser, getUsuario } = require("./controllers");
const {setCachedUserId} = require("../cache")

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

      
      const idd = data.users._id
      setCachedUserId(idd)
      console.log("Usuario obtenido: ", data.users);
      res.json(data.users._id)

      
  } catch (error) {
    console.error(error);
  }
};


module.exports = { userInfo };



