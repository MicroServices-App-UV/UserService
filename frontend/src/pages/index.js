import React, { useEffect, useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { getUsuario, updateUsuario } from '../functions/fetchFunctions'

const App = () => {
  const [userData, setUserData] = useState({
    id_usuario: '',
    first_name: '',
    last_name: '',
    username: '',
    image: '',
    email: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const loadUserData = async () => {
    try {
      const data = await getUsuario(1);
      console.log("XD",data)
      setUserData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      await updateUsuario(userData.id_usuario, userData);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

   const handleEdit = () => {
       setIsEditing(true); 
   };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" gutterBottom>
        Detalles del Usuario
      </Typography>
      <form>
        <TextField
          label="Nombre"
          fullWidth
          disabled={!isEditing}
          value={userData.first_name}
          onChange={(e) => setUserData({ ...userData, first_name: e.target.value })}
        />
        <TextField
          label="Apellido"
          fullWidth
          disabled={!isEditing}
          value={userData.last_name}
          onChange={(e) => setUserData({ ...userData, last_name: e.target.value })}
        />
        <TextField
          label="Nombre de Usuario"
          fullWidth
          disabled={!isEditing}
          value={userData.username}
          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
        />
        <TextField
          label="Imagen"
          fullWidth
          disabled={!isEditing}
          value={userData.image}
          onChange={(e) => setUserData({ ...userData, image: e.target.value })}
        />
        <TextField
          label="Email"
          fullWidth
          disabled={!isEditing}
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <Box mt={2}>
          {isEditing ? (
            <div>
              <Button variant="contained" color="primary" onClick={handleUpdate}>
                Guardar Cambios
              </Button>
              <Button variant="contained" color="secondary" onClick={() => setIsEditing(false)}>
                Cancelar
              </Button>
            </div>
          ) : (
            <Button variant="contained" color="primary" onClick={handleEdit}>
              Editar
            </Button>
          )}
        </Box>
      </form>
    </Container>
  );
};

export default App;

