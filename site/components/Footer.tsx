import Link from "next/link";

interface FooterProps {
  bgColor: string;
  color: string;
}

const Footer = ({ bgColor, color }: FooterProps) => {
  return (
    <footer style={{ backgroundColor: bgColor }}>
      <Link href="/" className="footer-header" style={{ color: color }}>
        Devwise
      </Link>

      <div className="footer-info">
        <ul>
          <li>
            <Link href="/websites" style={{ color: color }}>
              Websites
            </Link>
          </li>

          <li>
            <Link href="/about" style={{ color: color }}>
              About
            </Link>
          </li>
        </ul>

        <p style={{ color: color }}>Made by Catis {"</>"}</p>
      </div>
    </footer>
  );
};

export default Footer;
