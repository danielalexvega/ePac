import React from "react";
import { NavLink, useSearchParams } from "react-router";
import { createPreviewLink } from "../utils/link";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  style?: "orange" | "transparent";
  className?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children, style = "transparent", className = "" }) => {
  const [searchParams] = useSearchParams();
  const isPreview = searchParams.get("preview") === "true";

  return (
    <NavLink
      to={createPreviewLink(href, isPreview)}
      className={`${
        style === "orange" ? "button-orange" : ""
      } inline-block w-fit px-[15px] py-[15px] text-[14px] font-semibold uppercase text-white hover:text-[#fe6232] bg-[#fe6232] hover:bg-white border-2 border-[#fe6232] hover:border-[#fe6232] rounded transition-colors duration-200 ${className}`}
    >
      {children}
    </NavLink>
  );
};

export default ButtonLink;
