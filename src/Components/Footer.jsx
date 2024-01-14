import { Link } from "react-router-dom";

const Footer = () => {
    return(
        
        <footer className="footer mt-auto py-3 bg-dark text-white">
        <div className="container text-center">
          <span>Los Pepes &copy; {new Date().getFullYear()}</span>
        </div>
      </footer>
    );

}

export default Footer;