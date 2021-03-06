# Move along, nothing to see here.
This is a diary of me learning JS by my own self-developped program. Will also include steps where learning of additional tools should happen, even if I do not need it myself.

# Concept
## The Goal
The main goal is to be able to more easily dive into JS project, understand some JS magic and feel more or less comfortable with JS in general.

## The Idea
I do not see the Wizard way or learning as effective, and I prefer to learn things the Sorcerer way. That has number of important points:
* avoid initial information overload without being able to do anything serious.
* come up with a project, where learning will be a tool to complete it and not a goal itself.
* start with full modern stack and high level tools, going from high level to low level and not with classic academic approach.

## The Plan
1. create small experimental HTMLs.
1. create a project required by react.js tutorial.
1. create a small business-card like webpage.
1. create a business-card like webpage using single-page design.
1. add registration form.
1. add server side logic.
1. attach client side and server side.
1. add database.
1. add profile info/edit page.
1. add angular-based front-end without changing the back-end.

## Expected Learnings
* react.js
* yarn
* webpack
* node.js
* docker
* sql
* babel
* angular
* VS Code


# Progress
## 001
* VS Code
* brew for macOS
* yarn and node through brew
## 002
* condensed and to-the-point intro: https://www.youtube.com/watch?v=Ukg_U3CnJWI
## 003
* going through https://reactjs.org/tutorial/tutorial.html , using "Setup Option 2".
* seems like the default project template already provides everything that is needed to run dev server locally, test, build and suggestions on how to run the built version on simple http static server. That is fantastic amount of ready-to-use infrastructure.
* should read full template readme: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md
## 004
* configured VS Code with `jsconfig.json`, trying out `ES2018` syntax.
* tutorial suggests interesting usage of function references for `handleClick()` with `props`.
* functional components remove a lot of boilerplate.
* initial version of the tutorial app works, tried debugging and VS Code is configured to launch Chrome.
## 005
* finished the tutorial. Seems like the basic idea is to push all the state to the top level component and propagate down from there.
* to understand how Webpack and Babel works, will try to set up a project from scratch and copy sources from the react tutorial.
## 006
* react tutorial is using Webpack 3.
* webpack 4 requires little different configuration, especially for CSS processing, and also different approach to renaming of the resources.
* still haven't figured out how to pack favicon too.
* could not make React app work in IE8 with all possible babel configurations.
* `ES2015` is the lowest possible standard to which babel was able to transcompile React, which is IE9.
* Polyfills are needed to add `Set` and `Map` to IE9, and aparently polyfills is something that developer has to do in the code, and not just configure WebPack/Babel to do.
