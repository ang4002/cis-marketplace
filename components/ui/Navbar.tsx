import React from "react";
import ProfilePicture from "../widgets/ProfilePicture";
import { FaShoppingCart } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <>
      <nav>
        <div>
          <img src={"/cislogo.png"} alt="CIS Logo" />
        </div>
        <div className="nav-right">
          <FaShoppingCart size={"30px"} style={{ marginRight: "30px", cursor: "pointer" }} />
          <ProfilePicture size={"45px"} />
        </div>
      </nav>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100vw;
          background: var(--primaryBackgroundColor);
          padding: 30px 75px;
          box-shadow: 0px 8px 8px rgba(227, 227, 227, 0.25);
        }

        .nav-right {
          display: flex;
          align-items: center;
        }

        img {
          height: 45px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Navbar;
