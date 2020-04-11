---
title: Sharing is Caring
author: Drew Bredvick
excerpt: >-
  As a podcast lover, I want to be able to easily create a list of podcasts so that I can share them quickly with my friends and co-workers. Currently, I have to verbally tell my friends what podcasts I listen to. There’s always a back and forth where I tell them how to spell it, they show me their phone, and I click the podcast artwork that I recognize.
date: "2019-01-03"
template: post
thumb_img_path: v1579111010/blog/sharingLarge_nbzter
hero: ./images/sharingLarge.jpg
twitter_image: ./images/sharing-twitter.jpg
tags: ["side-projects", "software-exploration"]
secret: true
---## The Problem:

As a podcast lover, I want to be able to easily create a list of podcasts so that I can share them quickly with my friends and co-workers. Currently, I have to verbally tell my friends what podcasts I listen to. There’s always a back and forth where I tell them how to spell it, they show me their phone, and I click the podcast artwork that I recognize.

## Solution:

Here are a few requirements of a solution that would fix my problem:

1. A pre-populated list of podcasts to help jog my memory in a typeahead. I always forget exact names, so this is mainly to fix my personal tip-of-the-tongue experiences.
2. Perma-links to the my list of podcasts. I want the lists I create to be semi-permanent.
3. I need to have a user account to keep track of all the different lists I create.
4. Podcast names need to have links where people can find out more information about the shows. What good is a podcast name if I don’t have a link to the actual podcast website?
5. The amount of friction involved in creating a list needs to be super minimal. This means quick user registration, long expiring auth tokens, and minimizing clicks required to share a list. Quick share social integrations would also be nice.
6. Analytics on number of views my podcast links get would be really cool. Could even update this in real time with sockets.

## Future vision:

I think a natural next step of all of this would also be to become a podcast web player. There is competition in this market, so a feature to differentiate would be needed. Easy list sharing will get the users to the site, but something will be necessary to keep them around. I’m thinking something like sharable playback would be cool. Kind of a “listen together” approach. I think that this could have lots of different applications that people may use it for.

## How does this inform my tech decisions?

We know we need:

- Sockets
- User profiles
- Authentication
- Dynamic and static content
- Fast performance

If I’m looking for as much of this out of the box as possible, something like Sails or Meteor sound great here. We get a lot of these things preconfigured with those frameworks. There’s also the consideration of flexibility. Using some of those more preconfigured options is generally more limiting down the road.

Because I’m trying to level up my Express knowledge, I think I’m going to choose to do the back end with that.

As far as the front end, I’m really liking Next.js. I’m also thinking about throwing in styled-components. _Yes_, that means CSS in JS for all you people out there who are passionate about that.
