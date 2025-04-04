import Card from '../Card'
import portfolio from '../../assets/portfolio-ss.png'
import GLVMS from '../../assets/glvms-ss.png'
import heyThere from '../../assets/heythere-ss.png'
import RER from '../../assets/rer-ss.png'
import aimAlign from '../../assets/aimalign-ss.png'
import iydvAutoscheduler from '../../assets/iydv-autoscheduler-ss.png'
import wordLock from '../../assets/wordlock-ss.png'
import eriii from '../../assets/eriii-ss.png'
import lvChamberFest from '../../assets/lvchamberfest-ss.png'
import forteAndPiano from '../../assets/forteandpiano-ss.png'

export default function Gallery() {
    const projects = [
        {
            projectId: "JYAB0001",
            projectName: "Personal Portfolio",
            startDate: "March 2024",
            badges: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "React", "Tailwind"],
            screenshot: portfolio,
            description: "Explore my past, present, and future as a software developer. Find out how my past shaped me to be a unique software engineer, and browse what kind of projects I am working on now.",
            repoLink: "https://github.com/jaeahn2010/portfolio-v2",
            appLink: "#",
        },
        {
            projectId: "JYAB0002",
            projectName: "IYDV Auto-Scheduler",
            startDate: "July 2024",
            badges: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "React", "Tailwind"],
            screenshot: iydvAutoscheduler,
            description: "This is a private application for use by the admin of IYDV only. It is a tool that automates daily schedule creation for students, faculty and pianists based on individual requests and availability. In a need for automation of your company's scheduling? Please contact me directly!",
            repoLink: "https://github.com/jaeahn2010/iydv-react",
            appLink: "https://iydv-autoscheduler-25cd162a9a18.herokuapp.com",
        },
        {
            projectId: 'JYAB0003',
            projectName: 'ERIII: A business website',
            startDate: 'August 2024',
            badges: ['HTML', 'CSS', 'TypeScript', 'Node.js', 'React', 'Tailwind'],
            screenshot: eriii,
            description: "Check out the business website of the multitalented, versatile up-and-coming opera singer & model, Eugene Richards III! Need a website customized just for you or your business? Contact me directly.",
            repoLink: 'https://github.com/jaeahn2010/eriii',
            appLink: 'https://eugenerichardsiii.com',
        },
        {
            projectId: 'JYAB0004',
            projectName: 'LVChamberFest: A music festival website',
            startDate: 'December 2024',
            badges: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
            screenshot: lvChamberFest,
            description: "In the ever-growing city of Las Vegas, classical music is also thriving. Check out the new and exciting educational opportunity for young aspiring musicians to collaborate with one another through chamber music! Contact me directly if you'd like me to create a website for you using existing platforms like WordPress or Wix.",
            repoLink: '#',
            appLink: 'https://lvchamberfest.org',
        },
        {
            projectId: 'JYAB0005',
            projectName: 'Forte & Piano: A music business website',
            startDate: 'February 2025',
            badges: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "React", "Tailwind"],
            screenshot: forteAndPiano,
            description: "Need to hire a pianist for your event? Look no further than Forte & Piano. On this website, you can customize your music setlist to perfectly match your event - weddings, corporate event, open house, private party, formal recitals, and more! And the exact cost of the music is disclosed to you up front. No hassle, no ambiguity!",
            repoLink: "https://github.com/jaeahn2010/glv-music-services-v2",
            appLink: 'https://forteandpiano.org',
        },
        {
            projectId: "JYAB0006",
            projectName: "HeyThere",
            startDate: "Under Construction",
            badges: ["Python", "HTML", "CSS", "Materialize", "PostgreSQL", "Django"],
            screenshot: heyThere,
            description: `Employers and managers, do you need a user-friendly online tool to bring your employees closer? HeyThere makes in-company communications efficient and creates a friendly and collaborative environment among your employees. (Created in collaboration with Milena Pupillo and XingYu 'Jason' Ma)`,
            repoLink: "https://github.com/milenap11/heythere",
            appLink: "https://heythere-hr-f3d27d8a0e61.herokuapp.com",
        },
        {
            projectId: "JYAB0007",
            projectName: "Real Estate Redirect",
            startDate: "Coming Soon",
            badges: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "React", "Tailwind"],
            screenshot: RER,
            description: "Are you a DIY kind of person when it comes to real estate? Whether you are a home seller or a buyer, you can use Real Estate Redirect to communicate and transact directly with each other, without the need of hiring any real estate agents.",
            repoLink: "https://github.com/jaeahn2010/real-estate-redirect",
            appLink: "https://real-estate-redirect-b5a52228fa63.herokuapp.com",
        },
        {
            projectId: "JYAB0008",
            projectName: "AimAlign",
            startDate: "Coming Soon",
            badges: ["Python", "HTML", "CSS", "Materialize", "PostgreSQL", "Django"],
            screenshot: aimAlign,
            description: "Having trouble organizing and achieving your goals? This user-friendly website is just right for you. Make an account, and simply set a goal with some checkpoints, and AimAlign will automatically remind you and keep track of your progress.",
            repoLink: "https://github.com/jaeahn2010/aim-align",
            appLink: "#",
        },
        {
            projectId: "JYAB0009",
            projectName: "NannyNetLV",
            startDate: "Coming Soon",
            badges: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "React", "Bootstrap"],
            screenshot: "#",
            description: "NannyNetLV brings parents and babysitters of the Las Vegas valley together by making the search simple. Find your perfect babysitter based on language spoken, location, childcare philosophy, and your budget!",
            repoLink: "https://github.com/jaeahn2010/nannynetlv",
            appLink: "#",
        },
        {
            projectId: "JYAB0010",
            projectName: "WordLock",
            startDate: "Coming Soon",
            badges: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
            screenshot: wordLock,
            description: "Need a strong password or need to send a secret message? WordLock provides customized encryption methods to secure your data and protect your privacy. More encryption methods added frequently!",
            repoLink: "https://github.com/jaeahn2010/wordlock",
            appLink: "#",
        },
    ]
    return (
        <div className="w-5/6 mx-auto grid sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(project => 
                <Card
                    key={project.projectId}
                    projectName={project.projectName}
                    startDate={project.startDate}
                    badges={project.badges}
                    screenshot={project.screenshot}
                    description={project.description}
                    repoLink={project.repoLink}
                    appLink={project.appLink}
                />)}
        </div>
    )
}