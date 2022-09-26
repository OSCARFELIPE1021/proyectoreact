
import React from 'react'
import CartWidget from '../CartWidget/Cart';


function NavBar() {
    

    return (
        <React.Fragment>
            <>
			    <nav className="logo">
				    <div className="logo-container">
                        
					    <img src="/mipokeapi/public/Assets/img/logo.png" alt="Logo" className="navbar-logo"></img>
					    
				    
				            <div class="navbar">
                            <a class="active" href="#"><i className="fa fa-fw fa-home"></i> Home</a> 
                            <a href="#"><i className="fa fa-fw fa-search"></i> Search</a> 
                            <a href="#"><i className="fa fa-fw fa-envelope"></i>TIPO</a> 
                            <a href="#"><i className="fa fa-fw fa-user"></i> Login</a>
                            <a href="#"><i className="carrito"></i><CartWidget/></a>
                            </div>
                    </div>
			    </nav>
		    </>
        </React.Fragment>
    );
}

export default NavBar;