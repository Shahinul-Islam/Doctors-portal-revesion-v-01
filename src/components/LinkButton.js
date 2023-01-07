import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ children }) => {
  return (
    <Link className="bg-gradient-to-r from-[#19C0D3] to-[#0FCFEC] w-28 h-14 px-4 py-3 text-white text-sm rounded">
      {children}
    </Link>
  );
};

export default LinkButton;
