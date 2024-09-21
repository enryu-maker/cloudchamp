import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_p99rhds", "template_79nr75g", form.current, {
        publicKey: "1zAI34eR3Aimqx2b5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => {
            setSuccessMessage("");
          }, 5000); // Hide message after 5 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-screen md:h-screen h-fit flex flex-col lg:flex-row bg-black text-white p-4">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center">
        <div className="h-fit w-fit flex flex-col gap-10">
          <p className="text-3xl lg:text-6xl font-semibold text-center lg:text-start">
            Let's Have a Talk
          </p>
          <div className="flex flex-col gap-5 w-full lg:w-96">
            <div className="flex flex-col">
              <p className="font-medium text-xl lg:text-3xl text-start">
                Address
              </p>
              <p className="font-thin text-sm lg:text-md">
                CloudChamp Solutions, plot no X-2 first floor, Satpur industrial
                area, near Pf office, Satpur MIDC, Nashik-422007, Maharashtra
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-xl lg:text-3xl text-start">Mail</p>
              <p className="font-thin text-sm lg:text-md">
                <a href="mailto:cloudchampsolutions@gmail.com">
                  cloudchampsolutions@gmail.com
                </a>
              </p>
            </div>
            <div className="flex flex-col">
              <a></a>
              <p className="font-medium text-xl lg:text-3xl text-start">
                Phone
              </p>
              <p className="font-thin text-sm lg:text-md">
                <a href="tel:8669000416">+91 86690 00416</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center mt-10 lg:mt-0">
        <div className="w-full flex flex-col items-center">
          <form
            className="w-full lg:w-3/4 flex flex-col gap-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex flex-col gap-2">
              <p className="font-thin text-sm lg:text-md">Name</p>
              <Input
                type="text"
                required
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-2 text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-thin text-sm lg:text-md">Mail</p>
              <Input
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-2 text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-thin text-sm lg:text-md">Message</p>
              <Textarea
                required
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="p-2 text-black"
              />
            </div>
            <div className="w-full h-fit mt-4">
              <ShimmerButton
                background={"#ffffff"}
                shimmerColor={"#000000"}
                className="w-full text-black tracking-widest"
                borderRadius={"10px"}
              >
                Submit
              </ShimmerButton>
            </div>
            {successMessage && (
              <p className="text-green-500 text-lg mb-4">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
