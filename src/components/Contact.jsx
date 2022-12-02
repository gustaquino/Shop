import React from "react";
import contact from "../assets/contact.jpg";

const Contact = () => {
  return (
    <div className="relative flex flex-col justify-center  bg-black/95   px-4 py-12">
      <div className="w-full p-6 m-auto bg-transparent rounded-md ring-1 ring-white lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-white  uppercase">
          Contact Form
        </h1>
        <form className="mt-6">
          <div className="mb-2" id="contact">
            <label>
              <span className="text-white">Your name</span>
              <input
                type="text"
                name="name"
                className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md

            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Type your name here"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-white">Email address</span>
              <input
                name="email"
                type="email"
                className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Type your email here"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span class="text-white">Message</span>
              <textarea
                name="message"
                className="
            block
            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="5"
              ></textarea>
            </label>
          </div>
          <div className="py-4"></div>
          <div class="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            text-black
            bg-white
            rounded-lg
            transition-colors
            duration-150
            items-center
            justify-center
            focus:shadow-outline
            hover:bg-gray-700
          "
            >
              Contact Us
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
