// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faYoutube,
  faGooglePlus,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-primary text-center text-lg-start">
      <div className="text-center p-3">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faGooglePlus} />
        <FontAwesomeIcon icon={faPinterest} />
      </div>
    </footer>
  );
}
