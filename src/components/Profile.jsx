import { useContext } from "react";
import LanguageContext from '../context/LanguageContext';
import data from "../data.json"

function Profile() {
    const {language} = useContext(LanguageContext);
    const content = data[language]?.profile || {}



    return (
        <div className="flex flex-col bg-lightGray py-20 px-32 dark:bg-darkGray dark:text-white">
            <header className="text-5xl flex justify-center pb-12 ">{content.profileTitle}</header>
            <div className="lg:flex lg:justify-center whitespace-pre-wrap">
                <div className="flex justify-center">
                <div className="bg-white m-12 p-12 mt-0 flex flex-col leading-6 rounded-xl w-[520px] h-h320 absolute z-20 gap-6 dark:bg-Info">
                    <section className="text-2xl text-Pembe">{content.basicTitle}</section>
                    {
                        content.basicInformation.map((data)=>{
                            return <div className="flex gap-12 max-w-72">
                            <div className="text-base font-bold">{data.soru}</div>
                            <div className="text-base">{data.cevap}</div>
                        </div>
                        })
                    }
                </div>
                <div className="bg-Gri rounded-xl p-12 mt-0 relative z-10 translate-x-2 w-[520px] h-h320 translate-y-2 m-12 dark:bg-middlegray"></div>
                </div>
                <div className="mx-12 flex flex-col p-12 gap-6 lg:max-w-[520px] leading-6">
                    <section className="text-black text-2xl dark:text-white flex justify-center lg:justify-start">{content.aboutTitle}</section>
                    {content.aboutMe.map((paraf)=>{
                      return <p className="text-black text-lg dark:text-white">{paraf.paragraf}</p>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Profile