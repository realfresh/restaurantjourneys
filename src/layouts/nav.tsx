import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

interface Props {
  children: React.ReactNode
}

const NavNode = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 0 20px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    max-height: 40px;
  }
`

export const Nav = () => (
  <NavNode className="bg-white bsl-1">
    <div className="content">
      <div>
        <Link to="/">
          <img className="logo" alt="Logo" src="/images/logo-black-380.png"/>
        </Link>
      </div>
      <div className="hide-below-sm">
        <p className="small">Sponsored by <a className="link" href="https://www.cloudwaitress.com">CloudWaitress</a></p>
      </div>
    </div>
  </NavNode>
)