---
title: "Retrieval-Augmented Generation"
slug: "retrieval-augmented_generation"
categories:
  - "Machine_learning_terms"
  - "Natural_Language_Processing"
  - "Artificial_intelligence"
  - "Terms"
---

**Retrieval-Augmented Generation** (**RAG**) is a technique in [artificial intelligence](/wiki/artificial_intelligence) that enhances the output of a [large language model](/wiki/large_language_model) (LLM) by grounding it in external knowledge retrieved at inference time. Rather than relying solely on the information encoded in a model's parameters during training, a RAG system first retrieves relevant documents or passages from an external data source, then feeds that retrieved context to the generative model so it can produce more accurate, up-to-date, and verifiable responses. The term was coined by Patrick Lewis and colleagues at Facebook AI Research (now [Meta AI](/wiki/meta_ai)) in their 2020 paper "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks," which was presented at NeurIPS 2020.

Since its introduction, RAG has become one of the most widely adopted patterns in applied AI, serving as a practical alternative to [fine-tuning](/index.php?title=Fine-tuning&action=edit&redlink=1) for injecting domain-specific or up-to-date knowledge into LLMs. The approach is used across enterprise applications including question-answering systems, customer support chatbots, legal research tools, and internal knowledge management platforms.

## History and Background

### Early Foundations

The idea of combining information retrieval with language generation has roots that predate the modern deep learning era. Early information retrieval research in the 1950s and 1960s, led by pioneers such as Hans Peter Luhn and Gerald Salton, established foundational concepts like term frequency-inverse document frequency (TF-IDF) and the vector space model. These methods allowed systems to match queries against document collections based on statistical word overlap, laying the groundwork for the retrieval side of what would eventually become RAG.

Through the 2010s, advances in [neural networks](/wiki/neural_network) and the development of the [Transformer](/wiki/transformer) architecture (introduced by Vaswani et al. in 2017) enabled substantial progress in both language modeling and dense retrieval. Researchers began experimenting with hybrid architectures that combined retrieval mechanisms for knowledge grounding with generative models for fluent language output.

### REALM (2020)

A key precursor to RAG was REALM (Retrieval-Augmented Language Model Pre-Training), published by Kelvin Guu, Kenton Lee, Zora Tung, Panupong Pasupat, and Ming-Wei Chang at Google Research in February 2020. REALM augmented language model pre-training with a latent knowledge retriever, allowing the model to retrieve and attend over documents from a large corpus such as Wikipedia during pre-training, fine-tuning, and inference. For the first time, the authors showed how to pre-train such a knowledge retriever in an unsupervised manner, using masked language modeling as the learning signal and backpropagating through a retrieval step that considers millions of documents. REALM outperformed all previous methods by 4 to 16 percent absolute accuracy on three popular open-domain question answering benchmarks and was presented at ICML 2020.

### The Original RAG Paper (Lewis et al., 2020)

The formal introduction of RAG as a named paradigm came with the paper "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks" by Patrick Lewis, Ethan Perez, Aleksandra Piktus, Fabio Petroni, Vladimir Karpukhin, Naman Goyal, Heinrich Kuttler, Mike Lewis, Wen-tau Yih, Tim Rocktaschel, Sebastian Riedel, and Douwe Kiela. The paper was submitted to arXiv on May 22, 2020, and was accepted at NeurIPS 2020. The authors came from Facebook AI Research (FAIR), University College London, and New York University.

The paper proposed RAG models that combine pre-trained parametric and non-parametric memory for language generation. Specifically, the parametric memory was a pre-trained BART sequence-to-sequence model (the generator), and the non-parametric memory was a dense vector index of Wikipedia accessed through a Dense Passage Retriever (DPR) as the neural retriever. The retriever and generator were jointly trained, without any direct supervision on which documents to retrieve.

Lewis et al. described RAG as "a general-purpose fine-tuning recipe" for retrieval-augmented generation, noting that it could be applied by nearly any LLM to connect with practically any external resource. The models achieved state-of-the-art results on three open-domain question answering benchmarks, outperforming both parametric seq2seq models and task-specific retrieve-and-extract architectures. The authors also demonstrated that RAG models generate more specific, diverse, and factual language compared to parametric-only baselines.

### Subsequent Developments (2021 to Present)

Following the original paper, RAG rapidly evolved into a mainstream AI technique:

- **2021 to 2022**: Researchers extended RAG to work with larger LLMs and more diverse knowledge sources beyond Wikipedia. The release of models like GPT-3 and subsequent instruction-tuned variants created new demand for grounding these models in external knowledge.
- **2023**: RAG became a foundational pattern in enterprise AI. Hundreds of research papers and numerous commercial systems adopted the paradigm. Frameworks such as [LangChain](/wiki/langchain) and LlamaIndex emerged to simplify RAG pipeline construction.
- **2024**: Microsoft introduced GraphRAG, which uses knowledge graphs instead of flat document retrieval for improved reasoning over complex datasets. Self-RAG and Corrective RAG (CRAG) techniques added self-assessment and quality control to the retrieval process.
- **2025 to 2026**: The field shifted toward Agentic RAG, where autonomous AI agents manage the retrieval pipeline with planning, reflection, tool use, and multi-agent collaboration. Hybrid approaches combining RAG with long-context models emerged as a practical middle ground in the ongoing debate about whether retrieval or extended context windows provide better results.

