import React, { useState, useEffect } from 'react';
//Componentes material mui
import {
    Grid,
    Typography,
    Button,
    TablePagination,
    TableContainer,
    TableFooter,
    Table,
    Modal,
    TableHead,
    TableBody,
    Tooltip,
    IconButton,
    ButtonGroup,
    Checkbox,
    OutlinedInput,
    InputAdornment
} from '@mui/material';

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import LinearProgress from '@mui/material/LinearProgress';
import { useGlobalState } from './../../Utilidades/useGlobalState';

import Switch from '@mui/material/Switch';
//Iconos
import AddIcon from '@mui/icons-material/Add';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

//Estilos
import { InicioStyle } from './InicioStyle';

import PropTypes from 'prop-types';
import { useTheme,styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import dayjs from 'dayjs';
import {  useToasts } from 'react-toast-notifications';

import {
    obtenertStock,
    obtenertMovimiento,
    crearEncuestaNueva
} from './InicioFunciones';
import AgregarMovimiento from '../Modals/AgregarMovimiento';

const convertirFecha=(fecha)=> {
    // Dividir el string en sus componentes (año, mes y día)
    const [year, month, day] = fecha.split('/');
  
    // Formar el nuevo string con el formato DD/MM/YYYY
    const nuevaFecha = `${day}/${month}/${year}`;
  
    return nuevaFecha;
  }




function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
          style={InicioStyle.Pagination}
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
          style={InicioStyle.Pagination}
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
     
      </Box>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };


