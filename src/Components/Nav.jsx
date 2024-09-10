import { Button, Navbar } from "flowbite-react";

export function Nav() {
  return (
    <Navbar fluid rounded className="border-b-2">
      <Navbar.Brand href="https://flowbite-react.com">
        {/* <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          CloudChamp
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Hire Me</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="about">About</Navbar.Link>
        <Navbar.Link href="services">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
