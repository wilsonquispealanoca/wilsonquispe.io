---
title: 'Rebuilding My Blog with Next.js, TailwindCSS, and MDX'
date: '2021-03-11'
tags: ['next.js', 'mdx', 'tailwind']
excerpt: "Why tinker with your personal blog site when you can build it all over again with Next.js, MDX, and TailwindCSS?"
coverImage: '/assets/blog/hello-world/helloworld.jpg'
author:
  name: Wilson Quispe
  picture: '/assets/blog/authors/profileWilson.jpg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

## 1. Motivation for Redesigning my Jamstack Website

After initially building my blog with Next.js and [Sanity.io](http://sanity.io), my website was in desperate need of a refresh. And while I absolutely love Sanity, their headless CMS is a tad too robust for my simple blog site needs. 

Since the last time I built my website, Next.js has implemented features I wasn’t using. I have also have come a *long* way in my self-taught developer journey. I've discovered new tools and techniques that I've been itching to try and I wanted to reflect that in my stack for this rebuild.

Now that I have an MVP for my website, I'll be writing content on a regular cadence and adding more features/refactoring along the way. [View the code on Github](https://github.com/wilsonquispealanoca/wilsonquispe.io) if you're interested.

### 2. Inspiration

I have been a long-time reader of [Timo Lins blog](https://timo.sh/) and have always been impressed with his content. His [website code and aesthetic](https://github.com/timolins) was a great inspiration to mine as evidenced in my use of his search input on my blog index page 😅.
Though, I did alter my search filter to also search within the summary my posts instead of just the titles.

If you are interested in Next.js development, I highly recommend following him, as he works for Vercel and has been a great resource to me.

[Timothy Lin](https://www.timlrx.com) is a developer, data scientist, economist, and co-founder of [Cylynx](https://www.cylynx.io/).
I stumbled upon him when scouring Github repositories for Next.js + MDX examples. 
For his personal site and [Next.js Tailwind Starter Blog template](https://github.com/timlrx/tailwind-nextjs-starter-blog), he *also* got his inspiration from Timo Lins, though his design differs, adding a flair of color and tags to organize his posts.

## 3. Features / Stack

### Next.js – The React Production Framework

Since discovering Next.js about a year ago, none of JavaScript's other "shiny new toys" have caught my eye. Coming from a history of developing custom WordPress themes and spinning up local servers or figuring out compiling and bundling, the developer experience of Next.js is so wonderful – even as a beginner to React.

For React developers that have not tried it out, I highly recommend you take a look at the [Next.js documentation](https://nextjs.org/docs) and [repository of Next.js application examples](https://github.com/vercel/next.js/tree/canary/examples). When you get some time, try out your own project.


### Styling with TailwindCSS

As someone who learned how to design for the web using CSS, [Bootstrap](https://getbootstrap.com/), [Bulma](https://bulma.io/), and Sass/SCSS in that order, I swore I would *never* use one of those UI frameworks again. As long as I could compile SCSS to CSS, autoprefix the CSS, and implement the critical inline CSS, I had no intention of ever changing that.

I'm so glad I finally gave [TailwindCSS](http://tailwindcss.com/) a chance. As someone who loves building everything from scratch, I quickly realized TailwindCSS is actually the perfect styling tool for frontend developers and quite different than those frameworks. 

I also love their Dark mode feature which allowed me to create 2 distinct experiences for visitors to my website. Instead of using a package like next-themes, I create a React Context and implemented my theme mode that way.

### Markdown with React Components (MDX)

Developers tend to love markdown because it’s easier to type and format text that will eventually be rendered back to a language browsers can understand. The basic use of markdown is to type less. 

[MDX](https://mdxjs.com/) is a wonderful tool to allow you to include JSX into files. For developers that may not need or want the features of an entire CMS, this means they can still include their custom components when they want to. 

I had already been familiar with using markdown in the past for note taking purposes on my MacBook. I had started to see a good number of developers rebuilding their personal blog sites to implement MDX and wanted to give it a try.

### Prism for Syntax Highlighting

Using [Prism](https://prismjs.com/) for syntax highlighting, I can blog about my development journey and render code snippets on my posts using markdown. Below is an example of of a code block.

```js
export default function BlogTitle({ children }) {
  return <h1 className="text-3xl md:text-5xl font-bold mb-4">{children}</h1>;
}
```

### SEO for Next.js Applications

As a professional SEO of nearly a decade, having a website that was SEO friendly was extremely important to me. 
One of the major reasons I decided to learn Jamstack development, specifically, is because of poor page performance including page load speed with WordPress sites. 

With [Google introducing Core Web Vitals](https://blog.chromium.org/2020/05/introducing-web-vitals-essential-metrics.html) this spring, it looks like I was ahead of the curve in finding a faster, better peformingm, web development solution.

I needed to be able to quickly update Page Titles and Meta Dscriptions on my posts and be able to add Structured Data markup.
The [`next-seo` plugin](https://github.com/garmeeh/next-seo) made that a much easier process for me, especially with implementing the Structured Data I wanted.

Another thing I was worried about was the ability to control whether or not my URLs had a trailing slash and implementing redirects since I was changing my blog subfolder from `/blog` to `/posts`.
Next.js allows you to make both of those changes via the `next.config.js` file.

I also included a robots.txt file and scripts to generate an XML sitemap and RSS feed.

### Hosting with Vercel

[Vercel](https://vercel.com/) is a great place to deploy frontend applications.
Though built by the creators of Next.js, you can host any frontend application using the likes of Gatsby, Nuxt, Vue, Angular, and more.

They also have a [(growing) number of integrations](https://vercel.com/integrations) for Analytics, Databases, CMS's and more. When my site was built with Sanity, I also hosted the frontend on Vercel.
Coming from using other hosting platforms, Vercel provides a simple-to-navigate interface making it easy for me to manage various projects, my domains, and it also has support for [monorepos](https://vercel.com/blog/monorepos)!

Vercel also offers [Vercel Analytics](https://vercel.com/analytics) to provide you with a Real Experience score from your user visits. You can gather data and insights from the experience your visitors have on the actual devices they use.

Using Vercel, I host my website for absolutely free. Okay, okay, that's not *exactly* true – it does cost my time of creating the site. <Emoji emoji="😜" label="Stuck out toungue wininking face" />

## 4. What's Next? (pun intended)

While my blog is currently in a place I can work with, I plan to implement some other things like:

- Links to previous/next posts
- Tags with individual pages for each tag
- Adding a template for Next.js or UX/UI project write-ups
- Convert my site in multilanguages.

Who knows what else I'll end up implementing, learning, or building in the future, but I hope you'll come along for the journey!