import Card from '../Card'
import portfolio from '../../assets/portfolio-ss.png'
import GLVMS from '../../assets/glvms-ss.png'
import heyThere from '../../assets/heythere-ss.png'
import RER from '../../assets/rer-ss.png'

export default function Gallery() {
    const projects = [
        {
            projectId: "JYAB0001",
            projectName: "Personal Portfolio",
            startDate: "December 2023",
            endDate: "December 2023",
            badges: ["https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white", "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white", "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black", "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB", "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"],
            screenshot: portfolio,
            description: "Explore my past, present, and future as a software developer.",
            repoLink: "https://github.com/jaeahn2010/portfolio-v2",
            appLink: "#",
        },
        {
            projectId: "JYAB0002",
            projectName: "Greater Las Vegas Music Services",
            startDate: "January 2024",
            endDate: "January 2024",
            badges: ["https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white", "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white", "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white", "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black", "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge", "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"],
            screenshot: GLVMS,
            description: "Need to hire a pianist for your event? Check out the Greater Las Vegas Music Services. On their website, you can choose your desired repertoire and know the cost of the event up front.",
            repoLink: "https://github.com/jaeahn2010/music-services",
            appLink: "https://glv-music-services-9d9878ce0c35.herokuapp.com",
        },
        {
            projectId: "JYAB0003",
            projectName: "HeyThere",
            startDate: "February 2024",
            endDate: "February 2024",
            badges: ["https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white", "https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white", "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white", "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white", "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white", "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"],
            screenshot: heyThere,
            description: `Employers and managers, do you need a user-friendly online tool to bring your employees closer? HeyThere makes in-company communications efficient and creates a friendly and collaborative environment among your employees.
            
            (Created in collaboration with Milena Pupillo and XingYu 'Jason' Ma)`,
            repoLink: "https://github.com/milenap11/heythere",
            appLink: "https://heythere-hr-f3d27d8a0e61.herokuapp.com",
        },
        {
            projectId: "JYAB0004",
            projectName: "Real Estate Redirect",
            startDate: "March 2024",
            endDate: "March 2024",
            badges: ["https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white", "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white", "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black", "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white", "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge", "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB", "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white", "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"],
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
            badges: ["https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white", "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white", "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black", "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white", "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge", "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB", "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white", "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"],
            screenshot: "#",
            description: "This is a private application for use by the admin of IYDV only. It is a tool that automates daily schedule creation for students, faculty and pianists based on individual requests and availability.",
            repoLink: "https://github.com/jaeahn2010/iydv-react",
            appLink: "#",
        },
    ]
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
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