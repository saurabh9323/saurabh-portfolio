import Test from "../../Test";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.0 }}
          transition={{ duration: 0.5 }}
        >
          Saurabh Pathak
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="img" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="img" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="img" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="img" />
          </a>
        </div>
      </div>
      {/* <Test /> */}
    </div>
  );
};

export default Navbar;
