# 👋 Hi, I'm Jonathon Poe (a.k.a. Noblesite)

**Mobile Solutions Architect** & **Senior Software Engineer** with 15+ years of experience designing scalable enterprise mobility tools, automation platforms, and LLM-based assistant systems.

I specialize in:

- 🔐 Mobile Security (MDM/MAM – Intune, Workspace ONE, Knox)
- 📱 Native iOS & Android development
- 🔄 Enterprise automation (API integration, workflows, device diagnostics)
- 🧠 LLM-based tooling (QLoRA, LangChain, custom vector pipelines)

> ⚠️ **Actively publishing** refactored tools from my enterprise portfolio. Follow along as I surface, modernize, and document years of technical work.

---

## 🚀 Featured Project

# **E.M.A. Application**

**E.M.A.** is a private research project focused on building scalable, AI-driven automation tools for enterprise platforms that exposes REST API's. It combines distributed processing, LLMs, and custom pipelines to create workflows for enterprise data orchestration, QA generation, and model training. 

> ⚠️ This project is under active development and currently private.

---

## **Features**
- **QA Pair Generation**:
  - Generates high-quality question-answer pairs for domain-specific datasets.
  - Supports multiple question types: fact-based, why/how, multiple-choice, fill-in-the-blank, and true/false.
- **ChromaDB Integration**:
  - Enables retrieval-augmented generation (RAG) by storing and retrieving embeddings.
- **Fine-Tuning Ready**:
  - Supports fine-tuning large language models (e.g., LLaMA) with QLoRA for domain-specific tasks.
- **Distributed Processing**:
  - Scalable workload distribution using Ray for parallel processing.
- **Validation and Cleaning**:
  - Ensures generated QA pairs meet quality and consistency standards.
- **Centralized Configuration**:
  - YAML files for managing global and component-specific settings.
- **Expansion Layer**:
  - Multi-model QA generation and NER workflows.
  - Directed prompt engineering logic for multi-purpose dataset creation.
- **Preprocessing Layer**:
  - Includes sliding-window context building, dataset cleaning, and key splitting.
- **Distributed Layer**:
  - Ray-based JSONL cleanup, sharding, and batch dispatching to models.
- **Fine-Tuning Layer**:
  - Deepspeed pipeline trainer, LoRA config support, sliding context batching.

---

## **Project Structure**
```
E.M.A/
├── backend/                      # FastAPI backend
├── configs/                     # YAML config files
├── data_layer/                  # ChromaDB & ingestion logic
├── distributed_data_layer/     # Large JSONL datasets for distributed QA
├── distributed_processing/     # Ray actors and file distribution logic
├── embedding/                  # Embedding generation scripts
├── expansion_layer/            # Multi-model QA/NER workflows
├── fine_tuning_layer/          # Deepspeed, QLoRA, dataset processing
├── frontend/                   # React-based interface
├── ingestion_layer/            # API/KB/Docs scraping utilities
├── md_notes/                   # Markdown project notes
├── model_layer/                # LLM engine & tool coordination logic
├── preprocessing_layer/       # JSONL deduplication & formatting
├── qa_generation/             # Legacy QA generation logic
├── ray_cluster/               # Ray head/worker node management
├── scripts/                   # Orchestration and utility scripts
├── utilities/                 # Logging, validation, system tools
├── workspace_one_workflows/  # Workspace ONE automation flows
└── .env / requirements.txt    # Environment & dependencies
```

---

## **Workflow**
1. **Distributed Dataset Prep**:
   - Shard, deduplicate, and clean raw datasets with `distributed_cleaning_pipeline.py`.
2. **Dataset Preparation**:
   - Validate and clean input datasets (e.g., `omnissa_apis_with_context_dataset.jsonl`).
   - Generate embeddings and ingest them into ChromaDB.

3. **QA Pair Generation**:
   - Run the QA generation pipeline to create question-answer pairs using `run_qa_generation.py`.

4. **Fine-Tuning**:
   - Use `run_fine_tuning.py` to launch the `deepspeed_trainer.py` or `pipeline_trainer.py`.
   - Supports QLoRA, DeepSpeed ZeRO-3, sliding context batching, and Flash Attention.

5. **Deployment**:
   - Deploy the fine-tuned model with the FastAPI backend for real-time inference with token streaming. 

---

## **Future Enhancements**
- Support for additional question types.
- Automated hyperparameter tuning for fine-tuning workflows.
- Advanced monitoring and analytics for QA pair generation.
- LoRA weight merging utilities
- Fine-tuned model hub export and quantization
- Dataset tokenizer profiling for context budget planning

---


### 🖨️ [EpsonLink](https://github.com/Noblesite/EpsonLink)  
A fully native Android WebView wrapper for USB-connected Epson receipt printers using the ePOS2 SDK. Built for Android Enterprise deployments with a clean MVVM architecture and structured JSON print support.

### 🧪 [WorkspaceONE Staging Utility](https://github.com/Noblesite/WorkspaceOne-Staging-Utility)  
A dynamic staging tool designed to configure and provision devices via MDM assignment groups, tag logic, and relay APIs.

### 🧠 [WorkspaceOne Python SDK Wrapper](https://github.com/Noblesite/workspace_one_python)  
Python-based automation framework for interacting with Workspace ONE UEM APIs, featuring DTO mapping and REST abstraction.

---

## 🛠️ Projects Published So Far

- 📦 [WorkspaceONE-To-Intune-iOS](https://github.com/Noblesite/WorkspaceONE-To-Intune-iOS)  
  Seamless COPE/BYOD migration utility for iOS MDM transitions.

- 🔬 [EasyRest](https://github.com/Noblesite/EasyRest)  
  Lightweight REST client for debugging iOS APIs.

- 💬 [XMPPMessenger-iOS](https://github.com/Noblesite/XMPPMessenger-iOS)  
  Secure real-time chat app built on XMPP.

- 💍 [The Proposal](https://github.com/Noblesite/The_Proposal)  
  SpriteKit game with a surprise engagement ending.

- 🧪 [IPCDeviceUtility](https://github.com/Noblesite/IPCDeviceUtility)  
  Internal sled diagnostic tool with MSR/scanner/firmware support.

---

## 🧰 Tools I Work With

- Mobile: Swift, Objective-C, Kotlin, Java
- Frontend: React Typescript Next.js Tailwind CSS PHP
- Backend: Python (FastAPI, Flask), Node.js, Java (SpringBoot), C++, C# .NET, PHP
- DevOps: GitHub Actions, CI/CD, scripting, Jenkins, Sonarqube
- AI/LLM: LangChain, QLoRA, vector DBs, agent frameworks

---

## 📫 Get in Touch

- 🌐 [noblesite.net](https://noblesite.net)  
- 💼 [LinkedIn](https://www.linkedin.com/in/jonathon-poe-b5a01053/)  
- 📧 jonathon [at] noblesite [dot] gmail [dot] com

---

_“Build fast. Stay secure. Leave tech cleaner than you found it.”_
