import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// import { IoLocation}  from 'react-icons/io';
import {FiClock} from 'react-icons/fi';
import {HiOutlineMail, HiLocationMarker} from 'react-icons/hi';
import {MdCall, MdLocationOn} from 'react-icons/md';
import Navbar from './Navbar';
import ContactUsBody from './ContactUsBody';
import Footer from './Footer';


// contact using an external library for validation
const schema = yup.object().shape({
  name: yup.string().required('Name too short'),
  email: yup.string().required('Enter a valid email'),
  messageBox: yup.string().required('Please enter the message you wish to send'),
  subject: yup.string().required('Messages without a subject will be spammed')
});

function ContactUs() {
     const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className="backgroundA">
                <Navbar/>
                <ContactUsBody/>
            </div> 
            <div className ='secondary-background'>
                <div className="container">
                    <div className="form-control">
                        <div className="contact-us-icons">
                            <div className="icons-divs">
                                <div className = 'icon-div'>
                                    <MdLocationOn className = 'icon'/>
                                </div>
                                <div>
                                    <h3>Location:</h3>
                                    <p>315 Robert Mugabe and Mbuya Nehanda</p>
                                </div>
                            </div>
                            <div className="icons-divs">
                                <div className="icon-div">
                                    <FiClock className = 'icon'/>
                                </div>
                                <div>
                                    <h3>Open Hours:</h3>
                                    <p>Sundays-Saturdays</p>
                                    <p>09:00 - 23:00</p>
                                </div>
                            </div>
                            <div className="icons-divs">
                                <div className="icon-div">
                                    <HiOutlineMail className = 'icon'/>
                                </div>
                                <div>
                                    <h3>Email:</h3>
                                    <p>admin@solomons.co.zw</p>
                                </div>
                            </div>
                            <div className="icons-divs">
                                <div className="icon-div">
                                    <MdCall className = 'icon'/>
                                </div>
                                <div>
                                    <h3>Call:</h3>
                                    <p>+263 091 023 011</p>
                                    <p>+263 023 011 091</p>
                                </div>
                            </div>

                        </div>
                        <div className="contact-us-form">
                            <form onSubmit = {handleSubmit(onSubmit)}>
                                <div className="name-email">
                                    <div>
                                        <input type="text" placeholder = 'Your Name' name ='name' ref ={register}/>
                                        <p className = 'errors'>{errors.name?.message}</p>
                                    </div>
                                    <div>
                                        <input type="email" placeholder = 'Your Email' name='email' ref ={register}/>
                                        <p className = 'errors'>{errors.email?.message}</p>
                                    </div>
                                </div>
                                <input type="text" placeholder ='Subject' name='subject' ref ={register}/>
                                <p className = 'errors'>{errors.subject?.message}</p>
                                
                                <textarea name="messageBox" id="messageBox" placeholder = 'Message' cols="30" rows="10" ref ={register}></textarea>
                                <p className = 'errors'>{errors.messageBox?.message}</p>
                                <button type="submit" className="submit-btn ">Contact Us </button>
                            </form>
                        </div>
                    </div>
                </div>   
            </div>
            <Footer/>
        </>
    )
}
export default ContactUs
