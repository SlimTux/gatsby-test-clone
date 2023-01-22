import * as React from "react"
import type { PageProps } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"

const NotFound = (_props: PageProps) => (
  <Layout>
    <h1>404 - Where is the page?°.°</h1>
    <p>Unfortunately we couldn't find what you were looking for :(</p>
  </Layout>
)

export default NotFound
