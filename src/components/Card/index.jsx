import gitHub from '../../assets/github-logo.png'
import placeholder from '../../assets/placeholder.webp'

export default function Card(props) {
    let webImage = ''
    if (props.screenshot === "#") {
        webImage = placeholder
    } else {
        webImage = props.screenshot
    }

    return (
        <div className="flex flex-col justify-between bg-[#c0f3f9] rounded-xl m-3 px-5">
            <figure className="flex flex-col items-center">
                <div>
                    <a href={props.appLink} target="_blank" rel="noopener noreferrer">
                    <img className="w-[300px] h-[200px] rounded-xl my-3 hover:scale-105" src={webImage}/>
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
            <div className="flex justify-around items-center my-3">
                <a href={props.repoLink} target="_blank" rel="noopener noreferrer">
                    <img className="w-[50px]" src={gitHub}/>
            </a>
            </div>
        </div>
    )
}