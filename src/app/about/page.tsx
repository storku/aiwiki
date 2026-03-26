import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AI Wiki, the free encyclopedia of artificial intelligence with 2,000+ articles covering AI concepts, models, tools, and applications.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 animate-fade-in-up">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">
        About AI Wiki
      </h1>

      <div className="prose-custom space-y-6 text-[15px] leading-relaxed text-muted">
        <p>
          AI Wiki is a free, open-access encyclopedia dedicated to artificial
          intelligence. With over 2,000 articles, it covers everything from
          foundational concepts like machine learning and neural networks to the
          latest AI products, companies, and research breakthroughs.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          Our Mission
        </h2>
        <p>
          Artificial intelligence is transforming every industry, yet reliable
          and accessible information about AI remains scattered across the web.
          AI Wiki exists to bring that knowledge together in one place. Our goal
          is to make AI understandable for everyone, whether you are a
          researcher, engineer, student, or simply curious about how these
          technologies work.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          What You Will Find
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">Core Concepts:</strong> In-depth
            explanations of machine learning, deep learning, natural language
            processing, computer vision, reinforcement learning, and more.
          </li>
          <li>
            <strong className="text-foreground">AI Models and Products:</strong>{" "}
            Detailed articles on models like GPT-4, Claude, DALL-E, Stable
            Diffusion, Midjourney, and other widely used AI systems.
          </li>
          <li>
            <strong className="text-foreground">Companies and Research Labs:</strong>{" "}
            Profiles of organizations shaping the field, including OpenAI,
            Anthropic, Google DeepMind, Meta AI, and many others.
          </li>
          <li>
            <strong className="text-foreground">Tools and Frameworks:</strong>{" "}
            Guides to popular AI libraries, platforms, and developer tools such
            as PyTorch, TensorFlow, Hugging Face, and LangChain.
          </li>
          <li>
            <strong className="text-foreground">History and Ethics:</strong>{" "}
            Articles on the history of AI, key milestones, AI safety, bias,
            fairness, and the societal impact of intelligent systems.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          How It Works
        </h2>
        <p>
          Every article on AI Wiki is written to be accurate, detailed, and
          easy to understand. Content is continuously reviewed and updated to
          reflect the fast-moving pace of AI research and development. Articles
          include internal cross-references so you can easily explore related
          topics, and citations so you can verify claims against original
          sources.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          Contact
        </h2>
        <p>
          Have a question, suggestion, or correction? We would love to hear from
          you. Reach out at{" "}
          <a
            href="mailto:contact@aiwiki.ai"
            className="text-primary hover:underline"
          >
            contact@aiwiki.ai
          </a>
          .
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <Link
          href="/"
          className="text-sm text-primary hover:underline font-medium"
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
