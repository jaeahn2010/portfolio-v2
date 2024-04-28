import Card from '../Card'
import portfolio from '../../assets/portfolio-ss.png'
import GLVMS from '../../assets/glvms-ss.png'
import heyThere from '../../assets/heythere-ss.png'
import RER from '../../assets/rer-ss.png'
import aimAlign from '../../assets/aimalign-ss.png'

export default function Gallery() {
    const projects = [
        {
            projectId: "JYAB0001",
            projectName: "Personal Portfolio",
            startDate: "December 2023",
            endDate: "December 2023",
            badges: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "React", "Tailwind"],
            screenshot: portfolio,
            description: "Explore my past, present, and future as a software developer. Find out how my past shaped me to be a unique software engineer, and browse what kind of projects I am working on now.",
            repoLink: "https://github.com/jaeahn2010/portfolio-v2",
            appLink: "#",
        },
        {
            projectId: "JYAB0002",
            projectName: "Greater Las Vegas Music Services",
            startDate: "January 2024",
            endDate: "January 2024",
            badges: ["HTML", "CSS", "JavaScript", "EJS", "Node.js", "Express.js", "MongoDB"],
            screenshot: GLVMS,
            description: "Need to hire a pianist for your event? Check out the Greater Las Vegas Music Services. On this website, you can customize your music setlist to perfectly match your event - weddings, corporate event, open house, private party, formal recitals, and more! And the exact cost of the music is disclosed to you up front. No hassle, no ambiguity!",
            repoLink: "https://github.com/jaeahn2010/music-services",
            appLink: "https://glv-music-services-9d9878ce0c35.herokuapp.com",
        },
        {
            projectId: "JYAB0003",
            projectName: "HeyThere",
            startDate: "February 2024",
            endDate: "February 2024",
            badges: ["Python", "HTML", "CSS", "Materialize", "PostgreSQL", "Django"],
            screenshot: heyThere,
            description: `Employers and managers, do you need a user-friendly online tool to bring your employees closer? HeyThere makes in-company communications efficient and creates a friendly and collaborative environment among your employees. (Created in collaboration with Milena Pupillo and XingYu 'Jason' Ma)`,
            repoLink: "https://github.com/milenap11/heythere",
            appLink: "https://heythere-hr-f3d27d8a0e61.herokuapp.com",
        },
        {
            projectId: "JYAB0004",
            projectName: "Real Estate Redirect",
            startDate: "March 2024",
            endDate: "In Progress",
            badges: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "React", "Tailwind"],
            screenshot: RER,
            description: "Are you a DIY kind of person when it comes to real estate? Whether you are a home seller or a buyer, you can use Real Estate Redirect to communicate and transact directly with each other, without the need of hiring any real estate agents.",
            repoLink: "https://github.com/jaeahn2010/real-estate-redirect",
            appLink: "https://real-estate-redirect-b5a52228fa63.herokuapp.com",
        },
        {
            projectId: "JYAB0005",
            projectName: "IYDV Auto-Scheduler",
            startDate: "March 2024",
            endDate: "In Progress",
            badges: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "React", "Tailwind"],
            screenshot: "#",
            description: "This is a private application for use by the admin of IYDV only. It is a tool that automates daily schedule creation for students, faculty and pianists based on individual requests and availability.",
            repoLink: "https://github.com/jaeahn2010/iydv-react",
            appLink: "#",
        },
        {
            projectId: "JYAB0006",
            projectName: "AimAlign",
            startDate: "March 2024",
            endDate: "In Progress",
            badges: ["Python", "HTML", "CSS", "Materialize", "PostgreSQL", "Django"],
            screenshot: aimAlign,
            description: "Having trouble organizing and achieving your goals? This user-friendly website is just right for you. Make an account, and simply set a goal with some checkpoints, and AimAlign will automatically remind you and keep track of your progress.",
            repoLink: "https://github.com/jaeahn2010/aim-align",
            appLink: "#",
        },
        {
            projectId: "JYAB0007",
            projectName: "NannyNetLV",
            startDate: "April 2024",
            endDate: "In Progress",
            badges: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "React", "Bootstrap"],
            screenshot: "#",
            description: "NannyNetLV brings parents and babysitters of the Las Vegas valley together by making the search simple. Find your perfect babysitter based on language spoken, location, childcare philosophy, and your budget!",
            repoLink: "https://github.com/jaeahn2010/nannynetlv",
            appLink: "#",
        },
    ]
    return (
        <div className="w-5/6 mx-auto grid sm:grid-cols-2 lg:grid-cols-3">
            {
                projects.map(project => {
                    return (
                        <Card
                            key={project.projectId}
                            projectName={project.projectName}
                            startDate={project.startDate}
                            endDate={project.endDate}
                            badges={project.badges}
                            screenshot={project.screenshot}
                            description={project.description}
                            repoLink={project.repoLink}
                            appLink={project.appLink}
                        />
                    )
                })
            }
        </div>
    )
}