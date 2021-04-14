import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      metadata: siteMetadata {
        author
        description
        keywords
        title
      }
    }
  }
`
const SEO = () => {
  const {
    site: {
      metadata: { title, author, description, keywords },
    },
  } = useStaticQuery(query)
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta lang="pl" />
      <meta name="description" content={description} />
      <neta name="keywords" content={keywords} />
      <neta name="author" content={author} />
      <title>{title}</title>
    </Helmet>
  )
}

export default SEO
