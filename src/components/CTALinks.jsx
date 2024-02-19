export default function CTALinks() {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <a
        className="rounded-full text-white text-center font-semibold bg-strongCyan py-4 px-16 hover:opacity-90 transition duration-300 shadow-md hover:shadow-lg active:shadow-md active:scale-[0.99]"
        href="#"
      >
        Download for IOS
      </a>
      <a
        className="rounded-full text-white text-center font-semibold bg-lightBlue py-4 px-16 hover:opacity-90 transition duration-300 shadow-md hover:shadow-lg active:shadow-md active:scale-[0.99]"
        href="#"
      >
        Download for Mac
      </a>
    </div>
  );
}
