---
title: 'Rebuilding My Blog with Next.js, TailwindCSS, and MDX'
date: '2025-06-01'
tags: ['next.js', 'mdx', 'tailwind']
excerpt: "Why tinker with your personal blog site when you can build it all over again with Next.js, MDX, and TailwindCSS?"
coverImage: '/assets/blog/hello-world/helloworld.jpg'
author:
  name: Wilson Quispe
  picture: '/assets/blog/authors/profileWilson.jpg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

## 1. Motivation for Redesigning My Jamstack Website

After initially building my blog with Next.js and [Sanity.io](http://sanity.io), I felt my site was in desperate need of a refresh. Although I absolutely love Sanity, their headless CMS turned out to be too robust for what I needed in a personal blog.

Since then, Next.js has evolved and now includes features I wasn’t using before. Also, I’ve come a long way as a self-taught developer. I’ve discovered new tools and techniques I was eager to try, and I wanted my stack to reflect everything I had learned.

Now that I have a functional MVP for my site, I plan to write content regularly and keep adding new features and refactoring along the way. [View the code on GitHub](https://github.com/wilsonquispealanoca/wilsonquispe.io) if you're interested.

### 2. Inspiration

I’ve been a long-time reader of [Timo Lins’s blog](https://timo.sh/) and have always been impressed by his content. Both the code and the aesthetics of his site were a big inspiration.

If you’re interested in Next.js development, I highly recommend following him. He works at Vercel and has been a great resource for me.

[TIMOTHY LIN](https://www.timlrx.com) is a developer, data scientist, economist, and co-founder of [Cylynx](https://www.cylynx.io/). I found him while searching GitHub for Next.js + MDX examples. His personal site and his [Next.js Tailwind Starter Blog template](https://github.com/timlrx/tailwind-nextjs-starter-blog) are also inspired by Timo, though with a different style — more colorful and with tags to organize posts.

## 3. Features / Stack

### Next.js – The React Production Framework

Since discovering Next.js a couple of years ago, no other JavaScript “shiny new toy” has caught my attention. I came from building custom WordPress themes, spinning up local servers, and struggling with compilers and bundlers. With Next.js, the developer experience improved a lot—even as a beginner in React.

If you’re a React developer and haven’t tried it yet, check out the [official documentation](https://nextjs.org/docs) and the [examples repository](https://github.com/vercel/next.js/tree/canary/examples). When you have time, build something of your own.

### Styling with TailwindCSS

I started designing with plain CSS, then moved on to [Bootstrap](https://getbootstrap.com/), [Bulma](https://bulma.io/), and Sass/SCSS. I swore I’d never use UI frameworks again... until I tried [TailwindCSS](http://tailwindcss.com/).

I realized Tailwind is not like the others. I loved its flexibility and it allowed me to quickly create two distinct experiences for users with dark mode. Instead of using a package like `next-themes`, I created a React context to manage it my own way.

### Markdown with React Components (MDX)

Developers love Markdown because it’s easy to write and converts nicely into HTML. But [MDX](https://mdxjs.com/) takes it a step further: it lets you use React components directly inside Markdown files.

I had already used Markdown for note-taking, and seeing so many personal sites adopt MDX motivated me to give it a try. And it was totally worth it.

### Prism for Syntax Highlighting

I use [Prism](https://prismjs.com/) to highlight code snippets in my posts.

```js
export default function BlogTitle({ children }) {
  return <h1 className="text-3xl md:text-5xl font-bold mb-4">{children}</h1>;
}
```

### SEO for Next.js Applications

I’ve been working in SEO for nearly a decade, so I needed my site to be search engine friendly. Part of the reason I learned about Jamstack was because of the poor performance (and loading speed) of WordPress sites.

With the arrival of [Core Web Vitals](https://blog.chromium.org/2020/05/introducing-web-vitals-essential-metrics.html), I knew it was time to find a faster solution.

The [`next-seo`](https://github.com/garmeeh/next-seo) plugin made it very easy to implement metadata and structured data. I also needed to control whether my URLs ended with a slash and change the blog path from `/blog` to `/posts`, all of which I managed through `next.config.js`.

I also added `robots.txt`, an XML sitemap generator, and an RSS feed.

### Hosting with Vercel

[Vercel](https://vercel.com/) is a great platform to deploy frontend apps. Although built by the creators of Next.js, you can use it with Gatsby, Vue, Angular, Nuxt, and others.

It has several [integrations](https://vercel.com/integrations) for analytics, databases, and CMSs. It also supports [monorepos](https://vercel.com/blog/monorepos).

And best of all: I host my site for free. Well, free if you don’t count the time spent building it. 😜

## 4. What’s Next?

Even though my blog is in a functional state, I want to keep adding things like:

- Links to previous/next posts  
- Tag pages  
- Templates for UX/UI and Next.js projects  
- A multilingual version of the site  

I don’t know what else I’ll end up creating or learning, but I hope you’ll join me on the journey. 🙋‍♂️