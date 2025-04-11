import * as React from 'react';
import { Dialog, DialogContent, IconButton, Button, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

export default function CustomDialogLog({ open, onClose }) {
    const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/login');
    onClose(); 
  };

  const handleRegisterClick = () => {
    navigate('/register');
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose} sx={{ zIndex: 9999 }}>
      <DialogContent
        sx={{
          position: 'relative',
          p: 4,
          backgroundColor: '#1e1f1f',
          color: 'white',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '500px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          overflowY: 'auto',
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'text-gray-600',
            fontSize: '1.5rem',
            '&:hover': {
              color: 'red',
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        <div className="text-black">
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 4 }}>
            Zaloguj się lub Zarejestruj
          </Typography>
          
          <Button onClick={handleLoginClick} variant="contained" color="primary" sx={{ width: '100%', mb: 2 }}>
            Zaloguj
          </Button>

          <Button onClick={handleRegisterClick} variant="outlined" color="secondary" sx={{ width: '100%' }}>
            Zarejestruj
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
