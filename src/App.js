import React, {useState} from 'react';
import './App.css';
import keyword_extractor from 'keyword-extractor'
import {FormControl,Navbar,Form,Col, Container} from 'react-bootstrap'
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
 I am extractor i do extract
      </Navbar>
      <Form><Col>
      <Form.Row><FormControl type='textarea' onChange={e=>setJobText(e.target.value)}></FormControl>  </Form.Row>
      <div></div>
      </Col>
      </Form><ul>
{
  extraction_result.map(el=><li key={el}>{el}</li>)
}
</ul> </Container>
  );
}

export default App;
