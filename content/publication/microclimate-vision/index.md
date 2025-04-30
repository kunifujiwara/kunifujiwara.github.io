---
title: "Microclimate Vision: Multimodal prediction of climatic parameters using street-level and satellite imagery"
authors:
- Kunihiko Fujiwara
- Maxim Khomiakov
- Winston Yap
- Marcel Ignatius
- Filip Biljecki
author_notes:
- ""
- ""
- ""
- ""
- ""
date: "2024-11-01T00:00:00Z"
# doi: "10.1016/j.scs.2024.105733"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-01-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "*Sustainable Cities and Society, 114*"
publication_short: ""

abstract: "High-resolution microclimate data is essential for capturing spatio-temporal heterogeneity of urban climate and heat health management. However, previous studies have relied on dense measurements that require significant costs for equipment, or on physical simulations demanding intensive computational loads. As a potential alternative to these methods, we propose a multimodal deep learning model to predict microclimate at a high spatial and temporal resolution based on street-level and satellite imagery. This model consists of LSTM and ResNet-18 architectures, and predicts air temperature (T_air), relative humidity (RH), wind speed (ν), and global horizontal irradiance (GHI). For our study area situated at a university campus in Singapore, we collected microclimate data, street-level and satellite imagery. We conducted extensive experiments with our collected dataset to showcase our model's predictive capabilities and its practical use in generating high-resolution microclimate maps. Our model reported RMSE at 0.95°C for T_air, 2.57% for RH, 0.31 m/s for ν, and 225 W/m² for GHI. Furthermore, we observed a contribution of imagery inputs to higher accuracy by comparing models with and without such inputs. We identified hot spots at a high spatio-temporal resolution, indicating its application for issuing real-time heat alerts. Our models are released openly at the microclimate-vision GitHub repository (https://github.com/kunifujiwara/microclimate-vision)."

# Summary. An optional shortened abstract.
# summary: We propose a multimodal deep learning model to predict microclimate parameters using street-level and satellite imagery, achieving high accuracy for air temperature, relative humidity, wind speed, and solar radiation.

tags:
- urban thermal environment
- heat risk management
- climate change adaptation
- urban morphology
- street-view imagery
- computer vision
- solar radiation
featured: true

links:
- name: "DOI"
  url: "https://doi.org/10.1016/j.scs.2024.105733"
url_pdf: 'https://kunifujiwara.github.io/publication/microclimate-vision/2024_miroclimate_vision.pdf'
url_code: 'https://github.com/kunifujiwara/microclimate-vision'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Microclimate Vision: Predicting urban climate parameters using imagery'
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

<!-- ## Highlights

- Prediction of microclimate parameters using street-level and satellite imagery.
- Multimodal prediction model combining LSTM and ResNet-18 architectures.
- Collecting and using microclimate data, street-level imagery, and satellite imagery.
- High accuracy: RMSE at 0.95°C (T_air), 2.57% (RH), 0.31 m/s (ν), 225 W/m² (GHI).
- Street-level and satellite imagery contribute to improving accuracy. -->

<!-- ## Overview

This research introduces a novel approach to predicting urban microclimate parameters at high spatial and temporal resolution using multimodal deep learning with street-level and satellite imagery. Our model demonstrates significant potential for applications in urban heat management and climate adaptation planning. -->
