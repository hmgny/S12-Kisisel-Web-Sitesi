import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import data from "../data.json";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const { language, setLanguage } = useContext(LanguageContext);
  const content = data[language]?.header || {};

  const handleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  return (
    <div className="bg-lightGray flex justify-center dark:bg-darkGray dark:text-white">
      <div className="flex flex-col sm:items-end items-center py-20 px-40 sm:gap-20 gap-10">
        <section className="gap-4 flex">
          <div className="sm:flex sm:gap-2 hidden">
            <button
              onClick={handleClick}
              className={`${
                theme === "dark" ? "justify-end" : "justify-start"
              } bg-Pembe w-14 h-6 rounded-full border-none flex items-center`}
            >
              <div className="bg-Sari w-4 h-4 mx-1 rounded-full border-none"></div>
            </button>
          </div>
          <button
            onClick={handleClick}
            className={`${
              theme === "light" ? "text-white" : "text-black"
            } sm:text-Gri text-sm flex sm:items-center`}
          >
            {theme === "dark" ? content.mode.dark : content.mode.light}
          </button>

          <button
            onClick={handleLanguage}
            className="text-Gri text-sm border-none items-center"
          >
            {language === "en" ? (
              <span>
                <span className="text-Pembe">TÜRKÇE </span>'YE GEÇ
              </span>
            ) : (
              <span>
                SWITCH TO
                <span className="text-Pembe"> ENGLISH</span>
              </span>
            )}
          </button>
        </section>

        <section className="lg:max-w lg:flex lg:gap-4 whitespace-break-spaces">
          <div className="flex flex-col gap-2 lg:gap-4 xl:gap-10">
            <div className="flex">
              <p className="text-2xl lg:text-4xl xl:text-5xl">{content.hi} </p>
              <img
                className="w-8 lg:w-16"
                src="/images/Hi!.png"
                alt="el simgesi"
              />
            </div>
            <p className="lg:text-2xl xl:text-3xl lg:leading-snug lg:max-w-screen-md flex text-xl py-3">
              {content.paragraf}
            </p>
            <div className="xl:gap-6 lg:gap-2 lg:flex hidden">
              <img
                className="lg:w-6 lg:h-7 xl:w-8 xl:h-9"
                src="/images/LinkedIn.png"
                alt="linkedin"
              />
              <img
                className="lg:w-6 lg:h-7 xl:w-8 xl:h-9"
                src="/images/github.svg"
                alt="github simmgesi"
              />
            </div>
            <p className="lg:text-sm xl:text-lg lg:max-w-md lg:leading-normal lg:flex hidden ">
              {content.aciklama}
            </p>
            {/*<p className='text-lg max-w-md leading-normal'>Currently <span className='text-Bordo'>Freelancing</span> for <span className='text-Bordo'>UX, UI, & Web Design</span> Project. Invite me to join your team → <span className='text-Bordo underline'>pratamaiosi@gmail.com</span></p> */}
          </div>

          <div className="pt-6 flex justify-center">
            <img
              className="xl:w-96 lg:w-64 w-56 aspect-square rounded-3xl object-cover absolute z-20 xl:translate-x-7 xl:translate-y-7 lg:translate-x-4 lg:translate-y-4 translate-x-2 translate-y-2"
              src="/images/profil.png"
              alt="Profil resmi"
            />
            <div
              className="bg-Pembe xl:w-96 xl:h-96 lg:w-64 lg:h-64 w-56 h-56 rounded-3xl relative z-10 "
              src=""
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Header;