## How RAG Works

At its core, a RAG system operates through a two-phase pipeline: retrieval followed by generation. The user submits a query, relevant information is retrieved from an external knowledge base, and the retrieved context is combined with the original query before being passed to a generative model for response synthesis.

### Step-by-Step Pipeline

1. **User Query**: The user submits a natural language question or prompt to the system.

2. **Query Processing**: The query is processed and, in advanced systems, may be transformed, expanded, or decomposed into sub-queries to improve retrieval effectiveness.

3. **Embedding**: The processed query is converted into a dense vector representation using an [embedding](/wiki/embedding_vector) model. This numerical representation captures the semantic meaning of the query.

4. **Retrieval**: The query embedding is compared against a pre-built index of document embeddings stored in a [vector database](/wiki/vector_database). The system identifies the top-K most similar documents or passages using similarity metrics such as cosine similarity or dot product.

5. **Context Assembly**: The retrieved documents or passages are assembled into a context window, often with metadata such as source attribution. In advanced systems, a reranking step may reorder the retrieved results by relevance before assembly.

6. **Augmented Prompt Construction**: The original user query is combined with the retrieved context into an augmented prompt. This prompt typically instructs the LLM to answer the question based on the provided context.

7. **Generation**: The LLM processes the augmented prompt and generates a response grounded in the retrieved information.

8. **Output**: The response is returned to the user, often with citations or source references for verification.

### The Two RAG Formulations

The original Lewis et al. paper defined two specific formulations that differ in how retrieved documents are marginalized during generation:

| Formulation | Description | Behavior |
|---|---|---|
| **RAG-Sequence** | Uses the same retrieved passage for generating the entire output sequence | A single document conditions all generated tokens; the model marginalizes over the top-K documents at the sequence level |
| **RAG-Token** | Allows different retrieved passages to inform different tokens in the output | Each generated token can draw from a different document; the model marginalizes over documents at the token level |

RAG-Sequence is simpler and assumes that a single retrieved document is responsible for the entire generated answer. RAG-Token is more flexible and can synthesize information from multiple documents within a single response, though it is computationally more expensive.

## Core Components

A production RAG system consists of several interconnected components, each playing a distinct role in the retrieval-generation pipeline.

### Embedding Models

Embedding models convert text (both queries and documents) into dense vector representations in a high-dimensional [embedding space](/wiki/embedding_space). These vectors capture semantic meaning, allowing the system to find documents that are conceptually similar to a query even if they do not share exact keywords.

| Model | Provider | Dimensions | MTEB Score | Pricing (per 1M tokens) | Notable Features |
|---|---|---|---|---|---|
| text-embedding-3-large | OpenAI | 3,072 | ~64.6 | $0.13 | Configurable dimensions, strong general performance |
| text-embedding-3-small | OpenAI | 1,536 | ~62.3 | $0.02 | Cost-effective for large-scale applications |
| embed-v4 | Cohere | 1,024 | ~65.2 | Usage-based | Multimodal (text and images), 128K token context |
| BGE-M3 | BAAI (open source) | 1,024 | ~63.0 | Free (self-hosted) | Supports 100+ languages, hybrid retrieval |
| Voyage-3 | Voyage AI | 1,024 | ~64.8 | $0.06 | Strong on code and technical content |
| E5-Mistral-7B-Instruct | Microsoft (open source) | 4,096 | ~63.6 | Free (self-hosted) | Instruction-tuned, large model |

The choice of embedding model affects retrieval quality significantly. Models are typically evaluated on the Massive Text Embedding Benchmark (MTEB), which measures performance across tasks including classification, clustering, retrieval, and semantic textual similarity.

### Retrievers

The retriever is the component responsible for searching the knowledge base and returning relevant documents. There are several retrieval approaches:

**Sparse Retrieval** uses traditional keyword-matching algorithms. The most common is BM25 (Best Match 25), which ranks documents by examining how frequently query terms appear in each document and how rare those terms are across the entire corpus. Sparse retrieval excels at exact term matching and is particularly strong for queries containing specific identifiers, product names, or technical terminology.

**Dense Retrieval** uses neural embedding models to represent both queries and documents as dense vectors, then finds the nearest neighbors in vector space. Dense retrieval captures semantic relationships between words, allowing it to find documents that are conceptually relevant even without keyword overlap. Dense Passage Retriever (DPR), used in the original RAG paper, is a foundational dense retrieval model.

**Hybrid Retrieval** runs both sparse and dense retrieval in parallel and merges the results using fusion algorithms. The most common fusion strategy is Reciprocal Rank Fusion (RRF), which produces a single robust ranking that rewards documents appearing highly in either retrieval list. Hybrid search consistently outperforms either method alone because dense retrieval can miss exact identifiers while sparse retrieval can miss semantically relevant matches.

