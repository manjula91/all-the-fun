const workshopData = [
    {
      speaker: 'Siddharth Kshetrapal',
      title: "Building your first Design System: from scratch to production",
      imgPath: 'siddharth.jpg',
      description: ` This is a hands-on workshop for developers in which you will
      learn how to define a common language for collaboration and
      iterate on products faster.
  
      Learn the best practices of component driven design and how to
      standardize your design patterns. Leverage React to build a
      component library that can be used in products and can evolve
      as teams use it. At the end of the day, you will have a small
      but complete Design system implementation that will cover the
      full product lifecycle.`,
      prerequisites: [`Working knowledge of React would go a long way. Difficult:
      Medium to Advanced.`],
      coverage: [
        {
          topic: 'Introduction to design systems',
          points: ['What are the moving pieces of a design system', 'How to define a design system for your company',
            'Balancing flexibility and consistency across your components']
        },
        {
          topic: 'Concepts and Development',
          points: ["Doing an inventory of your existing products or on-going design concept",
            "Systemize brand attributes and design decisions into tokens",
            "Staring a component library with fundamental building blocks",
            "Combining building blocks to build advanced compound components",
            "Defining a consistent, easy to use API across your components",
            "Formalise the definition and usage guidelines into documentation",
            "Distributing your system with versioning and good documentation"]
        }, {
          topic: 'Other Moving Parts',
          points: ["Designing a cross-functional design system team",
            "Creating a implementation strategy and publishing a long-term roadmap",
            "Updating the system (breaking changes, semver, visual tests, upgrading)",
            "Getting buy-in and driving adoption in your company",
            "Common roadblocks that you will hit"]
        }
      ]
    },
    {
      speaker: "Vladimir Novick",
      title: "Practical ReasonML for React devs",
      imgPath: "vladir.jpg",
      description: `Reason lets you write simple, fast and quality type safe code
      while leveraging both the JavaScript & OCaml ecosystems. In
      this workshop we won't only see how and why we should write
      our code in ReasonML, but talk about practical applications of
      using ReasonML in new or existing React projects`,
      prerequisites: ["Good JavaScript and React knowledge", "open minded, basic functional programming concepts in any programming language is a bonus."],
      coverage: [
        {
          topic: 'Working ReasonReact app with GraphQL',
          points: [
            "ReasonML core syntax, Bucklescript and interop with existing JavaScript packages,", "ReasonReact, Reason and GraphQL.",
            "During this workshop we will build a working ReasonReact app with GraphQL backend.", "We will also add JavaScript npm packages and interop between them and our Reason React app. For final touch we will discuss how to embed our ReasonReact app as part of bigger existing React application."]
        }
      ]
    },
    {
      title: 'Advanced GraphQL',
      speaker: 'Kiran Abburi',
      imgPath: 'kiranAbburi.jpg',
      description: `GraphQL is a new way to build APIs for modern apps. Building
      APIs with GraphQL often needs a mental shift from RESTful
      APIs. In this workshop, we will cover all the concepts
      required for building GraphQL based apps. We will build a
      simple e-commerce web app with GraphQL (apollo-server) on the
      backend and React & Apollo Client on the frontend in this
      workshop.`,
      prerequisites: ["Basic knowledge of nodejs and reactjs", "Laptop with node 8.0+", "Make sure create-react-app is working on your laptop."],
      coverage: [{
        topic: 'Back-end',
        points: ["What is GraphQL ?", "GraphQL vs REST", "Benefits of GraphQL", "Building a simple API server for e-commerce web app", "Authentication & Authorization of GraphQL server", "Performance monitoring and optimizations", "Tips on securing GraphQL API"]
      }, {
        topic: 'Front-end',
        points: ["Bootstrapping a project with React and Apollo Client", "Imperative vs Declarative data fetching", "Declarative data fetching with Apollo Client.", "How Apollo cache works ?", "Building frontend of simple e-commerce web app with React and Apollo Client", "Local state management with Apollo", "How apollo links works ?", "Building custom apollo links", "Performance & Debugging tips"]
      }]
    }
  ]

  export default workshopData