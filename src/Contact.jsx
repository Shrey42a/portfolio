import React from "react";
import Icons from "./Icons";
import * as Yup from "yup";
import { useFormik } from "formik";
import swal from 'sweetalert';

function Contact() {

  function sendData() {
    Email.send({
      SecureToken: "4b4d1bc9-8d19-4d8b-b740-50ae9d7cd3ed",
      To: 'shreykumar55242@gmail.com',
      From: "akashjaat55242@gmail.com",
      Subject: "New contact",
      Body: "Name: " + document.getElementById("name").value
        + "<br /> Email: " + document.getElementById("email").value
        + "<br /> Message: " + document.getElementById("message").value
    }).then(
      message => {
        if(message =='OK'){
          swal("Success!", "Message sent successfully!", "success");
        }
      }
    );
    resetForm()
    return
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    name: Yup.string().required(),
    message: Yup.string().required(),
  })

  const { handleSubmit, handleChange, handleBlur, touched, resetForm, values, errors, isValid } = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    onSubmit: sendData,
    validationSchema: schema,
  })

  return (
    <div className="min-h-screen max-h-max w-full lg:px-8 bg20 lg:py-4 flex flex-col justify-center items-center">
      <div className="flex lg:space-x-2 items-center justify-center flex-col lg:flex-row w-full h-full lg:px-4 lg:py-8">
        <div className="flex items-center px-5 flex-col lg:py-1 space-y-4 py-4 lg:space-y-4 lg:h-4/5 lg:w-2/5 w-full h-1/3">
          <h1 className="lg:text-5xl text-3xl font-semibold text-center text-gray-400 font-mono uppercase">Contact</h1>
          <h1 className="text-gray-400 text-center font-mono">You can contact me anytime between 9am to 10am...</h1>
          <h2 className="font-mono text-center text-gray-400">Call me at <span className="text-blue-400 cursor-pointer font-mono">+91 8979993542</span></h2>
          <h2 className="font-mono text-gray-400 text-center">You can move to<span className="text-blue-400 cursor-pointer"> FAQs</span> or <span className="text-blue-400 cursor-pointer">Support</span> page to get more information about our site.</h2>
          <div className="bg-white/10 rounded-lg space-x-6 lg:flex flex-row items-center justify-evenly hidden p-2 mt-6">
            <div className="flex space-x-6">
              <a className="wrapper" href="https://facebook.com/Akku.athlete" target="_blank" title="Shrey.fb">
                <i className="fa fa-3x fa-facebook-square"></i>
              </a>
              <a className="wrapper2" href="https://twitter.com/@ShreyKr42" target="_blank" title="Shrey.tw">
                <i className="fa fa-3x fa-twitter-square"></i>
              </a>
              <a className="wrapper3" href="https://instagram.com/akku_429?igshid=YmMyMTA2M2Y=" title="Akku42n" target="_blank">
                <i className="fa fa-3x fa-github-square"></i>
              </a>
              <a className="wrapper4" href="https://linkedin.com/in/shrey-kumar-090914242" target="_blank" title="Shrey.In">
                <i className="fa fa-3x fa-linkedin-square"></i>
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="lg:h-4/5 flex flex-col py-2 lg:justify-center space-y-3 lg:space-y-2 items-center lg:w-2/5 w-full px-6 lg:py-2 h-2/3">
          <h2 className="text-gray-400 font-mono lg:text-lg uppercase">Get in touch</h2>
          <h1 className="lg:text-3xl font-mono text-gray-400">Send me a message</h1>
          <div className="w-full space-y-4">
            <div className="flex flex-col lg:space-y-2 space-y-1 h-24">
              <label htmlFor="name" className="text-gray-400 cursor-pointer">Name*</label>
              <input
                id="name"
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Your name*"
                className="caret-lime-400 text-gray-400 accent-gray-400 w-full rounded-lg px-4 p-2 bg-white/10" />
              {touched.name && errors.name && (<div className="ml-2 text-red-500">{errors.name}</div>)}
            </div>
            <div className="flex flex-col space-y-1 h-24">
              <label htmlFor="email" className="text-gray-400 cursor-pointer">Email*</label>
              <input
                id="email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Your email*"
                className="caret-lime-400 text-gray-400 accent-gray-400 w-full rounded-lg px-4 p-2 bg-white/10" />
              {touched.email && errors.email && (<div className="ml-2 text-red-500">{errors.email}</div>)}
            </div>
            <div className="flex flex-col space-y-1 h-24">
              <label htmlFor="message" className="ml-2 text-gray-400 cursor-pointer">Message*</label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Message*"
                className="caret-lime-400 text-gray-400 accent-gray-400 w-full rounded-lg px-4 p-2 bg-white/10" />
              {touched.message && errors.message && (<div className="ml-2 text-red-500">{errors.message}</div>)}
            </div>
            <div className="flex space-x-2">
              <button disabled={!isValid} type="submit" className="disabled:bg-white/30 disabled:cursor-not-allowed custom-btn btn-13">Submit</button>
              <button type="button" onClick={resetForm} className="custom-btn btn-13">Reset</button>
            </div>
            <div className="bg-white/10 rounded-lg space-x-4 flex flex-row items-center justify-evenly lg:hidden p-2 mt-10">
              <Icons />
            </div>
          </div>
        </form>
      </div>
    </div>
  );

}
export default Contact;



//"