**Learned Sparse Retrieval** models like SPLADE (SParse Lexical AnD Expansion) learn to produce sparse representations that expand query terms with related vocabulary, combining some benefits of both sparse and dense approaches.

### Vector Databases

[Vector databases](/wiki/vector_databases) are specialized storage systems optimized for indexing and querying high-dimensional vectors. They form the backbone of the retrieval component in most RAG systems.

| Database | Type | Key Strengths | Best For | License |
|---|---|---|---|---|
| Pinecone | Managed cloud | Serverless scale, minimal ops, multi-region | Teams wanting reliability without cluster management | Proprietary |
| Weaviate | Open source / cloud | Knowledge graph capabilities, GraphQL interface | Semantic search with structural understanding | BSD-3-Clause |
| Milvus | Open source / cloud | Industrial scale, GPU acceleration, billion-vector support | Organizations with data engineering capacity | Apache 2.0 |
| Qdrant | Open source / cloud | Rust-based performance, sophisticated metadata filtering | Applications requiring complex filtering alongside vector search | Apache 2.0 |
| Chroma | Open source | Developer-friendly, lightweight, easy setup | Prototyping and small/medium applications | Apache 2.0 |
| FAISS | Library | Unmatched algorithm flexibility, raw speed, GPU support | Research teams and maximum search performance scenarios | MIT |
| pgvector | PostgreSQL extension | SQL integration, familiar tooling | Teams already using PostgreSQL who need vector capabilities | PostgreSQL License |

The selection of a vector database depends on factors including scale requirements, operational complexity tolerance, filtering needs, and whether a managed or self-hosted solution is preferred. Pinecone offers a turnkey managed experience; Milvus and Qdrant provide strong open-source options for production workloads; Chroma is popular for rapid prototyping; and FAISS remains the go-to library for research and scenarios demanding raw nearest-neighbor search performance.

### Generators

The generator is the language model that produces the final output based on the retrieved context and the user query. In the original RAG paper, BART served as the generator. In modern RAG systems, the generator is typically a general-purpose LLM such as GPT-4, [Claude](/wiki/CLAUDE), Gemini, Llama, or Mistral. The generator receives the augmented prompt (query plus retrieved context) and synthesizes a response that ideally draws on the retrieved information while maintaining coherent, natural language.

### Rerankers

Rerankers are models that take the initial set of retrieved documents and re-score them for relevance to the query. Unlike embedding models (which produce independent representations of queries and documents), rerankers are typically cross-encoder models that process the query and each document together, allowing for more nuanced relevance scoring. Common reranking models include Cohere Rerank, cross-encoders trained on MS MARCO (such as MiniLM variants), and BGE-reranker models. Reranking consistently improves retrieval precision at the cost of additional latency.

## Types of RAG

Research and practice have identified three evolutionary stages of RAG architectures, each building on the limitations of the previous one.

### Naive RAG

Naive RAG is the most basic implementation of retrieval-augmented generation. It follows a straightforward pipeline: index, retrieve, generate.

**Indexing Phase**: Documents are loaded, split into chunks, embedded into vector representations using an embedding model, and stored in a vector database.

**Retrieval Phase**: When a user submits a query, the query is embedded and the system retrieves the top-K most similar chunks from the vector database.

**Generation Phase**: The retrieved chunks are concatenated with the user query and passed to the LLM, which generates a response.

**Limitations of Naive RAG**:
- Low precision: retrieved chunks may not align well with the query
- Low recall: the system may fail to retrieve all relevant chunks
- Outdated information in the knowledge base can lead to inaccurate responses
- No mechanism for evaluating retrieval quality before generation
- Simple chunking strategies may break semantic coherence
- The "lost in the middle" problem, where LLMs struggle to use information in the middle of long contexts

Naive RAG is best suited for proof-of-concept applications, simple question-answering tasks, and scenarios where speed of deployment is more important than optimized accuracy.

### Advanced RAG

Advanced RAG addresses the limitations of Naive RAG by introducing optimizations in pre-retrieval, retrieval, and post-retrieval phases.

**Pre-Retrieval Optimizations**:
- Query rewriting and expansion to improve retrieval effectiveness
- Hypothetical Document Embeddings (HyDE), where the LLM generates a hypothetical answer that is then used as the retrieval query
- Query decomposition, breaking complex queries into simpler sub-queries
- Improved chunking strategies (semantic chunking, recursive chunking)
- Enhanced indexing with metadata, summaries, and hierarchical structures

**Retrieval Optimizations**:
- Hybrid search combining sparse and dense retrieval
- Multi-index retrieval across different knowledge sources
- Iterative retrieval with multiple rounds of search

**Post-Retrieval Optimizations**:
- Reranking retrieved documents by relevance
- Filtering out irrelevant or redundant passages
- Compressing retrieved context to fit within token limits
- Citation extraction and source attribution

Advanced RAG systems produce significantly more accurate and relevant responses than Naive RAG, particularly for enterprise workloads that require high precision.

### Modular RAG

Modular RAG breaks the retrieval and generation processes into separate, independently optimizable modules. This approach treats the RAG pipeline as a configurable framework rather than a fixed sequence of steps.

