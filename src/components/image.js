import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Photo = ({src, className}) => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "nicole.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }

      image2: file(relativePath: { eq: "meet-nicole.jpg" }) {
        childImageSharp {
          fixed(width: 326, height: 283) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }

      image3: file(relativePath: { eq: "homepage.jpg" }) {
        childImageSharp {
          fixed(width: 650) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <Img fixed={data[`${src}`].childImageSharp.fixed} className={className} fadeIn={false} />
  )
}

export const NicoleImage = ({className}) => (
  <Photo src="image1" className={className} />
);

export const MeetNicoleImage = ({className}) => (
  <Photo src="image2" className={className} />
);

export const Image1 = ({className}) => (
  <Photo src="image3" className={className} />
);