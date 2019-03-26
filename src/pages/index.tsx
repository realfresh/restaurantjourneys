import * as React from "react"
import Index from "../layouts"
import SEO from "../components/seo"
import { Header } from "../components/header"
import styled from "styled-components"
import { graphql, Link, PageRendererProps } from "gatsby"
import { Tag } from "../components/tag"

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
          category: string
        }
      }>
    }
  }
}

const Page = (props: Props) => {

  const postPaddingContainers = 3 - (props.data.allContentfulBlogArticle.edges.length % 3)

  return (
    <Index>
      <SEO
        title="Restaurant Journeys | Plan, Manage, Market & Grow Your Restaurant"
        description="Helping you learn how to plan, manage, market and promote your restaurant business with in-depth content about restaurant planning, restaurant marketing, restaurant promotions and more"
        titleRaw={true}>
        <link rel="canonical" href="https://www.restaurantjourneys.com" />
      </SEO>
      <Header>
        <div className="text-center m-b-6">
          <h1>Plan, Manage, Market & Grow Your Restaurant</h1>
          <p className="bigger lhp m-t-3">A blog dedicated to helping you succeed with your restaurant business</p>
        </div>
      </Header>
      <MainNode>
        <div className="content">
          <h2 className="font20 m-b-5">Latest Blog Posts</h2>
          <div className="grid-3 lg md-gap">
            {props.data.allContentfulBlogArticle.edges.map(({ node }, i) => (
              <div key={i} className="col">
                <Link to={`/blog/${node.permalink}`}>
                  <Post>
                    <h3>{node.title}</h3>
                    <p className="m-t-2 lhp">{node.documentMeta}</p>
                    <div className="bottom flex-l-r-center">
                      <Tag className="smaller m-t-3 m-r-2">{node.category}</Tag>
                      <Tag className="smaller m-t-3">{new Date(node.createdAt).toLocaleDateString()}</Tag>
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
          category
        }
      }
    }
  }
`

export default Page