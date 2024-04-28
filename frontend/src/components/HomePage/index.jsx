import homepageImage from '../../assets/homepage-image.png'
import resume from '../../assets/resume.pdf'
import { Link } from 'react-router-dom'
import './styles.css'

export default function HomePage() {
    return (
        <section className="flex flex-col justify-center items-center mx-auto">
            <div className="welcome-image my-10 flex justify-center">
                <img className="w-3/4 max-w-[600px] rounded-3xl" src={homepageImage}/>
            </div>
            <div>
                <p className="welcome-message font-mono text-[12px] md:text-[18px] lg:text-[24px]">Welcome to Jae Ahn-Benton's website.</p>
            </div>
            <div className="code-greeting w-3/4 max-w-[600px] border-black border-4 bg-zinc-700 text-zinc-200 rounded-3xl mx-12 pl-12 mt-5 mb-[20vh] text-[14px] md:text-[18px] lg:text-[24px]">
                <p className="font-mono">if (interested) &#123;</p>
                <p className="font-mono pl-6">readMore&#40;
                    <Link to="/about" className="font-mono text-yellow-600 hover:underline">aboutMe</Link>
                    <span className="font-mono">&#41;;</span>
                </p>
                <p className="font-mono">&#125; else if (hiring) &#123;</p>
                <p className="font-mono pl-6">download&#40;
                    <a href={resume} download className="font-mono text-yellow-600 cursor-pointer hover:underline">myResume</a>
                &#41;;</p>
                <p className="font-mono">&#125; else &#123;</p>
                <p className="font-mono pl-6">playSomeGames&#40;
                    <span className="font-mono text-yellow-600 cursor-pointer hover:underline">here</span>
                &#41;;</p>
                <p className="font-mono">&#125;</p>
            </div>
        </section>
    )
}