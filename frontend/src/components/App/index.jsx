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
import sunIcon from '../../assets/sun.png'
import moonIcon from '../../assets/moon.png'
import { getUserByToken } from '../../../utils/backend'

export default function App() {
	const [loginStatus, setLoginStatus] = useState(false)
	const [currentUsername, setCurrentUsername] = useState('')
	const [currentUserId, setCurrentUserId] = useState('')
	const [hamburgerMenu, setHamburgerMenu] = useState(false)
	const [darkTheme, setDarkTheme] = useState(false)
	const navigate = useNavigate()

	let h1Style = 'p-2 my-3 hover:scale-110 duration-500 hover:underline'
	let authStyle = 'border-stone-800 border-2 text-center my-5 mx-4 rounded-xl shadow-xl hover:scale-110 duration-500 bg-gradient-to-r from-sky-300 via-sky-100 to-sky-300 text-stone-800'
	let hamburgerStyle = 'border-black border-2 mx-4 max-w-[30px] rounded-xl duration-500 ease-in-out'
	let bounceImgStyle = 'w-[40px] hover:animate-bounce'
	let authLink = 
		<div className='my-5'>
			<Link to="/auth/signup">
				<h1 className={authStyle} onClick={() => setHamburgerMenu(false)}>Sign Up</h1>
			</Link>
			<Link to="/auth/login">
				<h1 className={authStyle} onClick={() => setHamburgerMenu(false)}>Log In</h1>
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
			<button className={`${!darkTheme ? 'bg-gradient-to-r from-red-300 via-red-100 to-red-300' : 'bg-gradient-to-r from-red-600 via-red-300 to-red-600'} border-stone-800 border-2 text-center my-5 mx-4 rounded-xl shadow-xl hover:scale-110 duration-500 px-2 py-1`} onClick={() => {
				if (confirm("Are you sure you would like to log out?")) {
					localStorage.clear()
					setHamburgerMenu(false)
					setLoginStatus(false)
					navigate('/')
				}
			}}>Log Out</button>
		userGreeting =
			<div className='text-sm mt-16'>
				<p className='rounded-xl p-2'>Logged in as</p>
				<p className={`${!darkTheme ? 'text-green-700' : 'text-green-300'}`}>{currentUsername}</p>
			</div>
	} else if (localStorage.userToken) {
		setLoginStatus(true)
	}

	return (
		<>
			<main className={`${!darkTheme ? 'bg-stone-200' : 'bg-stone-900'} relative`}>
				{/* hamburger menu */}
				<div className={`${hamburgerMenu ? (!darkTheme ? 'bg-stone-300' : 'bg-stone-500') : (!darkTheme ? 'bg-stone-200' : 'bg-stone-900')} absolute duration-500 ease-in-out absolute left-0 top-0 hover:cursor-pointer bg-opacity-0 w-1/12 z-10`} onClick={() => setHamburgerMenu(!hamburgerMenu)}>
					<div className={`${!darkTheme ? '' : 'border-stone-200'} ${hamburgerMenu ? 'rotate-45 translate-y-[8px]' : ''} ${hamburgerStyle} mt-6 mb-1`}></div>
					<div className={`${!darkTheme ? '' : 'border-stone-200'} ${hamburgerMenu ? 'rotate-45' : ''} ${hamburgerStyle} my-1`}></div>
					<div className={`${!darkTheme ? '' : 'border-stone-200'} ${hamburgerMenu ? '-rotate-45 -translate-y-[8px]' : ''} ${hamburgerStyle} mt-1 mb-6`}></div>
				</div>
				{/* dark theme toggle */}
				<div className={`absolute right-0 top-0 z-10`}>
					<div className={`flex ${!darkTheme ? 'justify-start border-stone-300 border-2' : 'justify-end'} duration-500 rounded-3xl w-[60px] h-[30px] items-center m-6 shadow-xl bg-gradient-to-r from-stone-500 to-stone-300`}>
						<button className={`flex justify-center items-center rounded-full border-stone-500 border-2 h-[25px] w-3/5 bg-stone-200`} onClick={() => setDarkTheme(!darkTheme)}>
							<img className='w-3/4 p-0.5' src={!darkTheme ? sunIcon : moonIcon}/>
						</button>
					</div>
				</div>
				{/* nav bar */}
				<nav className={`${!darkTheme ? 'bg-stone-300' : 'bg-stone-400 text-stone-200'} ${hamburgerMenu ? '' : '-translate-x-[1000px]'} text-center text-xl duration-500 ease-in-out absolute w-1/6 left-0 top-0 h-full pt-16`}>
					<Link to="/" onClick={() => setHamburgerMenu(false)}>
						<h1 className={h1Style}>Home</h1>
					</Link>
					<Link to="/about" onClick={() => setHamburgerMenu(false)}>
						<h1 className={h1Style}>About</h1>
					</Link>
					<Link to="/projects" onClick={() => setHamburgerMenu(false)}>
						<h1 className={h1Style}>Projects</h1>
					</Link>
					<Link to="/reviews" onClick={() => setHamburgerMenu(false)}>
						<h1 className={h1Style}>Reviews</h1>
					</Link>
					{userGreeting}
					{authLink}
				</nav>
				<Routes id="pages">
					<Route path="/" element={<HomePage darkTheme={darkTheme}/>}/>
					<Route path="/about" element={<AboutPage darkTheme={darkTheme}/>}/>
					<Route path="/projects" element={<ProjectsPage darkTheme={darkTheme}/>}/>
					<Route path="/reviews" element={
						<ReviewsPage
							darkTheme={darkTheme}
							loginStatus={loginStatus}
							currentUsername={currentUsername}
							currentUserId={currentUserId}
						/>}/>
					<Route path="/auth/:formType" element={<AuthFormPage darkTheme={darkTheme}/>}/>
					<Route path="/*" element={<NotFoundPage/>}/>
				</Routes>
			</main>
			{/* footer */}
			<footer className={`${!darkTheme ? 'bg-stone-200' : 'bg-stone-400'} sticky left-0 bottom-0 w-full py-2 bg-stone-300 border-t-2 border-stone-800`}>
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