import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './Components/AppBar';
import PdfViewer from './Components/PdfViewer';
import Container from 'react-bootstrap/Container';

// pdf assets must be in the pdf reader component folder
import Resume from './Assets/Resume/Shane_Warga_Resume.pdf'
import DAQProject from './Assets/Projects/CSE_521S__Wireless_Sensor_Networks_Final_Paper.pdf'

function App() {
    return(
        <div className='App'>
            <AppBar />
            <PdfViewer pdf={Resume}/> 
            <PdfViewer pdf={DAQProject}/>
        </div>
    );
}

export default App;
