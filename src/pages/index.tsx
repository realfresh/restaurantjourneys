import * as React from "react"
import Index from "../layouts"
import SEO from "../components/seo"
import { Header } from "../components/header"
import styled from "styled-components"
import { graphql, Link, PageRendererProps } from "gatsby"

const Post = styled("div")`
  height: 100%;
  padding: 30px 30px;
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.10);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 18px;
    line-height: 1.4;
  }
  .bottom {
    margin-top: auto;
  }
  transition: 0.2s all;
  &:hover {
    transform: translateY(-8px);
  }
`

const MainNode = styled("main")`
  margin-top: -90px;
  padding: 0 20px;
  .content {
    max-width: 1200px;
    margin: 0 auto;
  }
`

interface Props extends PageRendererProps {
  data: {
    allContentfulBlogArticle: {
      totalCount: number
      edges: Array<{
        node: {
          title: string
          permalink: string
          documentMeta: string
          updatedAt: string
          createdAt: string
        }
      }>
    }
  }
}

const Page = (props: Props) => {

  const postPaddingContainers = 3 - (props.data.allContentfulBlogArticle.edges.length % 3)

  return (
    <Index>
      <SEO title="Home"/>
      <Header>
        <div className="text-center m-b-6">
          <h1>Start Your Restaurant Journey</h1>
          <p className="bigger lhp m-t-3">Learn how to start, manage and grow your restaurant business with helpful content</p>
        </div>
      </Header>
      <MainNode>
        <div className="content">
          <h2 className="m-b-5 font-bold big">Latest Blog Posts</h2>
          <div className="grid-3 lg md-gap">
            {props.data.allContentfulBlogArticle.edges.map(({ node }, i) => (
              <div key={i} className="col">
                <Link to={`/blog/${node.permalink}`}>
                  <Post>
                    <h3>{node.title}</h3>
                    <p className="m-t-2 lhp">{node.documentMeta}</p>
                    <div className="bottom">
                      <p className="text-right smaller m-t-3 font-bold">{new Date(node.createdAt).toLocaleDateString()}</p>
                    </div>
                  </Post>
                </Link>
              </div>
            ))}
            {Array(postPaddingContainers).fill(0).map((_, i) => (
              <div key={i} className="col"/>
            ))}
          </div>
        </div>
      </MainNode>
    </Index>
  )

}

export const query = graphql`
  query PageQuery {
    allContentfulBlogArticle(sort: { order: DESC fields: createdAt }) {
      totalCount
      edges {
        node {
          title
          permalink
          documentMeta
          updatedAt
          createdAt
        }
      }
    }
  }
`

export default Page