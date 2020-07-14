import React,{Component} from 'react';

class Home extends React.Component{
    render(){
        return(
            <div>
                    
                <section class="site-hero" style={{backgroundImage:"url(assets/images/image_1.jpg)"}} id="section-home" data-stellar-background-ratio="0.5">
                    <div class="container">
                    <div class="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
            
                        <div class="col-md-10 text-center">
                        {/* <h1 class="site-heading site-animate">Howdy, I'm <strong>Md.Ibrahim</strong></h1>
                         */}
                        {/*<p class="lead site-subheading mb-4 site-animate">Web Designer - Full Stack Developer - FreeLancer </p>*/}
                        <h1 class="site-heading site-animate">Howdy, I'm <strong>Md.Ibrahim</strong></h1>
		  				 <span class="lead site-subheading mb-4 site-animate"><strong>Wordpress Developer - Web Designer - Web Developer - Freelancer </strong></span>
					
                        
                        
                        <p><a href="#section-about" class="smoothscroll btn btn-primary px-4 py-3">More On Me</a></p>
                        
                        <div class="col-md-12 text-center">
                        <p>
                            <a href="https://www.facebook.com/ibrahim.sagar.3/" class="social-item"><span class="icon-facebook2"></span></a>
                            <a href="https://twitter.com/ibrahim54190761" class="social-item"><span class="icon-twitter2"></span></a>
                            <a href="https://www.instagram.com/ibu.sagar/" class="social-item"><span class="icon-instagram2"></span></a>
                            <a href="https://www.linkedin.com/in/md-ibrahim-1837b6119/" class="social-item"><span class="icon-linkedin2"></span></a>
                            <a href="https://github.com/IbrahimSagar" class="social-item"><span class="icon-github2"></span></a>
                        </p>
                        
                        </div>
                        </div>  
                        
                    </div>
                   
                    
                    </div>
                    </section> {/* <!-- About --> */}

                         
                <section class="site-section" id="section-about">
                    <div class="container">
                    <div class="row mb-5 align-items-center">
                        <div class="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                        <img src="assets/images/image_1_long.jpg" alt="Image placeholder" class="img-fluid"/>
                        </div>
                        <div class="col-lg-5 pl-lg-5">
                        <div class="section-heading">
                            <h2>About <strong>Me</strong></h2>
                        </div>
                        <p class="lead">Hello! I'm Ibrahim, a software engineer based in Dhaka, Bangladesh.I enjoy creating things that live on the internet, that could be Software Development,IOT Based project, Digital Marketing or anything among them. My goal is to always build products that provide pixel-perfect, performant experiences.
                        </p>
                        <p class="mb-5  "></p>

                        <p>
                            <a href="#section-contact" class="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a>
                            <a href="https://drive.google.com/drive/folders/1UGchYsyl-fS7X8AYEKoWW53H8vfIgv4o?usp=sharing" class="btn btn-secondary px-4 py-2 btn-sm">Download CV</a>
                        </p>
                        </div>
                    </div>
                    {/* <!-- END --> */}

                    
                    </div>
                    </section>

                <section class="site-section border-top pb-0"  id="section-services">
                <div class="container">

                <div class="row mb-4">
                    <div class="col-md-12">
                    <div class="section-heading text-center">
                        <h2>My <strong>Services</strong></h2>
                    </div>
                    </div>
                </div>
                <div class="row">

                    <div class="col-md-6 col-lg-4 text-center mb-5">
                    <div class="site-service-item site-animate" data-animate-effect="fadeIn">
                        <span class="icon">
                        <span class="icon-pencil3"></span>
                        </span>
                        <h3 class="mb-4">Web Design</h3>
                        <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                        
                    </div>
                    </div>
                    <div class="col-md-6 col-lg-4 text-center mb-5">
                    <div class="site-service-item site-animate" data-animate-effect="fadeIn">
                        <span class="icon">
                        <span class="icon-wikipedia"></span>
                        </span>
                        <h3 class="mb-4">Custom WordPress Theme Development</h3>
                        <p>Wordpress CMS is a user-friendly administrative area allowing you to easily edit your website’s content.</p>
                        
                    </div>
                    </div>
                    <div class="col-md-6 col-lg-4 text-center mb-5">
                    <div class="site-service-item site-animate" data-animate-effect="fadeIn">
                        <span class="icon">
                        <span class="icon-cart"></span>
                        </span>
                        <h3 class="mb-4">E-Commerce solution</h3>
                        <p>An E-Commerce solution is a feature-filled, customisable online storefront and shopping cart that will be directly integrated into your website.</p>
                        
                    </div>
                    </div>
                    <div class="col-md-6 col-lg-4 text-center mb-5">
                    <div class="site-service-item site-animate" data-animate-effect="fadeIn">
                        <span class="icon">
                        <span class="icon-embed2"></span>
                        </span>
                        <h3 class="mb-4">Website Development</h3>
                        <p>The web development process involves taking the graphical elements defined in the design process and coding them using web industry standards (PHP, HTML5, CSS3, JS, jQuery)</p>
                        
                    </div>
                    </div>
                    <div class="col-md-6 col-lg-4 text-center mb-5">
                    <div class="site-service-item site-animate" data-animate-effect="fadeIn">
                        <span class="icon">
                        <span class="icon-profile"></span>
                        </span>
                        <h3 class="mb-4">Social Media Integration</h3>
                        <p>Social media integration enables your website to post updates to Facebook, displays a Twitter feed, and links to your social media accounts.</p>
                        
                    </div>
                    </div>

                </div>
                </div>
                </section>

                <section class="site-section " id="section-resume">
                <div class="container">
                <div class="row">
                    <div class="col-md-12 mb-5">
                    <div class="section-heading text-center">
                        <h2>My <strong>Resume</strong></h2>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <nav id="navi">
                            <ul>
                            <li><a href="#page-1">Education</a></li>
                            <li><a href="#page-2">Experience</a></li>
                            <li><a href="#page-3">Skills</a></li>
                            <li><a href="#page-4">Certificate</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class ="col-md-9">
                    <div id="page-1" class= "page one">
                    <h2 class="heading">Education</h2>
                    <div class="resume-wrap d-flex ftco-animate">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="flaticon-ideas"></span>
                        </div>
                        <div class="text pl-3">
                            <span class="date">2013-2018</span>
                            <h2>Bachelor of Science in Computer Science and Engineering</h2>
                            <span class="position">United International University</span>
                            <p>United International University is the top private university in Dhaka,Bangladesh.UIU is located in Madani Avenue,United City.Its a beautiful and large green campus in city.</p>
                        </div>
                    </div>
                    <div class="resume-wrap d-flex ftco-animate">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="flaticon-ideas"></span>
                        </div>
                        <div class="text pl-3">
                            <span class="date">2010-2012</span>
                            <h2>Higher Secondary School</h2>
                            <span class="position">Bir Shreshtha Noor Mohammad Public College</span>
                            <p>BNMPC is the most renowned college in Dhaka and this college place is located in Pilkhana,BGB area.</p>
                        </div>
                    </div>
                    <div class="resume-wrap d-flex ftco-animate">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="flaticon-ideas"></span>
                        </div>
                        <div class="text pl-3">
                            <span class="date">2000-2010</span>
                            <h2>Secondary School Certificate</h2>
                            <span class="position">Hafez Abdur Razzak Jamea Islamia</span>
                            <p>HARJI is located in Azimpur,Dhaka.All my childhood days are spent here.</p>
                        </div>
                    </div>
                    </div>
                    <div id="page-2" class= "page two">
                    <h2 class="heading">Experience</h2>
                    <div class="resume-wrap d-flex ftco-animate">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="flaticon-ideas"></span>
                        </div>
                        <div class="text pl-3">
                            <span class="date">1st May'2019-31st October'2019</span>
                            <h2>Internship</h2>
                            <span class="position">Center for development of IT professional(CDIP)</span>
                            <p>I have done 4 months of Internship on e-commerce project as Laravel Developer.</p>
                        </div>
                    </div>
                    <div class="resume-wrap d-flex ftco-animate">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="flaticon-ideas"></span>
                        </div>
                        <div class="text pl-3">
                            <span class="date">2019-2020</span>
                            <h2>Full Stack Developer</h2>
                            <span class="position">Freelancer</span>
                            <p>I have developed several website for client and working on Fiber at this moment. </p>
                        </div>
                    </div>
                   
                   
                    </div>
                    
                    <div id="page-3" class= "page three">
                    <h2 class="heading">Skills</h2>
                    {/* <div class="row progress-circle mb-5">
                        <div class="col-lg-4 mb-4">
                            <div class="bg-white rounded-lg shadow p-4">
                            <h2 class="h5 font-weight-bold text-center mb-4">PYTHON</h2>
                                            
                            <div class="progress mx-auto" data-value='90'>
                                <span class="progress-left">
                                <span class="progress-bar border-primary"></span>
                                </span>
                                <span class="progress-right">
                                <span class="progress-bar border-primary"></span>
                                </span>
                                <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                <div class="h2 font-weight-bold">90<sup class="small">%</sup></div>
                                </div>
                            </div>
                            
                            
                            <div class="row text-center mt-4">
                                <div class="col-6 border-right">
                                <div class="h4 font-weight-bold mb-0">28%</div><span class="small text-gray">Last week</span>
                                </div>
                                <div class="col-6">
                                <div class="h4 font-weight-bold mb-0">60%</div><span class="small text-gray">Last month</span>
                                </div>
                            </div>
                            
                        </div>
                        </div>

                        </div>
                        
                         */}
                        <div class="row">
                            <div class="col-md-6 animate-box">
                                <div class="progress-wrap ftco-animate">
                                    <h3>Photoshop</h3>
                                    <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    <span>80%</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 animate-box">
                                <div class="progress-wrap ftco-animate">
                                    <h3>Laravel</h3>
                                    <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    <span>80%</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 animate-box">
                                <div class="progress-wrap ftco-animate">
                                    <h3>ReactJS</h3>
                                    <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    <span>80%</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 animate-box">
                                <div class="progress-wrap ftco-animate">
                                    <h3>PHP</h3>
                                    <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    <span>80%</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 animate-box">
                                <div class="progress-wrap ftco-animate">
                                    <h3>JAVA</h3>
                                    <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    <span>80%</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 animate-box">
                                <div class="progress-wrap ftco-animate">
                                    <h3>HTML&CSS</h3>
                                    <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    <span>80%</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 animate-box">
                                <div class="progress-wrap ftco-animate">
                                    <h3>JavaScripts</h3>
                                    <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    <span>80%</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 animate-box">
                                <div class="progress-wrap ftco-animate">
                                    <h3>MYSQL</h3>
                                    <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    <span>80%</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    
                        </div>
                    </div>

                    <div id="page-4" class= "page four">
                    <h2 class="heading">Certificate </h2>
                    <div class="resume-wrap d-flex ftco-animate">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="flaticon-ideas"></span>
                        </div>
                        <div class="text pl-3">
                            <span class="date">2019 (Feb'01 - April'30)</span>
                            <h2>PHP-Laravel Framework</h2>
                            <span class="position">Center for development of IT professional(CDIP)</span>
                            <p>Professional Laravel e-commerce site development course</p>
                        </div>
                    </div>
                    </div> 
                    </div>
                </div>
                </div>
                </section> 

                <section class="ftco-section ftco-project" id="section-portfolio">
    	            <div class="container-fluid px-md-0">
                        <div class="row no-gutters justify-content-center pb-5">
                            <div class="section-heading text-center col-md-12 ftco-animate">
                                <h2>Featured <strong>Portfolio</strong></h2>
                            </div>
                        </div>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <div class="project img ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("assets/images/res.jpg")'}}>
                                    <div class="overlay"></div>                           
	    				            <div class="text text-center p-4">
	    					            <h3><a href="https://react-paradise-resort.netlify.app/" target="_blank">Hotel Room Management System</a></h3>
	    					                <span>ReactJS - The Paradise Resort</span>
	    				            </div>
    				            </div>
                            </div>
                        
                            <div class="col-md-4">
                                <div class="project img ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("assets/images/Capture22.jpg")'}}>
                                    <div class="overlay"></div>                           
	    				            <div class="text text-center p-4">
	    					            <h3><a href="https://react-paradise-resort.netlify.app/" target="_blank">Mirror Online Shop</a></h3>
	    					                <span>E-Commerce project - Laravel</span>
	    				            </div>
    				            </div>
                            </div>
                        
                            <div class="col-md-4">
                                <div class="project img ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("assets/images/Capture.jpg")'}}>
                                    <div class="overlay"></div>                           
	    				            <div class="text text-center p-4">
	    					            <h3><a href="https://react-paradise-resort.netlify.app/" target="_blank">E-Commerce project</a></h3>
	    					                <span>Larave Framework</span>
	    				            </div>
    				            </div>
                            </div>
                        

                        </div>
    		        </div>
                </section>


                <section class="site-section bg-light" id="section-contact">
                <div class="container">
                <div class="row">
                    <div class="col-md-12 mb-5">
                    <div class="section-heading text-center">
                        <h2>Wanna <strong>Start Work</strong> With Me?</h2>
                    </div>
                    </div>
                    
                    <div class="col-md-7 mb-5 mb-md-0">
                    <form action="" class="site-form">
                        <h3 class="mb-5">Get In Touch</h3>
                        <div class="form-group">
                        <input type="text" class="form-control px-3 py-4" placeholder="Your Name"/>
                        </div>
                        <div class="form-group">
                        <input type="email" class="form-control px-3 py-4" placeholder="Your Email"/>
                        </div>
                        <div class="form-group">
                        <input type="email" class="form-control px-3 py-4" placeholder="Your Phone"/>
                        </div>
                        <div class="form-group mb-5">
                        <textarea class="form-control px-3 py-4"cols="30" rows="10" placeholder="Write a Message"></textarea>
                        </div>
                        <div class="form-group">
                        <input type="submit" class="btn btn-primary  px-4 py-3" value="Send Message"/>
                        </div>
                    </form>
                    </div>
                    <div class="col-md-5 pl-md-5">
                    <h3 class="mb-5">My Contact Details</h3>
                    <ul class="site-contact-details">
                        <li>
                        <span class="text-uppercase">Email</span>
                        mibrahim133061@gmail.com
                        </li>
                        <li>
                        <span class="text-uppercase">Phone</span>
                        +88 01316992475
                        </li>
                        
                        <li>
                        <span class="text-uppercase">Address</span>
                        BUET STAFF QUARTER,DHAKA,BANGLADESH
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                </section>



 </div>
        )
    }
}
export default Home