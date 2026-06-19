![Web Landing Page](./proud-proxima/LandingPage.gif)

------------
# What is the project about?
This portfolio was built to showcase my projects, technical skills, and professional experience. It serves as a place for recruiters, collaborators, collegues and industry professionals to look at my profile.

# Why I built it?
I built my portfolio website to create a professional online presence and demonstrate my abilities to potential employers, and collaborators. It allows me to highlight my work, share my accomplishments, and make it easier for people to understand my skills and experience.

# What technologies I used:
- **Astro**: For core HTML and CSS elements. I wanted to play around with Astro because of its 'islands architecture' where island components can be supported by multiple frameworks and hydrated individually. This give Astro blazing fast page speeds as most of the code is written in pure HTML and CSS while only interactive components being written with javascript/typescript.
- **React**: I used React as my choice for client side island components, as its the simplest to integrate with Astro and has a strong ecosystem
- **GitHub Pages**: I used GitHub Pages to host and deploy this site as this is a static site with only frontend, I didn't require a backend server which made GitHub a nice free to use option.

# Performance
[Performance Report](https://pagespeed.web.dev/analysis/https-aviral-gupta-com/1r1f86vw3c?form_factor=desktop)

I have serialized the pages in a way to maximize page performance:
--image
--image

# Challenges
 - Although Astro allows islands, I found it lacking when different islands/components needed to communicate with each other. For example, an '*.astro' file can use </slot> or direct imports to another .astro or .jsx file, it is not true the other way around. The jsx file cannot implement astro components. This makes it difficult if props from jsx components need to trickle data or states back up to parent astro component, as the parent will only render HTML to browser once and only jsx can hydrate afterwards. During Development this made it diffcult for me to build strict astro components which could render based on current state of something.
 - I also found it challenging to reduce the Cumulative Layout Shift (CLS) score as my page annimations where seem as moving components, rather than checking that the div container is abosulte positioned, the text inside was read as moving component which increased the CLS score. I was able to reduce the CLS score to 0.02-0.80 (depending on page) by removing 'mouseclick' from pages but had not success reducing any further without taking away animations from the website.
 - I had no idea how to make the site more responsive for mobile users and the performace for that has been one of the biggest downsides of this project.

# Coming Soon...
- Full Projects to Projects Page (still working on the content to show, features, how to integrate)
- Performance Improvements:
