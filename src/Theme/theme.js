import { createTheme } from '@mui/material/styles';
//const scrollBackGroudColor = '#f6f8fb';
const myTheme = createTheme({
    palette: {
        primary: {
            main: '#082478',
        },
        secondary: {
            main: '#082478',
        },
        accent: {
            main: '#1EE3CF',
        },
        gray: {
            main: '#D2DADA',
        },
        success: {
            main: '#CCF2E7',
        },
        background: {
            paper: '#FAFAFA',
        },
        divider: '#D2DADA', 
    },
    components: {
        /*MuiCssBaseline: {
            styleOverrides: {
                body: {
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        width: 10,
                        backgroundColor: scrollBackGroudColor,
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 8,
                        backgroundColor: "#6b6b6b",
                        minHeight: 24,
                        border: "2px solid " + scrollBackGroudColor,
                    },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                        backgroundColor: "#959595",
                    },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                        backgroundColor: "#959595",
                    },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#959595",
                    },
                    "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                        backgroundColor: scrollBackGroudColor,
                    }
                }
            }
        },*/
        MuiAppBar: {
            styleOverrides: {
                root: {
                    zIndex: 15,
                   /* backgroundColor: '#D1F0F4'*/
                    /*borderBottom: "solid #3FC1FA 5px"*/
                },
            },
            defaultProps: {
                position: 'relative',
                color: 'secondary',
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: '40px !important'
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '100px',
                    textTransform: 'none',
                    height: '40px',
                    minWidth: '155px'
                },
                /*outlined: {
                    fontWeight: '600',
                },*/
            },
            defaultProps: {
                variant: 'contained',
                color: 'primary',
            },
        },
        MuiButtonGroup:{
            styleOverrides: {
                root: {
                    boxShadow:'none'
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    height: '36px',
                    width: '36px',
                },
            },
        },
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    width: '100%',
                    margin: 0,
                    marginBottom: 20
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: '0px',
                    padding: '4px 8px', // Establece el padding deseado para las celdas
                },
                head: {
                    /*borderBottom: '1px solid rgba(0, 0, 0, 0.12)',*/
                    backgroundColor: '#F6F8FB',
                    color: '#3F425D',
                    fontWeight: 'bold',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    height: '56px !important',
                    '&:hover': {
                        backgroundColor: '#F1F9F9'
                    },
                },
                head: {
                    height: '43px !important',
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#243453',
                    fontWeight: 400,
                    '&.Mui-focused': {
                        fontWeight: 600,
                    },
                },
            },
        },
        MuiGrid: {
            styleOverrides: {
                item: {
                    padding: '12px',
                    alignItems: 'center',
                    display: 'flex'
                },
                container: {
                    backgroundColor: 'transparent',
                    margin: '0 auto',
                    padding: '0 auto',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    width: '100%',
                    maxWidth: 'none', 
                    borderRadius: '20px',
                    backgroundColor: '#F9F9F9'
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: '16px 28px 4px',
                },
                avatar: {
                    backgroundColor : 'transparent !important',
                    marginRight : '8px',
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '8px 16px',
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    width: '100%',
                    backgroundColor: 'currentColor', // Cambiar a tu color deseado
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    minWidth: '100px',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    background: '#fff'
                },
            },
        },
    },
    typography: {
        fontFamily: 'Montserrat', 
        color:'#000002',
        h1: {
            fontSize: '64px',
            fontWeight: 700,
            letterSpacing: '-1.5px',
            lineHeight: '92px',
            color:'#000002'
        },
        h2: {
            fontSize: '36px',
            fontWeight: 700,
            letterSpacing: '-1px',
            lineHeight: '60px',
            color:'#000002'
        },
        h3: {
            fontSize: '24px',
            fontWeight: 700,
            letterSpacing: '0px',
            lineHeight: '48px',
            color:'#000002'
        },
        h4: {
            fontSize: '20px',
            fontWeight: 700,
            letterSpacing: '0.25px',
            lineHeight: '30px',
            color:'#000002'
        },
        h5: {
            fontSize: '1rem',
            fontWeight: 600,
            letterSpacing: '0em',
            lineHeight: 1.334,
            color:'#000002'
        },
        h6: {
            fontSize: '0.875rem',
            fontWeight: 600,
            letterSpacing: '0.0075em',
            lineHeight: 1.6,
            color:'#000002'
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 400,
            letterSpacing: '0.00938em',
            lineHeight: 1.75,
            color:'#000002'
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: '400 !important',
            letterSpacing: '0.00714em',
            lineHeight: 1.57,
            color:'#000002'
        },
        body1: {
            fontSize: '17px',
            fontWeight: 400,
            lineHeight: '25px',
            color:'#000002'
        },
        body2: {
            fontSize: '0.938rem',
            fontWeight: 400,
            letterSpacing: '0.01071em',
            lineHeight: '20px',
            color:'#000002'
        },
        button: {
            fontSize: '15px',
            fontWeight: 600,
            lineHeight: '20px',
            textTransform: 'none',
            color:'#000002'
        },
        caption: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            color:'#000002'
        },
        overline: {
            fontSize: '0.625rem',
            fontWeight: 500,
            letterSpacing: '0.08333em',
            lineHeight: 2.66,
            textTransform: 'uppercase',
            color:'#000002'
        },
    },
});

export default myTheme;