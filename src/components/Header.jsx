import logo from '../assets/images/logo.svg';
import backGroundImage from '../assets/images/bg-header-desktop.png';
import CTALinks from './CTALinks';

export default function Header() {
  return (
    <header>
      <section
        className="flex justify-center bg-no-repeat bg-contain bg-top bg-gradient-to-t from-white to-transparent"
        style={{ backgroundImage: `url(${backGroundImage})` }}
      >
        <div className="container flex flex-col items-center justify-center py-16 md:py-24 px-12 gap-16">
          <img src={logo} alt="logo" className="max-w-28" />
          <div className="flex flex-col justify-center gap-6 md:gap-8 items-center">
            <h1 className="text-darkGrayishBlue font-bold text-4xl text-center md:text-5xl lg:text-6xl xl:text-7xl">
              A history of everything you copy
            </h1>
            <p className="text-center text-grayishBlue md:text-lg max-w-lg">
              Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all
              your goal.
            </p>
          </div>
          <CTALinks />
        </div>
      </section>
    </header>
  );
}
