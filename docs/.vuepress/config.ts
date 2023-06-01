import { defineUserConfig, viteBundler } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";

// const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
  title: "KaiYi Xu",
  description:
    "KaiYi Xu (Aseisman) is a powerful guy in people of all shapes and sizes.",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`,
      },
    ],
    // ["meta", { name: "application-name", content: "Xiaohan Zou" }],
    // ["meta", { name: "apple-mobile-web-app-title", content: "Xiaohan Zou" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` },
    ],
    [
      "link",
      {
        rel: "raphael",
        href: "https://cdnjs.cloudflare.com/ajax/libs/raphael/2.3.0/raphael.min.js",
      },
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }],
  ],

  bundler: viteBundler(),
  base: "/blog-vuepress/",

  theme: gungnirTheme({
    repo: "",
    docsDir: "docs",
    docsBranch: "master",

    hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: "Aseisman",
      avatar: "/img/avatar.png",
      description: "いつか私はもう初心者ではありません",
      sns: {
        github: "Aseisman",
        linkedin: "kaiyi-xu",
        // facebook: "renovamen.zou",
        // twitter: "renovamen_zxh",
        // zhihu: "chao-neng-gui-su",
        email: "cargox@qq.com",
        // rss: "/rss.xml",
      },
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)",
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgba(196, 176, 131, .1)",
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)",
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)",
      },
      {
        path: "/img/home-bg/5.jpg",
      },
      {
        path: "/img/home-bg/6.jpg",
        // mask: "rgba(19, 75, 50, .2)",
      },
      {
        path: "/img/home-bg/7.jpg",
        // mask: "rgba(101, 173, 185, .2)",
      },
      {
        path: "/img/home-bg/8.jpg",
        mask: "rgba(19, 75, 50, .2)",
      },
      {
        path: "/img/home-bg/9.jpg",
        mask: "rgba(75, 19, 68, .2)",
      },
      {
        path: "/img/home-bg/10.jpg",
        mask: "rgba(19, 75, 50, .2)",
      },
    ],

    // other pages
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)",
        },
      },
      links: {
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)",
        },
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      // git: isProd,
      // katex: true,
      // giscus: {
      //   repo: "This-is-an-Apple/blog-giscus-comments",
      //   repoId: "R_kgDOGl2SjQ",
      //   category: "Announcements",
      //   categoryId: "DIC_kwDOGl2Sjc4CAcxK",
      //   darkTheme: "https://blog.zxh.io/styles/giscus-dark.css",
      // },
      // mdPlus: {
      //   all: true,
      // },
      // chartjs: true
      // ga: "G-HCQSX53XFG",
      // ba: "75381d210789d3eaf855fa16246860cc",
      // rss: {
      //   siteURL: "https://blog.zxh.io",
      //   copyright: "Renovamen 2018-2022",
      // },
    },

    navbar: [
      {
        text: "Home",
        link: "/",
        // icon: "fa-fort-awesome",
      },
      {
        text: "Tags",
        link: "/tags/",
        // icon: "fa-tag",
      },
      {
        text: "Links",
        link: "/links/",
        // icon: "fa-satellite-dish",
      },
      {
        text: "About",
        link: "",
        // icon: "fa-paw",
      },
      {
        text: "Portfolio",
        link: "",
        // icon: "oi-rocket",
      },
    ],

    // skills:[
    //   {
    //     text: "ECMAScript",
    //     value: "80",
    //     color: "#bef389"
    //   },
    //   {
    //     text: "CSS3",
    //     value: "80",
    //     color: "#e6ffff"
    //   },
    //   {
    //     text: "React",
    //     value: "80",
    //     color: "#d1abff"
    //   },
    //   {
    //     text: "NodeJs",
    //     value: "62",
    //     color: "#ffa791"
    //   },
    //   {
    //     text: "JAVA",
    //     value: "80",
    //     color: "#92d9ff"
    //   },
    //   {
    //     text: "VUE",
    //     value: "88",
    //     color: "#befbf1"
    //   }
    // ],

    footer: `
      &copy; <a href="https://github.com/Aseisman" target="_blank">Aseisman</a> 2022-2023
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `,
  }),

  markdown: {
    headers: {
      level: [2, 3, 4, 5],
    },
    code: {
      lineNumbers: false,
    },
  },
});
