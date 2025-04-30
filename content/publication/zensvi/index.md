---
title: "ZenSVI: An open-source software for the integrated acquisition, processing and analysis of street view imagery towards scalable urban science"
authors:
- Koichi Ito
- Yihan Zhu
- Mahmoud Abdelrahman
- Xiucheng Liang
- Zicheng Fan
- Yujun Hou
- Tianhong Zhao
- Rui Ma
- Kunihiko Fujiwara
- Jiani Ouyang
- Matias Quintana
- Filip Biljecki
author_notes:
- ""
- ""
- ""
- ""
- ""
- ""
- ""
- ""
- ""
- ""
- ""
- ""
date: "2025-07-01T00:00:00Z"
# doi: "10.1016/j.compenvurbsys.2025.102283"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-12-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "*Computers, Environment and Urban Systems, 119*"
publication_short: ""

abstract: "Street view imagery (SVI) has been instrumental in many studies in the past decade to understand and characterize street features and the built environment. Researchers across a variety of domains, such as transportation, health, architecture, human perception, and infrastructure have employed different methods to analyze SVI. However, these applications and image-processing procedures have not been standardized, and solutions have been implemented in isolation, often making it difficult for others to reproduce existing work and carry out new research. Using SVI for research requires multiple technical steps: accessing APIs for scalable data collection, preprocessing images to standardize formats, implementing computer vision models for feature extraction, and conducting spatial analysis. These technical requirements create barriers for researchers in urban studies, particularly those without extensive programming experience. We developed ZenSVI, a free and open-source Python package that integrates and implements the entire process of SVI analysis, supporting a wide range of use cases. Its end-to-end pipeline includes downloading SVI from multiple platforms (e.g., Mapillary and KartaView) efficiently, analyzing metadata of SVI, applying computer vision models to extract target features, transforming SVI into different projections (e.g., fish-eye and perspective) and different formats (e.g., depth map and point cloud), visualizing analyses with maps and plots, and exporting outputs to other software tools. We demonstrated its use in Singapore through a case study of data quality assessment and clustering analysis in a streamlined manner. Our software improves the transparency, reproducibility, and scalability of research relying on SVI and supports researchers in conducting urban analyses efficiently. Its modular design facilitates extensions of the package for new use cases. This package is openly available at https://github.com/koito19960406/ZenSVI, and it is supported by documentation including tutorials (https://zensvi.readthedocs.io/en/latest/examples/index.html)."

# Summary. An optional shortened abstract.
# summary: 

tags:
- Street-level Imagery
- Python Package
- Computer Vision
- FAIR
- Reproducibility
featured: true

links:
- name: "DOI"
  url: "https://doi.org/10.1016/j.compenvurbsys.2025.102283"
url_pdf: 'https://kunifujiwara.github.io/publication/zensvi/2025_zensvi.pdf'
url_code: 'https://github.com/koito19960406/ZenSVI'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'ZenSVI: An open-source software for street view imagery analysis'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

{{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}
