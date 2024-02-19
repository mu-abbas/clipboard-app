import blackList from '../assets/images/icon-blacklist.svg';
import text from '../assets/images/icon-text.svg';
import preview from '../assets/images/icon-preview.svg';

export default function Workflow() {
  return (
    <section>
      <div className="container py-16 md:py-24 px-12 space-y-24 mx-auto">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-darkGrayishBlue text-center">
            Supercharge your workflow
          </h2>
          <p className="text-center text-grayishBlue md:text-lg max-w-lg opacity-80 lg:max-w-xl">
            we&apos;ve got the tools to boost your productivity.
          </p>
        </div>
        <div className="flex flex-col gap-12 md:flex-row md: justify-between">
          <article className="flex flex-col gap-3 items-center">
            <img src={blackList} alt="blacklist" className="max-w-sm mb-4" />
            <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold text-darkGrayishBlue text-center">
              Create blacklist
            </h3>
            <p className="text-center text-grayishBlue md:text-lg max-w-sm opacity-80 lg:max-w-xl">
              Ensure sensitive information never makes its way to your Clipboard by excluding certain sources.
            </p>
          </article>
          <article className="flex flex-col gap-3 items-center">
            <img src={text} alt="blacklist" className="max-w-sm mb-4" />
            <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold text-darkGrayishBlue text-center">
              Plain text snippets
            </h3>
            <p className="text-center text-grayishBlue md:text-lg max-w-sm opacity-80 lg:max-w-xl">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </article>
          <article className="flex flex-col gap-3 items-center">
            <img src={preview} alt="blacklist" className="max-w-sm mb-4" />
            <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold text-darkGrayishBlue text-center">
              Sneak preview
            </h3>
            <p className="text-center text-grayishBlue md:text-lg max-w-sm opacity-80 lg:max-w-xl">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