**Key Modules**:

| Module | Function |
|---|---|
| Search | Retrieves documents from various sources (vector databases, web search, APIs) |
| Memory | Maintains conversation history and previously retrieved information |
| Fusion | Combines results from multiple retrieval sources |
| Routing | Directs queries to appropriate retrieval strategies or knowledge sources |
| Predict | Generates hypothetical answers or documents to guide retrieval |
| Task Adapter | Adapts the pipeline configuration based on the type of task |
| Verify | Checks the quality and relevance of retrieved documents |

Unlike the fixed pipeline of Naive and Advanced RAG, Modular RAG incorporates decision-making at key points and dynamically selects subsequent steps based on previous outcomes. Modules can be rearranged, added, or replaced to suit specific problem contexts. This adaptive, reconfigurable capability is a defining characteristic of Modular RAG and aligns closely with the emerging Agentic RAG paradigm.

## Key Techniques

### Chunking Strategies

Chunking is the process of breaking documents into smaller segments for indexing and retrieval. The choice of chunking strategy significantly impacts retrieval quality.

| Strategy | Description | Strengths | Weaknesses |
|---|---|---|---|
| Fixed-Size | Splits text into equally sized pieces by character, token, or word count, often with overlap | Simple, fast, predictable chunk sizes | May break semantic units mid-sentence or mid-paragraph |
| Recursive | Uses an ordered list of separators (sections, paragraphs, sentences, tokens) to split hierarchically | Preserves logical boundaries while enforcing size constraints | Can produce uneven chunk sizes |
| Semantic | Splits at logical boundaries based on meaning; merges consecutive segments with high similarity | Highest retrieval relevance when conceptual integrity matters | More computationally expensive; may produce very small fragments |
| Adaptive | Dynamically adjusts chunk sizes based on content complexity using NLP analysis | Handles heterogeneous documents well | Complex to implement and tune |
| Late | Feeds entire documents into a long-context embedding model first, then splits | Token-level embeddings understand full document context | Requires long-context embedding models |
| Agentic | Uses an AI agent to dynamically decide how to split documents based on structure and content | Most intelligent splitting; considers document semantics holistically | Slowest and most expensive approach |

Research benchmarks show varying performance across strategies. A 2025 clinical decision support study found that adaptive chunking aligned to logical topic boundaries achieved 87% accuracy versus 13% for fixed-size baselines. However, a February 2026 benchmark of seven strategies across 50 academic papers placed recursive 512-token splitting first at 69% accuracy, while semantic chunking scored 54% after producing fragments averaging only 43 tokens. The best strategy depends on the specific use case, document types, and quality requirements.

Common chunk sizes range from 256 to 1,024 tokens, with overlap of 10 to 20 percent between adjacent chunks to maintain continuity.

### Hybrid Search

Hybrid search combines sparse retrieval (typically BM25) with dense vector retrieval to leverage the strengths of both approaches. The process works as follows:

1. The system creates both a sparse query representation (for keyword matching) and a dense embedding vector (for semantic matching).
2. Both retrievers search the knowledge base independently.
3. Results are merged using a fusion algorithm, most commonly Reciprocal Rank Fusion (RRF).

RRF works by converting raw scores (which live on incompatible scales between sparse and dense retrievers) into rank-based scores, then combining them. This produces a robust ranking that rewards documents appearing high in either list. Hybrid search is now considered a best practice for production RAG systems because it addresses the complementary weaknesses of pure sparse or pure dense retrieval.

### Reranking

After initial retrieval, a reranking step re-scores the retrieved documents using a more computationally expensive but more accurate model. While the initial retrieval uses bi-encoder models (which encode queries and documents independently), rerankers typically use cross-encoder models that process the query-document pair together. This joint processing allows the reranker to capture fine-grained interactions between the query and document that bi-encoders miss.

Common reranking approaches include:
- **Cross-encoder rerankers**: Transformer models (such as MiniLM cross-encoders trained on MS MARCO) that score query-passage pairs directly
- **LLM-based rerankers**: Using an LLM to assess document relevance
- **Cohere Rerank**: A commercial reranking API
- **Learned listwise rerankers**: Models trained to optimize the ordering of an entire result list

### Query Transformation

Query transformation techniques modify or expand the user's original query to improve retrieval effectiveness:

- **Query Rewriting**: Rephrasing the query for clarity or to match the language used in the knowledge base
- **Query Expansion**: Adding related terms or synonyms to the query to increase recall
- **Query Decomposition**: Breaking a complex question into multiple simpler sub-questions, retrieving for each, and synthesizing the results
- **Step-Back Prompting**: Generating a more general or abstract version of the query to retrieve broader context
- **Hypothetical Document Embeddings (HyDE)**: Using the LLM to generate a hypothetical answer, then using that answer as the retrieval query (since the hypothetical answer's embedding may be closer to relevant documents than the original question's embedding)

### Multi-Query Retrieval

Multi-query retrieval generates multiple variations of the user's query, retrieves documents for each variation, and combines the results. This technique increases the diversity of retrieved documents and reduces the chance of missing relevant information due to the phrasing of a single query.

