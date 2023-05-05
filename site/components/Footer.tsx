import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <Link href = '/' className = 'footer-header'>Devwise</Link>

      <div className = 'footer-info'>
        <ul>
          <li>
            <Link href = '/catalouge'>Websites</Link>
          </li>

          <li>
            <Link href = '#'>Packages</Link>
          </li>

          <li>
            <a href = '#'>About</a>
          </li>
        </ul>
        
        <p>Made by Catis {'</>'}</p>
      </div>
    </footer>
  )
}

export default Footer