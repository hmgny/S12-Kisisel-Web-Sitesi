import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import data from "../data.json";

function Projects() {
  const { language, setLanguage } = useContext(LanguageContext);
  const content = data[language]?.projects || {};

  return (
    <div className="p-24 dark:bg-middlegray dark:text-white">
      <header className="flex justify-center text-5xl pb-6">
        {content.projectsTitle}
      </header>

      <div className="flex p-8 gap-20 justify-center">
        {content.projeler.map((proje) => {
          return (
            <div className=" bg-Mavi rounded-xl flex flex-col justify-between w-[600px] dark:bg-darkYesil">
              <div className="pt-10 px-8 gap-6 flex flex-col">
                <h3 className="text-3xl font-bold">{proje.projeAdi}</h3>
                <p className="pr-16 text-base max-w-[420px] leading-6 font-normal">
                  {proje.aciklama}
                </p>
                <div className="flex flex-wrap max-w-80 gap-2">
                  {proje.buttons.map((data, index) => {
                    return (
                      <button
                        key={index}
                        className="bg-white border-none w-20 h-8 rounded-border72px text-base font-medium dark:bg-Info"
                      >
                        {data.button}
                      </button>
                    );
                  })}
                </div>
                <div className="flex justify-between pt-8 pb-20 font-bold">
                  {proje.links.map((link, index) => {
                    return (
                      <a
                        key={index}
                        className="text-xl text-black no-underline dark:text-white"
                        href=""
                      >
                        {link.link}
                      </a>
                    );
                  })}
                </div>
              </div>

              <img
                className="max-w-full h-auto text-end"
                src="../public/images/proje.png"
              />
            </div>
          );
        })}
      </div>
      <footer className="flex justify-center p-40 gap-16">
        <p className="text-5xl max-w-96 flex flex-col text-end leading-[63px]">
          {content.footer.message}
        </p>
        <nav className="flex flex-col leading-9">
          <a className="no-underline text-2xl text-Github" href="">
            Github
          </a>
          <a
            className="no-underline text-2xl text-Siyah0a0a14 dark:text-white"
            href=""
          >
            Personel Blog
          </a>
          <a className="no-underline text-2xl text-Linkedin" href="">
            Linkedin
          </a>
          <a className="no-underline text-2xl text-mail" href="">
            Email
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default Projects;
