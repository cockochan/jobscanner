import React, {useState} from 'react';
import './App.css';
import keyword_extractor from 'keyword-extractor'
import {Form,Col, Container,Button,Navbar} from 'react-bootstrap'
function App() {
  const [jobText, setJobText]=useState('')



const extraction_result = keyword_extractor.extract(jobText,{
                                                                language:"english",
                                                                remove_digits: true,
                                                                return_changed_case:true,
                                                                remove_duplicates: true
 
                                                           });
                                                       
  return (
    <Container fluid>
        <h6 className='dark'>by Constantin Dimitrenco</h6>
        <Navbar  bg="primary" variant="dark"><Col>
  <Navbar.Brand href="#home"><h1 className="hugeTitle">Job desciption scanner® </h1>
   
    </Navbar.Brand>
    
     </Col>
</Navbar>
<Container className='mt-5'>
<h4 className="text-center dark">can be used for any keywords now only cv's</h4>
     <p className="text-center"> Wish you find a better job useing JOBSCANNER®</p>
      <Form><Col>
      
      <Form.Row className='ml-0 mt-5'><textarea type='textarea' style={{minHeight:'350px',width:'100%'}}  onChange={e=>setJobText(e.target.value)} placeholder='paste job description here'></textarea>  </Form.Row>
      </Col>
      </Form><div style={{justifyItems:'space-around'}}>
      <h4 className="dark mt-2 ml-3">Extracted keywords:</h4>
{
  extraction_result.map(el=><Button variant="outline-primary" className='mt-3 ml-3'>{el}</Button>)
}</div></Container>
 </Container>
  );
}

export default App;
