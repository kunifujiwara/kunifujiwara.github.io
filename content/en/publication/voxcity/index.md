---
title: "VoxCity: A Seamless Framework for Open Geospatial Data Integration, Grid-Based Semantic 3D City Model Generation, and Urban Environment Simulation"
authors:
- Kunihiko Fujiwara
- Ryuta Tsurumi
- Tomoki Kiyono
- Zicheng Fan
- Xiucheng Liang
- Binyu Lei
- Winston Yap
- Koichi Ito
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
date: "2025-07-01T00:00:00Z"
# doi: "10.48550/arXiv.2504.13934"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-12-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["preprint"]

# Publication name and optional abbreviated publication name.
publication: "*arXiv preprint arXiv:2504.13934*"
publication_short: ""

abstract: "Three-dimensional urban environment simulation is a powerful tool for informed urban planning. However, the intensive manual effort required to prepare input 3D city models has hindered its widespread adoption. To address this challenge, we present VoxCity, an open-source Python package that provides a one-stop solution for grid-based 3D city model generation and urban environment simulation for cities worldwide. VoxCity's `generator' subpackage automatically downloads building heights, tree canopy heights, land cover, and terrain elevation within a specified target area, and voxelizes buildings, trees, land cover, and terrain to generate an integrated voxel city model. The `simulator' subpackage enables users to conduct environmental simulations, including solar radiation and view index analyses. Users can export the generated models using several file formats compatible with external software, such as ENVI-met (INX), Blender, and Rhino (OBJ). We generated 3D city models for eight global cities, and demonstrated the calculation of solar irradiance, sky view index, and green view index. We also showcased microclimate simulation and 3D rendering visualization through ENVI-met and Rhino, respectively, through the file export function. Additionally, we reviewed openly available geospatial data to create guidelines to help users choose appropriate data sources depending on their target areas and purposes. VoxCity can significantly reduce the effort and time required for 3D city model preparation and promote the utilization of urban environment simulations. This contributes to more informed urban and architectural design that considers environmental impacts, and in turn, fosters sustainable and livable cities. VoxCity is released openly at https://github.com/kunifujiwara/VoxCity."

# Summary. An optional shortened abstract.
# summary: 

tags:
- Urban morphology
- Digital Twin
- Thermal environment
- Ray-tracing
- Thermal comfort
- Built environment
- View factor
featured: true

links:
- name: "DOI"
  url: "https://doi.org/10.48550/arXiv.2504.13934"
url_pdf: 'https://kunifujiwara.github.io/publication/voxcity/2025_voxcity.pdf'
url_code: 'https://github.com/kunifujiwara/VoxCity'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'VoxCity: A framework for 3D city model generation and urban environment simulation'
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
