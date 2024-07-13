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

	let h1Style = 'p-2 my-3 hover:scale-110 duration-500 hover:underline'
	let authStyle = 'border-stone-800 border-2 text-center my-5 mx-4 rounded-xl shadow-xl hover:scale-110 duration-500 bg-gradient-to-r from-sky-300 via-sky-100 to-sky-300'
	let hamburgerStyle = 'border-black border-2 mx-4 max-w-[30px] rounded-xl duration-500 ease-in-out'
	let bounceImgStyle = 'w-[40px] hover:animate-bounce'
	let authLink = 
		<div className='my-5'>
			<Link to="/auth/signup">
				<h1 className={authStyle}>Sign Up</h1>
			</Link>
			<Link to="/auth/login">
				<h1 className={authStyle}>Log In</h1>
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
			<button className='border-stone-800 border-2 text-center my-5 mx-4 rounded-xl shadow-xl hover:scale-110 duration-500 bg-gradient-to-r from-red-300 via-red-100 to-red-300 px-2 py-1' onClick={() => {
				if (confirm("Are you sure you would like to log out?")) {
					localStorage.clear()
					setLoginStatus(false)
					navigate('/')
				}
			}}>Log Out</button>
		userGreeting =
			<div className='text-sm mt-16'>
				<p className='rounded-xl p-2'>Logged in as</p>
				<p className="text-green-700">{currentUsername}</p>
			</div>
	} else if (localStorage.userToken) {
		setLoginStatus(true)
	}

	return (
		<>
			<main className='relative'>
				<div className={`${hamburgerMenu ? 'bg-stone-300' : ''} absolute duration-500 ease-in-out absolute left-0 top-0 hover:cursor-pointer w-1/6 z-10`} onClick={() => setHamburgerMenu(!hamburgerMenu)}>
					<div className={`${hamburgerMenu ? 'rotate-45 translate-y-[8px]' : ''} ${hamburgerStyle} mt-6 mb-1`}></div>
					<div className={`${hamburgerMenu ? 'rotate-45' : ''} ${hamburgerStyle} my-1`}></div>
					<div className={`${hamburgerMenu ? '-rotate-45 -translate-y-[8px]' : ''} ${hamburgerStyle} mt-1 mb-6`}></div>
				</div>
				<nav className={`${hamburgerMenu ? '' : '-translate-x-[1000px]'} text-center text-xl duration-500 ease-in-out bg-stone-300 absolute w-1/6 left-0 top-0 h-full pt-16`}>
					<Link to="/">
						<h1 className={h1Style}>Home</h1>
					</Link>
					<Link to="/about">
						<h1 className={h1Style}>About</h1>
					</Link>
					<Link to="/projects">
						<h1 className={h1Style}>Projects</h1>
					</Link>
					<Link to="/reviews">
						<h1 className={h1Style}>Reviews</h1>
					</Link>
					{userGreeting}
					{authLink}
				</nav>
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
			<footer className="sticky left-0 bottom-0 w-full py-2 bg-stone-300">
				<div className="flex justify-around items-center py-2">
					<a href="https://github.com/jaeahn2010/jaeahn2010" target="_blank" rel="noopener noreferrer">
						<img className={bounceImgStyle} src={gitHub}/>
					</a>
					<a href="https://www.linkedin.com/in/jae-ahn-benton" target="_blank" rel="noopener noreferrer">
						<img className={bounceImgStyle} src={linkedIn}/>
					</a>
					<a href="mailto:jaeahn2010@gmail.com">
						<img className={bounceImgStyle} src={emailIcon}/>
					</a>
					</div>
				<p className="text-center border-t-2 border-black">Copyright &#169; 2024 Jae Ahn-Benton</p>
			</footer>
		</>
	)
}