import self from '../../assets/self.png'
import fastForwardIcon from '../../assets/fast-forward.png'
import rewindIcon from '../../assets/rewind.png'
import CountUp from "react-countup"
import { useState, useRef, useEffect } from 'react'
import './styles.css'

export default function AboutPage({darkTheme}) {
    const [displayEvent, setDisplayEvent] = useState([0, false])
    const [dragPosition, setDragPosition] = useState(0)
    const [yearPosition, setYearPosition] = useState(0)
    const mouseStartRef = useRef(0)
    const boundaryRef = useRef(null)
    const barRef = useRef(null)
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
    const experiences = [
        {
            date: 'Aug 2003',
            event: "First took interest in coding and programming by creating simple apps on the TI-83 and TI-84 graphing calculators"
        },
        {
            date: 'Aug 2009',
            event: "Enrolled in a Java-based computer science course and passed with honors"
        },
        {
            date: 'Jun 2016',
            event: "Began self-study of C++ with Stroustroup's \"The C++ Programming Language\""
        },
        {
            date: 'Apr 2022',
            event: "Enrolled in OpenEDG: Entry-Level Python Programmer self-paced course"
        },
        {
            date: 'Jun 2022',
            event: "Became a certified Entry-Level Python Programmer"
        },
        {
            date: 'Dec 2023',
            event: "Enrolled in General Assembly: Software Engineering Immersive Program"
        },
        {
            date: 'Mar 2024',
            event: "Graduated from General Assembly: Software Engineering Immersive Program, with 4 software projects"
        },
        {
            date: 'Mar 2024',
            event: "Started working on 3 other software projects, as well as accepting freelance work"
        },
    ]
    const technicalSkillLinks = [
        'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
        'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
        'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
        'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
        'https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white',
        'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white',
        'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white',
        'https://img.shields.io/badge/Express.js-404D59?style=for-the-badge',
        'https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white',
        'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
        'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
        'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white',
        'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white',
        'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
        'https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white',
        'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white',
        'https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white',
        'https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white',
    ]

    let sectionTitleStyle = `${!darkTheme ? 'border-stone-800' : 'border-stone-200'} section-title m-5 text-3xl text-center w-5/6 border-stone-200 border-y-2 my-12 py-5 mx-auto`

    document.addEventListener("scroll", () => {
        const allElems = document.getElementsByTagName('*')
        for (let i = 0; i < allElems.length; i++) {
            let height = window.innerHeight
            let top = allElems[i].getBoundingClientRect().top
            let visibility = 100
            top < height - visibility ? allElems[i].classList.add('active') : allElems[i].classList.remove('active')
        }
    })

    const handleMouseDown = (evt) => {
        const boundary = boundaryRef.current
        const boundaryRect = boundary.getBoundingClientRect()
        const barRect = barRef.current.getBoundingClientRect()
        let mouseDifference = evt.clientX - barRect.left
        mouseStartRef.current = evt.clientX - dragPosition

        const onMouseMove = (evt) => {
            let newPos = evt.clientX - boundaryRect.left - mouseDifference
            newPos = Math.max(0, Math.min(boundaryRect.width - 42, newPos)) // Ensure the position is within boundary
            setDragPosition(newPos)
            setYearPosition(newPos / boundaryRect.width)
        }

        const onMouseUp = () => {
            document.removeEventListener("mousemove", onMouseMove)
            document.removeEventListener("mouseup", onMouseUp)
        }

        document.addEventListener("mousemove", onMouseMove)
        document.addEventListener("mouseup", onMouseUp)
        }

    return (
        <main className={`${!darkTheme ? 'text-stone-800' : 'text-stone-200'} w-screen py-5`}>
            <h1 className="text-center md:text-3xl my-5 py-5">Hello! I'm Jae Ahn-Benton, a full-stack software engineer.</h1>
            <div className="slide-left flex justify-center items-center m-5">
                <p className="md:text-lg max-w-[300px]">I am a highly disciplined, solutions-driven developer who seeks for maximum efficiency in function and creative design in everything I do.</p>
                <img className="ml-3 max-w-[200px] md:max-w-[300px] shadow-2xl rounded-xl"src={self}/>
            </div>
            <h3 className={sectionTitleStyle}>BACKGROUND</h3>
            <div className="slide-right flex justify-center items-center m-5">
                <div className={`${!darkTheme ? 'bg-gradient-to-b from-sky-100 via-sky-300 to-sky-500' : 'bg-gradient-to-b from-sky-300 via-sky-500 to-sky-700 text-stone-800'} flex flex-col justify-center mr-10  rounded-xl shadow-2xl max-w-[300px]`}>
                    {stats.map(stat => 
                        <div key={stat.id} className="border-black border-2 rounded-xl m-3 p-2 text-center hover:bg-gradient-to-r from-stone-400 via-stone-200 to-stone-400">
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
            <h3 className={sectionTitleStyle}>CONTACT ME</h3>
            <div className="slide-left flex justify-center items-center m-5">
                <p className="max-w-[300px] md:text-lg">While I am currently focused on finding a full-time job as a software engineer, I am still more than happy to do freelance work! If you need a website or an app for yourself or for your business, please don't hesitate to contact me. I offer competitive pricing and will work overtime to meet your deadline. Click on the button to the right to send me a request.</p>
                <div className="w-[300px] flex justify-center">
                    <a href="mailto:jaeahn2010@gmail.com">
                        <div className={`${!darkTheme ? 'bg-gradient-to-b from-sky-100 via-sky-300 to-sky-500' : 'bg-gradient-to-b from-sky-300 via-sky-500 to-sky-700 text-stone-800'} flex flex-col justify-center items-center rounded-full w-[100px] h-[100px] shadow-2xl hover:cursor-pointer hover:animate-spin`}>
                            <p className="text-3xl">@</p>
                            <p>Contact Me</p>
                        </div>
                    </a>
                </div>
            </div>
            <h3 className={sectionTitleStyle}>TECHNICAL SKILLS</h3>
            <div className="flex items-center justify-center h-1/2">
                <div className="relative w-64 h-64 perspective-1000">
                    <div className="absolute w-full h-2/3" style={{ transformStyle: 'preserve-3d', animation: 'reverse rotate 20s infinite linear' }}>
                    {technicalSkillLinks.map((skill, index) => (
                        <div key={index} className='absolute top-1/2 left-1/2 w-32 h-16 bg-gradient-to-r from-sky-500 via-sky-100 to-sky-500 text-white flex items-center justify-center rounded-xl' style={{transform: `rotateY(${index * 360 / technicalSkillLinks.length}deg) translateZ(400px)`}}>
                            <img src={skill}/>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <h3 className={sectionTitleStyle}>EXPERIENCE</h3>
            {/* drag bar */}
            <div ref={boundaryRef} className={`relative w-3/4 mx-auto my-5 rounded-xl h-[20px] shadow-3xl w-[50vw] bg-gradient-to-r from-stone-500 via-stone-100 to-stone-500`}>
                <button ref={barRef} className={`absolute w-[40px] h-[17px] top-[1.3px] rounded-full bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500`} style={{left: `${dragPosition}px`}} onMouseDown={handleMouseDown}></button>
            </div>
            <section className='flex flex-col justify-center items-center rounded-xl my-5 mx-auto p-5 w-1/2 h-[30vh] bg-gradient-to-r from-sky-500 via-sky-200 to-sky-500'>
                <p className='m-5 h-1/4 font-bold underline text-3xl text-stone-800'>{experiences.filter(experience => experiences.indexOf(experience) / experiences.length <= yearPosition).reverse()[0].date}</p>
                <p className='m-5 h-3/4 text-xl text-stone-800'>{experiences.filter(experience => experiences.indexOf(experience) / experiences.length <= yearPosition).reverse()[0].event}</p>
            </section>
        </main>
    )
}