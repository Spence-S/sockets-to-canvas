# Code Sample

This is a sample app for an interview and was a lot of fun to make. I was able to
play with some fun patterns and test out some new technology. I had to learn a lot about
typescript very quickly but over all building the project was a lot of fun.

Lately, I have been playing around with generators, iterators, and rx.js and exploring
some observable patterns, and I saw this challenge as a great opportunity to put
these skills to use!

I created a WS class that extends the base browser WebSocket class and gave it Symbol.asyncIterator
property. This was heavily insprired by the excellent blog post you can read [here](https://www.bignerdranch.com/blog/asyncing-feeling-about-javascript-generators/)

### A quick note

I purposefully didn't ignore any built files, although I would have normally done this, since
the app was so small, I figured it would be just as easy and harmless to include them.

## To run

1.  ensure that websocketd is installed on your machine and that binaries are accessible via the command line `websocketd` command

2.  clone this repo and run `npm install` or `yarn`

3.  run `npm start` or `yarn start` in your terminal

4.  visit localhost:3000 in your browser

### Final comments

While the project was fun, and I got to try my hand with typescript and some
more obscure patterns, I didn't get the performance I wanted out of the demo. I would
be curious to see an example where socket and rendering were all accomplished in
under 1 second. Whether or not I aced the "exam" or delivered something the
employer was looking for, it was a fun experience making this little app and

I'm happy I got to play around with the technologies in the way that I did. This
was my first time playing with typescript and I can see the utility, however, it
took more time than I initially anticipated to get it all compiling correctly. I would
definitely need more exposure to form a solid opinion.

If I would have had more time, I would have also liked to have made some fancy UI
animations and give it a more impressive visual feel, I spend 100% of the time on
javascript and completely ignored styling.
