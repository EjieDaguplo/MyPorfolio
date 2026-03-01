import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 mt-6 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="inline-block px-4 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-white/10 border border-white/20 text-blue-300">
            Get in Touch
          </span>

          <h3 className="text-2xl font-extrabold text-white">
            Contact{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
            <a
              href="https://github.com/EjieDaguplo"
              target="_blank"
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-400/40 transition-all group"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-6 h-6 group-hover:text-purple-400 transition-colors"
              />
              <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                GitHub
              </span>
            </a>

            <a
              href="https://web.facebook.com/ejie.daguplo.9"
              target="_blank"
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/40 transition-all group"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-6 h-6 group-hover:text-blue-400 transition-colors"
              />
              <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                Facebook
              </span>
            </a>

            <a
              href="mailto:ejiedaguplo@gmail.com"
              target="_blank"
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pink-400/40 transition-all group"
            >
              <FontAwesomeIcon
                icon={faGoogle}
                className="w-6 h-6 group-hover:text-pink-400 transition-colors"
              />
              <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                Gmail
              </span>
            </a>

            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-400/40 transition-all group cursor-default">
              <FontAwesomeIcon
                icon={faPhone}
                className="w-6 h-6 group-hover:text-green-400 transition-colors"
              />
              <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                +63 946 233 4179
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-10 border-t border-white/10 pt-6 px-4">
        © {new Date().getFullYear()}{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
          Ejie Daguplo
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
}