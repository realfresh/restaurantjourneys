
const path = require("path");

exports.createPages = ({ graphql, actions }) => {

  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogArticle {
          totalCount
          edges {
            node {
              title
              permalink
            }
          }
        }
      }
    `).then((result) => {

      console.log(result);

      const posts = result.data.allContentfulBlogArticle.edges;

      posts.forEach(({ node }) => {
        createPage({
          path: "/blog/" + node.permalink,
          component: path.resolve(`./src/templates/blog_post.tsx`),
          context: {
            slug: node.permalink,
          },
        })
      })
      resolve()
    })
  })

}