import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faWindowMaximize, faChartSimple, faCircleInfo, faUser} from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomeView() {
  return (
    <div className='wrapper'>
      <header>
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
          <div className="col col-lg-2">
            <div className="row" style={{height: "100%"}}>
              <div className="col-12" id="topmenu" style={{height: "70%"}}>

                <button type="button" className="btn btn-elegant px-3"><FontAwesomeIcon icon={ faHouse } style={{color: "#000000"}}/> Dashboard</button>
                <button type="button" className="btn btn-elegant px-3"><FontAwesomeIcon icon={ faWindowMaximize } style={{color: "#000000"}}/> My Courses</button>
                <button type="button" className="btn btn-elegant px-3"><FontAwesomeIcon icon={ faChartSimple } style={{color: "#000000"}}/> Analytics</button>

            </div>
            <div className="col-12" id="bottommenu">
              <button type="button" className="btn btn-elegant px-3"><FontAwesomeIcon icon={ faCircleInfo } style={{color: "#000000"}}/> Help</button>
              <button type="button" className="btn btn-elegant px-3"><FontAwesomeIcon icon={ faUser } style={{color: "#000000"}}/> Accounts</button>
            </div>
          </div>
        </div>


        <div className="col col-lg-10">
          <a href="upload">
            <img id="heroimg" src="https://static.wixstatic.com/media/1648f7_58911d54c2fa47f7b53814003d984f0e~mv2.png/v1/fill/w_1200,h_534,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/hero.png" className="img-fluid"/>
            </a>
          <div className="row">
            <div className="col">
              <a href='dance'><img id="Voguing" src="https://static.wixstatic.com/media/1648f7_0834ed45601747e68b8fdfb9601aa0f7~mv2.png/v1/fill/w_1200,h_670,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/1648f7_0834ed45601747e68b8fdfb9601aa0f7~mv2.png"/></a>
                <div className="row">
                  <div className="col col-lg-2">
                    <img id="profile" src="https://static.wixstatic.com/media/1648f7_bc41192c9d9546e7869f88d6d9ea3289~mv2.png/v1/fill/w_134,h_134,al_c,lg_1,q_85,enc_auto/Profile.png"/>
                    </div>
                  <div className="col col-lg-10">
                    <h6 id="videoname">“Maneater” - Nelly Furtado | Danni Heverin Jazz className</h6>
                    <div className="row">
                      <div className="col">
                        <p id="youtuber">Danni Heverin</p>
                      </div>
                      <div className="col">
                        <p id="youtuber"> 8 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            <div className="col">
              <a href='dance'><img id="Voguing" src="https://static.wixstatic.com/media/1648f7_6cf4daed2b184da88d456a5804341062~mv2.png/v1/fill/w_1200,h_672,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/M%20widget-1.png"/></a>
                <div className="row">
                  <div className="col col-lg-2">
                    <img id="profile" src="https://static.wixstatic.com/media/1648f7_bc41192c9d9546e7869f88d6d9ea3289~mv2.png/v1/fill/w_134,h_134,al_c,lg_1,q_85,enc_auto/Profile.png"/>
                    </div>
                  <div className="col col-lg-10">
                    <h6 id="videoname">THE BOX - Roddy Ricch Dance Choreography | Matt Steffanina </h6>
                    <div className="row">
                      <div className="col">
                        <p id="youtuber">Danni Heverin</p>
                      </div>
                      <div className="col">
                        <p id="youtuber"> 8 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            <div className="col">
              <a href='dance'><img id="Voguing" src="https://static.wixstatic.com/media/1648f7_b0fc14a1f86e449fbfd32348249441cf~mv2.png/v1/fill/w_1200,h_672,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/M%20widget-2.png"/></a>
                <div className="row">
                  <div className="col col-lg-2">
                    <img id="profile" src="https://static.wixstatic.com/media/1648f7_bc41192c9d9546e7869f88d6d9ea3289~mv2.png/v1/fill/w_134,h_134,al_c,lg_1,q_85,enc_auto/Profile.png"/>
                    </div>
                  <div className="col col-lg-10">
                    <h6 id="videoname">ZHU - Faded | Vogue Hands Performance by Teddy</h6>
                    <div className="row">
                      <div className="col">
                        <p id="youtuber">Danni Heverin</p>
                      </div>
                      <div className="col">
                        <p id="youtuber"> 8 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default HomeView;