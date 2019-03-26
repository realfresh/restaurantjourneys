import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"

interface Props {
  children: React.ReactNode
}

const FooterNode = styled.footer`
  padding: 40px 20px 30px 20px;
  .content {
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
  }
`

export const Footer = () => (
  <>
    <div className="bg-beige-2 p-lr-4 p-tb-6 m-t-12">
      <div className="text-center">
        <p className="font-semi-bold m-b-4 big">Subscribe for blog post updates</p>
        <iframe frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://app.mailjet.com/widget/iframe/2mUr/bRE" width="100%" height="50"/>
      </div>
    </div>
    <FooterNode className="bg-beige">
      <div className="content text-center">
        <img className="logo res-img m-b-6 max250" alt="Logo" src="/images/logo-black-380.png"/>
        <p className="lhp big">RestaurantJourneys is a blog and editorial dedicated to helping restaurant owners succeed in business</p>
        <p className="lhp m-tb-6">Sponsored by <a className="link" href="https://www.cloudwaitress.com">CloudWaitress - Online Ordering System</a></p>
        <div className="flex-center">
          <a className="font30 m-r-2"><FaFacebookSquare/></a>
          <a className="font30"><FaTwitterSquare/></a>
        </div>
      </div>
    </FooterNode>
    <div className="bg-beige p-2">
      <p className="lhp text-center small">Copyright © 2019</p>
    </div>
  </>
)

