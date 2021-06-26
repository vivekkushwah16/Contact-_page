import React from "react";
import img1 from "./images/Logo.png";
const Contact =() =>{
    return(
            <>
                <div id="signin">
                    <div className='logo'>
                        <img src={img1} alt="Logo" />
                    </div>
                    <form>
                        <div>
                            <label>Email or Username</label>
                            <input type="text" className="text-input"/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" className="text-input"/> 
                        </div>
                        <button type="submit" className="primary-btn">Sign In</button>
                    </form>
                    <div className="links">
                        <a href="#">Forgot Password</a>
                        <a href="#">Sign Up with Google or Phone</a>
                    </div>
                    <div className="or">
                        <hr className="br"/>
                        <span>OR</span>
                        <hr className="br"/>
                    </div>
                    <a href="#" className="secondary-btn">Create an account</a>
                </div>
                <footer className="main-footer">
                    <p>Copyright &copy; 2021, Company_Name All Right Reserved</p>
                    <div>
                        <a href="#" >terms of use</a> | <a href="#">Privacy Policy</a>
                    </div>
                </footer>
           

            </>
    );
};
export default Contact