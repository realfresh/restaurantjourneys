require("./src/styles/reset.scss")
require("./src/styles/index.scss")

exports.onRouteUpdate = ({ location, prevLocation }) => {
  // Track pageview with google analytics
  if (window.ga) {
    window.ga(`set`, `page`, location.pathname + location.search + location.hash)
    window.ga(`send`, `pageview`)
  }
  else {
    console.log("NO GA");
  }
}