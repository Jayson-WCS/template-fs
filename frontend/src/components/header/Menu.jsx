export default function Menu() {
  return (
    <div data-theme="cyberpunk" className="navbar bg-base-100 fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content font-[poppins] mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="#hi">Hi</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost font-[poppins] text-xl">Jay</a>
      </div>
    </div>
  )
}