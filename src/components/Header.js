import React,{Component} from 'react';

class Header extends React.Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg site-navbar navbar-light bg-light" id="pb-navbar">
               
            
                <div class="container">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <a class="navbar-brand" href="index.html">Md.Ibrahim</a>
                    <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample09">
                        <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="#section-home">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#section-about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#section-services">Services</a></li>
                        <li class="nav-item"><a class="nav-link" href="#section-resume">Resume</a></li>
                        <li class="nav-item"><a class="nav-link" href="#section-portfolio">Portfolio</a></li>                   
                       <li class="nav-item"><a class="nav-link" href="#section-contact">Contact</a></li>
                        </ul>
                    </div>
                    </div>
        
                
                </nav>
                
            </div>
        )
    }
}
export default Header