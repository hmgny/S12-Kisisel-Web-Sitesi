import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import data from "../data.json";

function Profile() {
  const { language } = useContext(LanguageContext);
  const content = data[language]?.profile || {};

  return (
    <div className="flex flex-col bg-lightGray xl:py-20 xl:px-32 py-14 dark:bg-darkGray dark:text-white">
      <header className="xl:text-5xl text-4xl flex justify-center xl:pb-12 pb-6 ">
        {content.profileTitle}
      </header>
      <div className="lg:flex lg:justify-center whitespace-pre-wrap">
        <div className="flex justify-center">
          <div className="bg-white m-12 p-12 mt-0 flex flex-col xl:leading-6 rounded-xl lg:w-[520px] lg:h-h320 lg:absolute z-20 xl:gap-5 gap-3 dark:bg-Info">
            <section className="text-2xl text-Pembe">
              {content.basicTitle}
            </section>
            {content.basicInformation.map((data) => {
              return (
                <div className="flex gap-12 max-w-72">
                  <div className="text-base font-bold">{data.soru}</div>
                  <div className="text-base">{data.cevap}</div>
                </div>
              );
            })}
          </div>
          <div className="lg:bg-Gri lg:rounded-xl lg:p-12 lg:mt-0 lg:relative lg:z-10 lg:translate-x-2 lg:w-[520px] lg:h-h320 lg:translate-y-2 lg:m-12 lg:dark:bg-middlegray "></div>
        </div>
        <div className="mx-12 lg:flex lg:flex-col p-12 gap-6 lg:max-w-[520px] leading-6 whitespace-pre-wrap">
          <section className="text-black text-2xl font-bold lg:font-normal dark:text-white flex justify-center lg:justify-start">
            {content.aboutTitle}
          </section>
          {content.aboutMe.map((paraf) => {
            return (
              <p className="text-black text-lg dark:text-white">
                {paraf.paragraf}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
