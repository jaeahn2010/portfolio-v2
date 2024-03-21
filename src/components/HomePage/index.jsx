import homepageImage from '../../assets/homepage-image.png'
import './styles.css'

export default function HomePage() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="welcome-image my-10">
                <img className="w-[600px] rounded-3xl" src={homepageImage}/>
            </div>
            <div>
                <p className="welcome-message font-mono">Welcome to Jae Ahn-Benton's website.</p>
            </div>
            <div className="code-greeting w-[600px] border-black border-4 bg-zinc-700 text-zinc-200 rounded-3xl mx-12 pl-12">
                <p className="font-mono">if (interested) &#123;</p>
                <p className="font-mono pl-6">enterWebsite<a>(clickMe);</a></p>
                <p className="font-mono">&#125; else if (hiring) &#123;</p>
                <p className="font-mono pl-6">downloadMyResume(here);</p>
                <p className="font-mono">&#125; else &#123;</p>
                <p className="font-mono pl-6">comeBackSoon(closeWindow)</p>
            </div>
        </div>
    )
}