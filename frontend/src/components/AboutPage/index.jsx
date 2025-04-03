import self from '../../assets/self.png'
import CountUp from "react-countup"
import { useState, useRef, useEffect } from 'react'
import './styles.css'

export default function AboutPage({darkTheme, hamburgerMenu, isMobile}) {
    const [contactMeAnimate, setContactMeAnimate] = useState(false)
    const [emailClickable, setEmailClickable] = useState(false)
    const [techIndex, setTechIndex] = useState(0)
    const [techSrc, setTechSrc] = useState('')
    const [techDisplay, setTechDisplay] = useState('</>')
    const [techCategory, setTechCategory] = useState('')
    const [coordinates, setCoordinates] = useState([51, 126])
    const [currentExperienceDate, setCurrentExperienceDate] = useState('Aug 2003')
    const [svgLeftArm, setSvgLeftArm] = useState('')
    const [svgLeftLeg, setSvgLeftLeg] = useState('')
    const [svgRightArm, setSvgRightArm] = useState('')
    const [svgRightLeg, setSvgRightLeg] = useState('')
    const [svgFarObjects, setSvgFarObjects] = useState('')
    const [svgNearObjects, setSvgNearObjects] = useState('')
    const [objectMovementIndex, setObjectMovementIndex] = useState(0)
	const timelineRef = useRef(null)	
    const stats = [
        {
            id: 1,
            stat: "experience",
            endNum: 17,
            tagline: "years of professional experience",
            year: null
        },
        {
            id: 2,
            stat: "music",
            endNum: 1002,
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
            endNum: 10,
            tagline: "software projects",
            year: "since 2023"
        },
    ]
    const experiences = [
        {
            date: 'Aug 2003',
            event: "First took interest in coding and programming by creating apps (math games and simple shooting games) on the TI-83 and TI-84 graphing calculators"
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
            event: "Graduated from General Assembly: Software Engineering Immersive Program, with 4 software projects; also started working on more software projects, as well as accepting freelance work"
        },
        {
            date: 'Jul 2024',
            event: "Created a schedule automation app with React that helped a summer music festival cut down on administrative costs and time"
        },
        {
            date: 'Aug 2024',
            event: "Built and designed a business website for an opera singer"
        },
        {
            date: 'Dec 2024',
            event: "Used WordPress to build, design, and manage a music festival website for a local music school in Las Vegas, NV"
        },
        {
            date: 'Jan 2024',
            event: "Started to learn C# and Unity"
        },
        {
            date: 'Feb 2025',
            event: "Built and designed a business website, as well as manage a large database for a team of local independent contractor musicians"
        },
    ]
    const experienceDates = ['', '', '', '', ''].concat(experiences.map(experience => experience.date)).concat(['', '', '', '', ''])

    const technicalSkills = [
        ['https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white', 'host'],
        ['https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white', 'frame'],
        ['https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white', 'lang'],
        ['https://img.shields.io/badge/C%23-green?style=for-the-badge&logo=amazon-aws&logoColor=white', 'lang'],
        ['https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white', 'markup'],
        ['https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white', 'frame'],
        ['https://img.shields.io/badge/Express.js-404D59?style=for-the-badge', 'frame'],
        ['https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white', 'frame'],
        ['https://img.shields.io/badge/Git-E44C30?style=for-the-badge&logo=git&logoColor=white', 'version'],
        ['https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white', 'version'],
        ['https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white', 'host'],
        ['https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white', 'markup'],
        ['https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white', 'lang'],
        ['https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black', 'lang'],
        ['https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white', 'markup'],
        ['https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white', 'db'],
        ['https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white', 'host'],
        ['https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white', 'frame'],
        ['https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white', 'db'],
        ['https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white', 'lang'],
        ['https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB', 'frame'],
        ['https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white', 'frame'],
        ['https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white', 'lang'],
        ['https://img.shields.io/badge/Unity-gray?style=for-the-badge&logo=amazon-aws&logoColor=white', 'frame'],
        ['https://img.shields.io/badge/WordPress-blue?style=for-the-badge&logo=amazon-aws&logoColor=white', 'frame'],        
    ]

    const xChoices = []
    const yChoices = [126, 132, 138]
    for (let i = 51; i <= 135; i += 7) {
        xChoices.push(i)
    }
    const btnStyle = `${!darkTheme ? 'border-stone-800' : 'border-stone-200'} border-2 rounded-xl px-1 mx-2 my-2 w-full bg-gradient-to-r from-stone-300 via-stone-100 to-stone-300 hover:bg-gradient-to-r hover:from-amber-300 hover:via-amber-100 hover:to-amber-300 text-stone-800 lg:text-lg`
    let sectionTitleStyle = `${!darkTheme ? 'border-stone-800' : 'border-stone-200'} section-title m-5 text-3xl lg:text-4xl text-center w-5/6 border-stone-200 border-y-2 my-12 py-5 mx-auto`

    document.addEventListener("scroll", () => {
        const allElems = document.getElementsByTagName('*')
        for (let i = 0; i < allElems.length; i++) {
            let height = window.innerHeight
            let top = allElems[i].getBoundingClientRect().top
            let visibility = 100
            top < height - visibility ? allElems[i].classList.add('active') : allElems[i].classList.remove('active')
        }
    })

    function handleScrollToYear(index) {
		if (timelineRef.current) {
			const timelineWidth = timelineRef.current.offsetWidth
			const yearElement = timelineRef.current.children[index]
			const yearWidth = yearElement.clientWidth
			const scrollLeftPosition = yearElement.offsetLeft - timelineWidth / 2 + yearWidth / 2
			timelineRef.current.scrollTo({
				left: scrollLeftPosition,
				behavior: 'smooth',
			})
		}
	}

    function handleIndex(evt) {
        evt.target.id === 'left-arrow'
        ? setTechIndex(techIndex === 0 ? technicalSkills.length - 1 : techIndex - 1)
        : setTechIndex(techIndex === technicalSkills.length - 1 ? 0 : techIndex + 1)
    }

    function handleTechCategory(evt) {
        setTechCategory(evt.target.id)
    }

    function handleContactMeClick(evt) {
        if (!emailClickable) {
            evt.preventDefault()
            setContactMeAnimate(true)
            setTimeout(() => {
                setContactMeAnimate(false)
                setEmailClickable(true)
                evt.target.click()
            }, 2000)
        }
    }

    useEffect(() => {
        let techName = technicalSkills[techIndex][0].split('/')[4].split('-')[0].replace(/%23/g, '#').replace(/%2B/g, '+').replace(/_/g, ' ')
        for (let i = 0; i < techName.length; i++) {
            setTimeout(() => {
                setTechDisplay(techName.slice(0, i + 1))
                setCoordinates([xChoices[Math.floor(Math.random() * xChoices.length)], yChoices[Math.floor(Math.random() * yChoices.length)]])
            }, i * 100)
        }
        setTechSrc(technicalSkills[techIndex][0])
    }, [techIndex])

    useEffect(() => {
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                setObjectMovementIndex(prevIndex => {
                    setSvgFarObjects(`translate(${-6 * (prevIndex + 1)}, 0)`)
                    setSvgNearObjects(`translate(${-3 * (prevIndex + 1)}, 0)`)
                    return prevIndex + 1
                })
                if (i % 2 === 0) {
                    setSvgRightArm('rotate(-45 43 145)')
                    setSvgLeftArm('rotate(45 77 140)')
                    setSvgRightLeg('translate(-10, 0)')
                    setSvgLeftLeg('translate(10, 0)')
                } else {
                    setSvgRightArm('')
                    setSvgLeftArm('')
                    setSvgRightLeg('')
                    setSvgLeftLeg('')
                }
            }, i * 200)
        }
    }, [currentExperienceDate])

    return (
        <main className={`${!darkTheme ? 'text-stone-800' : 'text-stone-200'} ${hamburgerMenu ? 'opacity-50' : ''} w-screen py-5 duration-500`}>
            <div className="text-center my-5 py-5 flex flex-col justify-center items-center">
                <div>
                    <h1 className='text-2xl lg:text-4xl'>Jae Ahn-Benton</h1>
                    <div className={`about-title ${!darkTheme ? 'border-stone-900 light' : 'border-stone-200 dark'} border-t-2`}></div>
                </div>
                <div>
                    <h2 className='text-lg lg:text-2xl'>Software Engineer (Full-Stack)</h2>
                    <p className={`about-title shadow-xl shadow-stone-600 ${!darkTheme ? 'border-stone-900 light' : 'border-stone-200 dark'} border-t-2`}></p>
                </div>
            </div>
            <div className="slide-left flex justify-center items-center m-5">
                <p className="md:text-lg lg:text-2xl max-w-[300px]">I am a highly disciplined, solutions-driven developer who seeks for maximum efficiency in function and creative design in everything I do.</p>
                <img className="ml-3 max-w-[200px] md:max-w-[300px] shadow-2xl rounded-xl"src={self}/>
            </div>
            <h3 className={sectionTitleStyle}>BACKGROUND</h3>
            <div className="slide-right flex justify-center items-center m-5">
                <div className={`${!darkTheme ? 'bg-gradient-to-b from-stone-100 via-stone-300 to-stone-500' : 'bg-gradient-to-b from-stone-500 via-stone-300 to-stone-500 text-stone-800'} flex flex-col justify-center mr-10  rounded-xl shadow-2xl max-w-[300px]`}>
                    {stats.map(stat => 
                        <div key={stat.id} className="border-black border-2 rounded-xl m-3 p-2 text-center hover:bg-gradient-to-r from-amber-300 via-amber-100 to-amber-300">
                            <CountUp
                                className="text-3xl lg:text-4xl"
                                start={0}
                                end={stat.endNum}
                                duration={5}
                            />
                            <p className="text-[12px] lg:text-lg">{stat.tagline}</p>
                            <p className="text-[12px] lg:text-lg">{stat.year}</p>
                        </div>
                    )}
                </div>
                <p className="max-w-[300px] md:text-lg lg:text-2xl">My 16 years of being self-employed small business owner has allowed me to be flexible toward individual clients' needs and wants, always keeping their best interests at heart and going the extra mile without being asked to.</p>
            </div>
            <h3 className={sectionTitleStyle}>CONTACT ME</h3>
            <div className="slide-left flex justify-center items-center m-5">
                <p className="max-w-[300px] md:text-lg lg:text-2xl">While I am currently focused on finding a full-time job as a software engineer, I am still more than happy to do freelance work! If you need a website or an app for yourself or for your business, please don't hesitate to contact me. I offer competitive pricing and will work overtime to meet your deadline. Click on the button to the right to send me a request.</p>
                <div className="w-[300px] flex justify-center">
                    <a href="mailto:jaeahn2010@gmail.com" onClick={handleContactMeClick}>
                        <div className={`${!darkTheme ? 'bg-gradient-to-b from-stone-100 via-stone-300 to-stone-100 border-stone-500 border-2' : 'bg-gradient-to-b from-stone-300 via-stone-500 to-stone-300 text-stone-800'} ${contactMeAnimate ? 'contact-animate' : ''} flex flex-col justify-center items-center rounded-full w-[100px] h-[100px] shadow-2xl hover:cursor-pointer`}>
                            <p className="text-3xl">@</p>
                            <p>Contact Me</p>
                        </div>
                    </a>
                </div>
            </div>
            <h3 className={sectionTitleStyle}>TECHNICAL SKILLS</h3>
            <div className="flex flex-col items-center justify-center">
                <div className='h-1/12 items-center justify-center'>
                    <img className='w-full h-full' src={techSrc}/>
                </div>
                <div className='flex items-center justify-center'>
                    <button className='text-3xl hover:scale-125 duration-500' id='left-arrow' onClick={handleIndex}>&#xab;</button>
                    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <rect x="40" y="40" width="120" height="80" rx="10" ry="10" fill="#cccccc" stroke="#333333" strokeWidth="4"/>
                        <rect x="50" y="50" width="100" height="60" fill="#ffffff"/>
                        <text x="50%" y="42%" fill="#000000" fontSize="15" textAnchor="middle" dominantBaseline="middle">
                            {techDisplay}
                        </text>
                        <rect x='20' y='155' width='160' height='15' rx='10' ry='10' fill='#777777'/>
                        <polygon points='20,160 180,160 158,120 42,120' fill='#333333'/>
                        <polygon points='35,153 165,153 150,125 50,125' fill='#bbbbbb'/>
                        <rect x={coordinates[0]} y={coordinates[1]} width='7' height='6' fill='#333333'/>
                    </svg>
                    <button className='text-3xl hover:scale-125 duration-500' id='right-arrow' onClick={handleIndex}>&#xbb;</button>
                </div>
                <div className='flex w-11/12 lg:w-1/2 items-center text-sm'>
                    <div className='flex flex-col justify-center items-center w-1/2 lg:w-1/3 mx-auto'>
                        <button id='lang' onClick={handleTechCategory} className={btnStyle}>Languages</button>
                        <button id='frame' onClick={handleTechCategory} className={btnStyle}>Libraries/Frameworks</button>
                        <button id='host' onClick={handleTechCategory} className={btnStyle}>Cloud Platforms/Hosting</button>
                    </div>
                    <div className='flex flex-col justify-center items-center w-1/2 lg:w-1/3 mx-auto'>
                        <button id='db' onClick={handleTechCategory} className={btnStyle}>Databases</button>
                        <button id='version' onClick={handleTechCategory} className={btnStyle}>Version Control</button>
                        <button id='markup' onClick={handleTechCategory} className={btnStyle}>Markup</button>
                    </div>
                </div>
                <section className='w-1/2 flex justify-center items-center'>
                    <p className='text-9xl mr-12'>&#91;</p>
                    <div className='columns-3 p-2 text-center'>{technicalSkills.map(skill => 
                        <p key={skill[0]} className={`${!techCategory || techCategory === skill[1] ? '' : !darkTheme ? 'text-stone-300' : 'text-stone-700'} duration-500 lg:text-xl`}>{skill[0].split('/')[4].split('-')[0].replace(/%23/g, '#').replace(/%2B/g, '+').replace(/_/g, ' ')}</p>
                    )}</div>
                    <p className='text-9xl ml-12'>&#93;</p>
                </section>
            </div>
            <h3 className={sectionTitleStyle}>EXPERIENCE</h3>
            <div className='min-h-[25vh] w-11/12 lg:w-1/2 mx-auto'>
				<div
					ref={timelineRef}
					className={`scrollbar-hide overflow-x-scroll flex w-full mx-auto my-5 p-4 space-x-4 snap-x snap-mandatory ${!darkTheme ? 'border-stone-800' : 'border-stone-200'} border-y-2 font-courier`}
				>
					{experienceDates.map((date, index) => {
						return date
						? <button
							key={date}
							onClick={() => {
								isMobile ? handleScrollToYear(index) : handleScrollToYear(index - 3)
                                setCurrentExperienceDate(date)
							}}
							className={`flex-none w-24 hover:scale-110 duration-500 flex items-center justify-center font-bold snap-center lg:text-xl ${!darkTheme ? 'text-stone-800' : 'text-stone-200'} ${experienceDates.indexOf(currentExperienceDate) - index === 0 ? '' : Math.abs(experienceDates.indexOf(currentExperienceDate) - index) === 1 ? 'opacity-50' : Math.abs(experienceDates.indexOf(currentExperienceDate) - index) === 2 ? 'opacity-25' : 'opacity-10'}`}
						>{date}</button>
						: <div key={index} className="flex-none w-24"></div>
					})}
				</div>
                <div>
                    {experiences.filter(experience => experience.date === currentExperienceDate).map(experience => 
                    <>
                        <div key={experience.date} className={`${!darkTheme ? 'border-stone-900' : 'border-stone-200'} h-[30vh] flex justify-center items-center mx-auto lg:w-2/3`}>
                            <svg className={`${!darkTheme ? 'border-stone-800' : 'border-stone-200'} border-2 rounded-lg`}  width="375" height="200" viewBox="0 0 375 200" xmlns="http://www.w3.org/2000/svg">
                                {/* cactus 1 far */}
                                <polygon points='145,110 150,110 150,95 160,95 160,75 155,75 155,90 150,90 150,60 145,60 145,90 140,90 140,70 135,70 135,95 145,95' fill='#cccccc' transform={svgFarObjects} stroke={`${!darkTheme ? '#000000' : '#ffffff'}`}/>
                                {/* cactus 2 far */}
                                <polygon points='175,110 180,110 180,93 185,93 185,63 179,63 179,88 176,88 176,74 170,74 170,93 175,93' fill='#cccccc' transform={svgFarObjects} stroke={`${!darkTheme ? '#000000' : '#ffffff'}`}/>
                                {/* rocks 1 far */}
                                <polygon points='164,99 173,101 180,112 163,112' fill='#cccccc' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`} transform={svgFarObjects}/>
                                <polygon points='161,112 169,112 165,105 162,105' fill='#cccccc' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`} transform={svgFarObjects}/>
                                {/* rocks 2 far */}
                                <polygon points='360,99 369,101 376,112 359,112' fill='#cccccc' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`} transform={svgFarObjects}/>
                                <polygon points='357,112 365,112 361,105 358,105' fill='#cccccc' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`} transform={svgFarObjects}/>
                                {/* running figure */}
                                {/* head */}
                                <rect x='50' y='105' width='20' height='20' fill='#cccccc' rx='10' ry='10' stroke='#000000'/>
                                {/* eyes */}
                                <rect x='63' y='110' width='3' height='3' fill='#000000'/>
                                <rect x='58' y='110' width='3' height='3' fill='#000000'/>
                                {/* neck */}
                                <rect x='57' y='125' width='6' height='3' fill='#cccccc' stroke='#000000'/>
                                {/* torso */}
                                <rect x='48' y='128' width='24' height='33' fill='#cccccc' rx='6' ry='8' stroke='#000000'/>
                                {/* right arm */}
                                <polygon points='48,137 38,137 38,154 43,154 43,145 48,145' fill='#cccccc' transform={svgRightArm} stroke='#000000'/>
                                {/* left arm */}
                                <polygon points='72,140 72,148 82,148 82,131 77,131 77,140' fill='#cccccc' transform={svgLeftArm} stroke='#000000'/>
                                {/* left leg */}
                                <polygon points='51,160 57,160 57,174 43,174 43,168 51,168' fill='#cccccc' transform={svgLeftLeg} stroke='#000000'/>
                                {/* right leg */}
                                <polygon points='60,160 68,160 76,170 68,180 60,180 68,170' fill='#cccccc' transform={svgRightLeg} stroke='#000000'/>
                                {/* mountains far */}
                                <polyline points='0,60 60,0 120,60' fill='none' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`} strokeLinecap='round' strokeWidth='2'/>
                                <polyline points='100,40 140,0 200,60' fill='none' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`} strokeLinecap='round' strokeWidth='2'/>
                                <polyline points='180,40 220,0 280,60' fill='none' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`} strokeLinecap='round' strokeWidth='2'/>
                                <polyline points='260,40 300,0 360,60' fill='none' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`} strokeLinecap='round' strokeWidth='2'/>
                                <polyline points='340,40 380,0' fill='none' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`} strokeLinecap='round' strokeWidth='2'/>
                                {/* cactus near */}
                                <polygon points='245,180 255,180 255,160 270,160 270,120 260,120 260,150 255,150 255,110 245,110 245,150 240,150 240,130 230,130 230,160 245,160' fill='#cccccc' transform={svgNearObjects} stroke={`${!darkTheme ? '#000000' : '#ffffff'}`}/>
                                {/* rocks near */}
                                <polygon points='315,180 320,180 317,170 316,170' fill='#cccccc' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`} transform={svgNearObjects}/>
                                <polygon points='285,180 315,180 308,160 290,163' fill='#cccccc' stroke={`${!darkTheme ? '#000000' : '#ffffff'}`} transform={svgNearObjects}/>
                            </svg>
                        </div>
                        <div key={experience.event} className={`text-stone-800 m-5 p-3 border-stone-200 border-2 rounded-3xl bg-gradient-to-r from-stone-400 via-stone-100 to-stone-400 hover:from-amber-300 hover:via-amber-100 hover:to-amber-300 mx-auto min-h-[15vh] flex items-center duration-1000`}>
                            <p className='font-courier font-bold'>{experience.event}</p>
                        </div>
                    </>
                    )}
                </div>
			</div>
        </main>
    )
}