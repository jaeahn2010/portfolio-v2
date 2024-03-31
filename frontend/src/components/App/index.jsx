import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import HomePage from '../HomePage'
import AboutPage from '../AboutPage'
import ProjectsPage from '../ProjectsPage'
import ReviewsPage from '../ReviewsPage'
import AuthFormPage from '../AuthFormPage'
import NotFoundPage from '../NotFoundPage'
import './styles.css'
import linkedIn from '../../assets/linkedin-logo.png'
import gitHub from '../../assets/github-logo.png'
import emailIcon from '../../assets/email-icon.png'
import { getUserByToken } from '../../../utils/backend'

export default function App() {
	const [loginStatus, setLoginStatus] = useState(false)
	const [currentUser, setCurrentUser] = useState('')
	const navigate = useNavigate()

	let authLink = 
		<div className="flex justify-end">
			<Link to="/auth/signup">
				<h1 className="rounded-xl p-2 my-3 cursor-default hover:scale-125">Sign Up</h1>
			</Link>
			<Link to="/auth/login">
				<h1 className="rounded-xl p-2 my-3 cursor-default hover:scale-125">Log In</h1>
			</Link>
		</div>
	let userGreeting = ''

	async function getUserData() {
		const userData = await getUserByToken()
		setCurrentUser(`${userData.firstName} ${userData.lastName}`)
	}

	useEffect(() => {
		if (loginStatus) getUserData()
	}, [])

	if (loginStatus) {
		authLink = 
		<div className="flex justify-end">
			<button
				className=""
				onClick={() => {
					if (confirm("Are you sure you would like to log out?")) {
						localStorage.clear()
						setLoginStatus(false)
						navigate('/')
					}
				}}>
				Log Out
			</button>
		</div>
		userGreeting =
		<h1 className="bg-stone-700 text-white text-right text-sm sticky top-16">Logged in as {currentUser}</h1>
	} else if (localStorage.userToken) {
		setLoginStatus(true)
	}

	return (
		<>
			<nav className="sticky left-0 top-0 w-full flex justify-between bg-stone-200">
				<div className='flex justify-start'>
					<Link to="/">
						<h1 className="rounded-xl p-2 my-3 cursor-default hover:scale-125">Home</h1>
					</Link>
					<Link to="/about">
						<h1 className="rounded-xl p-2 my-3 cursor-default hover:scale-125">About</h1>
					</Link>
					<Link to="/projects">
						<h1 className="rounded-xl p-2 my-3 cursor-default hover:scale-125">Projects</h1>
					</Link>
					<Link to="/reviews">
						<h1 className="rounded-xl p-2 my-3 cursor-default hover:scale-125">Reviews</h1>
					</Link>
				</div>
				{authLink}
			</nav>
			{userGreeting}
			<Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/about" element={<AboutPage/>}/>
				<Route path="/projects" element={<ProjectsPage/>}/>
				<Route path="/reviews" element={<ReviewsPage/>}/>
				<Route path="/auth/:formType" element={<AuthFormPage/>}/>
				<Route path="/*" element={<NotFoundPage/>}/>
			</Routes>
			<footer className="sticky left-0 bottom-0 w-full py-2 bg-stone-200">
				<div className="flex justify-around items-center py-2">
					<a href="https://github.com/jaeahn2010/jaeahn2010" target="_blank" rel="noopener noreferrer">
						<img className="w-[40px]" src={gitHub}/>
					</a>
					<a href="https://www.linkedin.com/in/jae-ahn-benton" target="_blank" rel="noopener noreferrer">
						<img className="w-[40px]" src={linkedIn}/>
					</a>
					<a href="mailto:jaeahn2010@gmail.com">
						<img className="w-[40px]" src={emailIcon}/>
					</a>
					</div>
				<p className="text-center border-t-2 border-black">Copyright &#169; 2024 Jae Ahn-Benton</p>
			</footer>
		</>
	)
}