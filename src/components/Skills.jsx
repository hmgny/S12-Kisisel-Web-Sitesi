

function Skills() {

    const skills= [{
        id:1,
        skill:"JAVASCRIPT",
        img:"../public/images/js.jpg"
    },
    { 
        id:2,
        skill:"REACT",
        img:"../public/images/react.png"

    },
    {
        id:3,
        skill:"REDUX",
        img:"../public/images/redux.png"
    },
    {
        id:4,
        skill:"NODE",
        img:"../public/images/node.jpg"
    },
    {
        id:5,
        skill:"VS CODE",
        img:"../public/images/vs_code.png"
    },
    {
        id:6,
        skill:"FIGMA",
        img:"../public/images/figma.jpg"
    },]


    return (
        <div className="flex flex-col items-center gap-12 p-20 dark:bg-middlegray">
            <p className="text-Siyah0a0a14 text-5xl dark:text-lightGray">Skills</p>
            <div className="flex gap-12">
                {skills.map((veri)=>{
                    return <div className="flex-col">
                    <img className="w-32 aspect-square object-cover" src={veri.img}/>
                    <p className="text-Gri text-2xl flex justify-center pt-4 dark:text-skill">{veri.skill}</p>
                </div>
                })}
            </div>
        </div>
    )
}

export default Skills