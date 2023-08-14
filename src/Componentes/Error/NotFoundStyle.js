import backgroundText from '../../Activos/bg.jpg';

export const NotFoundStyle = {
	TypographyH1: {
		margin: '0px',
		fontWeight: 900,
		background: 'url("' + backgroundText + '") no-repeat',
		'-webkit-background-clip': 'text',
		'-webkit-text-fill-color': 'transparent',
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	},
	TypographyH2: {
		color: '#000',
		textTransform: 'uppercase',
		marginTop: 0
	},
	TypographyH3: {
		color: '#000',
		fontWeight: 400,
		marginBottom: '20px',
		marginTop: 0
	},
    Div: {
        marginTop: '9rem',
        height: '100%',
        width: '100%',
        display: 'inline-grid',
        justifyContent: 'center',
        justifyItems: 'center',
    }
};