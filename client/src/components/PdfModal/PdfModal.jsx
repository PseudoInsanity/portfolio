import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from '@material-ui/core/DialogTitle';
import { Document, Page, pdfjs } from 'react-pdf';
import renderPdf from '../../img/CV.pdf';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";
import { useStyles } from './PdfModal.js';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


const PdfModal = ({ open, handleClose }) => {
    const classes = useStyles();

    return (
        <Dialog
            open={open}
            aria-labelledby="form-dialog-title"
        >
            <Grid item container  justify="space-between" alignItems="center">
                <DialogTitle id="form-dialog-title">CV</DialogTitle>
                
                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    href={renderPdf}
                >
                    Download
                </Button>

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