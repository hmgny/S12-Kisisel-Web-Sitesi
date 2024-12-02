import React from 'react';

function Header() {


    return (
    <div className='bg-lightGray flex justify-center'>
      <div className='flex flex-col items-end py-20 px-40 gap-20'>
        <section className='flex gap-4'>
          <button className='bg-Pembe w-14 h-6 rounded-full border-none flex justify-end items-center'><button className='bg-Sari w-4 h-4 rounded-yuvarlak border-none'></button>
          </button>
          <p className='text-Gri text-sm flex items-center'>DARK MODE</p>
          <button  className='text-Gri text-sm border-none items-center'><span className="text-Pembe">TÜRKÇE</span>'YE GEÇ</button>
        </section>


        <section className='max-w flex gap-4'>
          <div className='flex flex-col gap-12'>
            <img className='w-24'src="../public/images/Hi!.png" alt="el simgesi"/>            
            <p className='text-5xl leading-snug max-w-screen-md'>I'm Almila. I'm a full-stack developer. I can craft solid and scalable frontend products. Let's meet!</p>
            <div className='gap-6 flex'>
              <img className='w-8 h-9'src="../public/images/LinkedIn.png" alt="linkedin"/>
              <img className='w-8 h-9'src="../public/images/github.svg" alt="github simmgesi"/>
            </div>
            <p className='text-lg max-w-md leading-normal'>Currently <span className='text-Bordo'>Freelancing</span> for <span className='text-Bordo'>UX, UI, & Web Design</span> Project. Invite me to join your team → <span className='text-Bordo underline'>pratamaiosi@gmail.com</span></p>
          </div>

          <div >
          <img className='w-96 aspect-square rounded-3xl object-cover absolute z-20' src="../public/images/profil.png" alt="Profil resmi"/>
          <img className='bg-Pembe w-96 aspect-square rounded-3xl relative z-10 translate-x-3 translate-y-3' src=""/>
            
          </div>
        </section>
      </div>
      </div>
    );
}

export default Header 