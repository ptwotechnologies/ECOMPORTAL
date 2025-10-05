import React from "react";
import ContactHero from "../components/contact/ContactHero";
import ContactFooter from "../components/contact/ContactFooter";
import ContactNavbar from "../components/contact/ContactNavbar";
const JoinUs = () => {
  return (
    <div className="bg-white">
      <ContactNavbar></ContactNavbar>
      <ContactHero></ContactHero>
      <ContactFooter></ContactFooter>
    </div>
  );
};

export default JoinUs;
