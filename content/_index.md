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
        /* Custom container for experience and awards sections */
        .wide-container {
          max-width: 100%;
          margin: 0 auto;
          font-size: 0.9rem;
        }

        .experience-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 2rem;
        }
        .logo-container {
          flex: 0 0 80px;
          margin-right: 20px;
        }
        .logo-container img {
          width: 60px;
          height: auto;
        }
        .content-container {
          flex: 1;
        }
        .content-container h4 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }
        .content-container h5 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }
        .content-container p {
          margin: 0;
          font-size: 0.85rem;
        }
        </style>

        <div class="wide-container" style="max-width: 100%; font-size: 0.9rem;">
          <div class="experience-item">
            <div class="logo-container">
              <a href="https://ual.sg/" target="_blank">
                <img src="/media/icons/ual.png" alt="Urban Analytics Lab logo">
              </a>
            </div>
            <div class="content-container">
              <h4>Visiting Research Fellow</h4>
              <h5><a href="https://ual.sg/" target="_blank">Urban Analytics Lab</a>, <a href="https://www.nus.edu.sg/" target="_blank">National University of Singapore</a></h5>
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
              <h5><a href="https://www.takenaka.co.jp/takenaka_e/rd/" target="_blank">Research & Development Institute</a>, <a href="https://www.takenaka.co.jp/takenaka_e/" target="_blank">Takenaka Corporation</a></h5>
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
              <h5><a href="https://www.takenaka.co.jp/takenaka_e/rd/" target="_blank">Research & Development Institute</a>, <a href="https://www.takenaka.co.jp/takenaka_e/" target="_blank">Takenaka Corporation</a></h5>
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
              <h5><a href="https://www.takenaka.co.jp/design/" target="_blank">Building Design Department</a>, <a href="https://www.takenaka.co.jp/takenaka_e/" target="_blank">Takenaka Corporation</a></h5>
              <p>April 2017 – March 2018, 2013 – March 2014</p>
            </div>
          </div>
        </div>
    design:
      columns: '1'
  - block: markdown
    id: awards
    content:
      title: Awards & Honors
      text: |-
        <style>
          /* Remove default bullets and align icon + text on one line */
          .award-list{
            list-style:none;
            padding-left:0;
          }
          .award-list li{
            display:flex;
            align-items:center;
            gap:.4rem;        /* space between icon and text */
            margin-bottom:.5rem;
            font-size: 0.85rem;
          }
        </style>
        <div class="wide-container" style="max-width: 100%; font-size: 0.9rem;">
          <ul class="award-list">
            <li>{{< icon name="hero/trophy" class="w-5 h-5 text-yellow-500" >}} Special Encouragement Award, Engineering Advancement Association of Japan, 2023</li>
            <li>{{< icon name="hero/trophy" class="w-5 h-5 text-yellow-500" >}} Technology Award, Heat Island Institute International, 2023</li>
            <li>{{< icon name="hero/trophy" class="w-5 h-5 text-yellow-500" >}} Bronze Award, Urban Data Challenge, 2023</li>
            <li>{{< icon name="hero/trophy" class="w-5 h-5 text-yellow-500" >}} Best Poster Award, 17th Conference of Heat Island Institute International, 2022</li>
            <li>{{< icon name="hero/trophy" class="w-5 h-5 text-yellow-500" >}} Award of Excellence, Urban Infrastructure & Technology Promotion Council, 2021</li>
          </ul>
        </div>
    design:
      columns: "1"
  - block: collection
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
  - block: markdown
    id: patents
    content:
      title: Patents
      text: |-
        <style>
          /* Remove default bullets and align icon + text on one line */
          .patent-list{
            list-style:none;
            padding-left:0;
          }
          .patent-list li{
            display:flex;
            align-items:center;
            gap:.4rem;        /* space between icon and text */
            margin-bottom:.8rem;
            font-size: 0.85rem;
          }
          .patent-status {
            display: inline-block;
            margin-left: 0.3rem;
            padding: 0.1rem 0.3rem;
            border-radius: 3px;
            font-size: 0.7rem;
          }
          .patent-active {
            background-color: #d4edda;
            color: #155724;
          }
          .patent-pending {
            background-color: #fff3cd;
            color: #856404;
          }
        </style>
        <div class="wide-container" style="max-width: 100%; font-size: 0.9rem;">
          <ul class="patent-list">
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} Ground Heat Utilization Cooling Structure <span class="patent-status patent-pending">Pending</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} Water Level Estimation Device and Water Level Estimation Program <span class="patent-status patent-pending">Pending</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} Information Processing Device and Information Processing Program <span class="patent-status patent-pending">Pending</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} Circulation Evaluation Support Device, Circulation Evaluation Support System, and Program <span class="patent-status patent-pending">Pending</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} Circulation Degree Estimation Device, Circulation Degree Estimation System, and Program <span class="patent-status patent-pending">Pending</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} Micro-weather Element Estimation Device and Micro-weather Element Estimation Program <span class="patent-status patent-pending">Pending</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} Landscape Analysis Support Device and Landscape Analysis Support Program <span class="patent-status patent-active">Active</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} Motif Similarity Calculation Device and Model Learning Device <span class="patent-status patent-active">Active</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} Weather Prediction Device and Weather Prediction Model Learning Device <span class="patent-status patent-active">Active</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} Growth Evaluation Control Device, Growth Evaluation Method, Growth Evaluation Control Program <span class="patent-status patent-active">Active</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} Space Evaluation Support Device, Space Evaluation Support System, and Space Evaluation Support Program <span class="patent-status patent-active">Active</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} Space Evaluation Support Device, Space Evaluation Support System, and Space Evaluation Support Program <span class="patent-status patent-pending">Pending</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} Space Evaluation Support Device, Space Evaluation Support System, and Space Evaluation Support Program <span class="patent-status patent-active">Active</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} Building Design Support Device and Building Design Support Program <span class="patent-status patent-active">Active</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} Recommendation Degree Derivation Device, Energy-saving Promotion Device and Program <span class="patent-status patent-active">Active</span></li>
          </ul>
        </div>
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
