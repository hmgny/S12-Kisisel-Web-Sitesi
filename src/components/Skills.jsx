import { useContext } from "react";
import LanguageContext from '../context/LanguageContext';
import data from "../data.json"

function Skills() {
    const {language, setLanguage} = useContext(LanguageContext)
    const content = data[language]?.skills || {};

    return (
        <div className="flex flex-col items-center gap-12 p-20 dark:bg-middlegray">
            <p className="text-Siyah0a0a14 text-5xl dark:text-lightGray">{content.skillsTitle}</p>
            <div className="flex gap-12">
                {content.skill?.map((veri,id)=>{
                    return <div key={id} className="flex-col">
                    <img className="w-32 aspect-square object-cover" src={veri.img}/>
                    <p className="text-Gri text-2xl flex justify-center pt-4 dark:text-skill">{veri.skill}</p>
                </div>
                })}
            </div>
        </div>
    )
}

export default Skills