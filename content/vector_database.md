---
title: "Vector database"
slug: "vector_database"
categories:
  - "Terms"
  - "Artificial_intelligence_terms"
---*See also: [AI terms](/wiki/ai_terms)*

## Explain Vector database Like I'm 5 (ELI5)

A vector database is a special kind of computer storage that helps find things that are similar, like finding pictures that look like a cat or finding songs that sound happy. It's really good at helping computers understand what things mean, even if they are in different forms like words, pictures, or sounds.

Vector databases help big computer brains called "large language models" remember things for a long time, so they can give better answers when you ask them questions. They can also help find things that are similar or different, which is useful for things like shopping websites and spotting unusual activities.

These databases are like magic boxes that can find what you're looking for really fast, even when you have lots and lots of things inside.

## Introduction

A vector database is a type of [database](/index.php?title=Database&action=edit&redlink=1) specifically designed for storing and querying [high-dimensional vector data](/index.php?title=High-dimensional_vector_data&action=edit&redlink=1), which is often used in [artificial intelligence applications](/wiki/artificial_intelligence_applications) ([AI](/wiki/ai) [apps](/index.php?title=Apps&action=edit&redlink=1)). Complex data, including unstructured forms like documents, images, videos, and plain text, is growing rapidly. Traditional databases designed for structured data struggle to store and analyze complex data effectively, often requiring extensive keyword and metadata classification. Vector databases address this issue by transforming complex data into [vector embeddings](/wiki/vector_embeddings), which describe data objects in numerous dimensions. These databases are gaining popularity due to their ability to extend [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) ([LLMs](/wiki/llms)) with [long-term memory](/index.php?title=Long-term_memory&action=edit&redlink=1) and provide efficient [querying](/index.php?title=Querying&action=edit&redlink=1) for [AI-driven applications](/wiki/artificial_intelligence_applications).

## What is a Vector Database?

In a [relational database](/index.php?title=Relational_database&action=edit&redlink=1), data is organized in rows and columns, while in a [document database](/index.php?title=Document_database&action=edit&redlink=1), it is organized in documents and collections. In contrast, a vector database stores arrays of numbers clustered based on [similarity](/index.php?title=Similarity&action=edit&redlink=1). These databases can be queried with [ultra-low latency](/index.php?title=Ultra-low_latency&action=edit&redlink=1), making them ideal for AI-driven applications.

A vector database is a type of database that indexes and stores [vector embeddings](/wiki/vector_embedding) for efficient [retrieval](/index.php?title=Retrieval&action=edit&redlink=1) and [similarity search](/index.php?title=Similarity_search&action=edit&redlink=1). In addition to traditional [CRUD](/index.php?title=CRUD&action=edit&redlink=1) (create, read, update, and delete) operations and metadata filtering, vector databases enable the organization and comparison of any vector to one another or to the vector of a search query. This capability allows vector databases to excel at similarity search or [vector search](/index.php?title=Vector_search&action=edit&redlink=1), providing more comprehensive search results that would not be possible with traditional search technology.

## Vector Database Products

Several vector databases have emerged to cater to the growing demand for AI applications. Some of the popular native vector databases include open-source options like **[Weaviate](/index.php?title=Weaviate&action=edit&redlink=1)** and **[Milvus](/index.php?title=Milvus&action=edit&redlink=1)**, both written in Go. **[Pinecone](/index.php?title=Pinecone&action=edit&redlink=1)** is another popular vector database, although it is not open source. **[Chroma](/index.php?title=Chroma&action=edit&redlink=1)**, based on Clickhouse, is an open-source project with a growing following. Relational databases like [Postgres](/index.php?title=Postgres&action=edit&redlink=1) have tools like [pgVector](/index.php?title=PgVector&action=edit&redlink=1), and [Redis](/index.php?title=Redis&action=edit&redlink=1) has first-class vector support to accommodate this type of functionality.

## Using Vector Databases with Large Language Models

One of the primary reasons for the increasing popularity of vector databases is their ability to extend large language models (LLMs) with [long-term memory](/index.php?title=Long-term_memory&action=edit&redlink=1). By providing a general-purpose model, such as [OpenAI](/wiki/openai)'s [GPT-4](/wiki/gpt-4), [Meta](/wiki/meta)'s [LLaMA](/wiki/llama), or [Google](/index.php?title=Google&action=edit&redlink=1)'s [LaMDA](/wiki/lamda), users can store their own data in a vector database. When [prompted](/wiki/prompt), the database can query relevant documents to update the context, customizing the final response and providing the AI with long-term memory.

In addition, vector databases can integrate with tools like [LangChain](/wiki/langchain), which combine multiple LLMs together for more advanced applications.

## Why Use a Vector Database?

### Semantic search

Unlike [lexical search](/index.php?title=Lexical_search&action=edit&redlink=1), which relies on exact word or string matches, [semantic search](/index.php?title=Semantic_search&action=edit&redlink=1) uses the meaning and context of a search query or question. Vector databases use [Natural Language Processing](/wiki/natural_language_processing) [models](/wiki/models) to store and index vector embeddings, allowing for more accurate and relevant search results.

