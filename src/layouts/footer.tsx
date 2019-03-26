import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"

interface Props {
  children: React.ReactNode
}

const CTABar = styled.div`
  .content {
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
  }
`

const FooterNode = styled.footer`
  padding: 40px 20px 30px 20px;
  .content {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  }
`

const SubscribeButton = styled.div`
  display: inline-block;
  background: #C34545;
  color: white;
  padding: 10px 0;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  width: 160px;
`

export const Footer = () => (
  <>
    <CTABar className="bg-beige-2 p-lr-4 p-tb-6 m-t-12">
      <div className="content text-center flex-center">
        <a href="https://landing.mailerlite.com/webforms/landing/g2a5r1" target="_blank">
          <SubscribeButton>
            Subscribe To Blog
          </SubscribeButton>
        </a>
        <a href="https://www.facebook.com/groups/819348868432758/" target="_blank" className="m-l-4">
          <SubscribeButton>
            Facebook Group
          </SubscribeButton>
        </a>
      </div>
    </CTABar>
    <FooterNode className="bg-beige">
      <div className="content">
        <img className="logo res-img max50 m-b-4" alt="Logo" src="/images/logo-icon-110.png"/>
        <div>
          <p className="lhp-lg big">RestaurantJourneys is a blog and editorial dedicated to helping restaurant owners succeed in business</p>
          <p className="lhp-lg m-t-3">Sponsored by <a className="link" href="https://www.cloudwaitress.com">CloudWaitress - Online Ordering System</a></p>
          <div className="m-t-4">
            <a className="primary-text font34 m-r-2" href="https://www.facebook.com/Restaurant-Journeys-663785897390499" target="_blank"><FaFacebookSquare/></a>
            <a className="primary-text font34" href="https://twitter.com/restaurantjourn" target="_blank"><FaTwitterSquare/></a>
          </div>
          <p className="lhp small m-t-4">Copyright RestaurantJourneys © 2019</p>
        </div>
      </div>
    </FooterNode>
  </>
)