## Advanced RAG Paradigms

### Self-RAG

Self-RAG introduces a self-assessment mechanism where the model decides whether retrieval is needed for a given query. A separate critic model generates "reflection tokens" that indicate whether to retrieve information, whether the retrieved information is relevant, and whether the generated response is supported by the retrieved context. This selective retrieval approach avoids unnecessary retrieval for queries the model can answer from its parametric knowledge and adds quality control to the generation process.

### Corrective RAG (CRAG)

Corrective RAG incorporates a retrieval evaluator that assesses the quality of retrieved documents and triggers corrective actions based on confidence scores:

- **High confidence**: The system refines retrieved documents using a decompose-then-recompose technique, removing irrelevant information while retaining key knowledge.
- **Low confidence**: The system discards the faulty retrieval results and triggers a web search to find more reliable information.
- **Ambiguous confidence**: The system combines refined retrieval results with web search results for more robust knowledge integration.

The retrieval evaluator in the original CRAG paper is a fine-tuned T5-large model. CRAG has been shown to significantly improve performance over both standard RAG and Self-RAG by correcting retrieval results that the system judges to be of low quality.

### GraphRAG

GraphRAG, introduced by Microsoft Research in 2024, replaces or augments flat document retrieval with knowledge graph construction. The approach uses an LLM to build a graph index in two stages: first, deriving an entity knowledge graph from source documents, then pregenerating community summaries for groups of closely related entities.

GraphRAG addresses a key weakness of traditional RAG: the inability to "connect the dots" when answering questions that require traversing multiple pieces of information through shared attributes. For global sensemaking questions over datasets in the million-token range, GraphRAG leads to substantial improvements in both comprehensiveness and diversity of generated answers compared to conventional RAG.

### Agentic RAG

Agentic RAG represents the latest evolution, embedding autonomous AI agents into the RAG pipeline. Rather than following a static retrieve-then-generate workflow, agentic RAG systems use planning, reflection, tool use, and multi-agent collaboration to handle complex, multi-step information needs.

Key characteristics of Agentic RAG include:
- Autonomous decision-making about when and what to retrieve
- Iterative retrieval with reflection on retrieved quality
- Tool use for accessing diverse data sources (APIs, databases, web search)
- Multi-agent collaboration where specialized agents handle different aspects of the task
- Verification and fact-checking before delivering responses

A January 2025 survey paper on Agentic RAG formalized the paradigm, and by 2026 it has become increasingly adopted in enterprise settings where complex reasoning and multi-source information synthesis are required.

## RAG vs. Fine-Tuning

RAG and [fine-tuning](/index.php?title=Fine-tuning&action=edit&redlink=1) represent two distinct approaches to customizing LLM behavior and knowledge. Each has clear strengths and limitations, and the choice between them depends on the specific use case.

| Dimension | RAG | Fine-Tuning |
|---|---|---|
| Knowledge source | External data retrieved at inference time | Encoded in model parameters during training |
| Data currency | Can access real-time or frequently updated data | Knowledge is frozen at training time; requires retraining to update |
| Implementation cost | Lower; requires building a retrieval pipeline | Higher; requires curated training data and compute for training |
| Update process | Add or modify documents in the knowledge base | Retrain the model with updated data (can take days and cost thousands of dollars) |
| Source attribution | Naturally supports citations and source references | No inherent source attribution; answers come from internal parameters |
| Domain adaptation | Strong for injecting factual knowledge | Strong for changing model behavior, style, or output format |
| Latency | Higher due to retrieval step | Lower at inference time (no retrieval needed) |
| Data privacy | Data stays in the knowledge base; not baked into model weights | Training data can leak through model outputs |
| Hallucination control | Provides grounding but does not eliminate hallucinations | No built-in grounding mechanism |

**When to use RAG**: Choose RAG when the application requires access to up-to-date or proprietary knowledge, when information changes frequently, when source attribution is important, or when the knowledge base is too large or dynamic to encode in model parameters. Common RAG use cases include question answering over company documents, customer support with current product information, and any task where factual accuracy from a specific data source is essential.

**When to use fine-tuning**: Choose fine-tuning when the goal is to change the model's behavior, style, or output format rather than its factual knowledge. Fine-tuning is ideal for making a model adopt a specific brand personality, output in structured formats like JSON, or master the reasoning patterns of a specialized domain. Fine-tuning can also make smaller models perform comparably to larger ones on specific tasks, reducing inference costs.

**Hybrid approach**: In many enterprise settings, the best results come from combining both techniques. An organization might fine-tune a model to become an expert in medical terminology and diagnostic reasoning, then use RAG to provide the latest medical research or patient records for a specific query. The general recommendation is to start with RAG for immediate value and broad knowledge coverage, then selectively fine-tune for high-volume or performance-critical workflows.

## RAG vs. Long-Context Models

As LLMs have expanded their context windows (from thousands to millions of tokens), a debate has emerged about whether RAG is still necessary or whether simply providing all relevant documents in a long context window is sufficient.

