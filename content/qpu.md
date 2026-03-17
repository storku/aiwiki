---
title: "QPU"
slug: "qpu"
categories:
  - "Quantum_computing"
  - "Computer_hardware"
  - "Emerging_technologies"
  - "Quantum_information_science"
---[Template:Infobox computing device](/index.php?title=Template:Infobox_computing_device&action=edit&redlink=1)

[*](/wiki/file_qpu1_jpg)

A **Quantum Processing Unit** (**QPU**), also known as a **quantum processor**, is the core hardware component of a [quantum computer](/index.php?title=Quantum_computer&action=edit&redlink=1) that manipulates [qubits](/index.php?title=Qubit&action=edit&redlink=1) using the principles of [quantum mechanics](/index.php?title=Quantum_mechanics&action=edit&redlink=1) to perform computations that are intractable for classical processors.[&#91;1&#93;](#cite_note-IBM2025-1)[&#91;2&#93;](#cite_note-NVIDIA2022-2) Unlike classical [CPUs](/index.php?title=Central_Processing_Unit&action=edit&redlink=1) that process [bits](/index.php?title=Bit&action=edit&redlink=1) in binary states (0 or 1), QPUs leverage quantum phenomena such as [superposition](/index.php?title=Quantum_superposition&action=edit&redlink=1) and [entanglement](/index.php?title=Quantum_entanglement&action=edit&redlink=1) to process qubits that can exist in multiple states simultaneously, enabling exponential scaling of computational power for specific problems.[&#91;3&#93;](#cite_note-Quera2025-3)

QPUs are designed to solve complex problems in [cryptography](/index.php?title=Cryptography&action=edit&redlink=1), [molecular simulation](/index.php?title=Quantum_simulation&action=edit&redlink=1), [optimization](/index.php?title=Optimization&action=edit&redlink=1), and [machine learning](/index.php?title=Quantum_machine_learning&action=edit&redlink=1) that would require impractical amounts of time on even the most powerful [supercomputers](/index.php?title=Supercomputer&action=edit&redlink=1).[&#91;4&#93;](#cite_note-Nature2019-4)[&#91;5&#93;](#cite_note-Wired2017-5) As of 2025, the field has achieved critical breakthroughs including [Google](/index.php?title=Google&action=edit&redlink=1)'s demonstration of below-threshold [quantum error correction](/index.php?title=Quantum_error_correction&action=edit&redlink=1) with their Willow processor and [IBM](/index.php?title=IBM&action=edit&redlink=1)'s roadmap to 200 error-corrected logical qubits by 2029.[&#91;6&#93;](#cite_note-Google2024-6)[&#91;7&#93;](#cite_note-IBM2024-7)

## Overview

The QPU represents the quantum analog to the classical [CPU](/index.php?title=Central_Processing_Unit&action=edit&redlink=1), serving as the computational heart of quantum computers. However, this analogy can be misleading—QPUs are more accurately described as specialized co-processors similar to [GPUs](/index.php?title=Graphics_Processing_Unit&action=edit&redlink=1) or [TPUs](/index.php?title=Tensor_Processing_Unit&action=edit&redlink=1), designed to accelerate specific computational tasks rather than serve as general-purpose processors.[&#91;8&#93;](#cite_note-BuiltIn2024-8)

A QPU operates by manipulating qubits through [quantum logic gates](/index.php?title=Quantum_logic_gate&action=edit&redlink=1) and interactions, forming [quantum circuits](/index.php?title=Quantum_circuit&action=edit&redlink=1) analogous to classical logic circuits. While classical processors execute operations sequentially or in limited parallelism, QPUs can explore an exponentially large computational space simultaneously—N qubits can represent 2^N states at once, compared to N bits representing only one of 2^N possible states.[&#91;9&#93;](#cite_note-Nielsen2000-9)

Modern quantum computers integrate the QPU within complex systems including:

- **Quantum chip**: Physical substrate containing qubits and control elements

- **Control electronics**: Generates precisely timed microwave or laser pulses

- **Cryogenic systems**: [Dilution refrigerators](/index.php?title=Dilution_refrigerator&action=edit&redlink=1) maintaining temperatures near [absolute zero](/index.php?title=Absolute_zero&action=edit&redlink=1) (10-15 millikelvin) for superconducting QPUs

- **Classical processors**: Handle compilation, error correction, and result processing

- **Shielding**: Electromagnetic and vibrational isolation protecting fragile quantum states[&#91;2&#93;](#cite_note-NVIDIA2022-2)[&#91;10&#93;](#cite_note-NAS2019-10)

## History

### Theoretical Foundations (1980-1985)

The theoretical foundations of quantum computing emerged in the early 1980s. [Paul Benioff](/index.php?title=Paul_Benioff&action=edit&redlink=1) proposed quantum mechanical models of computation in 1980, describing a quantum mechanical Turing machine.[&#91;11&#93;](#cite_note-Benioff1980-11) [Richard Feynman](/index.php?title=Richard_Feynman&action=edit&redlink=1) formalized the concept in his 1981 MIT keynote "Simulating Physics with Computers," arguing that quantum computers would be necessary to efficiently simulate quantum systems, and published these ideas in 1982.[&#91;12&#93;](#cite_note-Feynman1982-12) [David Deutsch](/index.php?title=David_Deutsch&action=edit&redlink=1) provided the theoretical framework for universal quantum computers in 1985, establishing that quantum systems could efficiently simulate any physical process.[&#91;13&#93;](#cite_note-Deutsch1985-13)

### Early Implementations (1990s)

The 1990s transformed quantum computing from theoretical concept to experimental reality:

- **1994**: [Peter Shor](/index.php?title=Peter_Shor&action=edit&redlink=1) developed [Shor's algorithm](/index.php?title=Shor%27s_algorithm&action=edit&redlink=1) for integer factorization, demonstrating exponential quantum speedup for breaking [RSA encryption](/index.php?title=RSA_encryption&action=edit&redlink=1)[&#91;14&#93;](#cite_note-Shor1994-14)

- **1995**: Dave Wineland and Christopher Monroe demonstrated the first two-qubit quantum circuit at [NIST](/index.php?title=NIST&action=edit&redlink=1)[&#91;15&#93;](#cite_note-Monroe1995-15)

- **1996**: [Lov Grover](/index.php?title=Lov_Grover&action=edit&redlink=1) developed [Grover's algorithm](/index.php?title=Grover%27s_algorithm&action=edit&redlink=1) providing quadratic speedup for unstructured search[&#91;16&#93;](#cite_note-Grover1996-16)

- **1998**: IBM researchers executed Grover's algorithm on a 2-qubit [NMR quantum computer](/index.php?title=Nuclear_magnetic_resonance_quantum_computer&action=edit&redlink=1)[&#91;17&#93;](#cite_note-InsiderHistory-17)

- **1999**: [NEC](/index.php?title=NEC&action=edit&redlink=1) demonstrated superconducting qubits using [Josephson junctions](/index.php?title=Josephson_junction&action=edit&redlink=1), establishing the foundation for modern superconducting QPUs[&#91;18&#93;](#cite_note-Nakamura1999-18)

### Commercial Development (2000s-2010s)

| Year | Company/Institution | Achievement | Significance |
| --- | --- | --- | --- |
| 2007 | [D-Wave Systems](/index.php?title=D-Wave_Systems&action=edit&redlink=1) | 28-qubit quantum annealer demonstration | First commercial quantum computing company |
| 2011 | D-Wave Systems | **D-Wave One** (128 qubits) | First commercial QPU sold to [Lockheed Martin](/index.php?title=Lockheed_Martin&action=edit&redlink=1) for ~$10 million[&#91;19&#93;](#cite_note-PhysOrg2011-19) |
| 2013 | Google/NASA | D-Wave Two (512 qubits) | Established Quantum AI Lab |
| 2016 | IBM | 5-qubit cloud access | First public cloud quantum computing service |
| 2017 | IBM/Intel | ~50-qubit processors | Approaching quantum supremacy threshold |
| 2019 | Google | **Sycamore** (53 qubits) | Claimed [quantum supremacy](/index.php?title=Quantum_supremacy&action=edit&redlink=1) - 200 seconds vs 10,000 years classical[&#91;4&#93;](#cite_note-Nature2019-4) |

### Modern Era (2020s)

The 2020s have witnessed rapid acceleration in QPU development:

- **2021**: IBM's Eagle processor achieved 127 qubits, surpassing 100-qubit barrier[&#91;20&#93;](#cite_note-IBM2021-20)

- **2022**: IBM Osprey reached 433 qubits; [Xanadu](/index.php?title=Xanadu&action=edit&redlink=1) demonstrated photonic quantum advantage with Borealis[&#91;21&#93;](#cite_note-Reuters2022-21)

- **2023**: IBM Condor achieved 1,121 qubits; [Atom Computing](/index.php?title=Atom_Computing&action=edit&redlink=1) demonstrated 1,180 neutral atom qubits[&#91;22&#93;](#cite_note-IBM2023-22)[&#91;23&#93;](#cite_note-AtomComputing2023-23)

- **2024**: Google's Willow achieved below-threshold error correction; [Quantinuum](/index.php?title=Quantinuum&action=edit&redlink=1) reached 99.914% two-qubit fidelity[&#91;6&#93;](#cite_note-Google2024-6)[&#91;24&#93;](#cite_note-Quantinuum2024-24)

- **2025**: [Microsoft](/index.php?title=Microsoft&action=edit&redlink=1) unveiled Majorana 1 topological qubit prototype (8 qubits); Google reported Quantum Echoes, a verification technique that enabled a ~13,000× speed-up for a molecular-structure task[&#91;25&#93;](#cite_note-Azure2025-25)[&#91;26&#93;](#cite_note-Reuters2025-26)

## Fundamental Principles

QPUs derive their computational power from three core quantum mechanical phenomena that have no classical analog:

### Superposition

[Quantum superposition](/index.php?title=Quantum_superposition&action=edit&redlink=1) allows qubits to exist in a probabilistic combination of both |0⟩ and |1⟩ states simultaneously, described mathematically as:

  
    
      
        
          |
        
        &#x03C8;
        &#x27E9;
        =
        &#x03B1;
        
          |
        
        0
        &#x27E9;
        +
        &#x03B2;
        
          |
        
        1
        &#x27E9;
      
    
    {\displaystyle |\psi \rangle =\alpha |0\rangle +\beta |1\rangle }
  
![{\displaystyle |\psi \rangle =\alpha |0\rangle +\beta |1\rangle }](https://wikimedia.org/api/rest_v1/media/math/render/svg/259aaac5393082d769c30b0b58fd0fafe4032d8d)
where α and β are complex probability amplitudes satisfying |α|² + |β|² = 1.[&#91;9&#93;](#cite_note-Nielsen2000-9)

This enables N qubits to represent all 2^N possible states simultaneously, providing exponential scaling unachievable classically. For perspective, 300 qubits can theoretically process more states than there are atoms in the observable universe.[&#91;1&#93;](#cite_note-IBM2025-1)

### Entanglement

[Quantum entanglement](/index.php?title=Quantum_entanglement&action=edit&redlink=1) creates correlations between qubits where the quantum state of one qubit cannot be described independently of others. A classic example is the [Bell state](/index.php?title=Bell_state&action=edit&redlink=1):

  
    
      
        
          |
        
        
          &#x03A6;
          
            +
          
        
        &#x27E9;
        =
        
          
            1
            
              2
            
          
        
        (
        
          |
        
        00
        &#x27E9;
        +
        
          |
        
        11
        &#x27E9;
        )
      
    
    {\displaystyle |\Phi ^{+}\rangle ={\frac {1}{\sqrt {2}}}(|00\rangle +|11\rangle )}
  
![{\displaystyle |\Phi ^{+}\rangle ={\frac {1}{\sqrt {2}}}(|00\rangle +|11\rangle )}](https://wikimedia.org/api/rest_v1/media/math/render/svg/406ad76c0432cb333cf3b7924d0af83a768dbd38)
Entangled qubits exhibit perfect correlations regardless of physical separation—measuring one instantly determines the state of others, enabling quantum algorithms to process information in ways impossible classically.[&#91;9&#93;](#cite_note-Nielsen2000-9)[&#91;27&#93;](#cite_note-EETimes2024-27)

### Interference

Quantum interference manipulates probability amplitudes to constructively amplify correct answers while destructively canceling incorrect ones. Quantum algorithms carefully orchestrate interference patterns so that paths leading to wrong answers cancel out while correct solutions reinforce, dramatically increasing the probability of measuring the desired result.[&#91;27&#93;](#cite_note-EETimes2024-27)

## Physical Implementations

Multiple competing technologies exist for implementing QPUs, each with distinct advantages and challenges:

### Comparison of Leading Qubit Technologies

| Feature | [Superconducting](/index.php?title=Superconducting_quantum_computing&action=edit&redlink=1) | [Trapped-Ion](/index.php?title=Trapped_ion_quantum_computer&action=edit&redlink=1) | [Photonic](/index.php?title=Photonic_quantum_computer&action=edit&redlink=1) | [Neutral-Atom](/index.php?title=Neutral_atom_quantum_computer&action=edit&redlink=1) | [Topological](/index.php?title=Topological_quantum_computer&action=edit&redlink=1) |
| --- | --- | --- | --- | --- | --- |
| Physical Qubit | Josephson junction circuit | Trapped ion (e.g., Yb+) | Photon properties | Neutral atom in optical trap | Majorana zero modes |
| Operating Temp | ~15 mK | Room temp (trap) | Room temperature | Room temp (trap) | ~10 mK |
| Coherence Time | 30-300 μs | Seconds to minutes | Limited by loss | ~1 second | Theoretical projection |
| Gate Speed | 10-100 ns | 10-100 μs | <1 ns | 0.1-1 μs | Unknown |
| Two-Qubit Fidelity | ~99.6-99.7% (best systems) | >99.9% | High (probabilistic) | ~99.5% | Theoretical projection |
| Connectivity | Nearest-neighbor | All-to-all | Reconfigurable | Flexible via Rydberg | Unknown |
| Scalability | High (chip fab) | Moderate (modular) | Very high (photonics) | High (optical arrays) | Potentially highest |
| Key Advantages | Fast, manufacturable | High fidelity, long coherence | Room temp, networkable | Scalable, reconfigurable | Theoretical error protection |
| Main Challenges | Short coherence, cooling | Slow gates, scaling | Probabilistic gates | Atom loss | Unproven at scale |
| Leading Companies | IBM, Google, Rigetti | IonQ, Quantinuum | PsiQuantum, Xanadu | QuEra, Pasqal, Atom Computing | Microsoft |

### Superconducting QPUs

Superconducting QPUs dominate current commercial systems, using microscopic circuits with [Josephson junctions](/index.php?title=Josephson_junction&action=edit&redlink=1) cooled to near absolute zero where they exhibit quantum behavior.[&#91;28&#93;](#cite_note-Clarke2008-28)

- **Advantages**: Fast gate operations (10-100 ns), leverages semiconductor fabrication, demonstrated scaling to >1,000 qubits

- **Challenges**: Short coherence times (30-300 μs), requires extreme cooling, crosstalk between qubits

- **Notable Systems**: IBM Condor (1,121 qubits), Google Willow (105 qubits with 99.67% two-qubit fidelity), Rigetti Ankaa-3 (84 qubits)[&#91;6&#93;](#cite_note-Google2024-6)[&#91;29&#93;](#cite_note-Rigetti2024-29)

### Trapped-Ion QPUs

Trapped-ion systems suspend individual charged atoms in electromagnetic fields, manipulating them with precision lasers.[&#91;30&#93;](#cite_note-Monroe2022-30)

- **Advantages**: Exceptional coherence (seconds to minutes), highest gate fidelities (>99.9%), all-to-all connectivity

- **Challenges**: Slower gates (10-100 μs), complex scaling beyond 50-100 ions

- **Notable Systems**: IonQ Forte (36 qubits, #AQ 35), Quantinuum H2 (56 qubits with quantum volume of 8,388,608)[&#91;31&#93;](#cite_note-IonQ2024-31)[&#91;32&#93;](#cite_note-QuantinuumQV2023-32)

### Photonic QPUs

Photonic processors encode quantum information in properties of light particles (photons).[&#91;33&#93;](#cite_note-Bartlett2020-33)

- **Advantages**: Room temperature operation, minimal decoherence, compatible with fiber networks

- **Challenges**: Difficult two-qubit gates, photon loss, probabilistic operations

- **Notable Systems**: Xanadu Borealis (216 modes), PsiQuantum Omega (in development)

### Neutral-Atom QPUs

This approach uses arrays of neutral atoms trapped by focused laser beams ("optical tweezers").[&#91;34&#93;](#cite_note-Henriet2020-34)

- **Advantages**: High scalability (>1,000 qubits demonstrated), flexible connectivity, long coherence

- **Challenges**: Atom loss during computation, moderate gate speeds

- **Notable Systems**: Atom Computing (1,180 qubits), QuEra Aquila (256 qubits)[&#91;35&#93;](#cite_note-Evered2023-35)

### Topological QPUs

Microsoft's approach uses exotic quasiparticles called [Majorana zero modes](/index.php?title=Majorana_fermion&action=edit&redlink=1) in specially engineered materials.[&#91;25&#93;](#cite_note-Azure2025-25)

- **Advantages**: Theoretical intrinsic error protection, potential for million-qubit chips

- **Challenges**: Unproven at scale, limited experimental validation

- **Notable Systems**: Microsoft Majorana 1 (8-qubit prototype, early stage)

## Architecture and Operation

### System Components

Modern QPUs integrate multiple subsystems working in concert:

| Component | Function | Key Requirements |
| --- | --- | --- |
| **Quantum Chip** | Houses physical qubits and coupling elements | Isolation from noise, precise fabrication |
| **Control Electronics** | Generates/delivers gate pulses | Sub-nanosecond timing, low noise |
| **Readout System** | Measures qubit states | >99% fidelity, quantum non-demolition |
| **Cryogenic Infrastructure** | Maintains operating temperature | 10-15 mK for superconducting |
| **Classical Processing** | Compilation, error correction, control | Real-time processing, low latency |
| **Shielding** | Protects from environmental noise | Electromagnetic, vibrational, thermal |

### Operational Workflow

The execution of a quantum algorithm follows these steps:

1. **Compilation**: Classical compiler translates high-level algorithm into hardware-specific quantum circuits

2. **Initialization**: All qubits prepared in known state (typically |0⟩)

3. **Gate Sequence**: Control pulses apply quantum gates according to compiled circuit

4. **Measurement**: Qubit states collapsed and read out as classical bits

5. **Repetition**: Process repeated thousands of times to build probability distribution

6. **Post-processing**: Classical analysis extracts final answer from measurement statistics[&#91;1&#93;](#cite_note-IBM2025-1)

### Quantum Gates

[Quantum logic gates](/index.php?title=Quantum_logic_gate&action=edit&redlink=1) manipulate qubit states through controlled interactions:

- **Single-qubit gates**: Rotations around Bloch sphere axes (X, Y, Z rotations, Hadamard)

- **Two-qubit gates**: Create entanglement (CNOT, CZ, iSWAP)

- **Gate implementation**: Microwave pulses (superconducting), laser pulses (trapped ion/neutral atom)

- **Fidelity requirements**: >99.9% for practical error correction[&#91;36&#93;](#cite_note-Krantz2019-36)

## Performance Metrics

### Quantum Volume

[Quantum volume](/index.php?title=Quantum_volume&action=edit&redlink=1) combines multiple performance aspects into a single metric:[&#91;37&#93;](#cite_note-Cross2019-37)

- Accounts for qubit count, connectivity, gate fidelity, and measurement accuracy

- Higher values indicate better overall system performance

- Record: Quantinuum H2 achieved quantum volume of 8,388,608 (2^23) in 2023[&#91;32&#93;](#cite_note-QuantinuumQV2023-32)

### Key Performance Indicators

| Metric | Description | Current State-of-Art (2025) | Target for Fault Tolerance |
| --- | --- | --- | --- |
| **Qubit Count** | Number of physical qubits | 1,000-5,000 | 1-10 million |
| **Coherence Time (T1, T2)** | Qubit lifetime | 30-300 μs (superconducting)**Seconds (trapped ion) | Application dependent |
| Single-Qubit Fidelity** | Single gate accuracy | 99.95-99.998% | >99.99% |
| **Two-Qubit Fidelity** | Entangling gate accuracy | 99.5-99.914% | >99.9% |
| **Readout Fidelity** | Measurement accuracy | 99-99.5% | >99.9% |
| **CLOPS** | Circuit Layer Operations/Second | 150,000 (IBM) | >1 million |
| **Logical Qubit Error Rate** | After error correction | 10^-3 to 10^-6 | <10^-10 |

## Applications

QPUs excel at problems with inherent quantum structure or exponential classical complexity:

### Quantum Simulation

- **Drug Discovery**: Simulating molecular interactions, protein folding, drug-target binding[&#91;38&#93;](#cite_note-WEF2025-38)

- **Materials Science**: Designing catalysts, batteries, superconductors

- **Example**: In 2025, Google reported Quantum Echoes, a verification technique that enabled a ~13,000× speed-up for a molecular-structure task, with a method for certifying the result's correctness[&#91;26&#93;](#cite_note-Reuters2025-26)

### Optimization

- **Finance**: Portfolio optimization, risk analysis, derivative pricing

- **Logistics**: Route optimization, supply chain, scheduling

- **Manufacturing**: Process optimization, quality control

- **Example**: JPMorgan researchers demonstrated certified quantum randomness on Quantinuum hardware; certified randomness is useful for Monte Carlo methods in finance[&#91;39&#93;](#cite_note-JPM2025-39)

### Cryptography

- **Code Breaking**: [Shor's algorithm](/index.php?title=Shor%27s_algorithm&action=edit&redlink=1) threatens current RSA/ECC encryption

- **Quantum Security**: [Quantum key distribution](/index.php?title=Quantum_key_distribution&action=edit&redlink=1) for unbreakable communication

- **Resource Requirements**: Breaking RSA-2048 with Shor's algorithm would require thousands of logical qubits; one influential analysis suggests ~20 million noisy physical qubits (under specific assumptions) would be needed to factor RSA-2048 in ~8 hours, underscoring that calendar timelines remain speculative[&#91;40&#93;](#cite_note-Gidney2021-40)

### Machine Learning

- **Quantum Machine Learning**: Enhanced feature spaces, quantum neural networks

- **Speedups**: HHL algorithm for linear systems, quantum kernel methods

- **Applications**: Pattern recognition, optimization, data analysis[&#91;41&#93;](#cite_note-Biamonte2017-41)

## Challenges and Limitations

### Decoherence and Error Rates

- **Decoherence**: Quantum states decay in microseconds to seconds depending on technology

- **Error accumulation**: Current error rates of 0.1-1% per gate limit circuit depth

- **Environmental sensitivity**: Vibrations, electromagnetic fields, cosmic rays cause errors

- **Mitigation strategies**: Error correction codes, improved materials, better isolation[&#91;42&#93;](#cite_note-Preskill2018-42)

### Quantum Error Correction

[Quantum error correction](/index.php?title=Quantum_error_correction&action=edit&redlink=1) enables fault-tolerant computation but requires massive overhead:

- **Physical-to-logical ratio**: 1,000-10,000 physical qubits per logical qubit with current error rates

- **Surface code**: Leading approach arranges qubits in 2D grid for error detection/correction

- **Breakthrough**: Google's Willow achieved below-threshold correction—errors decrease as more qubits added[&#91;6&#93;](#cite_note-Google2024-6)

- **Alternative codes**: Quantum LDPC codes promise 10× efficiency improvement

### Scalability Challenges

- **Wiring complexity**: Each qubit needs control/readout lines

- **Cooling limits**: Dilution refrigerators struggle beyond 10,000 qubits

- **Control electronics**: Classical processing requirements scale with qubit count

- **Solutions**: Modular architectures, cryogenic electronics, photonic interconnects

## Current State and Future Outlook

### NISQ Era (2025-2029)

The current Noisy Intermediate-Scale Quantum ([NISQ](/index.php?title=NISQ&action=edit&redlink=1)) era features:

- 50-1,000 noisy physical qubits

- Limited to ~1,000 gate operations before decoherence

- Specialized quantum advantages on narrow problems

- Hybrid quantum-classical algorithms (VQE, QAOA) showing practical value

### Path to Fault Tolerance (2029-2035)

Industry roadmaps converge on achieving practical fault-tolerant systems:

| Company | 2025 Status | 2029 Target | 2035 Vision |
| --- | --- | --- | --- |
| **IBM** | 156-qubit Heron R2 | 200 logical qubits (Starling) | 2,000+ logical qubits |
| **Google** | 105-qubit Willow | "Useful error-corrected QC" | Million physical qubits |
| **IonQ** | 36 qubits (#AQ 35) | #AQ 64+ systems | Scalable trapped-ion architectures |
| **Microsoft** | 8-qubit Majorana 1 (prototype) | Scalable topological qubits | Million qubits/chip (theoretical) |
| **Quantinuum** | 56 qubits (QV 8,388,608) | Advancing toward fault tolerance | Commercial quantum advantage |

### Market Projections

- **Current market**: ~$1 billion annually (2025)

- **2030 projection**: $5-15 billion (conservative) to $45-72 billion (optimistic)

- **Key drivers**: Drug discovery, materials science, financial modeling, logistics optimization[&#91;43&#93;](#cite_note-McKinsey2025-43)

## See Also

- [Quantum computing](/index.php?title=Quantum_computing&action=edit&redlink=1)

- [Qubit](/index.php?title=Qubit&action=edit&redlink=1)

- [Quantum algorithm](/index.php?title=Quantum_algorithm&action=edit&redlink=1)

- [Quantum error correction](/index.php?title=Quantum_error_correction&action=edit&redlink=1)

- [Quantum supremacy](/index.php?title=Quantum_supremacy&action=edit&redlink=1)

- [Quantum machine learning](/index.php?title=Quantum_machine_learning&action=edit&redlink=1)

- [Dilution refrigerator](/index.php?title=Dilution_refrigerator&action=edit&redlink=1)

- [Post-quantum cryptography](/index.php?title=Post-quantum_cryptography&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-IBM2025_1-0) [1.1](#cite_ref-IBM2025_1-1) [1.2](#cite_ref-IBM2025_1-2) "What is a QPU (Quantum Processing Unit)?". IBM*. Retrieved November 3, 2025. URL: [https://www.ibm.com/think/topics/qpu](https://www.ibm.com/think/topics/qpu)

2. ↑ [2.0](#cite_ref-NVIDIA2022_2-0) [2.1](#cite_ref-NVIDIA2022_2-1) Merritt, Rick (July 29, 2022). "What Is a QPU?". *NVIDIA Blogs*. Retrieved November 3, 2025. URL: [https://blogs.nvidia.com/blog/what-is-a-qpu/](https://blogs.nvidia.com/blog/what-is-a-qpu/)

3. [↑](#cite_ref-Quera2025_3-0) "What is a Quantum Processing Unit?". *QuEra*. Retrieved November 3, 2025. URL: [https://www.quera.com/glossary/processing-unit](https://www.quera.com/glossary/processing-unit)

4. ↑ [4.0](#cite_ref-Nature2019_4-0) [4.1](#cite_ref-Nature2019_4-1) Arute, F., et al. (2019). "Quantum supremacy using a programmable superconducting processor". *Nature*, 574(7779), 505-510. URL: [https://www.nature.com/articles/s41586-019-1666-5](https://www.nature.com/articles/s41586-019-1666-5)

5. [↑](#cite_ref-Wired2017_5-0) James Temperton (Jan 26, 2017). "Got a spare $15 million? Why not buy your very own D-Wave quantum computer". *Wired*. URL: [https://www.wired.com/story/d-wave-2000q-quantum-computer/](https://www.wired.com/story/d-wave-2000q-quantum-computer/)

6. ↑ [6.0](#cite_ref-Google2024_6-0) [6.1](#cite_ref-Google2024_6-1) [6.2](#cite_ref-Google2024_6-2) [6.3](#cite_ref-Google2024_6-3) Google Quantum AI (December 9, 2024). "Willow: Exponentially reducing errors in quantum computing". URL: [https://blog.google/technology/quantum-computing/willow-quantum-computing-chip/](https://blog.google/technology/quantum-computing/willow-quantum-computing-chip/)

7. [↑](#cite_ref-IBM2024_7-0) IBM Research (2024). "IBM Quantum Development Roadmap". URL: [https://www.ibm.com/quantum/roadmap](https://www.ibm.com/quantum/roadmap)

8. [↑](#cite_ref-BuiltIn2024_8-0) Boger, Yuval (March 8, 2024). "Why the QPU Is the Next GPU". *Built In*. URL: [https://builtin.com/articles/qpu-quantum-processing-unit](https://builtin.com/articles/qpu-quantum-processing-unit)

9. ↑ [9.0](#cite_ref-Nielsen2000_9-0) [9.1](#cite_ref-Nielsen2000_9-1) [9.2](#cite_ref-Nielsen2000_9-2) Nielsen, M. A., & Chuang, I. L. (2000). *Quantum Computation and Quantum Information*. Cambridge University Press. ISBN: 978-0-521-63503-5.

10. [↑](#cite_ref-NAS2019_10-0) National Academies of Sciences (2019). "Quantum Computing: Progress and Prospects". The National Academies Press. doi:10.17226/25196

11. [↑](#cite_ref-Benioff1980_11-0) Benioff, P. (1980). "The computer as a physical system: A microscopic quantum mechanical Hamiltonian model of computers as represented by Turing machines". Journal of Statistical Physics. 22(5): 563-591.

12. [↑](#cite_ref-Feynman1982_12-0) Feynman, R. P. (1982). "Simulating physics with computers". International Journal of Theoretical Physics. 21(6): 467-488.

13. [↑](#cite_ref-Deutsch1985_13-0) Deutsch, D. (1985). "Quantum theory, the Church-Turing principle and the universal quantum computer". Proceedings of the Royal Society of London A. 400(1818): 97-117.

14. [↑](#cite_ref-Shor1994_14-0) Shor, P. W. (1994). "Algorithms for quantum computation: discrete logarithms and factoring". Proceedings 35th Annual Symposium on Foundations of Computer Science. pp. 124-134.

15. [↑](#cite_ref-Monroe1995_15-0) Monroe, C., et al. (1995). "Demonstration of a fundamental quantum logic gate". Physical Review Letters. 75(25): 4714-4717.

16. [↑](#cite_ref-Grover1996_16-0) Grover, L. K. (1996). "A fast quantum mechanical algorithm for database search". Proceedings of the 28th Annual ACM Symposium on Theory of Computing. pp. 212-219.

17. [↑](#cite_ref-InsiderHistory_17-0) The Quantum Insider (May 26, 2020). "The History of Quantum Computing You Need to Know". URL: [https://thequantuminsider.com/2020/05/26/history-of-quantum-computing/](https://thequantuminsider.com/2020/05/26/history-of-quantum-computing/)

18. [↑](#cite_ref-Nakamura1999_18-0) Nakamura, Y., et al. (1999). "Coherent control of macroscopic quantum states in a single-Cooper-pair box". Nature. 398(6730): 786-788.

19. [↑](#cite_ref-PhysOrg2011_19-0) Lisa Zyga (2011-06-01). "D-Wave sells first commercial quantum computer". *Phys.org*. URL: [https://phys.org/news/2011-06-d-wave-commercial-quantum.html](https://phys.org/news/2011-06-d-wave-commercial-quantum.html)

20. [↑](#cite_ref-IBM2021_20-0) IBM News Room (November 16, 2021). "IBM Unveils Breakthrough 127-Qubit Quantum Processor". URL: [https://newsroom.ibm.com/2021-11-16-IBM-Unveils-127-Qubit-Eagle-Processor](https://newsroom.ibm.com/2021-11-16-IBM-Unveils-127-Qubit-Eagle-Processor)

21. [↑](#cite_ref-Reuters2022_21-0) Lee, Jane Lanhee (November 9, 2022). "IBM launches its most powerful quantum computer with 433 qubits". Reuters. URL: [https://www.reuters.com/technology/ibm-launches-433-qubit-osprey-processor-2022-11-09/](https://www.reuters.com/technology/ibm-launches-433-qubit-osprey-processor-2022-11-09/)

22. [↑](#cite_ref-IBM2023_22-0) IBM Research (December 4, 2023). "IBM Quantum Condor: Breaking the 1000-qubit barrier". URL: [https://research.ibm.com/blog/quantum-condor](https://research.ibm.com/blog/quantum-condor)

23. [↑](#cite_ref-AtomComputing2023_23-0) Atom Computing (October 24, 2023). "Atom Computing First to Exceed 1,000 Qubits". PR Newswire. URL: [https://www.prnewswire.com/news-releases/quantum-startup-atom-computing-first-to-exceed-1-000-qubits-301964712.html](https://www.prnewswire.com/news-releases/quantum-startup-atom-computing-first-to-exceed-1-000-qubits-301964712.html)

24. [↑](#cite_ref-Quantinuum2024_24-0) Quantinuum (March 2024). "Quantinuum achieves 'three 9s' fidelity in quantum operations". URL: [https://www.quantinuum.com/news/three-nines-fidelity](https://www.quantinuum.com/news/three-nines-fidelity)

25. ↑ [25.0](#cite_ref-Azure2025_25-0) [25.1](#cite_ref-Azure2025_25-1) Nayak, Chetan (February 19, 2025). "Microsoft unveils Majorana 1, the world's first quantum processor powered by topological qubits". Microsoft Azure Quantum Blog. URL: [https://azure.microsoft.com/blog/quantum/majorana-1-topological-qubits/](https://azure.microsoft.com/blog/quantum/majorana-1-topological-qubits/)

26. ↑ [26.0](#cite_ref-Reuters2025_26-0) [26.1](#cite_ref-Reuters2025_26-1) Reuters (October 22, 2025). "Google says it has developed landmark quantum computing algorithm". URL: [https://www.reuters.com/technology/google-quantum-echoes-algorithm-2025-10-22/](https://www.reuters.com/technology/google-quantum-echoes-algorithm-2025-10-22/)

27. ↑ [27.0](#cite_ref-EETimes2024_27-0) [27.1](#cite_ref-EETimes2024_27-1) Di Giovanni, Filippo (January 5, 2024). "Physical Principles Underpinning Quantum Computing". *EE Times Europe*. URL: [https://www.eetimes.eu/physical-principles-quantum-computing/](https://www.eetimes.eu/physical-principles-quantum-computing/)

28. [↑](#cite_ref-Clarke2008_28-0) Clarke, J., & Wilhelm, F. K. (2008). "Superconducting quantum bits". Nature. 453(7198): 1031-1042.

29. [↑](#cite_ref-Rigetti2024_29-0) Rigetti Computing (December 23, 2024). "Rigetti Computing Reports 84-Qubit Ankaa-3 System Achieves 99.5% Median Two-Qubit Gate Fidelity". URL: [https://investors.rigetti.com/news-releases/](https://investors.rigetti.com/news-releases/)

30. [↑](#cite_ref-Monroe2022_30-0) Monroe, C., & Kim, J. (2022). "Trapped-ion quantum computing". Annual Review of Condensed Matter Physics. 13: 237-261.

31. [↑](#cite_ref-IonQ2024_31-0) IonQ (2024). "How We Achieved Our 2024 Performance Target of #AQ 35". URL: [https://ionq.com/blog/aq-35-achievement](https://ionq.com/blog/aq-35-achievement)

32. ↑ [32.0](#cite_ref-QuantinuumQV2023_32-0) [32.1](#cite_ref-QuantinuumQV2023_32-1) Quantinuum (July 2023). "Quantinuum H2 Achieves Record Quantum Volume of 8,388,608". URL: [https://www.quantinuum.com/blog/quantum-volume-milestone](https://www.quantinuum.com/blog/quantum-volume-milestone)

33. [↑](#cite_ref-Bartlett2020_33-0) Bartlett, S. D. (2020). "Photonic quantum information processing: A concise review". APL Photonics. 6(4): 041303.

34. [↑](#cite_ref-Henriet2020_34-0) Henriet, L., et al. (2020). "Quantum computing with neutral atoms". Quantum. 4: 327.

35. [↑](#cite_ref-Evered2023_35-0) Evered, S. J., et al. (2023). "High-fidelity parallel entangling gates on a neutral-atom quantum computer". Nature. 622: 268-272.

36. [↑](#cite_ref-Krantz2019_36-0) Krantz, P., et al. (2019). "A quantum engineer's guide to superconducting qubits". Applied Physics Reviews. 6(2): 021318.

37. [↑](#cite_ref-Cross2019_37-0) Cross, A. W., et al. (2019). "Validating quantum computers using randomized model circuits". Physical Review A. 100(3): 032328.

38. [↑](#cite_ref-WEF2025_38-0) "How quantum computing is changing molecular drug discovery". World Economic Forum. January 2025. URL: [https://www.weforum.org/agenda/2025/01/quantum-computing-drug-discovery/](https://www.weforum.org/agenda/2025/01/quantum-computing-drug-discovery/)

39. [↑](#cite_ref-JPM2025_39-0) JPMorgan Chase & Quantinuum (March 2025). "Certified quantum randomness for financial modeling". URL: [https://www.jpmorgan.com/technology/news/certified-randomness](https://www.jpmorgan.com/technology/news/certified-randomness)

40. [↑](#cite_ref-Gidney2021_40-0) Gidney, C., & Ekerå, M. (2021). "How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits". Quantum. 5: 433. URL: [https://quantum-journal.org/papers/q-2021-04-15-433/](https://quantum-journal.org/papers/q-2021-04-15-433/)

41. [↑](#cite_ref-Biamonte2017_41-0) Biamonte, J., et al. (2017). "Quantum machine learning". Nature. 549(7671): 195-202.

42. [↑](#cite_ref-Preskill2018_42-0) Preskill, J. (2018). "Quantum Computing in the NISQ era and beyond". Quantum. 2: 79.

43. [↑](#cite_ref-McKinsey2025_43-0) "The year of quantum: From concept to reality in 2025". McKinsey & Company. Retrieved November 3, 2025. URL: [https://www.mckinsey.com/capabilities/mckinsey-digital/quantum-2025](https://www.mckinsey.com/capabilities/mckinsey-digital/quantum-2025)