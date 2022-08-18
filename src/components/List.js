import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import data from "../data";
function List() {
  return (
    <Container>
      <Row>
        {data.map((card) => {
          return (
            <Col  lg={3} md={4} sm={6}>
              <Card card={card}> </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default List;
