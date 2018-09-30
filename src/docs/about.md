# Introduction

The recent wide spread of different open sourced machine learning (ML) software, including deep-learning (DL) frameworks, has inspired
a great deal of innovation among different users, ranging from framework developers (who develop ML/DL software and frameworks),
model developers (who develop ML/DL models), model users (who consumes the models for either model training or model inferencing),
and system builders (who develop underlying hardware systems and infrastructures to support the computation of ML/DL workloads).
A central task for all of these users experience (though some may play multiple roles) involves (1) instantiating the right
hardware system, (2) installing the right ML/DL software packages with dependencies, (3) installing the right ML/DL models and
related dataset, (4) configuring the system, software, and models to work together to run the experiments, and (5) collecting and
analyzing experiment results for the needed use case.

The current process of experimenting with different machine learning (ML) packages and deep learning (DL) frameworks as well as their corresponding ML/DL models is, however, daunting.
Most likely, many pages of documentation (if available) must be followed to install one ML and/or DL framework, followed by a process to download and use a particular MD and/or DL model. Not to mention the complexity involved with different hardware system configurations and their interplay with any users preexisting system software installation and their complex dependencies.

The MLModelScope (Cognitive ARtifacts for Machine Learning) is a platform allowing people to easily deploy and experiment ML/DL frameworks and models. It allows ML/DL software developers to deploy their software packages, ML model developers to publish and evaluate their models,
users to experiment with different models and frameworks, all through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.

From a user's point of view, MLModelScope simplifies this by offering a repository (also called a model zoo) of different ML models that can be readily used.
From a ML developer's point of view, MLModelScope offers exposure of the developed model as well as informs the model developer of how the model behaves on real workloads.

## Goals

The aim is to bridge the gap between machine learning developer and user. This is done by:

1.  Allowing users to experiment with machine learning models through a simple and common interface (this can be a web interface of API endpoints)
2.  Allowing users to use machine learning models that utilize either cutting edge and/or esoteric frameworks (Tensorflow, Caffe, etc...)
3.  Making it easier for machine learning developers to advertise and deploy their models, gathering extra data (such as failure points) and calculating realistic accuracy results
4.  Informing the machine learning framework developers on what layers are common and where the difficulties of using and deploying the models are
5.  Advising the hardware vendors on the choke points (from hardware resources perspective) that are encountered when running machine learning work load

MLModelScope, as it currently stands, is a deep learning inference paradigm allowing developers to deploy their deep learning framework and models --- making them available through a common interface.
Information about the [architecture](architecture.md) along with the [user interface](webui.md) are discussed in their corresponding sections.
