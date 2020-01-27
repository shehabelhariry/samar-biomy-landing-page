import React from "react"
import { Link } from "gatsby"

const links = [
  {
    title: "about",
    label: "Who am I",
  },
  {
    title: "photography",
    label: "Photography",
  },
  {
    title: "video",
    label: "Video Art",
  },
  {
    title: "painting",
    label: "Painting",
  },
  {
    title: "cv",
    label: "C.V",
  },
  {
    title: "contact",
    label: "Contact Me",
  },
]

const SideNavigation = ({ target }) => {
  return (
    <aside className="sb-side-navigation">
      {links.map(link => (
        <Link
          key={link.title}
          to={link.title}
          className={`sb-side-navigation__item ${
            link.title === target ? "active" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </aside>
  )
}

export default SideNavigation
