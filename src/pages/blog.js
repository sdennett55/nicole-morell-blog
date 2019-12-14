import React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Button from "../components/button"
// import styled from 'styled-components';

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <h1 style={{marginBottom: '1.5em'}}>Blog</h1>
        <div>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            // debugger;
            console.table(node);
            return (
              <div key={node.fields.slug}>
                {node.frontmatter.thumbnail && (
                  <img src={node.frontmatter.thumbnail} alt="" />
                )}
                <div style={{display: 'flex', alignItems: 'baseline', flexWrap: `wrap`,}}>
                  <h2
                    style={{
                      fontFamily: 'merriweather',
                      marginTop: 0,
                      fontSize: '1.2em',
                      marginRight: '.5em',
                    }}
                  >
                    <Link
                      style={{ boxShadow: `none`, color: '#0D6647' }}
                      to={`blog${node.fields.slug}`}
                    >
                      {title}
                    </Link>
                  </h2>
                  <small>{node.frontmatter.date}</small>
                </div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
