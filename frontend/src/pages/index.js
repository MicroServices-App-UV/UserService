import React, { useEffect, useState } from 'react';
import { Avatar, Button, Container, TextField, Typography, Paper, Box, Grid, Divider } from '@mui/material';
import Lock from '@mui/icons-material/Lock';
import { getUsuario, updateUsuario } from '../functions/fetchFunctions'


const App = () => {
  const [userData, setUserData] = useState({
    id_usuario: '',
    first_name: '',
    last_name: '',
    username: '',
    image: '', // Puedes reemplazar esto con la URL de la imagen del usuario
    email: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const loadUserData = async () => {
    try {
      const data = await getUsuario(1); // Cambia el ID del usuario según tus necesidades
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
    <Container maxWidth="md" sx={{width:'50%'}}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Paper elevation={3} style={{ paddingLeft: '50px',paddingRight:'50px',paddingTop:'20px',paddingBottom:'20px', borderRadius: '20px' }}>
          <Typography variant="h5" mb={3} style={{ fontWeight:'bold', marginTop: '30px', alignItems:'center',display:'flex',justifyContent:'center' }}>
            Editar Perfil
          </Typography>
          <Divider />
          <Avatar sx={{ width: 100, height: 100, margin: '0 auto', marginTop: '10px' }}>
            <img src={userData.image || '/user-icon.png'} alt="User Icon" />
          </Avatar>
          {isEditing && (
            <Box textAlign="center" marginTop={1}>
              <Typography variant="subtitle2">Cambiar foto</Typography>
            </Box>
          )}

          <Grid container spacing={3} mt={1}>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Nombre(s)</Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                disabled={!isEditing}
                value={userData.first_name}
                onChange={(e) => setUserData({ ...userData, first_name: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Apellidos</Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                disabled={!isEditing}
                value={userData.last_name}
                onChange={(e) => setUserData({ ...userData, last_name: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Correo electrónico</Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                disabled={true}
                value={userData.email}
                InputProps={{
                  startAdornment: (
                    <Lock style={{ color: 'gray' }} />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Nombre de usuario</Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                disabled={!isEditing}
                value={userData.username}
                onChange={(e) => setUserData({ ...userData, username: e.target.value })}
              />
            </Grid>
          </Grid>

          <Box display="flex" justifyContent="flex-end" marginTop={10}>
            {isEditing ? (
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: 'white', borderColor: 'orange', color: 'orange' }}
                  onClick={handleUpdate}
                >
                  Guardar
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ backgroundColor: 'orange', color: 'black', marginLeft: '10px' }}
                  onClick={() => setIsEditing(false)}
                >
                  Cancelar
                </Button>
              </div>
            ) : (
              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: 'white', borderColor: 'orange', color: 'orange' }}
                onClick={handleEdit}
              >
                Editar
              </Button>
            )}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default App;

