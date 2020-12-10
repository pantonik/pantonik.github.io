---
permalink: /research/
title: "Research"
excerpt: "Research Projects"
author_profile: true
---

A very nice thing about interdisciplinary research -- at the intersection of machine learning, electronics and photonics -- is the vast choice of interesting research directions. Here are some of the most exciting research projects I'm currently pursuing. Most of them (but not all) orbit around the [reservoir computing paradigm](http://www.scholarpedia.org/article/Echo_state_network), a machine learning algorithm that I studied during my PhD.

Human action recognition in videos
-----

<img src="/images/kth_examples.png" width="500">

Human action recognition (HAR) has been one of the most active and attractive research fields in machine learning for its vast range of applications in areas such as security and surveillance, healthcare, autonomous driving, human-machine interaction, smart home, and entertainment.
The canonical approach to HAR (before the rise of deep learning) consisted in several more or less complex preprocessing stages of the raw video data (feature extraction), followed by a relatively simple lassification algorithm (e.g. SVM), with the most research interest drawn to the feature extraction stage.

At first, I proposed to use a reservoir computer as the classifier, and I was able to obtain almost state-of-the-art results even with a simple set of features (see the Large-scale parallel photonic reservoir computer below). 
One of the key advantages of reservoir computing for video processing is that it does not require a feature descriptor, which significantly simplifies the preprocessing stage.
After this first success, I actively research the HAR with reservoir computing and supervise prospective grad and master thesis students on this topic.

Keywords: computer vision, silhouette segmentation, feature extraction, ...

Analogue readout layer for photonic time-delay reservoir computing
-----

<img src="/images/fig2_antonik2017online.png" width="500">

Reservoir computing gained significant interest in different research communities and spurred a series of experimental realisations in various physical systems such as e.g., electronic and photonics (see (Tanaka G...) for an in-depth review).
The performance these hardware implementation is comparable to state-of-the-art digital algorithms on a series of benchmark tasks. However, the major bottleneck is the readout layer, commonly consisting in slow offline post-processing. Few analogue solutions have been proposed (in particular by the OPERA-Photonics group at ULB), but all suffered from noticeable decrease in performance due to added complexity of the setup.
We investigated the idea of online learning to bypass the challenges of training a complex and nonlinear readout layer and obtained promising results. We now work on the experimental demonstration of these ideas.

Keywords: ...

Collaborators: Serge Massar (ULB)

Publications: ...

Large-scale parallel photonic reservoir computer
-----

<img src="/images/fig2_antonik2019human.png" width="500">

The goal of this project is to perform the human action recognition with photonic hardware. With my collaborators, we developped a large-scale photonic reservoir computer, using off-the-shelf components, and capable of running a neural network up to 16,000 nodes in parallel. The core of the experiment is the spatial light modulator, in charge of the nonlinear activation function. The input and readout layers are carried out digitally on a computer. Our first experiment achieved a 91% accuracy on the KTH dataset, with a processing speed up to 7 frames per second. We now aim at replacing the digital parts by optics to offload most of the computations in hardware and increase the processing speed up to real time.

Keywords: ...

Collaborators: Daniel Brunner (FEMTO-ST), Damien Rontani (CS), Nicolas Marsal (CS)

Publications:

Real-time tissue segmentation (...)
-----
some text
figure from my thesis
Collaboration: Thomas Milner (UTexas)

FPGA IBM
-----
some text
figure from JB's conf paper
Collaboration: IBM Japan
