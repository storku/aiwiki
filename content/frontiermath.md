---
title: "FrontierMath"
slug: "frontiermath"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Mathematical_Reasoning_Benchmarks"
  - "Research_Mathematics"
  - "2024_Benchmarks"
  - "Epoch_AI"
---**

| FrontierMath |
| --- |
| Overview |
| Full name | FrontierMath: A Benchmark for Evaluating Advanced Mathematical Reasoning in AI |
| Abbreviation | FrontierMath |
| Description | A benchmark of research-level mathematics problems designed to evaluate advanced mathematical reasoning in AI systems |
| Release date | 2024-11 |
| Latest version | 2025-02-28 |
| Benchmark updated | 2025-02 |
| Authors | [Elliot Glazer](/index.php?title=Elliot_Glazer&action=edit&redlink=1), [Ege Erdil](/index.php?title=Ege_Erdil&action=edit&redlink=1), [Tamay Besiroglu](/index.php?title=Tamay_Besiroglu&action=edit&redlink=1), [Diego Chicharro](/index.php?title=Diego_Chicharro&action=edit&redlink=1), [Evan Chen](/index.php?title=Evan_Chen&action=edit&redlink=1), [Alex Gunning](/index.php?title=Alex_Gunning&action=edit&redlink=1), [Caroline Falkman Olsson](/index.php?title=Caroline_Falkman_Olsson&action=edit&redlink=1), [Jean-Stanislas Denain](/index.php?title=Jean-Stanislas_Denain&action=edit&redlink=1), [Anson Ho](/index.php?title=Anson_Ho&action=edit&redlink=1), [Emily de Oliveira Santos](/index.php?title=Emily_de_Oliveira_Santos&action=edit&redlink=1), [Olli Järviniemi](/index.php?title=Olli_J%C3%A4rviniemi&action=edit&redlink=1), [Matthew Wearden](/index.php?title=Matthew_Wearden&action=edit&redlink=1), [Robert Sandler](/index.php?title=Robert_Sandler&action=edit&redlink=1), [Tomáš Gavenčiak](/index.php?title=Tom%C3%A1%C5%A1_Gaven%C4%8Diak&action=edit&redlink=1), [Julian Hazell](/index.php?title=Julian_Hazell&action=edit&redlink=1), [Jaime Sevilla](/index.php?title=Jaime_Sevilla&action=edit&redlink=1) |
| Organization | [Epoch AI](/index.php?title=Epoch_AI&action=edit&redlink=1) |
| Technical Details |
| Type | [Mathematical Reasoning](/index.php?title=Mathematical_Reasoning&action=edit&redlink=1), [Research Mathematics](/index.php?title=Research_Mathematics&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1), [Code](/index.php?title=Code&action=edit&redlink=1) |
| Task format | [Open-ended problem solving with code execution](/index.php?title=Open-ended_problem_solving_with_code_execution&action=edit&redlink=1) |
| Number of tasks | 350 (300 core + 50 Tier 4) |
| Total examples | 350 problems |
| Evaluation metric | [Accuracy](/wiki/accuracy), [Automated verification](/index.php?title=Automated_verification&action=edit&redlink=1) |
| Domains | [Number theory](/index.php?title=Number_theory&action=edit&redlink=1), [Real analysis](/index.php?title=Real_analysis&action=edit&redlink=1), [Algebraic geometry](/index.php?title=Algebraic_geometry&action=edit&redlink=1), [Category theory](/index.php?title=Category_theory&action=edit&redlink=1), [Computational mathematics](/index.php?title=Computational_mathematics&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | ~90% (expert mathematicians with days of effort) |
| Baseline | <2% (most models)
Property "Baseline score" (as page type) with input value "" contains invalid characters or is incomplete and therefore can cause unexpected results during a query or annotation process. |
| SOTA score | ~10% |
| SOTA model | [OpenAI o3](/index.php?title=OpenAI_o3&action=edit&redlink=1) |
| SOTA date | 2025-04 |
| Saturated | No |
| Resources |
| Website | [Official website](https://epoch.ai/frontiermath) |
| Paper | [Paper](https://arxiv.org/abs/2411.04872) |
| Dataset | [Download](https://epoch.ai/frontiermath/benchmark-problems) |
| License | Proprietary (partial public release)

 |

FrontierMath** is an advanced [mathematical reasoning](/index.php?title=Mathematical_reasoning&action=edit&redlink=1) [benchmark](/wiki/benchmark) created by [Epoch AI](/index.php?title=Epoch_AI&action=edit&redlink=1) in collaboration with over 60 expert mathematicians, including [Fields Medalists](/index.php?title=Fields_Medal&action=edit&redlink=1) [Terence Tao](/index.php?title=Terence_Tao&action=edit&redlink=1) and [Timothy Gowers](/index.php?title=Timothy_Gowers&action=edit&redlink=1). Released in November 2024, FrontierMath consists of hundreds of original, research-level mathematics problems designed to evaluate the limits of [artificial intelligence](/wiki/artificial_intelligence) systems' mathematical capabilities. Unlike traditional math benchmarks where AI models achieve high accuracy, FrontierMath problems are so challenging that current state-of-the-art models solve less than 10% of them, revealing a vast gap between AI and human mathematical expertise.

## Overview

FrontierMath addresses a critical challenge in AI evaluation: existing mathematical benchmarks have become saturated, with models achieving 90%+ accuracy on datasets like [GSM8K](/index.php?title=GSM8K&action=edit&redlink=1) and [MATH](/index.php?title=MATH_dataset&action=edit&redlink=1). By introducing problems that require hours or even days for specialist mathematicians to solve, FrontierMath provides a rigorous testbed that will remain challenging for AI systems for years to come[&#91;1&#93;](#cite_note-glazer2024-1).

### Key Features

The benchmark distinguishes itself through several critical features:

| Feature | Description | Impact |
| --- | --- | --- |
| Unpublished Problems | All problems are novel and unpublished | Prevents data contamination |
| Expert Creation | Created by research mathematicians | Ensures genuine difficulty |
| Automated Verification | Solutions can be automatically checked | Enables scalable evaluation |
| "Guessproof" Design | <1% chance of guessing correct answer | Requires true understanding |
| Research-Level Difficulty | Problems from active research areas | Tests frontier capabilities |

## Problem Characteristics

### Difficulty Levels

FrontierMath problems are organized into tiers based on complexity:

| Tier | Level | Typical Solving Time | Required Expertise |
| --- | --- | --- | --- |
| Tier 1 | Undergraduate | Hours | Advanced undergraduate mathematics |
| Tier 2 | Early Graduate | Hours to days | Graduate-level mathematics |
| Tier 3 | Advanced Graduate | Days | PhD-level specialization |
| Tier 4 | Research | Multiple days | Active research mathematician |

### Mathematical Domains

The benchmark spans most major branches of modern mathematics:

| Domain | Description | Example Topics |
| --- | --- | --- |
| [Number Theory](/index.php?title=Number_Theory&action=edit&redlink=1) | Integer properties and relationships | Prime distributions, Diophantine equations |
| [Real Analysis](/index.php?title=Real_Analysis&action=edit&redlink=1) | Continuous mathematics | Measure theory, functional analysis |
| [Algebraic Geometry](/index.php?title=Algebraic_Geometry&action=edit&redlink=1) | Geometric structures from algebra | Varieties, schemes, cohomology |
| [Category Theory](/index.php?title=Category_Theory&action=edit&redlink=1) | Abstract mathematical structures | Functors, natural transformations |
| [Computational Mathematics](/index.php?title=Computational_Mathematics&action=edit&redlink=1) | Algorithmic mathematics | Numerical methods, computational algebra |
| [Combinatorics](/index.php?title=Combinatorics&action=edit&redlink=1) | Discrete structures | Graph theory, enumerative combinatorics |
| [Topology](/index.php?title=Topology&action=edit&redlink=1) | Properties preserved under deformation | Manifolds, homotopy theory |
| [Abstract Algebra](/index.php?title=Abstract_Algebra&action=edit&redlink=1) | Algebraic structures | Groups, rings, fields |

## Problem Creation and Vetting Process

### Creation Pipeline

| Stage | Process | Quality Control |
| --- | --- | --- |
| Problem Design | Expert mathematicians create original problems | Must be novel and unpublished |
| Verification Design | Develop automated checking methods | Ensure computability of answers |
| Peer Review | Review by other expert mathematicians | Check correctness and difficulty |
| Second Review | Random subset reviewed again | Additional validation layer |
| Error Correction | Fix identified issues | ~5% of problems require revision |
| Final Validation | Complete verification testing | Ensure automated checking works |

### Guessproof Design

Each problem is designed to be "guessproof" with:

- Large answer spaces (typically >10^6 possibilities)

- Non-obvious patterns in solutions

- Multiple computational steps required

- Verification that random guessing has <1% success rate

## Evaluation Methodology

### Interactive Environment

Models are evaluated in an interactive Python environment where they can:

| Capability | Description | Purpose |
| --- | --- | --- |
| Code Execution | Write and run Python code | Perform calculations |
| Hypothesis Testing | Test intermediate conjectures | Build toward solution |
| Library Access | Use mathematical libraries | Advanced computations |
| Iterative Problem Solving | Multiple attempts allowed | Mimics human approach |
| Result Verification | Check answers before submission | Self-correction |

### Verification System

Solutions are verified through multiple methods:

| Method | Description | Example |
| --- | --- | --- |
| Exact Matching | Integer or simple answers | "The answer is 42" |
| Computational Verification | Complex mathematical objects | Verify group properties |
| Symbolic Verification | Algebraic expressions | Check polynomial equality |
| Numerical Verification | Floating-point answers | Within specified tolerance |

## Performance Analysis

### AI Model Performance (2025)

| Model | Organization | Accuracy | Test Date | Notes |
| --- | --- | --- | --- | --- |
| [OpenAI o3](/index.php?title=OpenAI_o3&action=edit&redlink=1) (public) | [OpenAI](/wiki/openai) | ~10% | April 2025 | Independent evaluation[&#91;2&#93;](#cite_note-epoch2025-2) |
| [OpenAI o3](/index.php?title=OpenAI_o3&action=edit&redlink=1) (internal) | [OpenAI](/wiki/openai) | ~25% | December 2024 | High compute, internal testing[&#91;3&#93;](#cite_note-openai2024-3) |
| [OpenAI o3-mini](/index.php?title=OpenAI_o3-mini&action=edit&redlink=1) | [OpenAI](/wiki/openai) | 8.9% | 2025 | Medium reasoning setting |
| [DeepSeek R1](/index.php?title=DeepSeek_R1&action=edit&redlink=1) | [DeepSeek](/wiki/deepseek) | 5.2% | 2025 | Open-source leader |
| [Gemini 2.0 Flash Thinking](/index.php?title=Gemini_2.0_Flash_Thinking&action=edit&redlink=1) | [Google](/index.php?title=Google&action=edit&redlink=1) | 2.6% | 2025 | Experimental version |
| [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | [Anthropic](/wiki/anthropic) | <2% | November 2024 | Initial evaluation |
| [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | [OpenAI](/wiki/openai) | <2% | November 2024 | Initial evaluation |
| [o1-preview](/index.php?title=O1-preview&action=edit&redlink=1) | [OpenAI](/wiki/openai) | <2% | November 2024 | Initial evaluation |
| [Gemini 1.5 Pro](/index.php?title=Gemini_1.5_Pro&action=edit&redlink=1) | [Google](/index.php?title=Google&action=edit&redlink=1) | <2% | November 2024 | Initial evaluation |

### Performance Controversy

The discrepancy between OpenAI's claimed 25% and Epoch AI's measured 10% for o3 sparked significant discussion[&#91;4&#93;](#cite_note-techcrunch2025-4):

| Factor | OpenAI Testing | Epoch AI Testing |
| --- | --- | --- |
| Compute Resources | "Aggressive test-time compute" | Standard compute limits |
| Problem Set | 180 problems (Nov 2024 version) | 290 problems (Feb 2025 version) |
| Scaffolding | Internal advanced scaffold | Public API scaffold |
| Model Version | Pre-release internal version | Public release version |

### Human Performance Comparison

| Population | Estimated Success Rate | Time Required | Notes |
| --- | --- | --- | --- |
| Research Mathematicians | ~90% | Hours to days | With appropriate specialization |
| PhD Students (Mathematics) | ~50-70% | Days to weeks | Depending on area |
| Graduate Students | ~20-40% | Weeks | Early graduate level |
| Undergraduate Math Majors | <10% | Not feasible | Beyond typical curriculum |

## Notable Contributors

### Fields Medalists

| Name | Fields Medal Year | Contribution |
| --- | --- | --- |
| [Terence Tao](/index.php?title=Terence_Tao&action=edit&redlink=1) | 2006 | Problem creation and review |
| [Timothy Gowers](/index.php?title=Timothy_Gowers&action=edit&redlink=1) | 1998 | Problem creation and review |
| [Richard Borcherds](/index.php?title=Richard_Borcherds&action=edit&redlink=1) | 1998 | Problem creation and review |

### Institutional Participation

Over 60 mathematicians from leading institutions contributed, including:

- [MIT](/index.php?title=Massachusetts_Institute_of_Technology&action=edit&redlink=1)

- [Harvard University](/index.php?title=Harvard_University&action=edit&redlink=1)

- [Princeton University](/index.php?title=Princeton_University&action=edit&redlink=1)

- [Stanford University](/index.php?title=Stanford_University&action=edit&redlink=1)

- [Cambridge University](/index.php?title=Cambridge_University&action=edit&redlink=1)

- [Oxford University](/index.php?title=Oxford_University&action=edit&redlink=1)

- [Institute for Advanced Study](/index.php?title=Institute_for_Advanced_Study&action=edit&redlink=1)

Notable contributors also include [Evan Chen](/index.php?title=Evan_Chen&action=edit&redlink=1), a renowned mathematics educator and [IMO](/index.php?title=International_Mathematical_Olympiad&action=edit&redlink=1) coach.

## Sample Problems

### Problem Categories

While most problems remain private to prevent contamination, Epoch AI has released sample problems demonstrating the benchmark's difficulty:

| Category | Difficulty | Description |
| --- | --- | --- |
| Number Theory | Tier 2 | Find special prime distributions |
| Real Analysis | Tier 3 | Prove convergence properties |
| Algebraic Geometry | Tier 4 | Compute invariants of varieties |
| Combinatorics | Tier 2 | Count complex structures |

## Comparison with Other Benchmarks

### Difficulty Scaling

| Benchmark | AI Performance | Human Performance | Typical Problem Time |
| --- | --- | --- | --- |
| [GSM8K](/index.php?title=GSM8K&action=edit&redlink=1) | >95% | ~100% | Minutes |
| [MATH](/index.php?title=MATH_dataset&action=edit&redlink=1) | >90% | ~40% (grad students) | 30 minutes |
| [AIME](/wiki/aime) | ~70-90% | ~50% (competitors) | Hours |
| **FrontierMath** | <10% | ~90% (experts) | Hours to days |
| [Millennium Problems](/index.php?title=Millennium_Problems&action=edit&redlink=1) | 0% | 0% (1 solved) | Years to decades |

### Unique Characteristics

| Feature | FrontierMath | Other Math Benchmarks |
| --- | --- | --- |
| Problem Source | Original, unpublished | Often from textbooks/competitions |
| Verification | Fully automated | Often requires human checking |
| Contamination Risk | Minimal (private problems) | High (public problems) |
| Difficulty Range | Research-level | K-12 to undergraduate |
| Required Time | Hours to days | Minutes to hours |

## Implementation and Access

### Usage Framework

```python

1. Example evaluation setup (conceptual)

class FrontierMathEvaluator:

   def evaluate_model(self, model, problem):
       # Model gets interactive Python environment
       environment = PythonEnvironment()
       
       # Multiple attempts allowed
       max_attempts = 10
       for attempt in range(max_attempts):
           # Model can write and execute code
           code = model.generate_code(problem, environment.state)
           result = environment.execute(code)
           
           # Model can verify its answer
           if model.verify_answer(result, problem):
               return self.check_solution(result, problem.answer)
       
       return False

```

### Access Information

| Access Level | Description | Requirements |
| --- | --- | --- |
| Public Samples | Small set of example problems | Free access via website |
| Research Access | Full benchmark evaluation | Contact math_evals@epoch.ai |
| Commercial Evaluation | Model testing service | Partnership with Epoch AI |
| Problem Contribution | Submit new problems | Expert mathematician credentials |

## Funding and Development

### Funding Sources

The development of FrontierMath was supported by:

- [OpenAI](/wiki/openai) (funding disclosed December 2024)[&#91;5&#93;](#cite_note-fortune2025-5)

- Additional academic and industry partners

This funding relationship became controversial when it was revealed that OpenAI had requested Epoch AI not to disclose the funding until o3's announcement.

### Ongoing Development

| Initiative | Description | Timeline |
| --- | --- | --- |
| Problem Expansion | Adding new problems quarterly | Ongoing |
| Domain Coverage | Expanding to new mathematical areas | 2025-2026 |
| Difficulty Calibration | Refining tier classifications | Continuous |
| Verification Methods | Improving automated checking | Ongoing |

## Impact and Significance

### Research Impact

FrontierMath has influenced AI research in several ways:

| Area | Impact | Description |
| --- | --- | --- |
| Benchmark Design | Raised standards | Showed need for harder benchmarks |
| Mathematical AI | Revealed limitations | Demonstrated gaps in reasoning |
| Evaluation Methods | Improved rigor | Automated verification standards |
| Data Contamination | Increased awareness | Importance of private test sets |

### Future Implications

1. **AGI Progress Tracking**: Provides long-term milestone for AGI development
2. **Research Direction**: Guides focus toward mathematical reasoning
3. **Capability Assessment**: Clear metric for advanced reasoning
4. **Safety Research**: Understanding AI limitations in complex domains

## Limitations and Criticisms

### Current Limitations

| Limitation | Description | Mitigation Efforts |
| --- | --- | --- |
| Limited Access | Most problems remain private | Necessary for integrity |
| Narrow Focus | Only tests mathematical reasoning | Complements other benchmarks |
| Computational Requirements | Some problems need significant compute | Varied difficulty levels |
| English Only | Problems in English only | Future multilingual plans |

### Criticisms and Controversies

1. **Funding Transparency**: Initial non-disclosure of OpenAI funding
2. **Performance Claims**: Discrepancies in reported o3 scores
3. **Access Restrictions**: Limited availability for researchers
4. **Problem Selection**: Questions about problem representativeness

## Future Directions

### Planned Enhancements

| Enhancement | Description | Expected Timeline |
| --- | --- | --- |
| Dynamic Problem Generation | AI-generated problems meeting criteria | 2026 |
| Multi-modal Problems | Including diagrams and visualizations | 2025-2026 |
| Collaborative Problem Solving | Multi-agent evaluation | 2026 |
| Proof Verification | Checking mathematical proofs | 2025 |

## Significance

FrontierMath represents a paradigm shift in AI mathematical evaluation. By creating problems that challenge even expert mathematicians, it provides a benchmark that will remain relevant for years as AI capabilities advance. The vast performance gap between current AI systems (<10%) and human experts (~90%) illustrates both how far AI has come and how far it still needs to go to match human mathematical reasoning.

The benchmark's resistance to simple scaling solutions and requirement for deep mathematical understanding make it a crucial tool for measuring progress toward [AGI](/wiki/artificial_general_intelligence). As models improve on FrontierMath, we can be confident they are developing genuine mathematical reasoning capabilities rather than merely pattern matching or memorizing solutions.

## See Also

- [Mathematical Reasoning](/index.php?title=Mathematical_Reasoning&action=edit&redlink=1)

- [MATH Dataset](/index.php?title=MATH_Dataset&action=edit&redlink=1)

- [AI Benchmarks](/index.php?title=AI_Benchmarks&action=edit&redlink=1)

- [Epoch AI](/index.php?title=Epoch_AI&action=edit&redlink=1)

- [OpenAI o3](/index.php?title=OpenAI_o3&action=edit&redlink=1)

- [Research Mathematics](/index.php?title=Research_Mathematics&action=edit&redlink=1)

- [Automated Theorem Proving](/index.php?title=Automated_Theorem_Proving&action=edit&redlink=1)

- [Fields Medal](/index.php?title=Fields_Medal&action=edit&redlink=1)

## References

1. [↑](#cite_ref-glazer2024_1-0) Glazer, E., Erdil, E., Besiroglu, T., et al. (2024). "FrontierMath: A Benchmark for Evaluating Advanced Mathematical Reasoning in AI". arXiv:2411.04872. Retrieved from [https://arxiv.org/abs/2411.04872](https://arxiv.org/abs/2411.04872)

2. [↑](#cite_ref-epoch2025_2-0) Epoch AI. (2025). "FrontierMath Evaluation Results". Retrieved from [https://epoch.ai/frontiermath](https://epoch.ai/frontiermath)

3. [↑](#cite_ref-openai2024_3-0) OpenAI. (2024). "o3 Announcement". December 20, 2024 Cite error: Invalid `<ref>` tag; name "openai2024" defined multiple times with different content

4. [↑](#cite_ref-techcrunch2025_4-0) TechCrunch. (2025). "OpenAI's o3 AI model scores lower on a benchmark than the company initially implied". April 20, 2025 Cite error: Invalid `<ref>` tag; name "techcrunch2025" defined multiple times with different content

5. [↑](#cite_ref-fortune2025_5-0) Fortune. (2025). "OpenAI's critics seize on math benchmarking scandal". January 21, 2025 Cite error: Invalid `<ref>` tag; name "fortune2025" defined multiple times with different content

Cite error: `<ref>` tag with name "lesswrong2025" defined in `<references>` is not used in prior text.