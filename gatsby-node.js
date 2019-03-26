
const path = require("path");

const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))

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
        console.log(node);
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

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  const oldPage = Object.assign({}, page)
  // Remove trailing slash unless page is /
  page.path = replacePath(page.path)
  console.log(page.path);
  if (page.path !== oldPage.path) {
    // Replace new page with old page
    deletePage(oldPage)
    createPage(page)
  }
}