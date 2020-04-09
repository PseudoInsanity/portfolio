import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from '@material-ui/core/DialogTitle';
import { Document, Page, pdfjs } from 'react-pdf';
import renderPdf from '../../img/CV.pdf';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


const PdfModal = ({ open, handleClose }) => {

    return (
        <Dialog
            open={open}
            aria-labelledby="form-dialog-title"
        >
            <Grid item container  justify="space-between" alignItems="center">
                <DialogTitle id="form-dialog-title">CV</DialogTitle>
                <IconButton style={{height: '20px', width: '20px', marginRight: '20px'}} onClick={handleClose}>
                    <CloseIcon/>
                </IconButton>
            </Grid>

            <Document
                file={renderPdf}
            >
                <Page pageNumber={1} />
            </Document>
        </Dialog>
    );
}

export default PdfModal;