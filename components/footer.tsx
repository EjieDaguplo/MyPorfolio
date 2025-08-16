import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-6">
      <div className="max-w-6xl mx-auto px-4">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact Me</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <a
              href="https://github.com/EjieDaguplo"
              target="_blank"
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://web.facebook.com/ejie.daguplo.9"
              target="_blank"
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
              <span>Facebook</span>
            </a>
            <a
              href="mailto:ejiedaguplo@gmail.com"
              target="_blank"
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faGoogle} className="w-5 h-5" />
              <span>Gmail</span>
            </a>
            <span className="flex items-center space-x-2 hover:text-white transition-colors gap-2">
              <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
              +63 946 233 4179
            </span>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Ejie Daguplo. All rights reserved.
      </div>
    </footer>
  );
}
