import React,{Component} from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer class="site-footer">
                    <div class="container">
                    <div class="row mb-3">
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
                    <div class="row">
                        <p class="col-12 text-center">
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" class="text-primary">Colorlib</a>
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        </p>
                    </div>
                    </div>
                </footer>

            </div>
        )
    }
}
export default Footer 