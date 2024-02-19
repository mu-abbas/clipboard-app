import imageComputer from '../assets/images/image-computer.png';

export default function Features() {
  return (
    <section>
      <div className="container py-16 md:py-24 px-12 mx-auto">
        <div className="relative flex flex-col gap-10 md:gap-0 md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <img src={imageComputer} alt="computer" className="px-12 md:px-0 md:absolute top-0 right-[50%]" />
          </div>
          <div className="flex flex-col gap-6 md:w-1/3 md:mt-20">
            <article className="flex flex-col gap-3 items-center md:items-start">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold text-darkGrayishBlue text-center">
                Quick Search
              </h3>
              <p className="text-center md:text-left text-grayishBlue md:text-lg max-w-sm opacity-80 lg:max-w-xl">
                Easily search your snippets by content, category, web address, application, and more.
              </p>
            </article>
            <article className="flex flex-col gap-3 items-center md:items-start">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold text-darkGrayishBlue text-center">
                iCloud Sync
              </h3>
              <p className="text-center md:text-left text-grayishBlue md:text-lg max-w-sm opacity-80 lg:max-w-xl">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </article>
            <article className="flex flex-col gap-3 items-center md:items-start">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold text-darkGrayishBlue text-center">
                Complete History
              </h3>
              <p className="text-center md:text-left text-grayishBlue md:text-lg max-w-sm opacity-80 lg:max-w-xl">
                Retrieve any snippets from the first moment you started using the app.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
