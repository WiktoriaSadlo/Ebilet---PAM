import * as React from 'react';
import { Dialog, DialogContent, IconButton, Button, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function CustomDialog({ open, onClose, selectedEvent }) {

  return (
    <Dialog open={open} onClose={onClose} sx={{ zIndex: 9999 }} >
      <DialogContent
        sx={{
          position: 'relative',
          p: 4,
          backgroundColor: '#1e1f1f',
          color: 'white',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '500px', // 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // 
          overflowY: 'auto',
        }}
      >
        {/* Ikona zamknięcia */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'text-gray-600', // text-gray-600
            fontSize: '1.5rem',
            '&:hover': {
              color: 'red', // hover:text-red-500
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Treść dialogu */}
        <div className="text-black">
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 4 }}>
            Kup bilet
          </Typography>
          {selectedEvent && (
            <>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {selectedEvent.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 4, color: 'gray' }}>
                {selectedEvent.city}, {selectedEvent.venue}
              </Typography>
              <Button onClick={addToCart} variant="contained" color="primary">
                Dodaj do koszyka
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}