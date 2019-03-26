import * as React from "react"
import styled from "styled-components"

const HeaderNode = styled.header<{ height?: number }>`
  padding: 100px 20px 60px 20px;
  .content {
    min-height: ${(props) => props.height || 360}px;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 34px;
  }
`

interface Props {
  children: React.ReactNode
  height?: number
}

export const Header = (props: Props) => {
  return (
    <HeaderNode className="bg-beige" height={props.height}>
      <div className="content">
        {props.children}
      </div>
    </HeaderNode>
  )
}