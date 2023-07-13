import React from 'react';
import { TextField, Button } from '@mui/material';

const Formulario = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar los datos del formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Campo 1" variant="outlined" fullWidth margin="normal" />
      <TextField label="Campo 2" variant="outlined" fullWidth margin="normal" />
      <TextField label="Campo 3" variant="outlined" fullWidth margin="normal" />
      <TextField label="Campo 4" variant="outlined" fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
};

export default Formulario;
