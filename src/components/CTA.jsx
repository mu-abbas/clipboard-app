import CTALinks from './CTALinks';

export default function CTA() {
  return (
    <section>
      <div className="container flex flex-col items-center justify-center py-16 md:py-24 px-12 gap-16 mx-auto">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-darkGrayishBlue text-center">
            Clipboard for IOS and Mac OS
          </h2>
          <p className="text-center text-grayishBlue md:text-lg max-w-lg opacity-80 lg:max-w-xl">
            Available for free on the App Store.
            <br />
            Download for Mac or IOS, sync with iCloud and you&apos;re ready to start adding to your Clipboard.
          </p>
        </div>
        <CTALinks />
      </div>
    </section>
  );
}
