import imageDevices from '../assets/images/image-devices.png';

export default function Access() {
  return (
    <section>
      <div className="container py-16 md:py-24 lg:mt-24 px-12 mx-auto">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-darkGrayishBlue text-center">
            Access Clipboard Anywhere
          </h2>
          <p className="text-center text-grayishBlue md:text-lg max-w-lg opacity-80 lg:max-w-xl">
            Whether you&apos;re on the go, or at your computer, you can access all your Clipboard snipptes in few simple
            clicks.
          </p>
          <div className="mt-8 md:mt-12">
            <img src={imageDevices} alt="Devices" />
          </div>
        </div>
      </div>
    </section>
  );
}
