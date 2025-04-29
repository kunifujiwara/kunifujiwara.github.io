---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    id: bio
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: vegvoxcity.png
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  # - block: markdown
  #   id: research
  #   content:
  #     title: '📚 Research'
  #     subtitle: ''
  #     text: |-
  #       Use this area to speak to your mission. I'm a research scientist in the Moonshot team at DeepMind. I blog about machine learning, deep learning, and moonshots.

  #       I apply a range of qualitative and quantitative methods to comprehensively investigate the role of science and technology in the economy.
        
  #       Please reach out to collaborate 😃
  #   design:
  #     columns: '1'
  - block: markdown
    id: experience
    content:
      title: Experience
      text: |-
        <style>
        .experience-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 1.5rem;
          max-width: 100%;
          width: 100%;
        }
        .logo-container {
          flex: 0 0 70px;
          margin-right: 15px;
        }
        .logo-container img {
          width: 50px;
          height: auto;
        }
        .content-container {
          flex: 1;
          width: 100%;
        }
        .content-container h4 {
          margin-top: 0;
          margin-bottom: 0.3rem;
          font-size: 1rem;
        }
        .content-container h5 {
          margin-top: 0;
          margin-bottom: 0.3rem;
          font-size: 0.9rem;
        }
        .content-container p {
          margin: 0;
          font-size: 0.85rem;
        }
        </style>

        <div class="experience-item">
          <div class="logo-container">
            <a href="https://ual.sg/" target="_blank">
              <img src="/media/icons/ual.png" alt="Urban Analytics Lab logo">
            </a>
          </div>
          <div class="content-container">
            <h4>Visiting Research Fellow</h4>
            <h5><a href="https://ual.sg/" target="_blank">Urban Analytics Lab</a>, National University of Singapore</h5>
            <p>April 2023 – Present</p>
          </div>
        </div>
        
        <div class="experience-item">
          <div class="logo-container">
            <a href="https://www.takenaka.co.jp/takenaka_e/rd/" target="_blank">
              <img src="/media/icons/takenaka.png" alt="Takenaka Corporation logo">
            </a>
          </div>
          <div class="content-container">
            <h4>Senior Researcher</h4>
            <h5><a href="https://www.takenaka.co.jp/takenaka_e/rd/" target="_blank">Research & Development Institute</a>, Takenaka Corporation</h5>
            <p>April 2018 – Present</p>
          </div>
        </div>
        
        <div class="experience-item">
          <div class="logo-container">
            <a href="https://www.takenaka.co.jp/takenaka_e/rd/" target="_blank">
              <img src="/media/icons/takenaka.png" alt="Takenaka Corporation logo">
            </a>
          </div>
          <div class="content-container">
            <h4>Researcher</h4>
            <h5><a href="https://www.takenaka.co.jp/takenaka_e/rd/" target="_blank">Research & Development Institute</a>, Takenaka Corporation</h5>
            <p>April 2014 – March 2017</p>
          </div>
        </div>
        
        <div class="experience-item">
          <div class="logo-container">
            <a href="https://www.takenaka.co.jp/takenaka_e/" target="_blank">
              <img src="/media/icons/takenaka.png" alt="Takenaka Corporation logo">
            </a>
          </div>
          <div class="content-container">
            <h4>Engineer</h4>
            <h5><a href="https://www.takenaka.co.jp/takenaka_e/" target="_blank">Building Design Department</a>, Takenaka Corporation</h5>
            <p>April 2017 – March 2018, 2013 – March 2014</p>
          </div>
        </div>
        
    design:
      columns: '1'
      css_class: "fullwidth-section"
  - block: markdown
    design:
      columns: '1'
      css_class: "fullwidth-section"
    
    content:
      title: Awards & Honors

    id: awards
    content:
      title: Awards & Honors
      text: |-
        <style>
        .award-list {
          max-width: 100%;
        }
        .award-list p {
          margin-bottom: 0.4rem;
          font-size: 0.85rem;
          line-height: 1.3;
        }
        </style>
        <style>
        .award-list {
          max-width: 100%;
          width: 100%;
        }
        .award-list p {
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          line-height: 1.4;
        }
        </style>
        <style>
        .award-list {
          max-width: 100%;
          width: 100%;
        }
        .award-list p {
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          line-height: 1.4;
        }
        </style>
        
        <div class="award-list">
          <p>🏆 Special Encouragement Award, Engineering Advancement Association of Japan, 2023</p>
          <p>🌟 Technology Award, Heat Island Institute International, 2023</p>
          <p>🥉 Bronze Award, Urban Data Challenge, 2023</p>
          <p>📊 Best Poster Award, 17th Conference of Heat Island Institute International, 2022</p>
          <p>🏅 Award of Excellence, Urban Infrastructure & Technology Promotion Council, 2021</p>
        </div>
    design:
      columns: '1'
      css_class: "fullwidth-section"
  - block: collection
    design:
      columns: '1'
      css_class: "fullwidth-section"
    
    id: publications
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
    id: recent-publications
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
      columns: 2
  - block: collection
    id: patents
    content:
      title: Patents
      filters:
        folders:
          - patent
    design:
      view: compact
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
