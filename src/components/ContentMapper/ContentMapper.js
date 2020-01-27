import React from "react"
import AboutContent from "../AboutContent/AboutContent"
import PhotographyContent from "../PhotographyContent/PhotographyContent"

const matchedContent = {
  about: <AboutContent />,
  photography: <PhotographyContent />,
}

const ContentMapper = ({ target }) => {
  return (
    <section className="sb-main-content">
      {matchedContent[target] || "No Component"}
    </section>
  )
}

export default ContentMapper
