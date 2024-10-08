import { useState } from "react";
import { Card, Row } from "react-bootstrap";

function Quickbite() {
  const [data, setData] = useState([
    { id: 1, name: "Waffle Fries", pth: require("./quick1.png") },
    { id: 2, name: "Chicken Pieces", pth: require("./quick2.png") },
    { id: 3, name: "Messy Wings", pth: require("./quick3.png") },
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

export default Quickbite;
