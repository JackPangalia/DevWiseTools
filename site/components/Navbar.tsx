import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <header>
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
    </nav>
  )
}

export default Navbar