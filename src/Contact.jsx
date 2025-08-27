import Icons from "./Icons";
import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useState } from "react";
import Alert from "./Alert";

function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  const [state, handleSubmit] = useForm("mdklnyey");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",  
  });

  useEffect(() => {
  if (showAlert) {
    const timer = setTimeout(() => setShowAlert(false), 3000);
    return () => clearTimeout(timer);
  }
}, [showAlert]);

  function resetfrm(){
    setFormData({
    name: "",
    email: "",
    message: "",
    })
  }

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg20 max-h-max w-full lg:px-8 lg:py-4 flex flex-col justify-center items-center">
      <div className="flex lg:space-x-2 items-center justify-center flex-col lg:flex-row md:w-4/5 w-full lg:w-full h-full lg:px-4 lg:py-8">
        <div className="flex items-center px-5 flex-col lg:py-1 space-y-4 py-4 lg:space-y-4 lg:h-4/5 lg:w-2/5 w-full h-1/3">
          <h1 className="lg:text-5xl text-3xl font-semibold text-center uppercase">Contact</h1>
          <h1 className="text-center text-zinc-400">You can contact me anytime</h1>
          <div className="bg-white/10 rounded-lg space-x-6 lg:flex flex-row items-center justify-evenly hidden p-2 lg:mt-0 md:mt-0 mt-20">
            <div className="flex space-x-6">
              <a className="wrapper" href="https://facebook.com/Akku.athlete" target="_blank" title="Shrey.fb">
                <i className="fa fa-3x fa-facebook-square"></i>
              </a>
              <a className="wrapper2" href="https://twitter.com/@ShreyKr42" target="_blank" title="Shrey.tw">
                <i className="fa fa-3x fa-twitter-square"></i>
              </a>
              <a className="wrapper3" href="https://github.com/Shrey42a" title="Akku42n" target="_blank">
                <i className="fa fa-3x fa-github-square"></i>
              </a>
              <a className="wrapper4" href="https://linkedin.com/in/shrey-kumar-090914242" target="_blank" title="Shrey.In">
                <i className="fa fa-3x fa-linkedin-square"></i>
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={(e) => {handleSubmit(e); resetfrm(); setShowAlert(true);}} action="https://formspree.io/f/mdklnyey" method="POST" className="lg:h-4/5 flex flex-col py-2 lg:justify-center space-y-8 lg:space-y-2 items-center lg:w-2/5 w-full px-6 lg:px-6 lg:py-2 h-2/3">
          <h1 className="lg:text-3xl hidden lg:block">Send me a message</h1>
          <div className="w-full space-y-5">
            <div className="flex flex-col lg:space-y-2 space-y-1 h-24">
              <label htmlFor="name" className="text-zinc-400 cursor-pointer">Name*</label>
              <input
                id="name"
                name="name"
                required
                onChange={handleChange}
                value={formData.name}
                placeholder="Your name*"
                className="caret-lime-400 text-zinc-400 accent-gray-400 w-full rounded-lg px-4 p-2 bg-white/10" />
                <ValidationError className="ml-2 text-red-500" prefix="Name" field="name" errors={state.errors} />
            </div>
            <div className="flex flex-col space-y-1 h-24">
              <label htmlFor="email" className="text-zinc-400 cursor-pointer">Email*</label>
              <input
                id="email"
                name="email"
                required
                type="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Your email*"
                className="caret-lime-400 text-zinc-400 accent-gray-400 w-full rounded-lg px-4 p-2 bg-white/10" />
              <ValidationError className="ml-2 text-red-500" prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="flex flex-col space-y-1 h-24">
              <label htmlFor="message" className="ml-2 text-zinc-400 cursor-pointer">Message*</label>
              <textarea
                id="message"
                required
                name="message"
                placeholder="Message*"
                onChange={handleChange}
                value={formData.message}
                className="caret-lime-400 text-zinc-400 accent-gray-400 w-full rounded-lg px-4 p-2 bg-white/10" />
              <ValidationError className="ml-2 text-red-500" prefix="Message" field="message" errors={state.errors} />
            </div>
            <div className="flex space-x-2 justify-evenly">
              <div className="active:translate-y-0.5 px-10 py-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex justify-center items-center gap-2.5">
                 <button disabled={state.submitting} type="submit" className="text-justify justify-start text-white text-xl font-bold tracking-wide">Submit</button>
              </div>
              <div className="active:translate-y-0.5 px-10 py-3 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-400 flex justify-center items-center gap-2.5">
                 <button onClick={resetfrm} type="button" className="text-justify justify-start text-neutral-400 text-xl font-bold tracking-wide">Reset</button>
                </div>
            </div>
            <div className="rounded-lg space-x-4 flex flex-row items-center justify-evenly lg:hidden p-2">
              <Icons />
            </div>
          </div>
        </form>
        {showAlert && <Alert />}
      </div>
    </div>
  );

}
export default Contact;