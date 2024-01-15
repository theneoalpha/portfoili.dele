import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import Navbar2 from "./Navbar2";
import contact from "../images/boy.svg";
import "../components/assets/contact.css";

import Footer from "./Footer";
export default function Contact() {
  // const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    text:"",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value, PostData;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });

    PostData = async (e) => {
      
        res.send("Hellow ths is vikash");
    
      e.preventDefault();
      

     // const { name, text,email, phone, work, password, cpassword } = user;
       const { name, text,email, phone, work } = user;
      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          text,
          email,
          work,
          phone,
          // password,
          // cpassword,
        }),
      });

      const data = await res.json();
      if (res.status === 422 || !data) {
        // window.alert("Invalid Registration");
        // console.log("Invalid Registration");
         window.alert("Invalid Message");
        console.log("Invalid Message");
      } else {
        // window.alert("Registration successful");
        // console.log("registration successful");
        window.alert("Message Sent");
        console.log("Message Sent");
      }
    };
  };

  return (
    <>
      <Navbar2 />
      <section className="contact">
        <div className="container mt-5">
           <h2 className="form-title">Message</h2>
          <div className="contact-content">
            <img src={contact} />
            <div className="contact-form">
             
              <form method="POST" className="contactpage-form">
                <div className="form-group">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your name"
                    value={user.name}
                    onChange={handleInputs}
                  />
                </div>
               
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    value={user.email}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone"></label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter Your Phone Number"
                    value={user.phone}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="work"></label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    placeholder="Enter Your Work"
                    value={user.work}
                    onChange={handleInputs}
                  />
                </div>
                {/* <div className="form-group">
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter YourPassword"
                    value={user.password}
                    onChange={handleInputs}
                  />
                </div> */}
                {/* <div className="form-group">
                  <label htmlFor="cpassword"></label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    placeholder="Enter Your cPassword"
                    value={user.cpassword}
                    onChange={handleInputs}
                  />
                </div> */}

                <div className="pt-0 mb-3 form-group">
                  
                  <textarea
                    placeholder="Your message"
                    name="text"
                    id="text"
                    className="focus:outline-none focus:ring relative w-full px-3 py-8 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                    required
                    value={user.text}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="contact"
                    value="Submit"
                    className="submit"
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>

            
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
