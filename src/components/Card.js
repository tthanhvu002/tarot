import { CgCardHearts, Modal } from "react-icons/cg";
import { useState, useEffect } from "react";
import CardModal from "./CardModal";
function Card({ card }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  let handleShow = (e) => {
    setShow(true);
  };

  const keyword = card.keyword.split(",");
  return (
    <div className="card" >
      <div className="card-img" onClick={handleShow}>
        <CgCardHearts></CgCardHearts>
      </div>
      <h2 className="card-name" onClick={handleShow}>{card.name}</h2>
      <ul onClick={handleShow}>
        {keyword.map((item) => {
          return <li> {item.trim()} </li>;
        })}
      </ul>
      <CardModal
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        card={card}
      ></CardModal>
    </div>
  );
}

export default Card;
