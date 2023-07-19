import HeroButton from "../buttons/HeroButton";

export default function HeroSection() {
  return (
    <div id="hi" className="hero min-h-screen bg-base-200">
      <div className="hero-content text-left flex flex-col items-start">
        <div className="min-w-screen leading-10 font-[poppins]">
          <h1 className="min-w-screen text-6xl capitalize font-light">delion jayson</h1>
          <span className="text-9xl uppercase font-bold">front end developer</span>
          <br/>
          <span className="text-4xl capitalize font-light">UI / UX lover</span>
          <br/>
        </div>
        <HeroButton/>
      </div>
    </div>
  )
}