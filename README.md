# Terminal Generator

## Why a Separate App for Code?

I write about coding. A lot. One of the most tedious tasks for writing technial articles is presenting code in a way that is attractive and easy to read. Nobody wants a screenshot of code from your editor. This kind of presentation looks sloppy and can be hard to read. Sure, some platforms like Medium offer in editor code blocks, but these have issues with readability when it comes to mobile. I found that I wanted an image asset to display code cleanly.

This led me to use Figma for creating code snippets. With Figma I could create fun and clean container elements that I could drop code into. This looked alot better, but also required so much more time. Each line of code would be it's own element and each tag or variable would have to be individually styled. It was tedious. There had to be a better way.

From this struggle I decided to create an app that could accept code from the clipboard and generate a screenshotable asset.

## How to Use this App

This app is out of the box easy to use. From the home tab you can select the type of code you want formatted, either terminal code or code from a code editor, and then copy and paste your code in the input box. On clicking `Generate Code` you will be taken to the second tab `Terminal Output`. Here you will have a nicely formatted element you can screenshot for an image to add to your article or paper.

If you want a little more control of the visuals, you can visit the `Advanced Settings` tab. Here you can select one of the five themes to style your output image with different theme colors and fonts.

## Getting Started

If you want to use this app locally, clone the app from Github. Once you have the app downloaded, change into a local directory and run `npm install` to pull in all the dependencies. From the project's root directory, run `npm run start` to start the server and navigate to the `localhost:3000` or whatever port your server is running on. You should now be able to transform code snippets into easy to use UI elements!

## Tech Used in This App

1. TypeScript
2. React
