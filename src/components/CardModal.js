import { Modal, Carousel, Row, Col } from "react-bootstrap";
import { CgCardHearts } from "react-icons/cg";

function CardModal({ show, setShow, handleClose, card }) {
  const overview = card.overview.split(",");

  return (
    <div className="modal-wrap">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{card.name}</Modal.Title>
          <CgCardHearts className="modal-img"></CgCardHearts>
        </Modal.Header>
        <Modal.Body>
          <Carousel
            variant="dark"
            controls={true}
            touch={true}
            interval={null}
            slide={true}
            indicators={false}
          >
            <Carousel.Item>
              <ul>
                {overview.map((item) => {
                  return <li> {item.trim()} </li>;
                })}
              </ul>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-detail">
              <h2>công việc</h2>

                <Row>
                  <Col xs={6}>
                    <div className="left">
                        {card.work[0]}
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="right">
                        {card.work[1]}

                    </div>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="card-detail">
                <h2>tình yêu</h2>

                <Row>
                <Col xs={6}>
                    <div className="left">
                        {card.love[0]}
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="right">
                        {card.love[1]}

                    </div>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-detail">
                <h2>sức khỏe</h2>

                <Row>
                <Col xs={6}>
                    <div className="left">
                        {card.health[0]}
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="right">
                        {card.health[1]}

                    </div>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-detail">
                <h2>tài chính</h2>

                <Row>
                <Col xs={6}>
                    <div className="left">
                        {card.finance[0]}
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="right">
                        {card.finance[1]}

                    </div>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-detail">
                <h2>tinh thần</h2>

                <Row>
                <Col xs={6}>
                    <div className="left">
                        {card.spirit[0]}
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="right">
                        {card.spirit[1]}

                    </div>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CardModal;
