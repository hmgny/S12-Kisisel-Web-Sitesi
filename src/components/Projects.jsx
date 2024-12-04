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

      <div className="flex lg:p-8 lg:gap-20 p-3 gap-10 justify-center whitespace-pre-wrap ">
        {content.projeler.map((proje) => {
          return (
            <div className=" bg-Mavi rounded-xl flex flex-col justify-between w-80 lg:w-[600px] dark:bg-darkYesil">
              <div className="pt-10 px-8 lg:gap-6 gap-2 flex flex-col">
                <h3 className="lg:text-3xl text-xl flex justify-center lg:justify-start font-bold">{proje.projeAdi}</h3>
                <p className="lg:pr-16 lg:text-base text-sm lg:max-w-[420px] lg:leading-6 font-normal">
                  {proje.aciklama}
                </p>
                <div className="flex flex-wrap max-w-80 gap-2">
                  {proje.buttons.map((data, index) => {
                    return (
                      <button
                        key={index}
                        className="bg-white border-none w-12 lg:w-20 h-5 lg:h-8 rounded-border72px lg:text-base text-xs font-medium dark:bg-Info"
                      >
                        {data.button}
                      </button>
                    );
                  })}
                </div>
                <div className="flex justify-between lg:pt-8 pt-4 lg:pb-20 pb-10 font-bold">
                  {proje.links.map((link, index) => {
                    return (
                      <a
                        key={index}
                        className="lg:text-xl text-sm text-black no-underline dark:text-white"
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
      <footer className="flex justify-center p-10 lg:p-40 gap-16">
        <p className="lg:text-5xl text-3xl max-w-96 flex flex-col text-end lg:leading-[63px]">
          {content.footer.message}
        </p>
        <nav className="flex flex-col leading-9">
          <a className="no-underline lg:text-2xl text-xl text-Github" href="">
            Github
          </a>
          <a
            className="no-underline lg:text-2xl text-xl text-Siyah0a0a14 dark:text-white"
            href=""
          >
            Personel Blog
          </a>
          <a className="no-underline lg:text-2xl text-xl text-Linkedin" href="">
            Linkedin
          </a>
          <a className="no-underline lg:text-2xl text-xl text-mail" href="">
            Email
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default Projects;
