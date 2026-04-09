#!/usr/bin/env node

/**
 * For each of the 22 "unfixable" topics, find every slug in the pages table
 * that contains any of the topic's keywords, so we can see if an existing
 * page already covers the topic under a different slug.
 *
 * Usage: node --env-file=.env.local scripts/check-alias-slugs.mjs
 */

import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

const allRows = await sql`SELECT slug, title FROM pages ORDER BY slug`;
const all = allRows.map((r) => ({ slug: r.slug, title: r.title }));
console.log(`Loaded ${all.length} pages\n`);

// Topic candidates: each entry is [target_slug, [keywords to search slugs for]]
// Keywords are case-insensitive substring matches against slugs.
const topics = [
  ["vae", ["vae", "variational", "autoencoder"]],
  ["bias_variance", ["bias_variance", "bias-variance", "biasvariance"]],
  ["ner", ["ner", "named_entity", "namedentity"]],
  ["dim_reduction", ["dim_reduction", "dimensionality", "pca", "principal_component", "svd", "tsne", "t_sne", "umap"]],
  ["time_series", ["time_series", "timeseries", "arima", "forecasting"]],
  ["vector_db", ["vector_db", "vector_database", "vectordb", "pinecone", "weaviate", "chroma", "qdrant", "milvus", "faiss"]],
  ["bleu", ["bleu"]],
  ["rouge", ["rouge"]],
  ["coco", ["coco", "ms_coco", "common_objects"]],
  ["seq2seq", ["seq2seq", "sequence_to_sequence", "encoder_decoder"]],
  ["dalle", ["dalle", "dall_e", "dall-e"]],
  ["gamma", ["gamma", "discount_factor"]],
  ["sampling", ["sampling"]],
  ["qa", ["qa", "question_answering"]],
  ["cross_validation", ["cross_validation", "cross-validation", "crossvalidation", "k_fold", "kfold"]],
  ["semi_supervised", ["semi_supervised", "semisupervised", "semi-supervised"]],
  ["llama3", ["llama3", "llama_3", "llama-3"]],
  ["bpe", ["bpe", "byte_pair", "subword", "sentencepiece", "wordpiece"]],
  ["dino", ["dino"]],
  ["kaplan_scaling", ["kaplan", "scaling_law"]],
  ["chinchilla", ["chinchilla"]],
  ["vanishing_gradient", ["vanishing_gradient", "vanishinggradient", "exploding_gradient"]],
];

for (const [target, keywords] of topics) {
  const matches = all.filter((p) => {
    const slug = p.slug.toLowerCase();
    return keywords.some((k) => slug.includes(k.toLowerCase()));
  });
  console.log(`\n=== ${target} ===`);
  if (matches.length === 0) {
    console.log("  (no matches)");
  } else {
    for (const m of matches.slice(0, 12)) {
      console.log(`  ${m.slug.padEnd(50)}  ${m.title}`);
    }
    if (matches.length > 12) {
      console.log(`  ... and ${matches.length - 12} more`);
    }
  }
}
