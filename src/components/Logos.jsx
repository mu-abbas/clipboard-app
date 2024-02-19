import Slider from 'react-infinite-logo-slider';
import google from '../assets/images/logo-google.png';
import ibm from '../assets/images/logo-ibm.png';
import microsoft from '../assets/images/logo-microsoft.png';
import hp from '../assets/images/logo-hp.png';
import vector from '../assets/images/logo-vector-graphics.png';

export default function Logos() {
  return (
    <section>
      <div className="py-16">
        <Slider width="250px" duration={30} pauseOnHover={true} blurBorders={false} blurBoderColor={'#fff'}>
          <Slider.Slide>
            <img src={google} alt="google" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={ibm} alt="google" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={microsoft} alt="google" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={hp} alt="google" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={vector} alt="google" />
          </Slider.Slide>
        </Slider>
      </div>
    </section>
  );
}
