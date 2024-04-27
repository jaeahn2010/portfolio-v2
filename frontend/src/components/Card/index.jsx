import gitHub from '../../assets/github-logo.png'
import placeholder from '../../assets/placeholder.webp'
import cssIcon from '../../assets/css.png'
import djangoIcon from '../../assets/django.png'
import ejsIcon from '../../assets/ejs.png'
import expressIcon from '../../assets/express.png'
import htmlIcon from '../../assets/html.png'
import javascriptIcon from '../../assets/javascript.png'
import materializeIcon from '../../assets/materialize.png'
import mongodbIcon from '../../assets/mongodb.png'
import nodejsIcon from '../../assets/nodejs.png'
import postgresIcon from '../../assets/psql.png'
import pythonIcon from '../../assets/python.png'
import reactIcon from '../../assets/react.png'
import tailwindIcon from '../../assets/tailwind.png'
import bootstrapIcon from '../../assets/bootstrap.png'

export default function Card(props) {
    const badgeArr = [
        {badgeName: "CSS", icon: cssIcon},
        {badgeName: "Django", icon: djangoIcon},
        {badgeName: "EJS", icon: ejsIcon},
        {badgeName: "Express.js", icon: expressIcon},
        {badgeName: "HTML", icon: htmlIcon},
        {badgeName: "JavaScript", icon: javascriptIcon},
        {badgeName: "Materialize", icon: materializeIcon},
        {badgeName: "MongoDB", icon: mongodbIcon},
        {badgeName: "Node.js", icon: nodejsIcon},
        {badgeName: "PostgreSQL", icon: postgresIcon},
        {badgeName: "Python", icon: pythonIcon},
        {badgeName: "React", icon: reactIcon},
        {badgeName: "Tailwind", icon: tailwindIcon},
        {badgeName: "Bootstrap", icon: bootstrapIcon},
    ]
    let webImage = ''
    if (props.screenshot === "#") {
        webImage = placeholder
    } else {
        webImage = props.screenshot
    }

    return (
        <div className="flex flex-col justify-between bg-gradient-to-b from-sky-100 via-sky-300 to-sky-500 rounded-xl m-3 px-5">
            <figure className="flex flex-col items-center">
                <div>
                    <a href={props.appLink} target="_blank" rel="noopener noreferrer">
                    <img className="w-full h-[90%] rounded-xl my-3 hover:scale-105" src={webImage}/>
                    </a>
                </div>
                <figcaption>
                    <div className="text-center my-3">
                        <strong>{props.projectName}</strong>
                        <p>{props.startDate} - {props.endDate}</p>
                    </div>
                    <p className="text-justify">{props.description}</p>
                </figcaption>
            </figure>
            <div className="mx-auto my-3 p-3 grid grid-rows-2 grid-flow-col gap-5 bg-sky-200 rounded-3xl">
                {
                    props.badges.map(badge => {
                        let badgeIcon
                        for (let badgeObj of badgeArr) {
                            if (badgeObj.badgeName === badge) {
                                badgeIcon = badgeObj.icon
                                break
                            }
                        }
                        return (
                            <div key={badge} className="flex flex-col items-center justify-center w-[45px]">
                                <img className="w-[30px] h-[30px]" src={badgeIcon}/>
                                <p className="text-[10px]">{badge}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-around items-center my-3">
                <a href={props.repoLink} target="_blank" rel="noopener noreferrer">
                    <img className="w-[50px]" src={gitHub}/>
            </a>
            </div>
        </div>
    )
}