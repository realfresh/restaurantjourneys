module.exports = {
  siteMetadata: {
    title: `Restaurant Journeys`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    siteUrl: `https://www.restaurantjourneys.com`,
    author: "@restaurantjourneys"
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: ``,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#C34545`,
        theme_color: `#C34545`,
        display: `minimal-ui`,
        icon: `static/images/logo-icon-300.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.restaurantjourneys.com',
        sitemap: 'https://www.restaurantjourneys.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: edge.node.path === "/" ? site.siteMetadata.siteUrl : (site.siteMetadata.siteUrl + edge.node.path),
              changefreq: edge.node.path === "/" ? "weekly" : "monthly",
              priority: edge.node.path === "/" ? 1 : 0.7,
            }
          }),
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `fnjgykqkbh7b`,
        accessToken: `d2993259a62236d4be2caeaa99f062306f27729f4c51703b69a5edd247f5b462`,
      },
    },
  ],
}
