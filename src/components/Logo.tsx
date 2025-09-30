import { FC } from "react";
import { Link } from "react-router-dom";

const Logo: FC = () => (
  <Link to="/">
    <div className="flex gap-4 items-center">
      <img 
        src="/ePaclogo.svg" 
        alt="ePac Logo" 
        height="54"
        className="h-[54px]"
      />
    </div>
  </Link>
);

export default Logo;