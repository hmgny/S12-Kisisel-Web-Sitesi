

function Projects() {

    const projeler=[
        {
            id:1,
            projeAdı:"Random Jokes",
            acıklama:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
            img:"",
            links: [
                {
                    link:"Viev on Github"
                },
                {
                    link:"Go to app →"
                }
            ],
            buttons:[
                {
                    button:"react"
                },
                {
                    button:"vercel"
                },
                {
                    button:"axios"
                },
                {
                    button:"router"
                }
            ]
        },
        {
            id:2,
            projeAdı:"Are you bored?",
            acıklama:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
            img:"",
            buttons:[
                {
                    button:"react"
                },
                {
                    button:"redux"
                },
                {
                    button:"axios"
                },
                {
                    button:"router"
                },
                {
                    button:"vercel"
                }
            ]
        }
    ]


    return (
        <div className="p-12">
            <header className="flex justify-center text-4xl ">Projects</header>


            <div className="flex p-8 gap-12 justify-center">
               
                <div className="pt-8 px-8 gap-4 bg-Mavi flex flex-col max-w-md">
                    <h3 className="text-3xl font-bold">Random Jokes</h3>
                    <p className="pr-16 text-base max-w-80 leading-6 font-normal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
                    <div className="flex flex-wrap max-w-80 gap-2">
                        <button className="bg-white border-none w-20 h-8 rounded-border72px text-base">react</button>
                        <button className="bg-white border-none w-20 h-8 rounded-border72px text-base">vercel</button>
                        <button className="bg-white border-none w-20 h-8 rounded-border72px text-base">axios</button>
                        <button className="bg-white border-none w-20 h-8 rounded-border72px text-base">router</button>
                    </div>
                    <div className="flex justify-between pt-8 pb-20">
                        <a className="text-xl text-black no-underline" href="">Viev on Github</a>
                        <a className="text-xl text-black no-underline" href="">Go to app →</a>
                    </div>
                    <img className="max-w-full h-auto text-end" src="../public/images/proje.png"/>
                </div>

                <div className="pt-8 px-8 gap-4 bg-Yesil flex flex-col max-w-md">
                    <h3 className="text-3xl font-bold">Random Jokes</h3>
                    <p className="pr-16 text-base max-w-80 leading-6 font-normal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
                    <div className="flex flex-wrap max-w-80 gap-2">
                        <button className="bg-white border-none w-20 h-8 rounded-border72px text-base">react</button>
                        <button className="bg-white border-none w-20 h-8 rounded-border72px text-base">vercel</button>
                        <button className="bg-white border-none w-20 h-8 rounded-border72px text-base">axios</button>
                        <button className="bg-white border-none w-20 h-8 rounded-border72px text-base">router</button>
                    </div>
                    <div className="flex justify-between pt-8 pb-20">
                        <a className="text-xl text-black no-underline" href="">Viev on Github</a>
                        <a className="text-xl text-black no-underline" href="">Go to app →</a>
                    </div>
                    <img className="max-w-full h-auto text-end" src="../public/images/proje.png"/>
                </div>

            </div>


            <footer className="flex justify-center p-40 gap-16">
                <p className="text-5xl max-w-96 flex flex-col text-end leading-[63px]">Let's work together on your next product.</p>
                <nav className="flex flex-col leading-9">
                    <a className="no-underline text-2xl text-Github" href="">Github</a>
                    <a className="no-underline text-2xl text-Siyah0a0a14" href="">Personel Blog</a>
                    <a className="no-underline text-2xl text-Linkedin" href="">Linkedin</a>
                    <a className="no-underline text-2xl text-mail" href="">Email</a>
                </nav>
            </footer>
        </div>
    )
}

export default Projects