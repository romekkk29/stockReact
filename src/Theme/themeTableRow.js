import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TextField from "@mui/material/TextField";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

import {
    ColorPrimaryTextos,
    ColorHoverFila,
    ColorFondoHeader,
    ColorFondoFooter,
    ColorFondoFilaEven,
} from "./PaletaColores";

export const StyledTableCellClass = styled(TableCell)(
    ({
        theme,
        Align = "left",
        PaddingHead = "8px 16px",
        PaddingBody = "6px 16px",
        Cursor = "",
        BorderLeft = "S",
        BorderRight = "S",
    }) => ({
        textAlign: Align,
        color: ColorPrimaryTextos,
        border: "solid #E9EBEE 1px",
        borderLeft: BorderLeft === "S" ? "solid #E9EBEE 1px" : "solid #E9EBEE 0px",
        borderRight: BorderRight === "S" ? "solid #E9EBEE 1px" : "solid #E9EBEE 0px",
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: ColorFondoHeader,
            color: ColorPrimaryTextos,
            padding: PaddingHead,
            cursor: Cursor === "" ? "default" : Cursor,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: "1rem",
            padding: PaddingBody,
            minHeight: "47px",
            cursor: Cursor === "" ? "default" : Cursor,
        },
        [`&.${tableCellClasses.footer}`]: {
            fontSize: "1rem",
            padding: PaddingBody,
            minHeight: "47px",
            backgroundColor: ColorFondoFooter,
            cursor: Cursor === "" ? "default" : Cursor,
            fontWeight: '500'
        },
    })
);

export const StyledTableRowHeaderClass = styled(TableRow)(({ theme }) => ({
    cursor: "default",
}));

export const StyledTableRowFooterClass = styled(TableRow)(({ theme }) => ({
    cursor: "default",
}));

export const StyledTableRowClass = styled(TableRow)(({ theme, AplicaHover = "N", Cursor = "", ColorFondo = "" }) => ({
    backgroundColor: ColorFondo === "" ? "initial" : ColorFondo,
    "&:nth-of-type(even)": {
        backgroundColor: ColorFondo === "" ? ColorFondoFilaEven : ColorFondo,
    },
    "&:hover": {
        backgroundColor: AplicaHover === "S" ? ColorHoverFila + " !important" : "none",
    },
    minHeight: "47px",
    cursor: Cursor === "" ? "default" : Cursor,
}));

export const StyledDatePicker = styled(TextField)(({ theme }) => ({
    "&.MuiInputBase-root": { padding: "8px 10px !important" },
}));
