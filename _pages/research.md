---
permalink: /research/
title: "Research"
excerpt: "Research"
author_profile: true
---

My interdisciplinary research field -- at the intersection of **machine learning**, **electronics** and **photonics** -- offers a vast choice of interesting research directions. Here are some of the most exciting projects I'm currently working on. Most of them (but not all) orbit around the [reservoir computing paradigm](http://www.scholarpedia.org/article/Echo_state_network), a machine learning algorithm based on recurrent neural networks.

Human action recognition in videos
-----

<img src="/images/kth_examples.png" title="Source: paper under review" width="500">

<img src="/images/kth_examples.png" title="Source: paper under review" style="width:100%">

**Human action recognition** (HAR) has been one of the most active and attractive research fields in machine learning for its vast range of applications in areas such as security and surveillance, healthcare, autonomous driving, human-machine interaction, smart home, and entertainment.
The canonical approach to HAR (before the rise of deep learning) consisted in several more or less complex preprocessing stages of the raw video data (**feature extraction**), followed by a relatively simple classification algorithm (e.g. SVM), with the most research interest drawn to the feature extraction stage.

At first, I proposed to use a **reservoir computer** as the classifier, and I was able to obtain almost state-of-the-art results even with a simple set of features (see the _Large-scale parallel photonic reservoir computer_ below). 
One of the key advantages of reservoir computing for video processing is that it does not require a **feature descriptor**, which significantly simplifies the preprocessing stage.
After this first success, I actively research the HAR with reservoir computing and supervise several master's thesis students on this topic.

Large-scale parallel photonic reservoir computer
-----

<img src="/images/fig2_antonik2019human.png" title="Source: Antonik P., et al. Nat. Mach. Intel. (2019)" width="500">

The goal of this project is to perform the **human action recognition** with **photonic hardware**. With my collaborators, we developped a large-scale photonic reservoir computer, using off-the-shelf components, and capable of running a **neural network** with 16,000 nodes in parallel. The core of the experiment is a **spatial light modulator**, in charge of the nonlinear activation function. The input and readout layers are carried out digitally on a computer. Our first experiment achieved a 91% accuracy on the **KTH dataset**, with a processing speed up to 7 frames per second. We now aim at replacing the digital parts by optics to offload most of the computations in hardware and increase the processing speed up to real time.