### Arguments for Long-Context Models

- Simpler architecture with no retrieval pipeline to build and maintain
- No risk of retrieval failure (all information is in the context)
- The model can reason across the entire document set holistically
- Long-context models generally outperform RAG in question-answering benchmarks, especially for Wikipedia-based questions

### Arguments for RAG

- Cost efficiency: RAG queries cost roughly $0.00008 on average, compared to $0.10 for long-context processing (approximately 1,250 times cheaper per query)
- Better performance with dynamic or diverse datasets
- Scalability to knowledge bases far exceeding any context window
- Source attribution and traceability
- RAG has advantages in dialogue-based and general question queries

### The Emerging Consensus

Research from 2025 and 2026 suggests that the debate is converging on a hybrid approach. Winning implementations use vector retrieval to identify relevant context, then use long-context windows to reason across that retrieved context. This "RAG-augmented long context" approach outperforms either method alone on both cost and accuracy metrics in most enterprise use case categories studied. As one 2025 review noted, neither RAG nor long-context LLMs are a "silver bullet"; their relative strengths depend on model architecture, task type, data characteristics, and cost constraints.

A key finding from Chroma's context rot research (2025), which tested 18 models including GPT-4.1, Claude 4, and Gemini 2.5, showed that retrieval performance degrades as context length increases. This suggests that even with million-token context windows, targeted retrieval remains valuable for maintaining response quality.

## Applications and Use Cases

RAG has been adopted across a wide range of industries and applications:

### Enterprise Knowledge Management

Organizations use RAG to build internal knowledge assistants that retrieve and synthesize content from company documents, wikis, policies, and databases. Siemens, for example, uses RAG technology in its digital assistance platform, allowing employees to quickly retrieve information from internal documents and databases. These systems help employees find relevant policies, procedures, and documentation without manually searching through large document repositories.

### Customer Support

RAG-powered chatbots handle customer queries by retrieving information from knowledge bases, FAQs, product documentation, and customer records. When a customer asks a question, the system retrieves relevant information and uses a generative model to craft a personalized response. DoorDash, for instance, enhances its delivery support with a RAG-based system that condenses support conversations to identify core issues, searches the knowledge base for relevant articles and past resolved cases, and generates contextually appropriate responses.

### Legal and Compliance

Legal teams use RAG to analyze case law, contracts, and regulatory documents. RAG systems can retrieve relevant precedents, statutes, and regulatory guidance to help lawyers research legal questions. However, studies have shown that even commercial legal RAG tools (such as those from LexisNexis and Thomson Reuters) still hallucinate between 17% and 33% of the time, underscoring the importance of human review.

### Healthcare and Medical Research

Healthcare applications use RAG to ground clinical decision support in medical literature, drug databases, and clinical guidelines. RAG systems can help clinicians access the latest research findings and evidence-based recommendations at the point of care.

### Financial Analysis

Financial analysts use RAG to extract insights from earnings reports, SEC filings, market data, and regulatory documents. The ability to ground responses in specific source documents is particularly valuable in financial contexts where accuracy and auditability are paramount.

### Software Development

Developers use RAG systems to query codebases, API documentation, and internal engineering wikis. [Prompt engineering](/wiki/prompt_engineering) workflows increasingly incorporate RAG to provide LLMs with relevant code context for generation and debugging tasks.

### Education

RAG enables educational AI systems to draw on curated curricula, textbooks, and course materials, providing students with accurate, source-backed answers rather than potentially fabricated information.

## Evaluation and Metrics

Evaluating RAG systems requires assessing both the retrieval and generation components. The RAGAS (Retrieval Augmented Generation Assessment) framework provides a set of metrics specifically designed for this purpose.

### Key Evaluation Metrics

| Metric | What It Measures | Range | Component Evaluated |
|---|---|---|---|
| Faithfulness | How factually consistent the response is with the retrieved context | 0 to 1 | Generation |
| Answer Relevancy | How relevant the generated response is to the original query | 0 to 1 | Generation |
| Answer Correctness | Overall agreement between the generated answer and ground truth | 0 to 1 | End-to-end |
| Context Precision | Whether retrieved documents are ranked in the correct order (most relevant first) | 0 to 1 | Retrieval |
| Context Recall | Whether the retrieved context contains all information needed for the ideal response | 0 to 1 | Retrieval |
| Context Relevancy | How relevant the retrieved context is to the input query | 0 to 1 | Retrieval |

RAGAS metrics offer significant advantages over traditional text generation evaluation methods like BLEU and ROUGE, which measure surface-level text similarity but fail to capture factual accuracy, context relevance, and grounding quality in RAG applications.

### Additional Evaluation Approaches

- **Human evaluation**: Domain experts assess response quality, accuracy, and usefulness
- **LLM-as-judge**: Using a strong LLM to evaluate the quality of generated responses
- **End-to-end benchmarks**: Measuring task-specific performance on standardized datasets
- **Retrieval metrics**: Traditional information retrieval metrics like NDCG (Normalized Discounted Cumulative Gain), MRR (Mean Reciprocal Rank), and recall at K

## Limitations and Challenges

