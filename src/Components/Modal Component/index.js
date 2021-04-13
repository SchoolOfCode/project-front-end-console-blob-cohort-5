import React, { useState, useEffect } from "react";
import { Modal, Row, Col, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function RedCountriesModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Countries from which entry to the UK is banned - 'red list' countries
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <p>
            If you have been in or through any of the countries listed below in
            the previous 10 days, you will be refused entry to the UK.{" "}
          </p>
          <p>
            If you are a British or Irish National, or you have residence rights
            in the UK, you will be able to enter.{" "}
            <a href="https://www.gov.uk/guidance/booking-and-staying-in-a-quarantine-hotel-when-you-arrive-in-england" target="_blank">
              {" "}
              You must quarantine in a government approved hotel for 10 days.
            </a>
          </p>
          <Row>
            <Col xs={6} md={6}>
              <ul>
                <li>Angola</li>
                <li>Argentina</li>
                <li>Bangladesh</li>
                <li>Bolivia</li>
                <li>Botswana</li>
                <li>Brazil</li>
                <li>Burundi</li>
                <li>Cape Verde</li>
                <li>Chile</li>
                <li>Colombia</li>
                <li>Democratic Republic of the Congo</li>
                <li>Ecuador</li>
                <li>Eswatini</li>
                <li>Ethiopia</li>
                <li>French Guiana</li>
                <li>Guyana</li>
                <li>Kenya</li>
                <li>Lesotho</li>
                <li>Mozambique</li>
                <li>Namibia</li>
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <ul>
                <li>Oman</li>
                <li>Malawi</li>
                <li>Pakistan</li>
                <li>Panama</li>
                <li>Paraguay</li>
                <li>Peru</li>
                <li>Philippines</li>
                <li>Qatar</li>
                <li>Rwanda</li>
                <li>Seychelles</li>
                <li>Somalia</li>
                <li>South Africa</li>
                <li>Suriname</li>
                <li>Tanzania</li>
                <li>United Arab Emirates (UAE)</li>
                <li>Uruguay</li>
                <li>Venezuela</li>
                <li>Zambia</li>
                <li>Zimbabwe</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <p>
          Last updated: Tue Apr 13 2021 20:19:44 GMT+0100 (British Summer Time){" "}
        </p>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );

}

export default RedCountriesModal;
