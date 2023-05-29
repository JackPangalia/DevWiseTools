import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  bgColor: string;
  color: string;
}

const Footer = ({ bgColor, color }: FooterProps) => {
  return (
    <footer style={{ backgroundColor: bgColor }}>
      <Link href="/" className="footer-header" style={{ color: color }}>
        DevwiseTools
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

        <p style={{ color: color }} className = ''>Made by Catis</p>
        <Image src = './catisteclogo.svg' alt = 'catisteclogo' width = {30} height = {30} />
      </div>
    </footer>
  );
};

export default Footer;
