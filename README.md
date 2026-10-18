# Ravi Kumar — Portfolio

Personal website and portfolio of **Ravi Kumar**, Data Scientist and AI/ML Engineer.

Live at: **[https://dcsgod.github.io/](https://dcsgod.github.io/)**

## Focus Areas

- **LLM Systems & Agent Memory** (Nexa, Membrane)
- **Graph Intelligence & Differentiable Reasoning** (dgot, GNNs)
- **Causal Machine Learning & Decision Intelligence** (Enterprise optimization on Databricks)
- **Time-Series Forecasting & Quantization** (TriChronos)

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Tooling**: Vite 8 + Oxlint
- **Styling**: Vanilla CSS Design System with dark mode aesthetics
- **Routing**: React Router (HashRouter for zero-config GitHub Pages compatibility)
- **Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## Local Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Run Oxlint
npm run lint

# Build for production
npm run build
```

## Deployment

Pushes to the `main` branch automatically trigger the GitHub Actions workflow, which builds and deploys the production bundle to GitHub Pages.
