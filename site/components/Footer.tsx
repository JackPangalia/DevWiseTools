import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <Link href = '/' className = 'footer-header'>Devwise</Link>

      <div className = 'footer-info'>
        <ul>
          <li>
            <Link href = '/catalouge'>Eplore</Link>
          </li>

          <li>
            <a href = '#'>About</a>
          </li>
        </ul>
        
        <p>Made by catistec {'</>'}</p>
      </div>
    </footer>
  )
}

export default Footer