export const InicioStyle = {
    GridConteinerStyle: {
        width: '85%',
        paddingTop:'20px'
    },
    IconButtonStyle: {
        marginLeft: '10px',
        border: '2px solid'
    },
    ButtonStyle: {
        marginLeft: '10px',
        padding:'20px',
        boxShadow:'none',
       
    },
    BodyButtoms:{
        color:'#000000'
    },
    Pagination:{
        color:'#000002'
    },
    TextArea:{
        width:'100%',
        border:'1px solid #79747E',
        borderRadius:'5px',
        padding:'20px',
        maxWidth:'calc( 100% - 40px )',
        minWidth:'calc( 100% - 40px )',
        width:'calc( 100% - 40px )',
        textStyle: 'caption',
        fontFamily: 'Montserrat',
        fontStyle: 'regular',
        fontSize: '15px',
        lineHeight: '20px',
        lineHeight: '109%',
        align: 'left',
        verticalAlign: 'center',
        paragraphSpacing: '8px',
        maxHeight:'50px',
        maxHeight:'400px',
        outline:'#082478',
       
    },
    ButtonGrid:{
        display:'flex',
        justifyContent:'end',
        marginTop:'30px',
        marginBottom:'20px',
        '@media all and (max-width: 568px)': {
            flexDirection: 'column',
            gap:'20px'
          },
    }
};