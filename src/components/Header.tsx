// import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import IconSpain from "../icons/IconSpain";
import IconUnitedStates from "../icons/IconUnitedStates";
import IconGermany from "../icons/IconGermany";
import Container from "./Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
// import { IconButton } from "../icons/IconButton";
import ButtonLink from "./ButtonLink";

const Header: React.FC = () => {
  // const location = useLocation();
  // const isResearchPage = location.pathname.match(/^\/research\/[\w-]+$/);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const lang = searchParams.get("lang");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const languages = [
    { code: "USA", name: "English", flag: <IconUnitedStates className="w-4 h-4" /> },
    { code: "CAN", name: "English", flag: <IconUnitedStates className="w-4 h-4" /> },
    { code: "UK", name: "English", flag: <IconUnitedStates className="w-4 h-4" /> },
    { code: "AUS", name: "English", flag: <IconUnitedStates className="w-4 h-4" /> },
    { code: "AT", name: "Deutsch", flag: <IconGermany className="w-4 h-4" /> },
    { code: "FR", name: "Français", flag: <IconSpain className="w-4 h-4" /> },
    { code: "GHA", name: "English", flag: <IconUnitedStates className="w-4 h-4" /> },
    { code: "ID", name: "Bahasa Indonesia", flag: <IconUnitedStates className="w-4 h-4" /> },
    { code: "PL", name: "Polski", flag: <IconUnitedStates className="w-4 h-4" /> },
  ];

  return (
    <div>
      {/* Top Navigation Bar */}
      <div className="bg-[#f1f1f1] py-2">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">

              <div className="relative">
                <button
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  <IconUnitedStates className="w-4 h-4" />
                  <span>USA-English</span>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isLanguageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    {languages.map((language, index) => (
                      <button
                        key={index}
                        className="w-full px-4 py-2 text-left text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2"
                        onClick={() => setIsLanguageDropdownOpen(false)}
                      >
                        {language.flag}
                        <span>{language.code}-{language.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div>
              <span className="text-sm text-[#fe6232]">Avoid Tariffs with Domestic Packaging →</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">(844) 623-8603</span>
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>

          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <Container>
        <div className="py-8 flex flex-col gap-8 xl:gap-0 lg:flex-row items-center justify-between">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-12 xl:gap-32 items-center list-none">
            <Logo />

          </div>
          <div className="flex items-center gap-4">
            <div>
              <Navigation />

            </div>
            <ButtonLink href="/quote" style="orange" className="ml-[20px]">
              REQUEST A QUOTE
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
