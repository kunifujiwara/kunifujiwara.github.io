---
title: "A panorama-based technique to estimate sky view factor and solar irradiance considering transmittance of tree canopies"
authors:
- Kunihiko Fujiwara
- Koichi Ito
- Marcel Ignatius
- Filip Biljecki
author_notes:
- ""
- ""
- ""
- ""
date: "2024-01-01T00:00:00Z"
doi: "10.1016/j.buildenv.2024.112071"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-01-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "*Building and Environment, 266*"
publication_short: ""

abstract: "Street-view-based techniques for assessing the sky view factor (SVF) and solar irradiance under trees are gaining attention as tools for evaluating trees as nature-based solutions to mitigate urban heat risks. Although these metrics significantly depend on the morphology of trees and resulting canopy transmittance, an existing approach, termed the Solid Canopy Method (SCM), assumes zero transmission and has not accounted for these variations. This paper advances the computation of both metrics, improving their accuracy and application --- we developed the Transmissive Canopy Method (TCM), a panorama-based approach that integrates semantic segmentation and binarization to evaluate SVF and solar irradiance while accounting for transmittance of tree canopies. Using a study area on a university campus in Singapore, we collected data on solar irradiance and 360° imagery to validate our method. The results indicated improved accuracy with MAE, RMSE, and R$^2$ values of 77.8 Wm$^{-2}$, 105.0 Wm$^{-2}$ and 0.90, respectively --- significantly outperforming the SCM. We showcased two use cases of our method: (1) high-resolution mapping of SVF and solar irradiance in a field with trees, and (2) walking route optimization considering sunlight exposure. Our findings highlight the strong capability of our TCM to evaluate the effects of trees in mitigating urban heat more accurately than the existing method. Additionally, the TCM has potential applications in urban planning and management, enabling strategic tree planting prioritizing areas lacking sufficient shading and developing tools for optimizing walking routes to minimize sunlight exposure."

# Summary. An optional shortened abstract.
# summary: We developed a panorama-based technique to estimate sky view factor and solar irradiance that accounts for tree canopy transmittance, significantly improving accuracy over existing methods.

tags:
- shading effect
- sky visibility
- tree crown
- sunlight penetration
- street view imagery
- computer vision
- solar radiation
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: https://doi.org/10.1016/j.buildenv.2024.112071
url_code: 'https://github.com/kunifujiwara/TreeShadeMapper'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'A panorama-based technique to estimate sky view factor and solar irradiance'
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

## Highlights

- Advancing estimation of sky view factor and solar irradiance using panoramic imagery.
- Detecting shading objects based on semantic segmentation of street-level panoramas.
- Estimating transmittance of tree canopies using image binarization.
- Solar irradiance estimated with MAE of 77.8 Wm$^{-2}$, RMSE of 105.0 Wm$^{-2}$, and R$^2$ of 0.90.
- Demonstration of high-resolution mapping and walking route optimization.

<!-- ## Overview

This research introduces the Transmissive Canopy Method (TCM), a novel panorama-based approach that integrates semantic segmentation and binarization to evaluate sky view factor and solar irradiance while accounting for transmittance of tree canopies. Our method significantly outperforms existing approaches and demonstrates potential applications in urban planning and heat risk management. -->
