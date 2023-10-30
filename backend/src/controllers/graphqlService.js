const { request } = require("graphql-request");

const userInfo = async (req, res, next) => {
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

    console.log("Usuario obtenido: ", data.users);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { userInfo };



