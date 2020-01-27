import React from "react"
import Header from "../Header/Header"
import SideNavigation from "../SideNavigation/SideNavigation"
import ContentMapper from "../ContentMapper/ContentMapper"

const Layout = ({ target }) => {
  return (
    <div className="sb-layout">
      <Header />
      <div className="sb-content">
        <SideNavigation target={target} />
        <ContentMapper target={target} />
      </div>
    </div>
  )
}

export default Layout
