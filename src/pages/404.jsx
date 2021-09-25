import * as React from "react"
import { Link } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import { Themed } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"

const NotFound = () => (
  <Layout>
    <Seo title="404 - Not Found" />
    <Parallax pages={1}>
      <div>
        <Divider speed={0.2} offset={0} factor={1}>
          <UpDown>

          </UpDown>
          <UpDownWide>

          </UpDownWide>

        </Divider>
        <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={0} factor={1}>
          <Inner>
            <Themed.h1>404 - Page not found</Themed.h1>
            <Themed.p>
              Go back to <Link to="/">homepage</Link>.
            </Themed.p>
          </Inner>
        </Content>
      </div>
    </Parallax>
  </Layout>
)

export default NotFound
