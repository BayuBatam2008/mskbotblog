// .vuepress/config.js

module.exports = {
  // Title of your website
  title: 'Musik Bot Blog',

  // Description of your website
  description: 'Musik Bot Blog Official',

  // Language of your website
  locales: {
    '/': {
      lang: 'en-US',
    },
  },

  // Theme to use
  theme: 'meteorlxy',

  // Theme config
  themeConfig: {
    // Language of this theme. See the [Theme Language] section below.
    lang: 'en-US',

   lang: Object.assign(require('vuepress-theme-meteorlxy/lib/langs/en-US'), {
      home: 'Welcome to Musik Bot Blog',
      posts: 'My Post',
    }),

    // Personal infomation (delete the fields if you don't have / don't want to display)
    personalInfo: {
      // Nickname
      nickname: 'bayu',

      // Introduction of yourself (HTML supported)
      description: 'Random Person',

      // Email
      email: 'bayu@bayuu.xyz',

      // Your location
      location: 'Indonesia',

      // Your organization
      organization: '',

      // Your avatar image
      // Set to external link
      avatar: 'https://www.meteorlxy.cn/assets/img/avatar.jpg',
      // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
      // avatar: '/img/avatar.jpg',

      // Accounts of SNS
      sns: {
        // Github account and link
        github: {
          account: 'BayuBatam2008',
          link: 'https://github.com/BayuBatam2008',
        },

        // Twitter account and link
        twitter: {
          account: 'BayuBatam2008',
          link: 'https://twitter.com/BayuBatam2008',
        },
      },
    },

    // Header Config (Optional)
    header: {
      // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
      background: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        url: '/assets/img/bg.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },

      // show title in the header or not
      showTitle: true,
    },

    // Footer Config (Optional)
    footer: {
      // Show 'Powered by VuePress' or not (enable it to support VuePress)
      poweredBy: false,

      // Show the theme that you are using (enable it to support this theme) (please do not disable it, haha)
      poweredByTheme: false,

      // Add your custom footer (HTML supported)
      custom: 'Made By Bayu With ❤️',
    },

    // Info Card Config (Optional)
    infoCard: {
      // The background of the info card's header. You can choose to use an image, or to use random pattern (geopattern)
      headerBackground: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        url: '/assets/img/bg.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },
    },

    // Show the last updated time of your posts
    lastUpdated: true,

    // The content of your navbar links
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
    ],

    // Enable smooth scrolling or not
    smoothScroll: true,

    // Configs for vuepress-plugin-zooming
    zooming: {
      // @see https://vuepress.github.io/en/plugins/zooming
    },

    // Comments config. See the [Posts Comments] section below.
    comments: {
      owner: 'BayuBatam2008',
      repo: 'mskbotblog',
      clientId: 'MY_CLIENT_ID',
      clientSecret: 'MY_CLIENT_SECRET',
    },

    // Pagination config (Optional)
    pagination: {
      perPage: 5,
    },

    // Default Pages (Optional, the default value of all pages is `true`)
    defaultPages: {
      // Allow theme to add Home page (url: /)
      home: true,
      // Allow theme to add Posts page (url: /posts/)
      posts: true,
    },
  },
}
