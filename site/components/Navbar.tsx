import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <header>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>

        <Link href = '/'>Devwise</Link>
      </header>

      <ul>
        <li>
          <Link href = '/catalouge'>Explore</Link>
        </li>

        <li>
          <a href = '#'>About</a>
        </li>
      </ul>

      <div className="dropdown">
        <button className="dropdown-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <div className="dropdown-menu">
          <a href="#example-header">Examples</a>
          <a href="#about-section">About</a>
          <Link href="/quizmaker">Generate Now</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar