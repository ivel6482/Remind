import { useState, useEffect, useRef } from "react"

export function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileMenuRef = useRef<HTMLUListElement>(null);

  function toggleMobileMenu() {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <nav className="p-5 text-lg font-bold bg-slate-900 text-rose-400">
      <div className="flex justify-between">
        <Link text="Remind" />
        <button onClick={toggleMobileMenu} className="md:hidden">Burger</button>
        <ul className="hidden space-x-4 md:flex">
          <li><Link text="exercises" /></li>
          <li><Link text="completed" /></li>
          <li><Link text="favorites" /></li>
          <li><Link text="sign in" /></li>
          <li><Link text="log out" /></li>
          <li><Link text="sign up" /></li>
        </ul>
      </div>
      {showMobileMenu && (
        <ul ref={mobileMenuRef} className="pt-4 space-y-4 md:pt-0 md:space-y-0 md:space-x-4 md:hidden">
          <li><Link text="exercises" /></li>
          <li><Link text="completed" /></li>
          <li><Link text="favorites" /></li>
          <li><Link text="sign in" /></li>
          <li><Link text="log out" /></li>
          <li><Link text="sign up" /></li>
        </ul>
      )}
    </nav>
  )
};

function Link({ text, path = "#" }: { text: string, path?: string }) {
  return (
    <a href={path} className="hover:underline hover:underline-offset-4 decoration-2">{text}</a>
  )
}
