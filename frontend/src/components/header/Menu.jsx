

export default function Menu() {
  return (
    <div data-theme="forest" className="navbar h-20 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-md dropdown-content font-bold font-[poppins] mt-3 z-[1] p-2 shadow bg-base-100 w-60">
            <li><a href="#hi">Hi</a></li>
            <li><a href="#path">Path</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <img className="w-16 h-16 rounded"
          src="https://api.dicebear.com/6.x/avataaars-neutral/svg?mouth=smile&eyes=side"
          alt="avatar" />
      </div>
    </div>
  )
}