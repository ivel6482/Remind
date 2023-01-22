import { useState, useRef } from "react"
import { Link } from "react-router-dom";

export function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileMenuRef = useRef<HTMLUListElement>(null);

  function toggleMobileMenu() {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <nav className="p-5 text-lg font-bold bg-slate-900 text-rose-400">
      <div className="flex justify-between">
        <NavLink path="/" text="Remind" />
        <button onClick={toggleMobileMenu} className="md:hidden">Burger</button>
        <ul className="hidden space-x-4 md:flex">
          <li><NavLink text="exercises" /></li>
          <li><NavLink text="completed" /></li>
          <li><NavLink text="favorites" /></li>
          <li><NavLink text="sign in" /></li>
          <li><NavLink text="log out" /></li>
          <li><NavLink text="sign up" /></li>
        </ul>
      </div>
      {showMobileMenu && (
        <ul ref={mobileMenuRef} className="pt-4 space-y-4 md:pt-0 md:space-y-0 md:space-x-4 md:hidden">
          <li><NavLink path="/exercises" text="exercises" /></li>
          <li><NavLink text="completed" /></li>
          <li><NavLink text="favorites" /></li>
          <li><NavLink text="sign in" /></li>
          <li><NavLink text="log out" /></li>
          <li><NavLink text="sign up" /></li>
        </ul>
      )}
    </nav>
  )
};

export function NavLink({ text, path = "#" }: { text: string, path?: string }) {
  return (
    <Link to={path} className="hover:underline hover:underline-offset-4 decoration-2">{text}</Link>
  )
}
