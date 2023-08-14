import React from 'react';
import Typography from '@mui/material/Typography';

//Utilidades
import { useGlobalState } from '../../Utilidades/useGlobalState';

//Estilos
import { NotFoundStyle } from './NotFoundStyle';

export default function NotFound() {
	const { langReducer } = useGlobalState();
	return (
		<div style={NotFoundStyle.Div}>
			<Typography variant="h1" sx={NotFoundStyle.TypographyH1}>
				{langReducer.Etiquetas.NotFound.Et_TituloPrincipal}
			</Typography>
			<Typography variant="h4" sx={NotFoundStyle.TypographyH2}>
				{langReducer.Etiquetas.NotFound.Et_SubTitulo}
			</Typography>
			<Typography variant="subtitle" sx={NotFoundStyle.TypographyH3}>
				{langReducer.Etiquetas.NotFound.Et_Descripcion}
			</Typography>
		</div>
	);
}