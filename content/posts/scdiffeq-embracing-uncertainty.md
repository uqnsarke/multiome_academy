---
title: "scDiffEq: Why Modelling Cell Fate Requires Embracing Uncertainty"
date: "December 23, 2025"
tags: ["SingleCell", "MachineLearning", "SDEs", "TrajectoryInference", "Bioinformatics"]
image: "/downloads/scdiffeq.png"
slug: "scdiffeq-embracing-uncertainty"
---

**Single-cell sequencing has fundamentally changed how we study biological systems.**

By measuring thousands to millions of individual cells, we can reconstruct developmental trajectories, map differentiation hierarchies, and infer regulatory programs underlying health and disease.

Yet, despite these advances, most trajectory inference methods still make a critical simplifying assumption. They focus almost entirely on *direction*.

**But biology is not deterministic.**

Cell fate decisions emerge from a delicate balance between deterministic regulatory forces—such as transcriptional programs and chromatin accessibility—and stochastic fluctuations, including transcriptional noise, regulatory variability, and probabilistic branching. Ignoring this balance risks oversimplifying the very processes we aim to understand.

A recently introduced framework, **scDiffEq**, directly addresses this limitation by explicitly modelling both deterministic and stochastic components of cell state transitions.

## Drift Is Only Half the Story

Many existing approaches implicitly rely on **drift–diffusion formulations**.
* **Drift** captures the average direction of cell state change, often interpreted as the “developmental force” pushing cells along a trajectory.
* **Diffusion** represents stochasticity.

**The Problem:** In most models, diffusion is assumed to be *constant* across all cell states. This is biologically unrealistic.

Multipotent progenitors are inherently uncertain; they explore multiple potential fates before committing. Terminally differentiated cells, by contrast, are comparatively stable. Treating both with the same level of stochasticity obscures critical biological structure.

**scDiffEq removes this constraint by learning state-dependent diffusion**, allowing stochasticity itself to vary across the cellular landscape.

## What scDiffEq Does Differently

scDiffEq is a generative framework based on **neural stochastic differential equations (SDEs)**. Rather than fitting trajectories post hoc, it learns a continuous-time model that jointly captures:

1.  **Deterministic dynamics (drift)**
2.  **Stochastic dynamics (diffusion)**
3.  **How both change across cell states and time**

Using lineage-traced haematopoiesis datasets, scDiffEq demonstrates improved performance over contemporary methods in multiple benchmark tasks, including fate prediction from multipotent progenitors and reconstruction of unseen populations.

Crucially, because the model is **generative**, it does not merely interpolate observed data. It can simulate realistic developmental trajectories, enabling counterfactual experiments and *in silico* perturbations.

## Modelling Fate as Probability, Not Certainty

One of the most important conceptual advances in scDiffEq is its ability to disentangle **deterministic commitment** from **stochastic plasticity**.

Across differentiation trajectories, drift and diffusion behave very differently. Some lineages rapidly become drift-dominated, reflecting early fate commitment. Others retain elevated diffusion, enabling rare or multi-fate outcomes.

*This suggests that cells actively modulate their susceptibility to stochastic state changes as development progresses.*

These insights are inaccessible to methods that assume uniform noise. By explicitly modelling state-dependent diffusion, scDiffEq captures the full spectrum of cellular behavior—from stable terminal states to highly plastic progenitors.

## Beyond RNA Velocity and Pseudotime

**RNA velocity** and **graph-based pseudotime** methods have become standard tools for studying dynamics in single-cell data. While powerful, these approaches are largely descriptive. They infer trends but do not define a generative process capable of simulating new data.

**scDiffEq represents a shift toward mechanistic modelling.** Because it learns a stochastic dynamical system, it enables:
* Simulation of high-resolution developmental trajectories
* Explicit separation of deterministic versus stochastic contributions
* Time-dependent gene-level dynamics along simulated paths
* Prediction of outcomes under *in silico* perturbations

This positions scDiffEq not just as a trajectory inference method, but as a **platform for hypothesis generation**.

## Limitations and Open Challenges

Like all models, scDiffEq makes trade-offs. Its reliance on a precomputed PCA latent space may obscure gene–gene relationships and regulatory network structure. This reflects a broader challenge in optimal-transport and latent-space approaches: low-dimensional embeddings can smooth over biologically meaningful detail.

The authors highlight several promising future directions:
* Modelling dynamics directly in gene space
* Integrating chromatin accessibility and protein modalities
* Improving regularization of stochastic decision-making
* Scaling further using simulation-free flow-matching algorithms
* Experimental validation through targeted perturbations and live cell tracking

Notably, scDiffEq already demonstrates near-linear scaling to datasets approaching one million cells, making it practical for modern single-cell atlases.

## Why This Matters for Multiomics

From a **multiomics perspective**, scDiffEq is particularly compelling. Cell fate is not determined by transcriptomics alone. Chromatin accessibility, transcription factor binding, and protein abundance all contribute to how deterministic or stochastic a transition becomes.

By extending drift–diffusion modelling to multiple modalities, future versions of scDiffEq could quantify how much each layer contributes to fate determination—a central question in development, aging, and disease.

## A Conceptual Step Forward

scDiffEq represents an important conceptual shift in single-cell analysis.

* It treats **uncertainty as a biological signal**, not noise.
* It models **fate as probability**, not just direction.
* It reframes trajectory inference as a **generative, testable theory of development**.

As single-cell and multiomic datasets continue to expand in scale and complexity, approaches that explicitly balance deterministic programs with stochastic behavior will be essential. scDiffEq provides a foundation for this next generation of biologically informed neural differential equation models.

#SingleCell #Bioinformatics #MachineLearning #SDEs #SystemsBiology #Multiomics
EOF
