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
import flaskIcon from '../../assets/flask.png'
import typescriptIcon from '../../assets/typescript.png'

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
        {badgeName: "Flask", icon: flaskIcon},
        {badgeName: 'TypeScript', icon: typescriptIcon}
    ]
    let webImage = ''
    webImage = props.screenshot === '#' ? placeholder : props.screenshot

    return (
        <div className="flex flex-col bg-gradient-to-b from-stone-100 via-stone-300 to-stone-500 rounded-xl m-3 px-5 py-6">
            <figure className="flex flex-col items-center basis-3/4">
                <div className="mb-5">
                    <a href={props.appLink} target="_blank" rel="noopener noreferrer">
                        <img className="w-full rounded-xl my-3 hover:scale-105" src={webImage}/>
                    </a>
                </div>
                <figcaption className="">
                    <div className="text-center my-3">
                        <strong>{props.projectName}</strong>
                        <p>{props.startDate}</p>
                    </div>
                    <p className="text-justify">{props.description}</p>
                </figcaption>
            </figure>
            <div className="p-3 grid grid-rows-2 grid-flow-col gap-3 bg-stone-200 rounded-3xl max-w-[300px] mx-auto mt-5">
                {props.badges.map(badge => 
                    <div key={badge} className="flex flex-col items-center justify-center w-[40px] mx-auto">
                        <img className="w-[30px] h-[30px]" src={badgeArr.find(eachBadge => eachBadge.badgeName === badge).icon}/>
                        <p className="text-[10px]">{badge}</p>
                    </div>
                )}
            </div>
            <div className="flex justify-around items-center mt-6 mb-3">
                <a href={props.repoLink} target="_blank" rel="noopener noreferrer">
                    <img className="w-[50px]" src={gitHub}/>
                </a>
            </div>
        </div>
    )
}