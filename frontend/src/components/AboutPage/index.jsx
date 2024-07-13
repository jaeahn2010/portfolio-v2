import self from '../../assets/self.png'
import CountUp from "react-countup"
import { useState } from 'react'
import './styles.css'

export default function AboutPage() {
    const [displayEvent, setDisplayEvent] = useState([0, false])
    const stats = [
        {
            id: 1,
            stat: "experience",
            endNum: 16,
            tagline: "years of professional experience",
            year: null
        },
        {
            id: 2,
            stat: "music",
            endNum: 927,
            tagline: "music clients served",
            year: "since 2008"
        },
        {
            id: 3,
            stat: "real estate",
            endNum: 46,
            tagline: "real estate clients served",
            year: "since 2019"
        },
        {
            id: 4,
            stat: "software projects",
            endNum: 7,
            tagline: "software projects",
            year: "since 2023"
        },
    ]
    const experience = [
        {
            position: 7,
            year: 'Mar 2024',
            event: "Graduated from General Assembly: Software Engineering Immersive Program"
        },
        {
            position: 6,
            year: 'Dec 2023',
            event: "Enrolled in General Assembly: Software Engineering Immersive Program"
        },
        {
            position: 5,
            year: 'Apr 2023',
            event: "Became a certified Entry-Level Python Programmer"
        },
        {
            position: 4,
            year: 'Nov 2022',
            event: "Enrolled in OpenEDG: Entry-Level Python Programmer self-paced course"
        },
        {
            position: 3,
            year: 'Jun 2016',
            event: "Began self-study of C++ with Stroustroup's \"The C++ Programming Language\""
        },
        {
            position: 2,
            year: 'Aug 2009',
            event: "Enrolled in a Java-based computer science course and passed with honors"
        },
        {
            position: 1,
            year: 'Aug 2003',
            event: "First took interest in coding and programming by creating simple apps on the TI-83 and TI-84 graphing calculators"
        }
    ]

    document.addEventListener("scroll", () => {
        const allElems = document.getElementsByTagName('*')
        for (let i = 0; i < allElems.length; i++) {
            let height = window.innerHeight
            let top = allElems[i].getBoundingClientRect().top
            let visibility = 100
            top < height - visibility ? allElems[i].classList.add('active') : allElems[i].classList.remove('active')
        }
    })

    return (
        <main className="w-screen">
            <h1 className="text-center md:text-3xl my-5">Hello! I'm Jae Ahn-Benton, a full-stack software engineer.</h1>
            <div className="slide-left flex justify-center items-center m-5">
                <p className="md:text-lg max-w-[300px]">I am a highly disciplined, solutions-driven developer who seeks for maximum efficiency in function and creative design in everything I do.</p>
                <img className="ml-3 max-w-[200px] md:max-w-[300px] shadow-2xl rounded-xl"src={self}/>
            </div>
            <h3 className="section-title m-5 text-3xl text-center">BACKGROUND</h3>
            <div className="slide-right flex justify-center items-center m-5">
                <div className="flex flex-col justify-center mr-10 bg-gradient-to-b from-sky-100 via-sky-300 to-sky-500 rounded-xl shadow-2xl max-w-[300px]">
                    {stats.map(stat => 
                        <div key={stat.id} className="border-black border-2 rounded-xl m-3 p-2 text-center">
                            <CountUp
                                className="text-3xl"
                                start={0}
                                end={stat.endNum}
                                duration={5}
                            />
                            <p className="text-[12px]">{stat.tagline}</p>
                            <p className="text-[12px]">{stat.year}</p>
                        </div>
                    )}
                </div>
                <p className="max-w-[300px] md:text-lg">My 16 years of being self-employed small business owner has allowed me to be flexible toward individual clients' needs and wants, always keeping their best interests at heart and going the extra mile without being asked to.</p>
            </div>
            <h3 className="section-title m-5 text-3xl text-center">CONTACT ME</h3>
            <div className="slide-left flex justify-center items-center m-5">
                <p className="max-w-[300px] md:text-lg">While I am currently focused on finding a full-time job as a software engineer, I am still more than happy to do freelance work! If you need a website or an app for yourself or for your business, please don't hesitate to contact me. I offer competitive pricing and will work overtime to meet your deadline. Click on the button to the right to send me a request.</p>
                <div className="w-[300px] flex justify-center">
                    <a href="mailto:jaeahn2010@gmail.com">
                        <div className="flex flex-col justify-center items-center border-black border-2 rounded-full w-[100px] h-[100px] bg-gradient-to-b from-sky-100 via-sky-300 to-sky-500 shadow-2xl hover:cursor-pointer hover:animate-bounce">
                            <p className="text-3xl">@</p>
                            <p>Contact Me</p>
                        </div>
                    </a>
                </div>
            </div>
            <h3 className="section-title m-5 text-3xl text-center">TECHNICAL SKILLS</h3>
            <div className="flex justify-center items-center">
                <p className="text-[100px] md:text-[200px]">&#91;</p>
                <div className="all-skills flex justify-center items">
                    <div className="skills-col-1">
                        <img className="skill" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
                        <img className="skill" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
                        <img className="skill" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
                        <img className="skill" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
                        <img className="skill" src='https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white'/>
                        <img className="skill" src='https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white'/>
                    </div>
                    <div className="skills-col-2">
                        <img className="skill" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
                        <img className="skill" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
                        <img className="skill" src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"/>
                        <img className="skill" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
                        <img className="skill" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
                        <img className="skill" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"/>
                    </div>
                    <div className="skills-col-3">
                        <img className="skill" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
                        <img className="skill" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
                        <img className="skill" src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"/>
                        <img className="skill" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
                        <img className="skill" src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white"/>
                        <img className="skill" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>
                    </div>
                </div>
                <p className="text-[100px] md:text-[200px]">&#93;</p>
            </div>
                
            <h3 className="section-title m-5 text-3xl text-center">EXPERIENCE</h3>
            <section className='my-5'>
                {experience.map(section => 
                    <div key={section.position} className="flex justify-center">
                        <div id={`timeline-${section.position}`} className={`${(section.position % 2) ? '' : 'border-black border-y-2 border-l-2 bg-gradient-to-b from-sky-100 via-sky-300'} ${(displayEvent[1] && displayEvent[0] === section.position) ? 'h-[160px]' : 'h-[40px]'} w-[120px] rounded-l-xl`}>
                            {!(section.position % 2) ?
                                <>
                                    <p id={`year-${section.position}`} className="text-center pt-2 font-bold cursor-pointer" onClick={(evt) => {
                                        evt.preventDefault()
                                        setDisplayEvent([section.position, !displayEvent[1]])
                                        setElemId(Number(evt.target.id.slice(5)))
                                    }}>{section.year}</p>
                                    <div className="flex flex-col h-3/4 justify-center">
                                        <p id={`event-${section.position}`} className={`text-[12px] text-center ${(displayEvent[1] && displayEvent[0] === section.position) ? 'block' : 'hidden'}`}>{section.event}</p>
                                    </div> 
                                </>
                            : ''}
                        </div>
                        <div className={`border-black border-x-2 w-[10px] ${(displayEvent[1] && displayEvent[0] === section.position) ? 'h-[200px]' : 'h-[40px]'}`}></div>
                        <div className={`${(section.position % 2) ? 'border-black border-y-2 border-r-2 bg-gradient-to-b from-sky-100 via-sky-300' : ''} ${(displayEvent[1] && displayEvent[0] === section.position) ? 'h-[160px]' : 'h-[40px]'} w-[120px] rounded-r-xl`}>
                            {(section.position % 2) ?
                                <>
                                    <p id={`year-${section.position}`} className="text-center pt-2 font-bold cursor-pointer" onClick={(evt) => {
                                        evt.preventDefault()
                                        setDisplayEvent([section.position, !displayEvent[1]])
                                        setElemId(Number(evt.target.id.slice(5)))
                                    }}>{section.year}</p>
                                    <div className="flex flex-col h-3/4 justify-center">
                                        <p id={`event-${section.position}`} className={`text-[12px] text-center ${(displayEvent[1] && displayEvent[0] === section.position) ? 'block' : 'hidden'}`}>{section.event}</p>
                                    </div> 
                                </>
                            : ''}
                        </div>
                    </div>
                )}
            </section>
        </main>
    )
}