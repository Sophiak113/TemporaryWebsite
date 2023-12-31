import React from 'react'

const CardLinksIcons = (props) => {
  const {alt, src, link} = props.links;
  return (
        <div className="skill-outline">
              <a href={link}>
                  <img src={src} alt={alt} />
              </a>
              </div>
  )
}

export default CardLinksIcons
