import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function CultureView() {
    const navigate = useNavigate(); 
    const fileState = useLocation();

    const handleToDance = (event) => {
        console.log("what");
        navigate("../dance", {state: fileState.state});
    };

    return (
        <div className='wrapper'>
        <div className="culture-container">
            <div className="relative-culture">
                <img id="backrgound-img" src="https://static.wixstatic.com/media/1648f7_b1573d8bd6bd4ee3a7de00dd31b22b06~mv2.png/v1/fill/w_1200,h_804,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bkblur.png"/>
                
            <div className="absolute-culture"> 
                <div className="content d-flex flex-column"> 
                <div className="row">
                    <div className="col">
                    <p id="s-text">The dance style of your uploaded video is</p>
                    <p id="l-text">Breakdance</p>
                    </div>
                    <div className="col">
                    <p id="m-text">Breakdance, also known as breaking or b-boying/b-girling, is a dynamic and energetic street dance style that originated in the late 1960s and early 1970s as part of the hip hop culture in New York City, particularly in the Bronx. Breakdance involves a combination of intricate footwork, acrobatic power moves, and stylish freezes, often performed to the beats of breakbeats or hip hop music.</p>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col">  
                        <img id="culcard" src="https://static.wixstatic.com/media/1648f7_d9a58880e43341449347afd821c3ea60~mv2.png/v1/fill/w_1128,h_1391,al_c,q_90,enc_auto/Group%2049.png" className="img-fluid"/> 
                    </div>
                    <div className="col">  
                        <img id="culcard" src="https://static.wixstatic.com/media/1648f7_d70f7b94f4344e6690700284b93a823d~mv2.png/v1/fill/w_1128,h_1391,al_c,q_90,enc_auto/Group%2050.png" className="img-fluid"/>
                    </div>
                    <div className="col"> 
                        <img id="culcard" src="https://static.wixstatic.com/media/1648f7_0d9ffa0db8a043f2b6eec7d9c19f59ab~mv2.png/v1/fill/w_1128,h_1391,al_c,q_90,enc_auto/Group%2051.png" className="img-fluid"/>
                    </div>
                </div>
                <br/>
                    <div className="row">
                    <div className="col d-flex justify-content-center" >
                        <button type="button" className="btn btn-dark px-1" onClick={handleToDance}>Start dancing</button> 
                    </div>
                    <div className="col d-flex justify-content-center" >
                        <a type="button" className="btn btn-dark px-1" href='https://en.wikipedia.org/wiki/Breakdancing' >Explore more</a>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default CultureView;