### Similarity search for unstructured data

Vector databases facilitate the search and retrieval of unstructured data like [images](/index.php?title=Images&action=edit&redlink=1), [audio](/wiki/audio), [video](/index.php?title=Video&action=edit&redlink=1), and [JSON](/index.php?title=JSON&action=edit&redlink=1), which can be challenging to classify and store in traditional databases.

### Ranking and recommendation engines

By finding similar items based on nearest matches, vector databases are suitable for powering [ranking](/index.php?title=Ranking_engines&action=edit&redlink=1) and [recommendation engines](/index.php?title=Recommendation_engines&action=edit&redlink=1) for online retailers and streaming media services.

### Deduplication and record matching

Vector similarity search can be used to find near-duplicate records for applications such as removing duplicate items from a catalog.

### Anomaly detection

Vector databases can identify [anomalies](/index.php?title=Anomalies&action=edit&redlink=1) in applications used for threat assessment, fraud detection, and IT operations by finding objects that are distant or dissimilar from expected results.

## Features a Vector Database

### Vector Indexes for Search and Retrieval

Vector databases employ algorithms to [index](/index.php?title=Index_vectors&action=edit&redlink=1) and [retrieve vectors](/index.php?title=Retrieve_vectors&action=edit&redlink=1) efficiently. Accuracy, latency, or memory usage may need to be prioritized depending on specific use cases. [Common similarity](/index.php?title=Common_similarity&action=edit&redlink=1) and [distance metrics](/index.php?title=Distance_metrics&action=edit&redlink=1) used in [vector indexes](/index.php?title=Vector_index&action=edit&redlink=1) are [Euclidean distance](/index.php?title=Euclidean_distance&action=edit&redlink=1), [cosine similarity](/index.php?title=Cosine_similarity&action=edit&redlink=1), and [dot products](/index.php?title=Dot_product&action=edit&redlink=1).

[Approximate Nearest Neighbor](/index.php?title=Approximate_Nearest_Neighbor&action=edit&redlink=1) ([ANN](/wiki/ann)) search is a popular technique to balance precision and performance. ANN algorithms, such as [HNSW](/index.php?title=HNSW&action=edit&redlink=1), [IVF](/index.php?title=IVF&action=edit&redlink=1), or [PQ](/index.php?title=PQ&action=edit&redlink=1), focus on improving specific performance properties like memory reduction or fast and accurate search times. [Composite indexes](/index.php?title=Composite_index&action=edit&redlink=1) combine several components and are often used to achieve optimal performance for a given use case.

Building an effective index without a vector database can be challenging and may require a team of experienced engineers with expertise in [indexing](/index.php?title=Index_algorithm&action=edit&redlink=1) and [retrieval algorithms](/index.php?title=Retrieval_algorithm&action=edit&redlink=1).

### Single-Stage Filtering

[Single-stage filtering](/index.php?title=Single-stage_filtering&action=edit&redlink=1) is essential for effective vector databases, as it enables users to limit search results based on [vector metadata](/index.php?title=Vector_metadata&action=edit&redlink=1). It combines the accuracy of [pre-filtering](/index.php?title=Pre-filtering&action=edit&redlink=1) with the speed of [post-filtering](/index.php?title=Post-filtering&action=edit&redlink=1), merging [vector](/index.php?title=Vector_index&action=edit&redlink=1) and [metadata indexes](/index.php?title=Metadata_index&action=edit&redlink=1) into a single index for optimal performance.

### Data Sharding

Scaling is critical for vector databases to handle large volumes of data. [Data sharding](/index.php?title=Data_sharding&action=edit&redlink=1) allows the database to divide vectors into shards and replicas across multiple machines, providing scalable and cost-effective performance. When searching, the database queries each shard and combines the results to determine the best match. This can be achieved using Kubernetes, with each shard assigned its own pod containing CPU and RAM resources.

### Replication

[Replication](/index.php?title=Replication&action=edit&redlink=1) is necessary for vector databases to handle multiple requests simultaneously or in rapid succession. By replicating the set of [pods](/index.php?title=Pods&action=edit&redlink=1), more requests can be processed in parallel. Replicas also improve availability, as they can be spread across different availability zones provided by cloud providers, ensuring high availability even when machines fail.

### Hybrid Storage

[Hybrid storage](/index.php?title=Hybrid_storage&action=edit&redlink=1) configurations store a compressed vector index in memory (RAM) and the original, full-resolution vector index on disk. This approach reduces infrastructure costs while maintaining fast and accurate search results. Hybrid storage increases storage capacity without negatively impacting database performance.

### API

[APIs](/index.php?title=APIs&action=edit&redlink=1) enable developers to use and manage vector databases from other applications, offloading the burden of building and maintaining vector search capabilities. [REST APIs](/index.php?title=REST_API&action=edit&redlink=1) allow vector databases to be accessed from any environment capable of making HTTPS calls, while direct access can be provided through clients using languages like [Python](/index.php?title=Python&action=edit&redlink=1), [Java](/index.php?title=Java&action=edit&redlink=1), and [Go](/index.php?title=Go&action=edit&redlink=1).