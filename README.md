# shiny-py

[![Deploy static content to Pages](https://github.com/rickyking/shiny-py/actions/workflows/pages.yml/badge.svg)](https://github.com/rickyking/shiny-py/actions/workflows/pages.yml)

A basic [Shiny app](https://shinylive.io/py/examples/#plot-output) deployed on GitHub Pages via [ShinyLive](https://shiny.rstudio.com/py/docs/shinylive.html) (Shiny + WebAssembly).

The example is deployed at [https://jinyi.me/shiny-py/]()

![](https://shiny.rstudio.com/py/docs/shinylive-shinylive-deployment-model.png)

## GitHub Actions 

Please refer to [./.github/workflows/pages.yml](https://github.com/rickyking/shiny-py/blob/main/.github/workflows/pages.yml) for GitHub Actions Script.

The shiny static is created via `shiny static app site`.

## Include additional packages

Please refer to [./app/requirements.txt](https://github.com/rickyking/shiny-py/blob/main/app/requirements.txt).

The reference documentation is available [here](https://shiny.rstudio.com/py/docs/shinylive.html#python-packages)
