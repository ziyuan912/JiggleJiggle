import React from "react";
import VideoInput from "./VideoInput";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faSquare, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UploadView() {
  return (
    <div className='wrapper' style={{backgroundColor: "#f6f5f5", width: "100%", height: "100vh", minHeight : "100vh"}}>
      <header style={{margin: "0px 0px 0px 0px"}}>
        <Container fluid>
          <Row>
            <Col>
              <div className="header-left">
                <img src="https://static.wixstatic.com/media/1648f7_e892b57fd1c2405c8526d7c6ad2c38ff~mv2.png/v1/fill/w_52,h_48,al_c,lg_1,q_85,enc_auto/J.png" alt="Logo" />
                <h1>Welcome Back!</h1>
              </div>
            </Col>

            <Col>
              <div className="header-right justify-content-end">
                <form role="search">
                  <label htmlFor="search"></label>
                  <input id="search" type="search" placeholder="Search..." autoFocus required />
                </form>
                <img id="icon1" src="https://static.wixstatic.com/media/1648f7_b6d0ebb29c064ec89f477ace182c9d56~mv2.png/v1/fill/w_34,h_34,al_c,lg_1,q_85,enc_auto/1648f7_b6d0ebb29c064ec89f477ace182c9d56~mv2.png" />
                <img id="icon1" src="https://static.wixstatic.com/media/1648f7_92e1d6807b9e4f40b33b7797c64dde94~mv2.png/v1/fill/w_34,h_34,al_c,lg_1,q_85,enc_auto/1648f7_92e1d6807b9e4f40b33b7797c64dde94~mv2.png" />
                <img id="profile" src="https://static.wixstatic.com/media/1648f7_bc41192c9d9546e7869f88d6d9ea3289~mv2.png/v1/fill/w_134,h_134,al_c,lg_1,q_85,enc_auto/Profile.png" />
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 offset-5" style={{marginTop: "150px"}}>
                <label type="button" className="btn btn-light btn-square-md" htmlFor="videoInput" style={{width: "150px", backgroundColor: "#D3D1D1"}}>
                    <FontAwesomeIcon icon={ faUpload } size="7x" style={{color: "#62656a"}}/>
                </label>       
            <VideoInput/>
          </div>
          <b className="text-center font-weight-bold" style={{marginTop: "40px"}}> Drag and drop video to upload</b>
          <div className="col-2 offset-5">
                <label type="button" className="btn btn-dark btn-square-md" htmlFor="videoInput" style={{width: "150px", marginTop: "20px"}}>Select Video</label>       
          </div>
        </div>
      </div>
    </div>
  );
}