---
title: A Developer's Guide - Building Great Software Incrementally with Analytics
author: Drew Bredvick
excerpt: >-
  Google Analytics is powerful. It puts you in touch with what your users want and build features they will actually use. This is a series that dives into Google Analytics from a developer's point of view.
date: "2019-09-17"
thumb_img_path: v1579111018/blog/Google-Analytics-for-Developers-part-one_hdfwrh
hero: ./images/Google-Analytics-for-Developers-part-one.png
template: post
twitter_image: ./images/Google-Analytics-for-Developers-part-one.png
tags: ["software-exploration", "side-projects"]
---

There are a few different reasons you could be reading this right now:

1. You're building a new product from scratch
2. The marketing department asked you to add Google Analytics/Tag Manager to the site
3. You're a product manager trying to write Jira tickets for your engineers

In all of these scenarios, this guide should serve as a blueprint for your upcoming work. This guide skews towards developers but should be friendly for all audiences.

## Overview

### Part One

In this first section, we will talk about the motivation for tracking. It's best to know the reason behind what you're doing; building the best product for our users is _that reason_.

### Part Two

Think of this piece as the "Getting Started" guide. GTM (Google Tag Manager) and GA (Google Analytics) have developer documentation, but it's missing the holistic view that's important to know while implementing any new technology.

### Part Three

Finally, we'll go through some scenarios of tracking. This is the part that most guides involving Google Analytics are missing in my opinion. They are rarely written for both developers and marketers. This guide hopefully will merge that gap.

---

# Part One

## Motivation

### Why do we want to track everything on our product?

Rather than building the product we have in mind, we should build what our users want. By getting a peek into how our users interact with our product, we significantly increase our chance of making a world-class experience.

Each time we ship an iteration and pay attention to its impact, we build a better product. I highly recommend reading *The Lean Startup* by Eric Ries. If you want the TLDR version, check out this post with the core principles the book talks about: [theleanstartup.com/principles](http://theleanstartup.com/principles). To iterate like that, to build, measure, and learn, we must track how our users are interacting with the site. Without this data, we can't validate a new feature launch. Implementing Google Analytics is one of the best ways to do this.

> To iterate like that, to build, measure, and learn, we must track how our users are interacting with the site. Without this data, we can't validate a new feature launch.

### Why should I start with analytics in the beginning?

If we build the site with analytics in mind, we won't have to circle back later and retro-fit the site. Also, by gathering data sooner, we up our chances of taking the right path.

The action we take now will impact the codebase and product for years to come. Think of a time you did something the wrong way at the beginning of a project. It's very likely that you never _got to it later_ and fixed that one shortcut you took to launch.

### Lessons learned by doing Google Analytics the WRONG way

- Analytic tracking needs to be accessible to everyone in the company. These core metrics are what drive our success.
- Analytic tracking needs to be a core competency of the product & engineering team; this means more than two people should own the GA effort.
- Analytics need to inform the design. We need to take the learnings from GA and work that into our design.
- Use statistically significant data when making decisions (we were tweaking Spreetail.com with a few hundred users, not enough to be sure of our findings)

### We need to have a baseline of data to compare for A/B testing.

Measurement is the first step towards running successful A/B tests. A few months from now, someone in your company is going to ask for A/B testing. This is a prerequisite. If you don't have baseline metrics, testing means nothing.

## Okay, so how do we do this the "right way"?

### During questions

- On what designs should we test small tweaks?
- How do we measure if someone is using a feature incorrectly?
- How can we double down on successful designs elsewhere in the product?

### Planning questions

- How can we prioritize our backlog with assistance from analytics?
- How can we measure the cost of "missing" features?

### Development questions

- How can we use analytical insights to guide our automated testing?
- How do we use data to decide how critical incoming bugs are?
- How can we prioritize our backlog with assistance from analytics?
- What are GA & GTM best practices to implement along the way so that we don't have to refactor later?
- How can we support the business measuring new items in a self-service way?

Please ask me any questions you have! I'm by no means an expert, but I love learning about this stuff. Part two will be out next week. Enter your email address below to stay updated 🙂
