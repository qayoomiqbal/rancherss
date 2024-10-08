import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";

function Footer() {
    return (
        <div>
            <footer className="d-flex justify-content-center align-items-center flex-column mt-4">
                <Card style={{ backgroundColor: "black", width: "100%", maxWidth: "600px", margin: "0 auto" }}>
                    <Card.Body className='d-flex justify-content-center align-items-center flex-column'>
                        <img src={require("./beef1.png")} style={{ width: 100, height: 100 }} alt="Logo" />
                        <Card.Text style={{ color: 'white', fontWeight: "bold", textAlign: "center" }}>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: "100%", maxWidth: "600px", margin: "20px auto", padding: "20px" }}>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label visuallyHidden>Name</Form.Label>
                            <Form.Control className="mb-2" placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label visuallyHidden>Email</Form.Label>
                            <Form.Control className="mb-2" placeholder="Enter Your Email" />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label visuallyHidden>Message</Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>Message</InputGroup.Text>
                                <Form.Control as="textarea" placeholder="Enter Your Message" />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="formCheckbox" className="mb-2">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button type="submit" className="mb-2">Submit</Button>
                    </Form>
                </Card>
                <p style={{color:'white'}}>
                If you are looking for a mighty good time coupled with a mighty good meal, then giddyup and come on over to Ranchers

                    </p>            
                    </footer>
        </div>
    );
}

export default Footer;