Despite its effectiveness, RAG is not a complete solution to the challenges of LLM-based systems. Several significant limitations persist:

### Persistent Hallucinations

RAG reduces but does not eliminate hallucinations. Even with relevant context retrieved, LLMs can generate information not supported by the retrieved documents, misinterpret the context, or rely on parametric knowledge instead of the provided context. Research has shown that models can get "distracted" by irrelevant content in retrieved documents or simply ignore retrieved information in favor of their internal knowledge. A Stanford study on legal RAG systems found that hallucinations remain "substantial, wide-ranging, and potentially insidious."

### Retrieval Quality Issues

The quality of RAG output is fundamentally bounded by the quality of retrieval. Common retrieval problems include:
- **Low precision**: Retrieved chunks that do not align with the query
- **Low recall**: Failure to retrieve all relevant information
- **Semantic gap**: Difficulty retrieving documents for abstract or reasoning-based queries
- **Stale data**: Knowledge bases that are not kept current
- **Chunking artifacts**: Important information split across chunk boundaries

### Data Quality Dependencies

RAG relies on the accuracy and quality of the underlying knowledge base. Biases, errors, or outdated information in source documents propagate directly to generated responses. In systems where knowledge base content is contributed by humans or collected by sensors, data quality issues are common.

### Multi-Source Conflicts

When RAG systems retrieve information from multiple sources, the inherent diversity in knowledge representations can lead to inconsistencies. Conflicting information across retrieved fragments can compromise response accuracy and create confusion.

### Computational Costs

RAG adds overhead to the inference pipeline: retrieved documents must be stored in memory, vector similarity searches add latency, and the increased context that the model must process requires additional compute. At scale, these costs can be significant.

### Context Window Limitations

Even with large context windows, there are limits to how much retrieved information can be provided to the model. Context compression and selection become important challenges, especially when many relevant documents are retrieved.

### Understanding User Intent

While RAG provides factual grounding, the retrieval step may not fully capture the nuances of user intent. Queries that require reasoning, synthesis across multiple concepts, or understanding of implicit context can lead to retrieval of tangentially related but ultimately unhelpful documents.

## Popular Frameworks

Several frameworks have emerged to simplify the construction of RAG pipelines:

### LangChain

[LangChain](/wiki/langchain) is an open-source framework (MIT license) that excels in orchestrating multi-step AI workflows through its modular architecture. LangChain provides abstractions for document loading, text splitting, embedding, vector storage, retrieval, and LLM interaction. Its companion tools include LangSmith (for monitoring and debugging) and LangGraph (for building stateful, multi-step agent workflows with enhanced control flow). LangChain is widely used for building complex RAG pipelines, conversational agents, and multi-step reasoning applications. In 2025, LangGraph became particularly important for building Agentic RAG systems.

### LlamaIndex

LlamaIndex (formerly GPT Index) focuses specifically on optimizing document indexing and retrieval for LLM applications. It provides powerful data connectors for loading data from diverse sources (APIs, databases, file systems), sophisticated indexing strategies (list, tree, keyword, vector, knowledge graph), and query engines optimized for different retrieval patterns. In 2025, LlamaIndex achieved a 35% improvement in retrieval accuracy, making it a top choice for document-heavy applications. LlamaIndex generally has a gentler learning curve than LangChain for basic RAG applications.

### Haystack

Haystack, developed by deepset, is an open-source framework for building production-ready NLP pipelines. It provides modular components for document stores, retrievers, readers, and generators, with strong support for hybrid search and evaluation. Haystack emphasizes production readiness with features like pipeline serialization, REST API deployment, and monitoring.

### Other Notable Frameworks

| Framework | Developer | Focus |
|---|---|---|
| Semantic Kernel | Microsoft | Enterprise RAG integration with Microsoft ecosystem |
| Verba | Weaviate | RAG applications built on Weaviate vector database |
| RAGFlow | InfiniFlow | Open-source RAG engine with deep document understanding |
| Pathway | Pathway | Real-time RAG with live data synchronization |
| Cognita | TrueFoundry | Modular, production-ready RAG framework |

LangChain and LlamaIndex can be used together: LlamaIndex handles data connection and indexing while LangChain manages the overall application logic and workflow orchestration.

## Explain Like I'm 5 (ELI5)

Imagine you have a really smart friend who knows a lot of things, but sometimes makes stuff up because they are not sure of the answer. RAG is like giving your friend a library card before answering your question. Instead of guessing, your friend first goes to the library, finds the right books about your question, reads the relevant pages, and then gives you an answer based on what they actually found. The answer is much more likely to be correct because it comes from real books, not just memory. That is what RAG does for AI: it lets the AI look things up before answering, so it gives better and more trustworthy answers.

## See Also

- [Large language model](/wiki/large_language_model)
- [Vector database](/wiki/vector_database)
- [Vector embeddings](/wiki/vector_embeddings)
- [Embedding space](/wiki/embedding_space)
- [Transformer](/wiki/transformer)
- [Natural language processing](/wiki/natural_language_processing)
- [LangChain](/wiki/langchain)
- [Prompt engineering](/wiki/prompt_engineering)
- [Hallucination](/wiki/hallucination)
- [Attention](/wiki/attention)
- [Meta AI](/wiki/meta_ai)

