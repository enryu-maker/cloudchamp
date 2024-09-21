"use client";

import { Footer } from "flowbite-react";
import { BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

export function Foter() {
  return (
    <Footer container className="bg-white border-t border-black rounded-none">
      <div className="w-full">
        <div className="flex w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="gap-1 flex justify-center sm:mt-4 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Home</Footer.Link>
                <Footer.Link href="#">Services</Footer.Link>
                <Footer.Link href="#">Cources</Footer.Link>
                <Footer.Link href="#">About Us</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src=""
              // alt=" Logo"
              name="CloudChamp Logo"
            />
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="NerdTech™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsYoutube} />
            <Footer.Icon href="#" icon={BsLinkedin} />
            <Footer.Icon href="#" icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
