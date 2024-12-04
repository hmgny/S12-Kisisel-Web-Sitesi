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
      <div className="flex flex-col items-end py-20 px-40 gap-20">
        <section className="flex gap-4">
          <button
            onClick={handleClick}
            className="bg-Pembe w-14 h-6 rounded-full border-none flex justify-end items-center"
          >
            <button className="bg-Sari w-4 h-4 rounded-full border-none"></button>
          </button>
          <p className="text-Gri text-sm flex items-center">
            {theme === "dark" ? content.mode.dark : content.mode.light}
          </p>
          <button
            onClick={handleLanguage}
            className="text-Gri text-sm border-none items-center"
          >
            {language === "en" ? (
              <span>
                <span className="text-Pembe">TÜRKÇE </span>'YE GEÇ
              </span>
            ) : (
              <span>SWITCH TO 
                <span className="text-Pembe"> ENGLISH</span>
              </span>
            )}
          </button>
        </section>

        <section className="lg:max-w lg:flex lg:gap-4 whitespace-break-spaces" >
          <div className="flex flex-col gap-10">
            <div className="flex">
            <p className="text-2xl lg:text-5xl">{content.hi} </p>
            <img
              className="w-8 lg:w-16"
              src="../public/images/Hi!.png"
              alt="el simgesi"
            />
            </div>       
            <p className="lg:text-5xl lg:leading-snug lg:max-w-screen-md flex text-2xl py-3">
              {content.paragraf}
            </p>
            <div className="lg:gap-6 lg:flex hidden">
              <img
                className="w-8 h-9"
                src="../public/images/LinkedIn.png"
                alt="linkedin"
              />
              <img
                className="w-8 h-9"
                src="../public/images/github.svg"
                alt="github simmgesi"
              />
            </div>
            <p className="lg:text-lg lg:max-w-md lg:leading-normal lg:flex hidden ">
              {content.aciklama}
            </p>
            {/*<p className='text-lg max-w-md leading-normal'>Currently <span className='text-Bordo'>Freelancing</span> for <span className='text-Bordo'>UX, UI, & Web Design</span> Project. Invite me to join your team → <span className='text-Bordo underline'>pratamaiosi@gmail.com</span></p> */}
          </div>

          <div className="pt-6 flex justify-center">
            <img
              className="w-96 aspect-square rounded-3xl object-cover absolute z-20 translate-x-7 translate-y-7 "
              src="../public/images/profil.png"
              alt="Profil resmi"
            />
            <div
              className="bg-Pembe w-96 h-96 rounded-3xl relative z-10 "
              src=""
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Header;