## References

1. Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Kuttler, H., Lewis, M., Yih, W., Rocktaschel, T., Riedel, S., & Kiela, D. (2020). "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." *Proceedings of NeurIPS 2020*. [https://arxiv.org/abs/2005.11401](https://arxiv.org/abs/2005.11401)

2. Meta AI Blog. "Retrieval-Augmented Generation: Streamlining the creation of intelligent natural language processing models." [https://ai.meta.com/blog/retrieval-augmented-generation-streamlining-the-creation-of-intelligent-natural-language-processing-models/](https://ai.meta.com/blog/retrieval-augmented-generation-streamlining-the-creation-of-intelligent-natural-language-processing-models/)

3. Guu, K., Lee, K., Tung, Z., Pasupat, P., & Chang, M. (2020). "REALM: Retrieval-Augmented Language Model Pre-Training." *Proceedings of ICML 2020*. [https://arxiv.org/abs/2002.08909](https://arxiv.org/abs/2002.08909)

4. NVIDIA Blog. "What Is Retrieval-Augmented Generation aka RAG." [https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/](https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/)

5. IBM. "What is RAG (Retrieval Augmented Generation)?" [https://www.ibm.com/think/topics/retrieval-augmented-generation](https://www.ibm.com/think/topics/retrieval-augmented-generation)

6. AWS. "What is RAG? Retrieval-Augmented Generation AI Explained." [https://aws.amazon.com/what-is/retrieval-augmented-generation/](https://aws.amazon.com/what-is/retrieval-augmented-generation/)

7. Pinecone. "Retrieval-Augmented Generation (RAG)." [https://www.pinecone.io/learn/retrieval-augmented-generation/](https://www.pinecone.io/learn/retrieval-augmented-generation/)

8. Edge, D. et al. (2024). "From Local to Global: A Graph RAG Approach to Query-Focused Summarization." [https://arxiv.org/abs/2404.16130](https://arxiv.org/abs/2404.16130)

9. Microsoft Research. "GraphRAG: Unlocking LLM discovery on narrative private data." [https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/](https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/)

10. Yan, S., Gu, J., Zhu, Y., & Ling, Z. (2024). "Corrective Retrieval Augmented Generation." [https://arxiv.org/abs/2401.15884](https://arxiv.org/abs/2401.15884)

11. Singh, A. et al. (2025). "Agentic Retrieval-Augmented Generation: A Survey on Agentic RAG." [https://arxiv.org/abs/2501.09136](https://arxiv.org/abs/2501.09136)

12. IBM. "RAG vs. Fine-tuning." [https://www.ibm.com/think/topics/rag-vs-fine-tuning](https://www.ibm.com/think/topics/rag-vs-fine-tuning)

13. Ragas Documentation. "List of available metrics." [https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/](https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/)

14. Li, M., Zhang, Y., et al. (2025). "Long Context vs. RAG for LLMs: An Evaluation and Revisits." [https://arxiv.org/abs/2501.01880](https://arxiv.org/abs/2501.01880)

15. Superlinked VectorHub. "Optimizing RAG with Hybrid Search & Reranking." [https://superlinked.com/vectorhub/articles/optimizing-rag-with-hybrid-search-reranking](https://superlinked.com/vectorhub/articles/optimizing-rag-with-hybrid-search-reranking)

16. Weaviate Blog. "Chunking Strategies for RAG." [https://weaviate.io/blog/chunking-strategies-for-rag](https://weaviate.io/blog/chunking-strategies-for-rag)

17. TechCrunch. "Why RAG won't solve generative AI's hallucination problem." [https://techcrunch.com/2024/05/04/why-rag-wont-solve-generative-ais-hallucination-problem/](https://techcrunch.com/2024/05/04/why-rag-wont-solve-generative-ais-hallucination-problem/)

18. Databricks. "What is Retrieval Augmented Generation (RAG)?" [https://www.databricks.com/blog/what-is-retrieval-augmented-generation](https://www.databricks.com/blog/what-is-retrieval-augmented-generation)

19. Google Cloud. "What is Retrieval-Augmented Generation (RAG)?" [https://cloud.google.com/use-cases/retrieval-augmented-generation](https://cloud.google.com/use-cases/retrieval-augmented-generation)

20. Gao, Y. et al. (2024). "Modular RAG: Transforming RAG Systems into LEGO-like Reconfigurable Frameworks." [https://arxiv.org/html/2407.21059v1](https://arxiv.org/html/2407.21059v1)

21. Pinecone. "Choosing an Embedding Model." [https://www.pinecone.io/learn/series/rag/embedding-models-rundown/](https://www.pinecone.io/learn/series/rag/embedding-models-rundown/)

22. InfiniFlow. "From RAG to Context: A 2025 year-end review of RAG." [https://ragflow.io/blog/rag-review-2025-from-rag-to-context](https://ragflow.io/blog/rag-review-2025-from-rag-to-context)