Collaborators: [Daniel Brunner](https://members.femto-st.fr/daniel-brunner/) (FEMTO-ST), [Damien Rontani](http://www.metz.supelec.fr/metz/personnel/rontani_dam/) and [Nicolas Marsal](http://www.metz.supelec.fr/metz/personnel/marsal_nic) (CentraleSupélec)

* Antonik, Piotr, et al. "Human action recognition with a large-scale brain-inspired photonic computer." _Nature Machine Intelligence_ 1.11 (2019): 530-537. [\[DOI\]](https://doi.org/10.1038/s42256-019-0110-8) [\[arXiv\]](https://arxiv.org/abs/2004.02545)
* Antonik, Piotr, Nicolas Marsal, and Damien Rontani. "Large-scale spatiotemporal photonic reservoir computer for image classification." _IEEE Journal of Selected Topics in Quantum Electronics_ 26.1 (2019): 1-12. [\[DOI\]](https://doi.org/10.1109/jstqe.2019.2924138) [\[arXiv\]](https://arxiv.org/abs/2004.02542)

Analogue readout layer for photonic time-delay reservoir computing
-----

<img src="/images/fig2_antonik2017online.png" title="Source: Antonik P., et al. Cogn. Comput. (2017)" width="500">

Reservoir computing gained significant interest in different research communities and spurred a series of experimental realisations in various **physical systems** such as e.g., **electronics** and **photonics** (see [Tanaka G., et al. Neural Netw. (2019)](https://doi.org/10.1016/j.neunet.2019.03.005) for an in-depth review).
Although the performance of these hardware implementations is comparable to state-of-the-art digital algorithms on a series of benchmark tasks, there are some bottlenecks. One of them is the **readout layer**, commonly consisting of a slow offline post-processing. Several **analogue** solutions have been proposed (in particular by the [OPERA-Photonics](https://www2.ulb.ac.be/facs/polytech/opera/index.html) group at ULB), but all suffered from noticeable decrease in performance due to added complexity of the setup.
We investigated the idea of **online learning** to bypass the challenges of training a complex and nonlinear readout layer and obtained promising results. We now work on the **experimental demonstration** of this idea.

Collaborators: [Serge Massar](http://liq.ulb.ac.be/index.php?option=com_content&view=article&id=11%3Aserge-massar&catid=1%3Amembres&Itemid=4) (ULB)

* Antonik, Piotr, Marc Haelterman, and Serge Massar. "Online training for high-performance analogue readout layers in photonic reservoir computers." _Cognitive Computation_ 9.3 (2017): 297-306. [\[DOI\]](https://doi.org/10.1007/s12559-017-9459-3)

Real-time coronary plaque segmentation in optical coherence tomography scans
-----

<img src="/images/iv-oct.png" title="Source: ... (left panel), ... (right panel)" width="500">

?? !! image source

Atherosclerosis is a progressive disease characterised by the accumulation of lipids and fibrous elements in the large arteries.
It is the primary cause of heart disease and stroke (about 50% of all deaths in westernised societies).
The diagnosis of coronary plaques that cause acute coronary events requires high-resolution visualisation methods.
In recent years, researchers at the Biomedical Engineering Department of the University of Texas at Austin have investigated the use of **optical coherence tomography** (OCT) for the intravascular (IV) imaging. 
The main advantage of IV-OCT over other imaging techniques (such as IVUS, MR or CT) is the axial resolution (about 10 um, ten times higher than IVUS, the current industry standard).
However, the complexity of analysis of the IV-OCT scans of coronary arteries presents a significant challenge in large-scale deployment of this imaging technique.
To address this issue, Dr T Milner and his collaborators introduced machine learning for the **automated plaque classification** in IV-OCT scans.
I had a chance to contribute to this project during my internship at UTexas: I implemented the **computer-vision-based algorithm** (both the feature extraction and classification stages) on the **FPGA** to speed up the process from roughly 3 hours on a high-end PC to 11 seconds on the FPGA.
The current objectives of the project include the improvement of the sensitivity and specificity of the machine learning algorithm and the enhancement of its FPGA implementation for **real-time diagnosis**.

Collaborators: [Thomas Milner](https://www.ece.utexas.edu/people/faculty/thomas-milner) (UTexas)

* Baruah, Vikram, et al. "Automated Coronary Plaque Characterization With Intravascular Optical Coherence Tomography and Smart-Algorithm Approach: Virtual Histology OCT." _JACC: Cardiovascular Imaging_ 13.8 (2020): 1848-1850. [\[DOI\]](https://doi.org/10.1016/j.jcmg.2020.02.022)

Reservoir computing based on multi-mode optical interconnect
-----

<img src="/images/fig3_heroux2020time.png" title="Source: " width="500">

!! ?? image source

This project focuses on the realisation of a **photonic reservoir cluster** device operating at very high speed with low power and a small footprint with a large number of interacting physical and virtual neurons. 
The IBM Research team in Japan has developped a prototype time-delay reservoir computer based on **multi-mode optical interconnect** components. 
I contribute to the development of the specific FPGA design for the **high-speed data acquisition** and generation for the optical setup.

Collaborators: [Jean Benoit Héroux](https://researcher.watson.ibm.com/researcher/view.php?person=jp-HEROUX) (IBM Research - Tokyo)

* Héroux, Jean Benoit, Naoki Kanazawa, and Piotr Antonik. "Time Series Processing with VCSEL-Based Reservoir Computer." _International Conference on Artificial Neural Networks_. Springer, Cham, 2019. [\[DOI\]](https://doi.org/10.1007/978-3-030-30493-5_17)
