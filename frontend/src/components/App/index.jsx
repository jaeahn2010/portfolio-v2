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
	let authStyle = 'border-stone-800 border-2 text-center my-5 mx-auto rounded-xl shadow-xl hover:scale-110 duration-500 w-1/2 bg-gradient-to-r from-sky-300 via-sky-100 to-sky-300 text-stone-800'
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
			<main className={`${!darkTheme ? 'bg-stone-200' : 'bg-stone-900'} relative min-h-[80vh]`}>
				{/* hamburger menu */}
				<div className={`${hamburgerMenu ? (!darkTheme ? 'bg-stone-300' : 'bg-stone-500') : (!darkTheme ? 'bg-stone-200' : 'bg-stone-900')} absolute duration-500 ease-in-out absolute left-0 top-0 hover:cursor-pointer bg-opacity-0 w-[5rem] z-30`} onClick={() => setHamburgerMenu(!hamburgerMenu)}>
					<div className={`${!darkTheme ? '' : 'border-stone-200'} ${hamburgerMenu ? 'rotate-45 translate-y-[8px]' : ''} ${hamburgerStyle} mt-6 mb-1`}></div>
					<div className={`${!darkTheme ? '' : 'border-stone-200'} ${hamburgerMenu ? 'rotate-45' : ''} ${hamburgerStyle} my-1`}></div>
					<div className={`${!darkTheme ? '' : 'border-stone-200'} ${hamburgerMenu ? '-rotate-45 -translate-y-[8px]' : ''} ${hamburgerStyle} mt-1 mb-6`}></div>
				</div>
				{/* dark theme toggle */}
				<div className={`absolute right-0 top-0 z-30`}>
					<div className={`flex ${!darkTheme ? 'justify-start shadow-stone-600' : 'justify-end shadow-stone-500'} duration-500 rounded-full w-[2.5rem] items-center mx-3 my-6 shadow-xl bg-gradient-to-r from-stone-500 to-stone-300`}>
						<button className={`flex justify-center items-center rounded-full border-stone-500 border-2 w-[1.5rem] h-[1.5rem] bg-stone-200 hover:cursor-pointer`} onClick={() => setDarkTheme(!darkTheme)}>
							<img className='w-3/4 p-0.5' src={!darkTheme ? sunIcon : moonIcon}/>
						</button>
					</div>
				</div>
				{/* nav bar */}
				<nav className={`${!darkTheme ? 'bg-gradient-to-b from-stone-500 via-stone-300 to-stone-500' : 'bg-gradient-to-b from-stone-900 via-stone-600 to-stone-900 text-stone-200'} ${hamburgerMenu ? 'opacity-100 z-20' : 'hidden'} text-center text-xl ease-in-out absolute left-0 top-0 w-full h-[100vh] pt-16`}>
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
					<Route path="/" element={
						<HomePage 
							darkTheme={darkTheme}
							hamburgerMenu={hamburgerMenu}
						/>}
					/>
					<Route path="/about" element={
						<AboutPage
							darkTheme={darkTheme}
							hamburgerMenu={hamburgerMenu}
						/>}
					/>
					<Route path="/projects" element={
						<ProjectsPage
							darkTheme={darkTheme}
							hamburgerMenu={hamburgerMenu}
						/>}
					/>
					<Route path="/reviews" element={
						<ReviewsPage
							darkTheme={darkTheme} hamburgerMenu={hamburgerMenu}
							loginStatus={loginStatus}
							currentUsername={currentUsername}
							currentUserId={currentUserId}
						/>}
					/>
					<Route path="/auth/:formType" element={
						<AuthFormPage
							darkTheme={darkTheme}
							hamburgerMenu={hamburgerMenu}
						/>}
					/>
					<Route path="/*" element={
						<NotFoundPage
							darkTheme={darkTheme}
							hamburgerMenu={hamburgerMenu}
						/>}
					/>
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
				<p className="flex justify-center items-center border-t-2 border-stone-800">Copyright &#169; 2024 Jae Ahn-Benton</p>
			</footer>
		</>
	)
}