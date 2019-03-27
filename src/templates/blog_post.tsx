import * as React from "react"
import { graphql, Link, PageRendererProps } from "gatsby"
import Layout from "../layouts"
import { Header } from "../components/header"
import styled from "styled-components"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/seo"
import { Tag } from "../components/tag"

const Disqus = require("disqus-react")

interface Props extends PageRendererProps {
  data: {
    contentfulBlogArticle: {
      id: string;
      title: string;
      documentMeta: string;
      documentTitle: string;
      createdAt: string;
      updatedAt: string;
      permalink: string;
      category: string;
      body: any;
      relatedPosts?: Array<{ title: string; permalink: string; }>
    }
  }
}

const MainNode = styled("main")`
  padding: 60px 20px;
  .content {
    max-width: 660px;
    margin: 0 auto;
  }
`

const ArticleSection = styled("article")`
  h1 {
    line-height: 1.4; 
    margin-bottom: 30px;
    font-size: 32px;
  }
  h2 {
    line-height: 1.4;
    font-size: 28px;
    margin-top: 35px;
  }
  h3 {
    line-height: 1.4;
    font-size: 22px;
    margin-top: 25px;
  }
  h4 {
    line-height: 1.4;
    margin-top: 25px;
  }
  p {
    line-height: 1.6;
    margin-top: 15px;
    font-size: 18px;
  }
  ul, ol {
    margin-top: 15px;
    li {
      font-size: 16px !important;
      line-height: 1.6;
      p {
        margin: 0;
      }
    }
  }
  pre {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  a {
    color: #C34545;
    text-decoration: underline;
  }
  img {
    margin-top: 20px;
    margin-bottom: 10px;
    border: 1px solid #e5e5e5;
    max-width: 100%;
    height: auto;
  }
  b, strong {
    font-weight: 600;
  }
`

export default ({ data, location }: Props) => {
  const post = data.contentfulBlogArticle
  return (
    <Layout>
      <SEO title={post.documentTitle} description={post.documentMeta}>
        <link rel="canonical" href={"https://" + location.host + "/blog/" + post.permalink} />
      </SEO>
      <Header height={340}>
        <div className="text-center">
          <h1 className="lhp">{post.title}</h1>
          <p className="bigger lhp m-t-3 max800 center">{post.documentMeta}</p>
          <div className="flex-center m-t-3">
            <Tag className="m-r-2">{post.category}</Tag>
            <Tag>{new Date(post.createdAt).toLocaleDateString()}</Tag>
          </div>
        </div>
      </Header>
      <MainNode>
        <div className="content">
          <ArticleSection>
            {documentToReactComponents(post.body.json, {
              renderNode: {
                [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
                  const url = node.data.target.fields.file["en-US"].url
                  const alt = node.data.target.fields.title["en-US"]
                  return (
                    <img src={url} alt={alt} className="bsl-1"/>
                  )
                }
              }
            })}
            {post.relatedPosts && (
              <>
                <h4 className="font34 m-t-12">Related Posts</h4>
                <ul>
                  {post.relatedPosts.map((p, i) => (
                    <li key={i}><Link to={`/blog/${p.permalink}`}>{p.title}</Link></li>
                  ))}
                </ul>
              </>
            )}
          </ArticleSection>
          <div className="m-t-16">
            <div className="addthis_inline_share_toolbox"/>
          </div>
          <div className="m-t-8">
            <Disqus.DiscussionEmbed shortname="restaurantjourneys" config={{
              url: location.href,
              identifier: post.id,
              title: post.title,
            }}/>
          </div>
        </div>
      </MainNode>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogArticle(permalink: { eq: $slug }) {
      id
      title
      documentMeta
      documentTitle
      createdAt
      updatedAt
      permalink
      category
      relatedPosts {
        title
        permalink
      }
      body {
        id
        json
      }
    }
  }
`