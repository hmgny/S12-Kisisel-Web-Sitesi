import { useContext } from "react";
import LanguageContext from '../context/LanguageContext';
import data from "../data.json"

function Skills() {
    const {language, setLanguage} = useContext(LanguageContext)
    const content = data[language]?.skills || {};

    return (
        <div className="flex flex-col items-center gap-12 p-20 pb-36 dark:bg-middlegray">
            <p className="text-Siyah0a0a14 text-6xl dark:text-lightGray">{content.skillsTitle}</p>
            <div className="flex gap-12 whitespace-nowrap">
                {content.skill?.map((veri,id)=>{
                    return <div key={id} className="flex-col">
                    <img className="lg:w-32 w-16 md:w-24 lg:aspect-square ml:aspect-square aspect-square lg:object-cover object-cover md:object-cover" src={veri.img}/>
                    <p className="text-Gri lg:text-2xl text-lg flex justify-center pt-4 dark:text-skill ">{veri.skill}</p>
                </div>
                })}
            </div>
        </div>
    )
}

export default Skills