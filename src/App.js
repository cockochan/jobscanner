import React, {useState} from 'react';
import './App.css';
import keyword_extractor from 'keyword-extractor'
import {FormControl,Navbar,Form,Col, Container,ButtonGroup, Jumbotron,Button} from 'react-bootstrap'
function App() {
  const [jobText, setJobText]=useState('')



const extraction_result = keyword_extractor.extract(jobText,{
                                                                language:"english",
                                                                remove_digits: true,
                                                                return_changed_case:true,
                                                                remove_duplicates: true
 
                                                           });
                                                       
  return (
    <Container>
     <Navbar bg="light" expand="lg">
     <Jumbotron><h1>Job desciption scanner </h1>
     </Jumbotron>
      </Navbar>
      <Form><Col>
      <Form.Row><FormControl type='textarea' onChange={e=>setJobText(e.target.value)} placeholder='paste job description here'></FormControl>  </Form.Row>
      <div></div>
      </Col>
      </Form><div style={{justifyItems:'space-around'}}>
{
  extraction_result.map(el=><Button variant="outline-success" className='mt-3 ml-3'>{el}</Button>)
}</div>
 </Container>
  );
}

export default App;