export default function Inicio() {

    const [listaRegistros, setListaRegistros] = useState([]);
    const [listaRegistrosFiltrados, setListaRegistrosFiltrados] = useState([]);
    const [listaRegistrosFiltradosEncuestas, setListaRegistrosFiltradosEncuestas] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [page, setPage] = useState(0);
    const [pageEncuesta, setPageEncuesta] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(7);
    const [rowsPerPageEncuesta, setRowsPerPageEncuesta] = useState(7);
    const [listaEncuestas,setListaEncuestas]=useState([{id:1,fecha:'2023/07/21',nombre:'iphone',tipo:'Venta',cantidad:20,nuevoStock:10}])
    const [editRegistroEncuesta,setEditRegistroEncuesta]=useState({titulo:'',pregunta:'',grupo:[],departamentos:[],carrerasProfesores:[],carrerasEstudiantes:[],vence:dayjs(),creador:'',cantidad:'',activo:'',opciones:[{id:1,descripcion:'',cuenta:'3'},{id:2,descripcion:'',cuenta:'2'}]})
    const [isEncuesta,setIsEncuesta]=useState(false)
    const [validar,setValidar]=useState(null)
    const [loading,setLoading]=useState(false)
    const { langReducer,autReducer,dispatch } = useGlobalState();
    const [openQuiz,setOpenQuiz]=useState(false)
    const { addToast } = useToasts();
  
    useEffect(() => {
        setLoading(true)
        obtenertStock(setListaRegistros,setLoading)
        obtenertMovimiento(setListaEncuestas,setLoading)
    }, []);
   

    const handleCloseEncuesta = () => {setValidar(false);setOpenQuiz(false)};


    
   const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - listaRegistros.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangePageEncuesta = (event, newPage) => {
    setPageEncuesta(newPage);
  };
  

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangeRowsPerPageEncuesta = (event) => {
    setRowsPerPageEncuesta(parseInt(event.target.value, 10));
    setPageEncuesta(0);
  }; 

    useEffect(() => {

        const filtrado = listaRegistros.filter((item) => item.nombre.toLowerCase().includes(busqueda.toLowerCase()) || item.descripcion.toLowerCase().includes(busqueda.toLowerCase()))

        const filtrado2=filtrado.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        if(filtrado.length>4){
            setListaRegistrosFiltrados(filtrado2);
        }else{
            setListaRegistrosFiltrados(filtrado);
        }

        const filtradoEncuestas = listaEncuestas.filter((item) => item.nombre.toLowerCase().includes(busqueda.toLowerCase()) || item.tipo.toLowerCase().includes(busqueda.toLowerCase()))
        const filtrado2Encuesta=filtradoEncuestas.slice(pageEncuesta * rowsPerPageEncuesta, pageEncuesta * rowsPerPageEncuesta + rowsPerPageEncuesta)
        if(filtradoEncuestas.length>4){
            setListaRegistrosFiltradosEncuestas(filtrado2Encuesta);
        }else{
            setListaRegistrosFiltradosEncuestas(filtradoEncuestas);
        }            
    
    }, [busqueda, listaRegistros,page,pageEncuesta,rowsPerPage,rowsPerPageEncuesta,listaEncuestas]);


    //CONENT-- HANDLES DEL ADMINISTRADOR DE CONTENIDO



    const handleCreateQuiz=()=>{
    setEditRegistroEncuesta({nombre:'Apple iPhone 13',tipo:'',cantidad:0,id:''})
        setOpenQuiz(true)
    }



    const handleCrearEncuesta=async()=>{
        setValidar(true)
                    

        if(Number.isInteger(parseInt(editRegistroEncuesta.cantidad))&&editRegistroEncuesta.cantidad.trim()&&editRegistroEncuesta.nombre.trim()&&editRegistroEncuesta.tipo.trim()){
            setLoading(true)
            handleCloseEncuesta()
            const response=await crearEncuestaNueva(editRegistroEncuesta,setListaEncuestas,setListaRegistros,setLoading);
            if (response){
                addToast(langReducer.Etiquetas.Mensajes.Et_creado, { appearance: 'success' }); 
            }else{
                addToast('error', { appearance: 'error' });
            }
            ;
        }
      
        
    }    
    

 


    return (
        <>
   
        { loading?
        <Box sx={{ width: '100%'  }}>
            <LinearProgress />
        </Box>         :null}    
        <AgregarMovimiento  handleCloseEncuesta={handleCloseEncuesta} handleCrearEncuesta={handleCrearEncuesta}  openQuiz={openQuiz} setOpenQuiz={setOpenQuiz} editRegistroEncuesta={editRegistroEncuesta} validar={validar} setEditRegistroEncuesta={setEditRegistroEncuesta} ></AgregarMovimiento>
        <Grid container style={InicioStyle.GridConteinerStyle}>
         
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography variant='h2'>
                    Control de stock
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} style={{ justifyContent: 'flex-end' }}>
                    <OutlinedInput  sx={{ m: 1, '& fieldset': { borderRadius: '50px' }, height: 40 }} 
                        id="outlined-adornment-search"
                        placeholder={langReducer.Etiquetas.General.Et_tbnBusqueda}
                        startAdornment={
                            <InputAdornment position="start" sx={{ ml: 0.5 }}>
                                
                                <SearchIcon  />
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton sx={{ mr: 0.5, border: '2px solid #000000', height: 24, width: 24 }}
                                    aria-label="search areas"
                                    onClick={() => { setBusqueda(''); }}
                                    edge="end"
                                >
                                    <CloseIcon fontSize='small' style={{ color: '#000000' }} />
                                </IconButton>
                            </InputAdornment>
                        }
                        value={busqueda}
                        onChange={(e) => { setBusqueda(e.target.value); }}
                    />
                {
                      !isEncuesta ? null 
                    
                    : <Button color="primary"
                        
                        style={InicioStyle.ButtonStyle}
                        startIcon={<AddIcon fontSize='normal' />}
                        onClick={handleCreateQuiz}>
                        Agregar movimiento
                    </Button>
                }
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={()=>{setIsEncuesta(false)}} sx={{fontSize:'15px',fontWeight:'500',lineHeight:'20px',backgroundColor:isEncuesta?'white':'#082478',color:isEncuesta?'black':'white',border:'1px solid #79747E !important',borderRight:'none !important','&:hover': {backgroundColor:isEncuesta?'white':'#082478',opacity:'0.8'}}}>STOCK</Button>
                    <Button onClick={()=>{setIsEncuesta(true)}} sx={{fontSize:'15px',fontWeight:'500',lineHeight:'20px',backgroundColor:isEncuesta?'#082478':'white',color:isEncuesta?'white':'black',border:'1px solid #79747E !important','&:hover': {backgroundColor:isEncuesta?'#082478':'white',opacity:'0.8'}}}>MOVIMIENTO DE STOCK</Button>
             </ButtonGroup>
            </Grid>
            {
                isEncuesta?  <Grid item xs={12}>
                <TableContainer component={Grid}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
       
                                <TableCell width='12%'>{<Typography variant='button'>Fecha</Typography>}</TableCell>
                                <TableCell width='20%'>{<Typography variant='button'>Nombre del Producto</Typography>}</TableCell>
                                <TableCell width='18%'>{<Typography variant='button'>Tipo de movimiento</Typography>}</TableCell>
                                <TableCell width='14%' >{<Typography variant='button'>Cantidad</Typography>}</TableCell>
                                <TableCell width='14%'>{<Typography variant='button'>Nuevo Total en Stock</Typography>}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listaRegistrosFiltradosEncuestas.length > 0 ? listaRegistrosFiltradosEncuestas.map(function (registro) {
                                return (
                                    <TableRow
                                        key={registro._id}
                                        /*onClick={(event) => handleRowClick(event, registro.id)}*/
                                                                          >
                   
                                        <TableCell width='12%'>
                                            <Typography variant="caption">
                                                {registro.date}
                                            </Typography>
                                        </TableCell>
                                      
                                        <TableCell width='20%'>
                                            <Typography variant="caption">
                                                                    {registro.nombre}             </Typography>
                                        </TableCell>
                                        <TableCell width='18%'>
                                           {registro.tipo}
                                        </TableCell>
                                   
                                        <TableCell width='14%'>
                                            <Typography variant="caption">
                                                {registro.cantidad}
                                            </Typography>
                                        </TableCell>
                                        <TableCell width='14%'>
                                            <Typography variant="caption">
                                                {registro.nuevoStock}
                                            </Typography>
                                        </TableCell>
                                      
                                    </TableRow>
                                )
                            }) : (<TableRow>
                                <TableCell colSpan={6}>{langReducer.Etiquetas.General.Et_tblTableEmty}</TableCell>
                            </TableRow>)}
                        </TableBody>
                        <TableFooter 
>
                                <TableRow 
                                >
                                    <TablePagination
                                  
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={12}
                                    count={listaEncuestas.length}
                                    rowsPerPage={rowsPerPageEncuesta}
                                    page={pageEncuesta}
                                    labelRowsPerPage={langReducer.Etiquetas.General.Et_tblItems}
                                    SelectProps={{
                                        inputProps: {
                                        'aria-label': 'rows per page',
                                        
                                        },
                                        native: true,
                                        
                                    }}
                                    onPageChange={handleChangePageEncuesta}
                                    onRowsPerPageChange={handleChangeRowsPerPageEncuesta}
                                    ActionsComponent={TablePaginationActions}
                                    />
                                </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
        
            </Grid>   :
        
            <Grid item xs={12}>
                <TableContainer component={Grid}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
   
                                <TableCell width='23%'>{<Typography variant='button'>Nombre del producto</Typography>}</TableCell>
                                {/*<TableCell width='15%'>{<Typography variant='button'>{langReducer.EtiquetasComponente.Home.Et_tblModulo}</Typography>}</TableCell>*/}
                                <TableCell width='20%'>{<Typography variant='button'>Descripción</Typography>}</TableCell>
                                <TableCell width='20%'>{<Typography variant='button'>Cantidad de Stock</Typography>}</TableCell>
                                {/* <TableCell width='13%'>{<Typography variant='button'>{langReducer.Etiquetas.Inicio.Et_campo_cuatro}</Typography>}</TableCell> */}
                                <TableCell width='20%' >{<Typography variant='button'>Precio</Typography>}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listaRegistrosFiltrados.length > 0 ? listaRegistrosFiltrados.map(function (registro) {
                                return (
                                    <TableRow
                                        key={registro._id}
                                                                      >
    
                             
                                        <TableCell width='23%'>
                                            <Typography variant="caption">
                                                {registro.nombre}
                                            </Typography>
                                        </TableCell>
                                     
                                        <TableCell width='20%'>
                                            <Typography variant="caption">
                                            { registro.descripcion }  
                                            </Typography>
                                        </TableCell>
                                        <TableCell width='20%'>
                                          {registro.stock}
                                        </TableCell>
                                      
                                        <TableCell width='20%'>
                                            <Typography variant="caption">
                                                {registro.precio}
                                            </Typography>
                                        </TableCell>
                         
                                       
                                       
                                    </TableRow>
                                )
                            }) : (<TableRow>
                                <TableCell colSpan={6}>{langReducer.Etiquetas.General.Et_tblTableEmty}</TableCell>
                            </TableRow>)}
                        </TableBody>
                        <TableFooter 
>
                                <TableRow 
                                >
                                    <TablePagination
                                  
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={12}
                                    count={listaRegistros.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    labelRowsPerPage={langReducer.Etiquetas.General.Et_tblItems}
                                    SelectProps={{
                                        inputProps: {
                                        'aria-label': 'rows per page',
                                        
                                        },
                                        native: true,
                                        
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                    />
                                </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
        
            </Grid>    }
        </Grid>
     
        </>
    );
}