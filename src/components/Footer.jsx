import logo from '../assets/images/logo.svg';
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';
import instagram from '../assets/images/icon-instagram.svg';

export default function Footer() {
  return (
    <footer>
      <div className="bg-grayishBlue/5 px-12 py-16 mt-6 flex flex-col items-center gap-16 lg:gap-32 lg:px-32 md:flex-row">
        <img src={logo} alt="logo" className="max-w-16" />
        <ul className="flex flex-col items-center gap-3 md:flex-row md:flex-wrap">
          <li className="text-grayishBlue text-lg hover:text-darkGrayishBlue transition duration-300 hover:-translate-y-0.5 md:w-1/4 min-w-max">
            <a href="#">FAQs</a>
          </li>
          <li className="text-grayishBlue text-lg hover:text-darkGrayishBlue transition duration-300 hover:-translate-y-0.5 md:w-1/4 min-w-max">
            <a href="#">Contact Us</a>
          </li>
          <li className="text-grayishBlue text-lg hover:text-darkGrayishBlue transition duration-300 hover:-translate-y-0.5 md:w-1/4 min-w-max">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="text-grayishBlue text-lg hover:text-darkGrayishBlue transition duration-300 hover:-translate-y-0.5 md:w-1/4 min-w-max">
            <a href="#">Press Kit</a>
          </li>
          <li className="text-grayishBlue text-lg hover:text-darkGrayishBlue transition duration-300 hover:-translate-y-0.5 md:w-1/4 min-w-max">
            <a href="#">Install Guide</a>
          </li>
        </ul>
        <ul className="flex gap-12 md:ml-auto">
          <li className="min-w-6">
            <img src={facebook} alt="facebook" className="cursor-pointer hover:scale-110 transition duration-300" />
          </li>
          <li className="min-w-6">
            <img src={twitter} alt="twitter" className="cursor-pointer hover:scale-110 transition duration-300" />
          </li>
          <li className="min-w-6">
            <img src={instagram} alt="instagram" className="cursor-pointer hover:scale-110 transition duration-300" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
