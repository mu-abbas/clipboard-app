import imageComputer from '../assets/images/image-computer.png';

export default function Snippets() {
  return (
    <section>
      <div className="container py-12 px-12 space-y-16 md:space-y-24 mx-auto">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-darkGrayishBlue text-center">
            Keep track of your snippets
          </h2>
          <p className="text-center text-grayishBlue md:text-lg max-w-lg opacity-80 lg:max-w-xl">
            Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately
            on all your devices. Our Mac and IOS apps will help you organize everything.
          </p>
        </div>
        <div className="relative flex flex-col gap-10 md:gap-0 md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <img src={imageComputer} alt="computer" className="px-12 md:px-0 md:absolute top-0 right-[50%]" />
          </div>
          <div className="flex flex-col gap-6 md:w-1/3 md:mt-20">
            <article className="flex flex-col gap-4 items-center md:items-start">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold text-darkGrayishBlue text-center">
                Quick Search
              </h3>
              <p className="text-center md:text-left text-grayishBlue md:text-lg max-w-sm opacity-80 lg:max-w-xl">
                Easily search your snippets by content, category, web address, application, and more.
              </p>
            </article>
            <article className="flex flex-col gap-4 items-center md:items-start">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold text-darkGrayishBlue text-center">
                iCloud Sync
              </h3>
              <p className="text-center md:text-left text-grayishBlue md:text-lg max-w-sm opacity-80 lg:max-w-xl">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </article>
            <article className="flex flex-col gap-4 items-center md:items-start">
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
