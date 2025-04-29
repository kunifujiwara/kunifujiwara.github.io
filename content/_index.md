---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: markdown
    content:
      title: 'Navigation'
      text: |-
        <div class="row justify-content-center">
          <div class="col-auto">
            <a href="#bio" class="btn btn-primary m-1">Biography</a>
            <a href="#research" class="btn btn-primary m-1">Research</a>
            <a href="#experience" class="btn btn-primary m-1">Experience</a>
            <a href="#awards" class="btn btn-primary m-1">Awards</a>
            <a href="#featured-pubs" class="btn btn-primary m-1">Featured Publications</a>
            <a href="#recent-pubs" class="btn btn-primary m-1">Recent Publications</a>
            <a href="#talks" class="btn btn-primary m-1">Talks</a>
            <a href="#patents" class="btn btn-primary m-1">Patents</a>
          </div>
        </div>
    design:
      columns: '1'

  - block: resume-biography-3
    id: bio
    content:
      username: admin
      text: ""
      button:
        text: Download CV
        url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          filename: vegvoxcity.png
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false

  - block: markdown
    id: research
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        Use this area to speak to your mission. I'm a research scientist in the Moonshot team at DeepMind. I blog about machine learning, deep learning, and moonshots.

        I apply a range of qualitative and quantitative methods to comprehensively investigate the role of science and technology in the economy.
        
        Please reach out to collaborate 😃
    design:
      columns: '1'

  - block: experience
    id: experience
    content:
      title: Experience
      items:
        - company: Example Company
          company_url: ''
          location: California
          date_start: '2021-01-01'
          date_end: ''
          description: |2-
              * Responsibilities include
              * Leading
              * Managing
    design:
      columns: '1'

  - block: markdown
    id: awards
    content:
      title: '🏆 Awards & Certifications'
      text: |-
        ## Neural Networks and Deep Learning
        **Coursera** | November 2023
        [View Certificate](https://www.coursera.org/learn/neural-networks-deep-learning)
        
        I studied the foundational concept of neural networks and deep learning. By the end, I was familiar with the significant technological trends driving the rise of deep learning; build, train, and apply fully connected deep neural networks; implement efficient (vectorized) neural networks; identify key parameters in a neural network's architecture; and apply deep learning to your own applications.

        ## Blockchain Fundamentals
        **edX** | July 2023
        [View Certificate](https://www.edx.org/professional-certificate/uc-berkeleyx-blockchain-fundamentals)
        
        Learned:
        - Synthesize your own blockchain solutions
        - Gain an in-depth understanding of the specific mechanics of Bitcoin
        - Understand Bitcoin's real-life applications and learn how to attack and destroy Bitcoin, Ethereum, smart contracts and Dapps, and alternatives to Bitcoin's Proof-of-Work consensus algorithm

        ## Object-Oriented Programming in R
        **DataCamp** | January 2023
        [View Certificate](https://www.datacamp.com/courses/object-oriented-programming-with-s3-and-r6-in-r)
        
        Object-oriented programming (OOP) lets you specify relationships between functions and the objects that they can act on, helping you manage complexity in your code. This is an intermediate level course, providing an introduction to OOP, using the S3 and R6 systems. S3 is a great day-to-day R programming tool that simplifies some of the functions that you write. R6 is especially useful for industry-specific analyses, working with web APIs, and building GUIs.
    design:
      columns: '1'

  - block: collection
    id: featured-pubs
    content:
      title: Featured Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: article-grid
      columns: 2

  - block: collection
    id: recent-pubs
    content:
      title: Recent Publications
      text: ""
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation

  - block: collection
    id: talks
    content:
      title: Recent & Upcoming Talks
      filters:
        folders:
          - event
    design:
      view: article-grid
      columns: 1

  - block: collection
    id: patents
    content:
      title: Patents
      filters:
        folders:
          - patent
    design:
      view: citation

  - block: cta-card
    demo: true # Only display this section in the Hugo Blox Builder demo site
    content:
      title: 👉 Build your own academic website like this
      text: |-
        This site is generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.

        <a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/hugo-blox-builder on GitHub">Star</a>

        Easily build anything with blocks - no-code required!
        
        From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.
      button:
        text: Get Started
        url: https://hugoblox.com/templates/
    design:
      card:
        # Card background color (CSS class)
        css_class: "bg-primary-700"
        css_style: ""
---
