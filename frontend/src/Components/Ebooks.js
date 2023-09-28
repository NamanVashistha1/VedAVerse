import React from 'react';
import Button from 'react-bootstrap/Button';


const Ebooks = ({ pdfUrl,pdf1,pdf2 }) => {
    const but={
        marginTop:'10px',
        marginLeft:'16rem'
        
    }
  return (
    <>
    <div className='row col-12'>
      <img
      className='col-6'
        src={pdf1}
        alt="PDF Thumbnail"
        width="250"
        height="300"
        style={{display:'flex', justifyContent:'center'}}
      />
      <img
      className='col-6'
        src={pdf2}
        alt="PDF Thumbnail"
        width="250"
        height="300"
        style={{display:'flex', justifyContent:'center'}}
      />
      </div>
      <div>
      <Button variant="primary" href={pdfUrl} target="_blank" style={but}>
        View PDF
      </Button>
    </div>
    </>
  );
};

export default Ebooks;

  