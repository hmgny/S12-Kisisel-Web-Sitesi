

function Profile() {

    const basicInformation =[
        {
            id:1,
            soru:"Doğum tarihi",
            cevap:"24.03.1996"
        },
        {
            id:2,
            soru:"İkamet Şehri",
            cevap:"Ankara"
        },
        {
            id:3,
            soru:"Eğitim Durumu",
            cevap:"Hacettepe Ünv. Biyoloji Lisans, 2016"
        },
        {
            id:4,
            soru:"Tercih Ettiği Rol",
            cevap:"Frontend, UI"
        }
    ]

    const aboutTitle = "About Me"
    const aboutMe = [
        {
            id:1,
            paragraf: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        },
        {
            id:2,
            paragraf: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
        }
    ]


    return (
        <div className="flex flex-col bg-lightGray py-20 px-32">
            <header className="text-4xl flex justify-center">Profile</header>
            <div className="flex justify-center gap-6">
                <div>
                <div className="bg-white m-12 p-12 flex flex-col leading-6 rounded-xl w-w480 h-h320 absolute z-20 gap-6">
                    <section className="text-2xl text-Pembe">Basic Information</section>
                    {
                        basicInformation.map((data)=>{
                            return <div className="flex gap-12">
                            <div className="text-base font-bold">{data.soru}</div>
                            <div className="text-base">{data.cevap}</div>
                        </div>
                        })
                    }
                </div>
                <div className="bg-Gri rounded-xl p-12 relative z-10 translate-x-1 w-w480 h-h320 translate-y-1 m-12"></div>
                </div>
                <div className="mx-12 flex flex-col p-12 gap-6 max-w-96 leading-6">
                    <section className="text-black text-2xl">{aboutTitle}</section>
                    {aboutMe.map((paraf)=>{
                      return <p className="text-black text-lg">{paraf.paragraf}</p>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Profile