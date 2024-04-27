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
	const [currentUsername, setCurrentUsername] = useState('')
	const [currentUserId, setCurrentUserId] = useState('')
	const [hamburgerMenu, setHamburgerMenu] = useState(false)
	const navigate = useNavigate()

	let authLink = 
		<div className='border-2 border-t-white'>
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
		setCurrentUsername(`${userData.firstName} ${userData.lastName}`)
		setCurrentUserId(userData.userId)
	}

	useEffect(() => {
		if (loginStatus) getUserData()
	}, [loginStatus])

	if (loginStatus) {
		authLink = 
			<button
				className="text-red-800"
				onClick={() => {
					if (confirm("Are you sure you would like to log out?")) {
						localStorage.clear()
						setLoginStatus(false)
						navigate('/')
					}
				}}>
				Log Out
			</button>
		userGreeting =
			<h1 className="bg-stone-300 text-right text-sm sticky top-16">Logged in as {currentUsername}</h1>
	} else if (localStorage.userToken) {
		setLoginStatus(true)
	}

	return (
		<>
			<main className={`${hamburgerMenu ? 'nav-and-page-flex' : 'nav-and-page-block'}`}>
				<nav className={`${hamburgerMenu ? 'navbar-narrow w-1/6 bg-stone-200' : 'navbar-wide w-full'}`}>
					<div className='menu-toggle' onClick={() => setHamburgerMenu(!hamburgerMenu)}>
						<div className={`${hamburgerMenu ? 'hamburger-icon-active' : 'hamburger-icon-inactive'}`}></div>
						<div className={`${hamburgerMenu ? 'menu-items-visible text-right mr-5' : 'menu-items-invisible'}`}>
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
							{authLink}
						</div>
					</div>
				</nav>
				{userGreeting}
				<Routes id="pages">
					<Route path="/" element={<HomePage/>}/>
					<Route path="/about" element={<AboutPage/>}/>
					<Route path="/projects" element={<ProjectsPage/>}/>
					<Route path="/reviews" element={
						<ReviewsPage
							loginStatus={loginStatus}
							currentUsername={currentUsername}
							currentUserId={currentUserId}
						/>}/>
					<Route path="/auth/:formType" element={<AuthFormPage/>}/>
					<Route path="/*" element={<NotFoundPage/>}/>
				</Routes>
			</main>
			<footer className="sticky left-0 bottom-0 w-full py-2 bg-stone-200">
				<div className="flex justify-around items-center py-2">
					<a href="https://github.com/jaeahn2010/jaeahn2010" target="_blank" rel="noopener noreferrer">
						<img className="w-[40px] hover:animate-bounce" src={gitHub}/>
					</a>
					<a href="https://www.linkedin.com/in/jae-ahn-benton" target="_blank" rel="noopener noreferrer">
						<img className="w-[40px] hover:animate-bounce" src={linkedIn}/>
					</a>
					<a href="mailto:jaeahn2010@gmail.com">
						<img className="w-[40px] hover:animate-bounce" src={emailIcon}/>
					</a>
					</div>
				<p className="text-center border-t-2 border-black">Copyright &#169; 2024 Jae Ahn-Benton</p>
			</footer>
		</>
	)
}