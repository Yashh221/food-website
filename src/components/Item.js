import React, { useState } from "react";
import {Modal} from 'react-bootstrap'

function Item({ datas }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState('wheat');
  const [show, setShow] = useState(false);
  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true);
  return (
    <div
      style={{ margin: "70px" }}
      className="shadow-lg p-3 mb-5 bg-body-tertiary rounded"
    >
      <div onClick={handleShow}>
      <h1>{datas.name}</h1>
      <img
        src={datas.image}
        alt=""
        className="img-fluid"
        style={{ height: "200px", width: "200px" }}
      />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {datas.varients.map((varients) => {
              return <option value={varients}>{varients}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1 ">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">
            Price: Rs. {datas.prices[0][varient] * quantity}
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn btn-dark btn-rounded">Add to Cart</button>
        </div>
      </div>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{datas.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img className="img-fluid" src={datas.image} alt="" style={{width:'300px'}}/>
              <p>{datas.description}</p>
              </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-success .btn-rounded" onClick={handleClose}>Close</button>
            </Modal.Footer>
     </Modal>
    </div>
  );
}

export default Item;
