# NowPlaying ![alt text](https://raw.githubusercontent.com/davidcp90/nowplaying/master/dist/img/favicon.png "Logo")
##### by David Camargo
---
A small app that shows tweets with the hashtag #nowplaying including a youtube link.
### Todos

 - ~~Write the README~~
 - ~~Install dependencies~~
 - ~~Automation with gulp~~
 - ~~Server Up~~
 - ~~App Skeleton~~
 - ~UI development~
 - ~Services development~
 - ~Angular app~
 - ~Test the app(Manually~



### Tech

NowPlaying uses a number of open source projects to work properly:

* [AngularJS] - I am using Angular to make my HTML dynamic and keeping my javascript well organized to express my application's components clearly and succinctly.
* [Express] - I am using Express.js as a small "backend" that provides a simple an intituive way to get the data and serve the application.
*[Twit] - A node component that allows to access easily to twitter api's
* [Twitter Bootstrap] - I am using the LESS version of the framework with only a few of the available plugins , in order to deliver a responsive & beautifully designed UI. I choose this framework because i am well versed on it and give me the posibility to prototipe rapidly.  
* [Gulp] - I am using Gulp to automate my builds of Less and Javascript files
* [Requirejs] - I am using RequireJS to load all the javascript modules needed to run the app in an asynchronous way.
* [jQuery] - Jquery help me to control the DOM and perform some javascript routines faster(i am not talking about performance)

### Run the app

I have a package.json ready with all the dependencies needed to run the app, you can run the app with the following steps (Node.js required):

```sh
$ git clone git@github.com:davidcp90/nowplaying.git
$ npm install
$ node server.js
```
Now you only need to go to http://localhost:3000 to see the app.

### Development
***
#####Gulp Build
To make the build just run (you need gulp installed globally)
```sh
$ gulp watch
```
###Future Improvements
-Add tweets posted from the app instantly
-Infinite scrolling ( I have the jquery function to do it in init-dom.js, but i didnt finished)
-Improve performance
-Unit and E2E tests
-Solve the bug with the JSON formating in order to use angular directives and not the jquery hotfix that i made to render the fetched tweets 
-Add functionality to reply , retweet , favorite and follow buttons

###Screenshots
Stage Desktop:  
![alt text](https://raw.githubusercontent.com/davidcp90/nowplaying/master/screenshots/stage-desktop.png "Stage Desktop")  
Stage Mobile:  
![alt text](https://raw.githubusercontent.com/davidcp90/nowplaying/master/screenshots/stage-rwd.png "Stage Mobile")
Tweet Succesfuly Posted:  
![alt text](https://raw.githubusercontent.com/davidcp90/nowplaying/master/screenshots/tweet-success.png "Tweet Success")  
![alt text](https://raw.githubusercontent.com/davidcp90/nowplaying/master/screenshots/tweet-success-twitter.png "Tweet Success on Twitter")
Post Anatomy:  
![alt text](https://raw.githubusercontent.com/davidcp90/nowplaying/master/screenshots/post.png "Post")
###License
----

MIT

### Version
0.1



[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>
   [RequireJS]: <http://requirejs.org>



