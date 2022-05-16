import React, { FunctionComponent, useCallback, useState } from 'react';
import { Document, Page, pdfjs, DocumentProps} from 'react-pdf';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container/';
import Row from 'react-bootstrap/Row/';

interface PdfViewerProps{pdf:'*.pdf'}
type LoadCallback = Required<DocumentProps>['onLoadSuccess']

const PdfViewer:FunctionComponent<PdfViewerProps> = (props) => {
        
    pdfjs.GlobalWorkerOptions.workerSrc =
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    
    const [numPages, setNumPages] = useState<number>(1);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const pdf = props.pdf;
    console.log(pdf);
    /*To Prevent right click on screen*/
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });
    
    /*When document gets loaded successfully*/

    const onLoad: LoadCallback = useCallback((pdf) =>{
        setNumPages(pdf.numPages); 
        setPageNumber(1);
    }, [])

    function changePage(offset:number) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
            <>
            <Container>
                <Row className="justify-content-md-center">
                    <Document file={pdf} onLoadSuccess={onLoad}>
                        <Page pageNumber={pageNumber} />
                    </Document> 
                <div className="pagec">
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </div>
                <div className="buttonc">
                    <Button 
                        variant="secondary" 
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                        className="Pre"
                    >
                    Previous
                    </Button>
                    <Button
                        variant="secondary" 
                        disabled={pageNumber >= numPages}
                        onClick={nextPage} 
                    >
                    Next
                    </Button>
                </div>
                </Row>
            </Container>  
            </>
        );
}
export default PdfViewer;
