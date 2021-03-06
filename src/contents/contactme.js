import React, { useState } from "react";
import  { Component } from 'react';
import Social from '../components/Social';
class ContactMe extends Component {
    render(){
        return (
            <form
              
            >
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  required
                />
              </div>
              <div className="mb-3 pt-0">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  required
                />
              </div>
              <div className="mb-3 pt-0">
                <textarea
                  placeholder="Your message"
                  name="message"
                  className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  required
                />
              </div>
              <div className="mb-3 pt-0">
                <button
                  className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Send a message
                </button>
              </div>
            </form>
          );

        
    }



  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  
};

export default ContactMe;