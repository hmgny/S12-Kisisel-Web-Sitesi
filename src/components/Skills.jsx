import { useContext } from "react";
import LanguageContext from '../context/LanguageContext';
import data from "../data.json"

function Skills() {
    const {language, setLanguage} = useContext(LanguageContext)
    const content = data[language]?.skills || {};

    return (
        <div className="flex flex-col items-center gap-12 xl:p-20 p-12 xl:pb-36 dark:bg-middlegray">
            <p className="text-Siyah0a0a14 xl:text-6xl text-5xl dark:text-lightGray">{content.skillsTitle}</p>
            <div className="flex flex-col lg:flex-row lg:gap-6 xl:gap-12 whitespace-nowrap">
                {content.skill?.map((veri,id)=>{
                    return <div key={id} className="flex-col justify-center p-3">
                    <img className="xl:w-32 w-24 aspect-square object-cover" src={veri.img}/>
                    <p className="text-Gri xl:text-2xl text-lg flex justify-center xl:pt-4 pt-2 dark:text-skill ">{veri.skill}</p>
                </div>
                })}
            </div>
        </div>
    )
}

export default Skills