import React from "react";
import './estiloscard.css';


function Card() {
    return (
        <React.Fragment>
            <>
                <div class="card ">
                    <div class="img" src="/mipokeapi/public/Assets/img/Pokemon-PNG-Picture.png" alt="John"></div>
                        <h1>titulo</h1>
                        <p class="title">CEO & Founder, Example</p>
                        <p>Harvard University</p>
                            <a href="#"><i class="fa fa-dribbble"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-facebook"></i></a>
                        <p><button>Contact</button></p>

                        
                </div>
		    </>
        </React.Fragment>
    );
}

export default Card;