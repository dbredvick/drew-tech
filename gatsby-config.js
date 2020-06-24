module.exports = {
  siteMetadata: {
    title: `drew.tech`,
    name: `Drew Bredvick`,
    siteUrl: `https://drew.tech`,
    description: `Learnings from a developer who's trying to get better every day.`,
    hero: {
      heading: `Hi, I'm Drew. <br/> <br/> Let's build something together.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/dbredvick`,
      },
      {
        name: `github`,
        url: `https://github.com/dbredvick`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/drewbredvick`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/drew-bredvick/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        rootPath: "/",
        mailchimp: true,
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5RHXDKV",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `drew.tech`,
        short_name: `drew.tech`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    "gatsby-plugin-twitter",
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://gmail.us4.list-manage.com/subscribe/post?u=c64b14d8990dc078f8e67b3fd&amp;id=baa51396b9", // add your MC list endpoint here; see instructions below
      },
    },
  ],
};
