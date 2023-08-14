import React from "react";
import Box from '@mui/material/Box';
import { useGlobalState } from './../../Utilidades/useGlobalState';

import {
    Grid,
    Typography,
    Button,
    Modal,
    TextField,
    Autocomplete,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

import { InicioStyle } from './../Inicio/InicioStyle';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '78%',
    bgcolor: 'background.paper',
    
    boxShadow: 24,
    borderRadius:'10px',
    p: 2,
    '@media (max-width: 568px)': {
        top: '70%',
      },
  };
const styleModal = {
    overflow:'scroll'
  };


export default function AgregarMovimiento({openQuiz,setOpenQuiz,editRegistroEncuesta,validar,setEditRegistroEncuesta,handleCloseEncuesta,handleCrearEncuesta}) {
    const { langReducer } = useGlobalState();


    return (
        <>
            <div>
            <Modal
          open={openQuiz}
          onClose={()=>setOpenQuiz(false)}
          sx={styleModal}
        >
          <Box sx={style}>
            <Grid container>
            <Grid item xs={12} sm={12} md={12}>
            <Typography id="modal-modal-title" variant="h4" component="h4">
              Agregar movimiento
            </Typography></Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Autocomplete 
                    
                    disablePortal
                    id="combo-box-demo"
                    options={[
                        'Apple iPhone 13','Samsung Galaxy S22','Google Pixel 6','Apple iPad Pro','Amazon Echo Dot'
                    
                    
                ]}
                    value={ editRegistroEncuesta.nombre}
                    onChange={(event, newItem) => setEditRegistroEncuesta({ ...editRegistroEncuesta, ...{nombre:newItem} })}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option}
                    style={{ width: 500 }}
                    renderInput={(params) => (
                        <TextField 
                        required 
                        error={validar&&!editRegistroEncuesta.nombre.length>0?true:false}
                        helperText={validar&&!editRegistroEncuesta.nombre.length>0?langReducer.Etiquetas.Mensajes.Et_obligatorio:null}
                        {...params} 
                        label='Nombre del producto'  />
                        )}
                />
                 </Grid>      
                <Grid item xs={12} sm={6} md={6}>
                <Autocomplete 
                    
                    disablePortal
                    id="combo-box-demo"
                    options={[
                        'Venta',
                    'Correcion','Ingreso Stock'
                    
                    
                ]}
                    value={ editRegistroEncuesta.tipo}
                    onChange={(event, newItem) => setEditRegistroEncuesta({ ...editRegistroEncuesta, ...{tipo:newItem } })}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option}
                    style={{ width: 500 }}
                    renderInput={(params) => (
                        <TextField 
                        required 
                        error={validar&&!editRegistroEncuesta.tipo.length>0?true:false}
                        helperText={validar&&!editRegistroEncuesta.tipo.length>0?langReducer.Etiquetas.Mensajes.Et_obligatorio:null}
                        {...params} 
                        label='Tipo de movimiento' />
                        )}
                />
        </Grid>
       
               
    
            <Grid item xs={12} sm={6} md={4}>
            <TextField
                error={validar&&!Number.isInteger(parseInt(editRegistroEncuesta.cantidad))?true:false}
                helperText={validar&&!Number.isInteger(parseInt(editRegistroEncuesta.cantidad))?'Debe ingresar un entero':null}
                fullWidth
                required
                name="Cantidad"
                variant="outlined"
                label="Cantidad"
                value={editRegistroEncuesta.cantidad}
                onChange={(e) => setEditRegistroEncuesta({ ...editRegistroEncuesta, cantidad: e.target.value })}
            /></Grid>  
                         
 
       

            <Grid item xs={12} sm={12} md={12} sx={InicioStyle.ButtonGrid}>

                            <Button color="primary" variant="outlined"
                                        
                                        style={InicioStyle.ButtonStyle}
                                        onClick={handleCloseEncuesta}>
                                            {langReducer.Etiquetas.General.Et_tbnCancelar}
                                    </Button>
                      
                                        
                                   

                                                                         
                                    <Button color="primary"
                                        
                                        style={InicioStyle.ButtonStyle}
                                        startIcon={<AddIcon fontSize='normal' />}
                                        onClick={()=>handleCrearEncuesta()}>
                                            {langReducer.Etiquetas.General.Et_tbnGuardar}
                                        
                                    </Button>
                    </Grid>

        </Grid>
          </Box>
        </Modal>
        </div>   
        
        </>
      );
    }