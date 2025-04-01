/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'ryakosh\'s Blog',
  author: 'Arya Shokri',
  headerTitle: 'ryakosh\'s Blog',
  description: `By creating this blog I intend to remind myself of what I learnt and did, maybe I’ll be able to help you too!.`,
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://ryakosh.ir',
  siteRepo: 'https://github.com/ryakosh/blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'aryashokri@duck.com',
  github: 'https://github.com/ryakosh',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
