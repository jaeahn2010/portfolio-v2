import Gallery from '../Gallery'

export default function ProjectsPage({hamburgerMenu}) {
    return <main className={`py-12 duration-500 ${hamburgerMenu ? 'opacity-50' : ''}`}><Gallery/></main>
}