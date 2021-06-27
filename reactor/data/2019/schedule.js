const workshop = new Date("2019-09-26").getTime();
const day1 = new Date("2019-09-27").getTime();
const day2 = new Date("2019-09-28").getTime();

export const scheduleList = {
  workshops: [
    {
      type: "workshop",
      time: "09:30 AM - 05:30 PM",
      venue: "Planet Hollywood, Ballroom",
      day: "Thursday",
      title: "Building your first Design System: from scratch to production",
      description:
        "This is a hands-on workshop for developers in which you will learn how to define a common language for collaboration and iterate on products faster.Learn the best practices of component driven design and how to standardize your design patterns. Leverage React to build a component library that can be used in products and can evolve as teams use it. At the end of the day, you will have a small but complete Design system implementation that will cover the full product lifecycle.",
      trainer: {
        name: "Siddharth Kshetrapal",
        image: "assets/images/speakers/siddharth.jpg"
      },
      startTime: new Date("2019-09-26T04:00:00.000Z"),
      endTime: new Date("2019-09-26T12:00:00.000Z")
    },
    {
      type: "workshop",
      time: "09:30 AM - 05:30 PM",
      venue: "Planet Hollywood, Ballroom",
      day: "Thursday",
      title: "Practical ReasonML for React devs",
      description:
        "Reason lets you write simple, fast and quality type safe code while leveraging both the JavaScript & OCaml ecosystems. In this workshop we won't only see how and why we should write our code in ReasonML, but talk about practical applications of using ReasonML in new or existing React projects",
      trainer: {
        name: "Vladimir Novick",
        image: "assets/images/speakers/vladir.jpg"
      },
      startTime: new Date("2019-09-26T04:00:00.000Z"),
      endTime: new Date("2019-09-26T12:00:00.000Z")
    },
    {
      type: "workshop",
      time: "09:30 AM - 05:30 PM",
      venue: "Planet Hollywood, Ballroom",
      day: "Thursday",
      title: "Advanced GraphQL",
      description:
        "GraphQL is a new way to build APIs for modern apps. Building APIs with GraphQL often needs a mental shift from RESTful APIs. In this workshop, we will cover all the concepts required for building GraphQL based apps. We will build a simple e-commerce web app with GraphQL (apollo-server) on the backend and React & Apollo Client on the frontend in this workshop.",
      trainer: {
        name: "Kiran Abburi",
        image: "assets/images/speakers/kiranAbburi.jpg"
      },
      startTime: new Date("2019-09-26T04:00:00.000Z"),
      endTime: new Date("2019-09-26T12:00:00.000Z")
    }
  ],
  conference: {
    day1: [
      {
        type: "basic",
        time: "08:30 AM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Friday",
        title: "Badges Pickup & Breakfast",
        startTime: new Date("2019-09-27T03:00:00.000Z"),
        endTime: new Date("2019-09-27T04:00:00.000Z")
      },
      {
        type: "basic",
        time: "09:30 AM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Friday",
        title: "Conference opening & welcome",
        startTime: new Date("2019-09-27T04:00:00.000Z"),
        endTime: new Date("2019-09-27T04:30:00.000Z")
      },
      {
        type: "talk",
        time: "10:00 AM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Friday",
        title: "Thousands of words",
        description: "",
        speaker: {
          image: "assets/images/speakers/sunil_pai.jpg",
          name: "Sunil Pai"
        },
        startTime: new Date("2019-09-27T04:30:00.000Z"),
        endTime: new Date("2019-09-27T05:00:00.000Z")
      },
      {
        type: "talk",
        time: "10:30 AM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Friday",
        title: "GraphQL State Management in a React World",
        description:
          "Once we receive data from an API, how do we manage it on the GraphQL client side? How do hooks work with GraphQL? How can we leverage Apollo client to manage our state? Can we use Redux along with GraphQL ?  In this talk, I will be answering these questions and talking about state management solutions that work well with GraphQL. I will also be talking about the GraphQL journey at PayPal.",
        speaker: {
          image: "assets/images/speakers/shruti.jpg",
          name: "Shruti Kapoor"
        },
        startTime: new Date("2019-09-27T05:00:00.000Z"),
        endTime: new Date("2019-09-27T05:30:00.000Z")
      },
      {
        type: "talk",
        time: "11:00 AM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Friday",
        title: "Curious Cases of GraphQL",
        description:
          "As GraphQL moves into the mainstream, the tooling & ecosystem has grown and has made it possible to do much more with GraphQL than using it as just a data layer. In this talk, I'll show how developers are using GraphQL as an API gateway to accomplish things that you may have never thought possible.",
        speaker: {
          image: "assets/images/speakers/nader_dabit.jpg",
          name: "Nader Dabit"
        },        
        startTime: new Date("2019-09-27T05:30:00.000Z"),
        endTime: new Date("2019-09-27T06:00:00.000Z")
      },
      {
        type: "break",
        time: "11:30 AM",
        venue: "PLANET HOLLYWOOD",
        day: "Friday",
        title: "Break",
        community: "true",        
        startTime: new Date("2019-09-27T06:00:00.000Z"),
        endTime: new Date("2019-09-27T06:25:00.000Z")
      },
      {
        type: "talk",
        time: "11:55 AM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Friday",
        title:
          "Cleartrip’s reactive journey from 3 to 0.2s using Apollo GraphQL, Redis Caching and Monitoring",
        description:
          "We have built a single GraphQL endpoint @Cleartrip to remove the dependency of the react client with the Rest API. This will avoid the unnecessary over fetching of verbose data and manipulation on the client, making the react client cleaner and faster (3 → 0.2s document load).I will also talk about how we improved page load time using redis caching at Graphql server and monitored the results using new relic.",
        speaker: {
          image: "assets/images/speakers/EeshTyagi.jpg",
          name: "Eesh Tyagi"
        },
        startTime: new Date("2019-09-27T06:25:00.000Z"),
        endTime: new Date("2019-09-27T06:55:00.000Z")
      },
      {
        type: "talk",
        time: "12:25 PM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Friday",
        title: '"Intuitive" Tooling',
        description:
          "One of the nuances of working in frontend development is constantly being told that [insert whatever tooling, frameworks or technologies here] are “super simple” or “easy to pickup”. While on the surface this seems great, the reality is that many of these technologies are riddled with syntax quirks, incomplete documentation and a high barrier to entry.In this talk, we’ll discuss why truly intuitive tooling doesn’t exist, go over some common misconceptions in the React community and learn more inclusive ways to talk about emerging frontend technologies.",
        speaker: {
          image: "assets/images/speakers/carolyn.jpg",
          name: "Carolyn Stransky"
        },
        startTime: new Date("2019-09-27T06:55:00.000Z"),
        endTime: new Date("2019-09-27T07:35:00.000Z")
      },
      {
        type: "break",
        time: "01.05 PM",
        venue: "Planet Hollywood",
        day: "Friday",
        title: "Lunch",
        community: "true",
        startTime: new Date("2019-09-27T07:35:00.000Z"),
        endTime: new Date("2019-09-27T09:00:00.000Z")
      },
      {
        type: "talk",
        time: "02.30",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Friday",
        title: "What I learned from building CodeSandbox",
        description:
          "Building websites is a very visual process. The goal often is to make a website that is visually appealing and easy to use. However, we're always building websites with code. Changing margins is done by typing, changing font styles is done by typing, and every change often requires you to wait a while before you can see the result.During this talk I want to explore how we can make our development tooling more visually oriented. What can we do to lower the feedback loop and make it easier to create beautiful websites and apps?",
        speaker: {
          image: "assets/images/speakers/ives.jpg",
          name: "Ives van Hoorne"
        },
        startTime: new Date("2019-09-27T09:00:00.000Z"),
        endTime: new Date("2019-09-27T09:30:00.000Z")
      },

      {
        type: "talk",
        time: "03:00 PM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Friday",
        title: "React for teenagers",
        description: "",
        speaker: {
          image: "assets/images/speakers/yash.png",
          name: "Yash Gupta"
        },
        startTime: new Date("2019-09-27T09:30:00.000Z"),
        endTime: new Date("2019-09-27T10:00:00.000Z")
      },
      {
        type: "talk",
        time: "03:30 PM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Friday",
        title: "Build your backend with GraphQL & Serverless in Redux style",
        description:
          "What if it was possible to build backend features for our react apps in the same way that we use redux in our react apps? In this live-coding demo, I will show you how we’ll add backend business logic using the redux abstractions of dispatching actions, writing reducers as pure functions and subscribing to updated state. Our backend will be completely serverless and using open-source and managed services so that we’re not actually deploying and maintaining any servers. We will use GraphQL mutations from our React app to dispatch actions. These will trigger serverless functions which are pure and return the modified state, which will be persisted safely on a cloud managed database. Portions of your app that are subscribed to the state using GraphQL subscriptions (live-queries) will automatically update! You will witness the raw awesomeness of being able to use JavaScript and GraphQL in a pattern that you are comfortable with to build backend features from scratch.",
        speaker: {
          image: "assets/images/speakers/ShahidhKMuhammed.jpg",
          name: "Shahidh K Muhammed"
        },
        startTime: new Date("2019-09-27T10:00:00.000Z"),
        endTime: new Date("2019-09-27T10:30:00.000Z")
      },
      {
        type: "talk",
        time: "04:00 PM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Friday",
        title: "Beats on the web - A journey into performance",
        description:
          "React is a brilliant JavaScript library for building simple and complex user interfaces. It is quite performant when used correctly but there are times when the library alone is not enough to achieve what we want. This talk focuses on using the power of React and the platform together to build a fast and performant music application. It will involve using the different threads, web features and React in sync. I will be talking about the journey of converting an idea into a product and different decisions I had to take both in regards to design and implementation. ",
        speaker: {
          image: "assets/images/speakers/RiteshKumar.jpg",
          name: "Ritesh Kumar"
        },
        startTime: new Date("2019-09-27T10:30:00.000Z"),
        endTime: new Date("2019-09-27T11:00:00.000Z")
      },
      {
        type: "break",
        time: "04:30 PM",
        venue: "PLANET HOLLYWOOD",
        day: "Friday",
        title: "Break",
        community: "true",
        startTime: new Date("2019-09-27T11:00:00.000Z"),
        endTime: new Date("2019-09-27T11:30:00.000Z")
      },
      {
        type: "talk",
        time: "05:00 PM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Friday",
        title: "Conditional Modules & Dynamic Bundling, A Netflix Original",
        description:
          "Learn about how we, at Netflix, hacked Webpack for our needs, leveraged Abstract Syntax Tree (AST) to identify conditional dependencies in our dependency graph and glued them all together to build a highly scalable, server side JS and CSS bundler, that serves these unique user experiences to millions of Netflix customers across the globe.",
        speaker: {
          image: "assets/images/speakers/RajatKumar.jpg",
          name: "Rajat Kumar"
        },
        startTime: new Date("2019-09-27T11:30:00.000Z"),
        endTime: new Date("2019-09-27T12:00:00.000Z")
      },
      {
        type: "talk",
        time: "05:30 PM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Friday",
        title: "WebVR - the Disruption in Immersive Space",
        description:
          "WebVR is a latest technology and developing it is not boring like lines and lines of code to get a small VR experience. Just a few steps to do the magic. If one is interested to learn the tricks of the magician and get the secrets behind the screen revealed then there you are, must attend my talk to get the cats off the bag. Also, having been contributed for Mozilla since 5 years I will be also dealing with how A-frame can help in this web driven technology of WebVR. Also get some free tips on how your React.js can get a VR effect in just a snap of finger.",
        speaker: {
          image: "assets/images/speakers/bhuvana.jpg",
          name: "Bhuvana Meenakshi Koteeswaran"
        },
        startTime: new Date("2019-09-27T12:00:00.000Z"),
        endTime: new Date("2019-09-27T12:30:00.000Z")
      },
      {
        type: "talk",
        time: "06:00 PM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Friday",
        title: "DRY when writing a GraphQL React App",
        description:
          "'Let's face it, writing React apps with GraphQL is verbose. Your team took up a massive application write using React + GraphQL. It has a team of 200+ developers working on the same codebase. You need tools! You need abstraction! You need patterns! You don't want the same code to be written multiple times everywhere. How do you do that? Here comes middlewares on the frontend, links from Apollo, Observables and ASTs to ease your headache and make sure that you increase your team's productivity by making everyone write less code. Whether you are a single developer in a small startup or a big team working on a massive project, you do want to have these tricks up your sleeve!",
        speaker: {
          image: "assets/images/speakers/TanayPratap.jpg",
          name: "Tanay Pratap"
        },
        startTime: new Date("2019-09-27T12:30:00.000Z"),
        endTime: new Date("2019-09-27T13:00:00.000Z")
      },
      {
        type: "basic",
        time: "06:30 PM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Friday",
        title: "Closing & Preping for Day 2"
      }
    ],
    day2: [
      {
        type: "basic",
        time: "08:30 AM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Saturday",
        title: "Breakfast",
        startTime: new Date("2019-09-28T03:00:00.000Z"),
        endTime: new Date("2019-09-28T03:30:00.000Z"),
      },
      {
        type: "basic",
        time: "09:30 AM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Saturday",
        title: "MC's opening stage",
        startTime: new Date("2019-09-28T04:00:00.000Z"),
        endTime: new Date("2019-09-28T04:30:00.000Z"),
      },
      {
        type: "talk",
        time: "10:00 AM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Saturday",
        title: "You Belong Here",
        description:
          "Done well, open source is one of the highest-value targets for businesses these days. Companies like Facebook and Airbnb leverage OSS as a source of brand equity and recruiting, among other advantages. However, OSS is still uncomfortable for many companies — and even if they do open source their tools, these projects often fail to launch — because they’re missing the most important (and best) part of OSS: the community.Projects that survive in today’s landscape have thriving communities that care deeply about the quality and advancement of open source and the people using it. But open source can also be intimidating to newcomers, and occasionally unwelcoming. In this talk, learn how popular open source framework Gatsby has doubled down on community, including: 1. Offering open pair programming hours 2. Trusting all contributors with merge access 3. Sending free swag to contributors... And much more! Learn how you can borrow our strategies to create a healthy, welcoming community for your open source projects, starting today!",
        speaker: {
          image: "assets/images/speakers/jason.jpg",
          name: "Jason Lengstorf"
        },
        startTime: new Date("2019-09-28T04:30:00.000Z"),
        endTime: new Date("2019-09-28T05:00:00.000Z"),
      },
      {
        type: "talk",
        time: "10:30 AM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Saturday",
        title: "A Journey to the Center of a Slow React App",
        description:
          "What are the major factors that slow down a web application written in React? Can we mitigate them? If so, what are the tradeoffs. I will be speaking about perf improvements we made in our large application. From state management to measuring correctly to dealing with legacy frontend, this talk will cover a variety of reasons why things got slow. And how to deal with it.",
        speaker: {
          image: "assets/images/speakers/pavithra.jpg",
          name: "Pavithra Kodmad"
        },
        startTime: new Date("2019-09-28T05:00:00.000Z"),
        endTime: new Date("2019-09-28T05:30:00.000Z"),
      },
      {
        type: "talk",
        time: "11:00 AM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Saturday",
        title: "Authentication best practices in React and GraphQL",
        description:
          "Authentication in React and React Native apps is sometimes considered a painful as well as vulnerable point of any app. If you bring in GraphQL and SSR it can be even harder to implement with security in mind.  In this talk we will talk about various techniques you can use to authenticate your apps and will focus on best practices as well as common mistakes people do when using various authentication methods",
        speaker: {
          image: "assets/images/speakers/vladir.jpg",
          name: "Vladimir Novick"
        },
        startTime: new Date("2019-09-28T05:30:00.000Z"),
        endTime: new Date("2019-09-28T06:00:00.000Z"),
      },
      {
        type: "break",
        time: "11:30 AM",
        venue: "PLANET HOLLYWOOD",
        day: "Saturday",
        title: "Break",
        community: "true",
        startTime: new Date("2019-09-28T06:00:00.000Z"),
        endTime: new Date("2019-09-28T06:25:00.000Z"),
      },
      {
        type: "talk",
        time: "11:55 AM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Saturday",
        title: "Refactoring React",
        description:
          "This is a talk about code quality for people already working with React. Learn how to identify code smells in your React app and how to improve it. Let’s pair program to refactor some okay-okay code to make it great code.",
        speaker: {
          image: "assets/images/speakers/siddharth.jpg",
          name: "Siddharth Kshetrapal"
        },
        startTime: new Date("2019-09-28T06:25:00.000Z"),
        endTime: new Date("2019-09-28T06:55:00.000Z"),
      },
      {
        type: "talk",
        time: "12:25 PM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Saturday",
        title: "Why performance is important?",
        description: "",
        speaker: {
          image: "assets/images/speakers/evaProfile.jpg",
          name: "Eva Ieridou"
        },
        startTime: new Date("2019-09-28T06:55:00.000Z"),
        endTime: new Date("2019-09-28T07:25:00.000Z"),
      },
      {
        type: "talk",
        time: "12:55 PM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Saturday",
        title: "Going Native",
        description:
          "React Native allows you to re-use your web code to build native applications. What’s not to like? This approach is simple in theory but challenging in practice. In this talk, you’ll learn what is re-usable and what isn’t, the intricacies of shared code bases, and cross-team communication when building React and React Native apps at the same time. With real-life examples, code snippets, and memes, you will learn everything you need to know to get started on your native journey.",
        speaker: {
          image: "assets/images/speakers/anna_doubkova.jpg",
          name: "Anna Doubkova"
        },
        startTime: new Date("2019-09-28T07:25:00.000Z"),
        endTime: new Date("2019-09-28T08:05:00.000Z"),
      },
      {
        type: "break",
        time: "01:25 PM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Saturday",
        title: "Lunch",
        community: "true",
        startTime: new Date("2019-09-28T07:55:00.000Z"),
        endTime: new Date("2019-09-28T09:00:00.000Z")
      },
      {
        type: "talk",
        time: "02:30 PM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Saturday",
        title: "State of preact",
        description:
          "Preact and its ecosystem has recently undergone an overhaul. It now supports all the latest features from React 16 from hooks to suspense.This talk will cover the how we got there and whats in the charts for us.I will also talk about how Preact guards and pushes your app performance with its Meta framework preact cli.",
        speaker: {
          image: "assets/images/speakers/prateek.jpg",
          name: "Prateek Bhatnagar"
        },
        startTime: new Date("2019-09-28T09:00:00.000Z"),
        endTime: new Date("2019-09-28T09:30:00.000Z")
      },
      {
        type: "talk",
        time: "3:00 PM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Saturday",
        title: "Case study: High performance image upload for web",
        description:
          "Operating on files (and images) and extracting crucial information out of them in the browser can be tough. Performing this while keeping the main thread free can be tougher. This talk will focus on the efforts made to streamline uploading product images by customers while they write reviews for the same.",
        speaker: {
          image: "assets/images/speakers/AbinashMohapatra.jpg",
          name: "Abinash Mohapatra"
        },
        startTime: new Date("2019-09-28T09:30:00.000Z"),
        endTime: new Date("2019-09-28T10:00:00.000Z")
      },
      {
        type: "talk",
        time: "3:30 PM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Saturday",
        title: "React for Designers",
        description:
          "The almighty React is not just for developers, it's for everyone! It leaves no one behind. With React's component-driven architecture, UX and web designers can make use of this quality and integrate React in their workflow to bridge the gap between design/prototyping tool and what actually goes on the web in production. This talk explores the topic on how React is not only well suited for designing static components but is well suited for rapid prototyping with interactions.",
        speaker: {
          image: "assets/images/speakers/AnanyaNeogi.jpg",
          name: "Ananya Neogi"
        },
        startTime: new Date("2019-09-28T10:00:00.000Z"),
        endTime: new Date("2019-09-28T10:30:00.000Z")
      },
      {
        type: "talk",
        time: "04:00 PM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Saturday",
        title: "Building offline first apps with GraphQL & Apollo",
        description:
          "Offline first apps have a unique set of challenges to keep them fully functional even in offline mode. On top of that, GraphQL based apps need new ways of solving these challenges. In this talk, I will share my experience with implementing offline first app with GraphQL & Apollo.",
        speaker: {
          image: "assets/images/speakers/kiranAbburi.jpg",
          name: "Kiran Abburi"
        },
        startTime: new Date("2019-09-28T10:30:00.000Z"),
        endTime: new Date("2019-09-28T11:00:00.000Z")
      },
      {
        type: "break",
        time: "04:30 PM",
        venue: "PLANET HOLLYWOOD",
        day: "Saturday",
        title: "Break",
        community: "true",
        startTime: new Date("2019-09-28T11:00:00.000Z"),
        endTime: new Date("2019-09-28T11:25:00.000Z")
      },
      {
        type: "talk",
        time: "4:55 PM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Saturday",
        title: "Sleeping well at night with cypress.io",
        description:
          "Why are we afraid of updating our React app on Friday evening? Mostly because its hard to know if nothing is broken because manual testing takes time and automated testing was not reliable. (And we really want to go home). With cypress things are different. In this talk, we are going to cover how to start covering your React app with e2e tests and showcase coolest features that cypress.io has to offer. Automated tests dont have to be boring, difficult to write and even harder to debug. We deserve to have tests we can count on, even when shipping stuff as soon as ASAP.",
        speaker: {
          image: "assets/images/speakers/tomasz.png",
          name: "Tomasz Łakomy"
        },
        startTime: new Date("2019-09-28T11:25:00.000Z"),
        endTime: new Date("2019-09-28T11:55:00.000Z")
      },
      {
        type: "talk",
        time: "05:25 PM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Saturday",
        title: "React, Collaborate and Listen",
        description:
          "According to npm, 63% of JavaScript developers use React. This is for a good reason: of all the ways we’ve tried building applications on the web, React seems to have chosen the right tradeoffs to make developers and teams happy and productive. React is eating the web.According to its website, React is a JavaScript library for building user interfaces. It’s also an ecosystem of open source tools and development practices. But most importantly, React is a community of people with a firm grip on the steering wheel of web development and where it’s going.Do we know where we are going? When do we know whether we’ve gone too far? Siri, how can we build the best products for our users, while ensuring the continued health of the open web? Siri?Jani is part of the React industrial complex. At his job at Formidable he helps companies and teams build software with JavaScript and React. He advocates the use of React in his conference talks, open source projects, workshops and writing. In this talk full of industry insights, real-world anecdata and many unpopular opinions, he’ll offer his industry insider point of view on where we as a community of developers may have lost the plot, and how we can do better.This is a wake-up call, and the call is coming from inside the house.",
        speaker: {
          image: "assets/images/speakers/jani.jpg",
          name: "Jani Eväkallio"
        },
        startTime: new Date("2019-09-28T11:55:00.000Z"),
        endTime: new Date("2019-09-28T12:45:00.000Z")
      },
      {
        type: "basic",
        time: "06:15 PM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Saturday",
        title: "Closing Key Note of React India 2019",
        startTime: new Date("2019-09-28T12:45:00.000Z"),
        endTime: new Date("2019-09-28T13:05:00.000Z")
      },
      {
        type: "basic",
        time: "7:30PM - 10.30PM",
        venue: "Conference, Main Hall, Planet Hollywood",
        day: "Saturday",
        title: "After Party + Some exciting announcement soon",
        startTime: new Date("2019-09-28T14:00:00.000Z"),
        endTime: new Date("2019-09-28T17:00:00.000Z")
      }
    ]
  }
};
