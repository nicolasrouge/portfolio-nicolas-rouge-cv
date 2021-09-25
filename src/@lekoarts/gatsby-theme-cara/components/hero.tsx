/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"

// @ts-ignore
import Intro from "@lekoarts/gatsby-theme-cara/src/sections/intro"


const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
      </UpDown>
      <UpDownWide>
      </UpDownWide>
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero