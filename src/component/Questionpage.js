import React, { useState } from 'react';
import "../styles/QuestionStyle.css";
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Col, Row } from 'react-bootstrap';

function Questionpage() {
    const location = useLocation();
    const { question } = location.state || {}; // Extract the passed state
    const [lang, setLang] = useState(""); // To track the selected language
    const [boilerplate, setBoilerplate] = useState(""); // To track the boilerplate code

    if (!question) {
        return <div>No Question Selected</div>;
    }

    // Handle language selection
    const handleLanguageChange = (e) => {
        const selectedLang = e.target.value;
        setLang(selectedLang);
        setBoilerplate(question.boilerplate[selectedLang] || ""); // Update boilerplate based on selected language
    };

    return (
        <section className="question_page">
            <Header />
            <Container>     
            <Row className="q-container d-flex justify-content-center align-items-start">
                <Col lg={6}
                    className="questions_detail mb-3 mt-3"
                    style={{ color: "white" }}
                >
                    <div>
                        <h4 style={{ textTransform: "none" }}>{question.title}</h4>
                        <p style={{ color: "#868686" }}>Difficulty: {question.difficulty}</p>
                        <div className="border_div"></div>
                        <p>
                            <strong>Description:</strong> {question.description}
                        </p>
                        <div>
                            <h5>Test Cases:</h5>
                            {question.testCases.map((testCase, index) => (
                                <div key={index} style={{ marginBottom: "10px" }}>
                                    <p style={{ marginBottom: "0px" }}>
                                        <strong>Input:</strong> {testCase.input}
                                    </p>
                                    <p style={{ marginBottom: "0px" }}>
                                        <strong>Output:</strong> {testCase.output}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
                <Col lg={6} className="compiler p-0">
                  <div>
                  <Navbar bg="dark" data-bs-theme="dark"
                  style={{
                    width: "100%", // Ensures the navbar takes up the full width of the column
                }}
                  >
                  <Container>
                      <Nav className="me-auto">
                          <Nav.Link href="#">Run</Nav.Link>
                          <Nav.Link href="#">Stop</Nav.Link>
                      </Nav>
                      <Nav className="ms-auto">
                          <div
                              style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "10px",
                              }}
                          >
                              <span className='select_language'>
                                  Select Language..
                              </span>
                              <select
                                  className="form-select select_box select_boxi"
                                  aria-label="Default select example"
                                  onChange={handleLanguageChange} // Update boilerplate on language change
                                  style={{
                                      cursor: "pointer",
                                      width: "150px",
                                  }}
                              >
                                  <option value="">Select</option>
                                  <option value="cpp">C++</option>
                                  <option value="python">Python</option>
                                  <option value="java">Java</option>
                                  <option value="javascript">JavaScript</option>
                              </select>
                          </div>
                      </Nav>
                  </Container>
              </Navbar>
              <div className="boilerplate" style={{ backgroundColor: "#2d2d2d", padding: "1px" }}>
              <textarea
                  value={boilerplate}
                  onChange={(e) => setBoilerplate(e.target.value)} // Updates the boilerplate state when the user edits the text
                  style={{
                      width: "100%",
                      minHeight: "300px",
                      color:  "var(--yellow)" , // Fetched text in yellow, user-typed in white
                      backgroundColor: "#2d2d2d", // Background color remains the same
                      padding: "6px",
                      fontFamily: "monospace",
                      fontSize: "14px",
                      resize: "vertical",
                      caretColor: "white", // Caret (cursor) color remains white
                  }}
              />
          </div>
              <div className='d-flex justify-content-center' style={{padding:"15px"}}>
              <Button className='btn btn-primary'
              style={{
                backgroundColor: "#3d5800",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#228B22")} // Slightly lighter green
              onMouseOut={(e) => (e.target.style.backgroundColor = "#3d5800")}
              
              >Submit</Button>
               </div>
          </div>

                </Col>
            </Row>
            </Container>
        </section>
    );
}

export default Questionpage;
