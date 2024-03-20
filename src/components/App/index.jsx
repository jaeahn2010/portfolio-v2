import { Routes, Route, Link } from 'react-router-dom'
import HomePage from '../HomePage'
import AboutPage from '../AboutPage'
import ProjectsPage from '../ProjectsPage'
import NotFoundPage from '../NotFoundPage'
import './styles.css'
import linkedIn from '../../assets/linkedin-logo.png'
import gitHub from '../../assets/github-logo.png'
import emailIcon from '../../assets/email-icon.png'

export default function App() {
	return (
		<>
			<nav className="sticky left-0 top-0 w-full flex justify-around bg-stone-200">
				<Link to="/">
					<h1 className="rounded-xl p-2 my-3 bg-[#c0f3f9]">Home</h1>
				</Link>
				<Link to="/about">
					<h1 className="rounded-xl p-2 my-3 bg-[#c0f3f9]">About</h1>
				</Link>
				<Link to="/projects">
					<h1 className="rounded-xl p-2 my-3 bg-[#c0f3f9]">Projects</h1>
				</Link>
			</nav>
			<Routes>
				<Route path="/" element={<HomePage/>}></Route>
				<Route path="/about" element={<AboutPage/>}></Route>
				<Route path="/projects" element={<ProjectsPage/>}></Route>
				<Route path="/*" element={<NotFoundPage/>}></Route>
			</Routes>
			<footer className="sticky flex justify-around items-center left-0 bottom-0 w-full py-2 bg-stone-200">
				<a href="https://github.com/jaeahn2010/jaeahn2010" target="_blank" rel="noopener noreferrer">
					<img className="w-[70px]" src={gitHub}/>
				</a>
				<a href="https://www.linkedin.com/in/jae-ahn-benton" target="_blank" rel="noopener noreferrer">
					<img className="w-[50px]" src={linkedIn}/>
				</a>
				<a href="mailto:jaeahn2010@gmail.com">
					<img className="w-[50px]" src={emailIcon}/>
				</a>
			</footer>
		</>
	)
}