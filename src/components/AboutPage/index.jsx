import self from '../../assets/self.png'
import CountUp from "react-countup"
import './styles.css'

export default function AboutPage() {
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
            endNum: 908,
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
            endNum: 5,
            tagline: "software projects",
            year: "since 2023"
        },
    ]
    const experience = [
        {
            position: 7,
            year: 2024,
            event: "Graduated from General Assembly: Software Engineering Immersive Program"
        },
        {
            position: 6,
            year: 2023,
            event: "Enrolled in General Assembly: Software Engineering Immersive Program"
        },
        {
            position: 5,
            year: 2023,
            event: "Became a certified Entry-Level Python Programmer"
        },
        {
            position: 4,
            year: 2022,
            event: "Enrolled in OpenEDG: Entry-Level Python Programmer self-paced course"
        },
        {
            position: 3,
            year: 2016,
            event: "Began self-study of C++ with Stroustroup's \"The C++ Programming Language\""
        },
        {
            position: 2,
            year: 2009,
            event: "Enrolled in a Java-based computer science course and passed with honors"
        },
        {
            position: 1,
            year: 2003,
            event: "First took interest in coding and programming by creating simple apps on the TI-83 and TI-84 graphing calculators"
        }
    ]

    document.addEventListener("scroll", () => {
        const allElems = document.getElementsByTagName('*')
        for (let i = 0; i < allElems.length; i++) {
            let height = window.innerHeight
            let top = allElems[i].getBoundingClientRect().top
            let visibility = 100;
            if (top < height - visibility) {
                allElems[i].classList.add("active");
              } else {
                allElems[i].classList.remove("active");
              }
        }
    })

    return (
        <>
            <h1 className="text-center text-3xl my-5">Hello! I'm Jae Ahn-Benton, a full-stack software engineer.</h1>
            <div className="slide-left flex justify-center items-center m-5">
                <p className="text-lg max-w-[200px]">I am a highly disciplined, solutions-driven developer who seeks for maximum efficiency in function and creative design in everything I do.</p>
                <img className="ml-3 max-w-[200px] rounded-xl"src={self}/>
            </div>
            <h3 className="section-title m-5 text-3xl text-center">BACKGROUND</h3>
            <div className="slide-right flex justify-center items-center m-5">
                <div className="flex flex-col justify-center mr-10 bg-[#c0f3f9] rounded-xl max-w-[200px]]">
                    {
                        stats.map(stat => {
                            return (
                                <div key={stat.id} className="border-black border-2 rounded-xl m-3 p-2 text-center">
                                    <CountUp
                                        className="text-3xl mr-3"
                                        start={0}
                                        end={stat.endNum}
                                        duration={5}
                                    />
                                    <p>{stat.tagline}</p>
                                    <p>{stat.year}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <p className="max-w-[200px] text-lg">My 16 years of being self-employed small business owner has allowed me to be flexible toward individual clients' needs and wants, always keeping their best interests at heart and going the extra mile without being asked to.</p>
            </div>
            <h3 className="section-title m-5 text-3xl text-center">CONTACT ME</h3>
            <div className="slide-left flex justify-center items-center m-5">
                <p className="max-w-[200px] text-lg">While I am currently focused on finding a full-time job as a software engineer, I am still more than happy to do freelance work! If you need a website or an app for yourself or for your business, please don't hesitate to contact me. I offer competitive pricing and will work overtime to meet your deadline. Click on the button to the right to send me a request.</p>
                <div className="max-w-[200px] flex justify-center">
                    <a href="mailto:jaeahn2010@gmail.com">
                        <div className="flex flex-col justify-center items-center border-black border-2 rounded-full w-[100px] h-[100px] bg-[#c0f3f9] hover:cursor-pointer hover:animate-bounce">
                            <p className="text-3xl">@</p>
                            <p>Contact Me</p>
                        </div>
                    </a>
                </div>
            </div>
            <h3 className="section-title m-5 text-3xl text-center">TECHNICAL SKILLS</h3>
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
            <h3 className="section-title m-5 text-3xl text-center">EXPERIENCE</h3>
            <div>
                {
                    experience.map(section => {
                        if (section.position % 2 !== 0) {
                            return (
                                <div key={section.position} className="relative flex justify-center items-center">
                                    <div className="w-[200px]"></div>
                                    <div className="timeline-dot absolute z-50 top-0 ml-1 mt-1 w-[15px] h-[15px] border-black border-2 rounded-full bg-[#c0f3f9]"></div>
                                    <div className="timeline-content border-black border-l-4 w-[200px] pl-3 pr-1">
                                        <p><strong>{section.year}</strong></p>
                                        <p>{section.event}</p>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={section.position} className="relative flex justify-center items-center">
                                    <div className="timeline-content border-black border-r-4 w-[208px] pr-3 pl-1">
                                        <p className="text-right"><strong>{section.year}</strong></p>
                                        <p className="text-right">{section.event}</p>
                                    </div>
                                    <div className="timeline-dot absolute z-50 top-0 ml-1 mt-1 w-[15px] h-[15px] border-black border-2 rounded-full bg-[#c0f3f9]"></div>
                                    <div className="w-[200px]"></div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}