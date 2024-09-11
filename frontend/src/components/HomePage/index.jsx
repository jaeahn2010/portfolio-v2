import homepageImage from '../../assets/homepage-image.png'
import resume from '../../assets/resume.pdf'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import javascriptIcon from '../../assets/javascript.png'
import pythonIcon from '../../assets/python.png'

export default function HomePage({darkTheme, hamburgerMenu}) {
    const [languageSwitch, setLanguageSwitch] = useState('javascript')
    let languageSwitchStyle = 'h-[30px] hover:animate-spin hover:cursor-pointer'

    return (
        <section className={`flex flex-col justify-center items-center mx-auto duration-500 ${hamburgerMenu ? 'opacity-50' : ''}`}>
            <div className="welcome-image mt-16 mb-6 flex justify-center">
                <img className="w-3/4 max-w-[600px] rounded-3xl" src={homepageImage}/>
            </div>
            <div>
                <h1 className={`${!darkTheme ? 'text-stone-800' : 'text-stone-200'} welcome-message font-mono text-[12px] md:text-[18px] lg:text-[24px]`}>Welcome to Jae Ahn-Benton's website.</h1>
            </div>
            <div className={`${!darkTheme ? 'border-stone-800' : 'border-stone-200'} code-greeting w-3/4 max-w-[600px] bg-gradient-to-r from-stone-800 via-stone-500 to-stone-800 text-stone-200 rounded-3xl mx-12 pl-12 py-2 mt-5 mb-2 text-[14px] md:text-[18px] lg:text-[24px]`}>
                <p className="font-mono">{languageSwitch === 'javascript' ? 'if (interested) {' : 'if interested:'}</p>
                <p className="font-mono pl-10">{languageSwitch === 'javascript' ? 'readMore' : 'read_more'}&#40;
                    <Link to="/about" className="font-mono text-yellow-400 hover:underline">{languageSwitch === 'javascript' ? 'aboutMe' : 'about_me'}</Link>
                    <span className="font-mono">&#41;{languageSwitch === 'javascript' ? ';' : ''}</span>
                </p>
                <p className="font-mono">{languageSwitch === 'javascript' ? '} else if (hiring) {' : 'elif hiring: '}</p>
                <p className="font-mono pl-10">download&#40;
                    <a href={resume} download className="font-mono text-yellow-400 cursor-pointer hover:underline">{languageSwitch === 'javascript' ? 'myResume' : 'my_resume'}</a>
                &#41;{languageSwitch === 'javascript' ? ';' : ''}</p>
                <p className="font-mono">{languageSwitch === 'javascript' ? '} else {' : 'else: '}</p>
                <p className="font-mono pl-10">{languageSwitch === 'javascript' ? 'contactMe' : 'contact_me'}&#40;
                    <a href="mailto:jaeahn2010@gmail.com" className="font-mono text-yellow-400 cursor-pointer hover:underline">here</a>
                &#41;{languageSwitch === 'javascript' ? ';' : ''}</p>
                {languageSwitch === 'javascript' ? <p className="font-mono">&#125;</p> : <p className='pb-4'></p>}
            </div>
            <div className='flex justify-around w-1/2 mt-5 mb-10'>
                <img className={languageSwitchStyle} src={javascriptIcon} onClick={() => setLanguageSwitch('javascript')}/>
                <img className={languageSwitchStyle} src={pythonIcon} onClick={() => setLanguageSwitch('python')}/>
            </div>
        </section>
    )
}