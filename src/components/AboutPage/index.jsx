import self from '../../assets/self.png'
import CountUp from "react-countup"

export default function AboutPage() {
    const stats = [
        {
            stat: "experience",
            endNum: 16,
            tagline: "years of professional experience",
            year: null
        },
        {
            stat: "music",
            endNum: 908,
            tagline: "music clients served",
            year: "since 2008"
        },
        {
            stat: "real estate",
            endNum: 46,
            tagline: "real estate clients served",
            year: "since 2019"
        },
        {
            stat: "software projects",
            endNum: 5,
            tagline: "software projects",
            year: "since 2023"
        },
    ]
    return (
        <>
            <h1 className="text-center text-xl">Hello! I'm Jae Ahn-Benton, a full-stack software engineer.</h1>
            <div className="flex justify-center items-center m-5">
                <p className="text-lg">I am a highly disciplined, solutions-driven developer who seeks for maximum efficiency in function and creative design in everything I do.</p>
                <img className="ml-3 w-[45vw] rounded-xl"src={self}/>
            </div>
            <div className="flex justify-center items-center m-5">
                <div className="flex flex-col justify-center mr-10  bg-[#c0f3f9] rounded-xl w-[50vw]">
                    {
                        stats.map(stat => {
                            return (
                                <div className="border-black border-2 rounded-xl m-3 p-2 text-center">
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
                <p className="w-[50vw] text-lg">My 16 years of being self-employed small business owner has allowed me to be flexible toward individual clients' needs and wants, always keeping their best interests at heart and going the extra mile without being asked to.</p>
            </div>
            <div className="flex items-center m-5">
                <p className="w-[50vw] text-lg">While I am currently focused on finding a full-time job as a software engineer, I am still more than happy to do freelance work! If you or someone you know need a website or an app for yourself or for your business, please don't hesitate to contact me. I offer competitive pricing and flexible schedule, and will work overtime to meet your deadline. Click on the email icon on the bottom right to send me a request.</p>
                <div className="w-[50vw] flex justify-center">
                    <a href="mailto:jaeahn2010@gmail.com">
                        <div className="flex flex-col justify-center items-center border-black border-2 rounded-full w-[100px] h-[100px] bg-[#c0f3f9] hover:cursor-pointer hover:animate-bounce">
                            <p className="text-3xl">@</p>
                            <p>Contact Me</p>
                        </div>
                    </a>
                </div>
            </div>
            <h3 className="text-3xl text-center">Technical Skills</h3>
            <div className="flex justify-center items">
                <div>
                    <img className="w-[100px]" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
                    <img className="w-[100px]" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
                    <img className="w-[100px]" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
                    <img className="w-[100px] h-auto" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
                </div>
                <div>
                    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
                    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
                    <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"/>
                    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
                    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
                    <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"/>
                </div>
                <div>
                    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
                    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
                    <img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"/>
                    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
                    <img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white"/>
                    <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>
                </div>
            </div>
            
        </>
    )
}