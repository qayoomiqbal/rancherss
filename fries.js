import { useState } from "react";
import { Card, Row } from "react-bootstrap";

function Fries() {
  const [data, setData] = useState([
    { id: 1, name: "Rancheese", pth: require("./fries1.png") },
    { id: 2, name: "Fries", pth: require("./fries2.png") },
    { id: 3, name: "Frizza", pth: require("./fries3.png") },
  ]);
  return (
    <Row style={{ justifyContent: "space-around", alignItems: "center" }}>
            {data.map(e => {
                return (
                    <Card style={{ width: '23rem', border: 'none', backgroundColor: 'black', color: 'white' }} key={e.id}>
                        <Card.Img variant="top" src={e.pth} />
                        <Card.Body>
                            <Card.Title>{e.name}</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small>Rs: 2000</small>
                        </Card.Footer>
                    </Card>
                )
            })}
        </Row>
  );
}

export default Fries;
