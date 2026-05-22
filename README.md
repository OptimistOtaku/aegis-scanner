# Aegis — Pre-Deployment Security Scanner for AI Systems

[![npm version](https://img.shields.io/npm/v/@optimistotaku/aegis-scan)](https://www.npmjs.com/package/@optimistotaku/aegis-scan)
[![License: Apache-2.0](https://img.shields.io/badge/license-Apache--2.0-blue)](LICENSE)
[![Node ≥18](https://img.shields.io/badge/node-%E2%89%A518-green)](https://nodejs.org)
[![CI](https://github.com/OptimistOtaku/aegis-scanner/actions/workflows/ci.yml/badge.svg)](https://github.com/OptimistOtaku/aegis-scanner/actions/workflows/ci.yml)

**Catch what generic scanners miss.** Aegis is purpose-built for the threat surface of AI-driven codebases — hallucinated dependencies, prompt injection boundaries, PII flowing raw into model APIs, and agentic loop topologies — all in a single scan, zero config required.

```bash
npx @optimistotaku/aegis-scan .
```

---

## Why Aegis?

Tools like Trufflehog and Semgrep are excellent at what they do. They were not designed for this:

| Threat Vector | Generic Scanners | Aegis |
|---|---|---|
| Exposed API keys & secrets | ✅ | ✅ |
| AI-hallucinated / squatted packages | ❌ | ✅ |
| Prompt injection in system prompts | ❌ | ✅ |
| PII flowing raw into LLM completion APIs | ❌ | ✅ |
| Missing moderation filters & infinite agent loops | ❌ | ✅ |

If your stack calls an LLM, Aegis covers the attack surface that everything else skips.

---

## Quickstart

No install needed. Run against any directory instantly:

```bash
npx @optimistotaku/aegis-scan .
```

Or install globally for repeated use:

```bash
npm install -g @optimistotaku/aegis-scan
aegis-scan .
```

**Requirements:** Node.js ≥ 18

---

## Sample Output

```
 Aegis Security Scanner v1.2.0
 Scanning: /your-project  (312 files)

 ────────────────────────────────────────────────────────
 [CRITICAL]  Secrets Auditor
 ────────────────────────────────────────────────────────
 src/config.py:14   Exposed Anthropic API key (entropy: 4.82)
                    → sk-ant-api03-...7Kx  [aegis-id: exposed-api-key]

 ────────────────────────────────────────────────────────
 [HIGH]  Dependency Hallucination Guard
 ────────────────────────────────────────────────────────
 requirements.txt:8  Package 'openai-utils-helper' not found on PyPI
                     → Likely hallucinated by AI assistant  [aegis-id: dep-hallucination]
 package.json:22     Package 'react-llm-bridge' registered 6 days ago
                     → High-risk: potential package squatting  [aegis-id: dep-squatting]

 ────────────────────────────────────────────────────────
 [HIGH]  PII Compliance Taint Tracker
 ────────────────────────────────────────────────────────
 api/chat.py:47      `user_email` flows into openai.chat.completions.create()
                     without tokenization or masking  [aegis-id: pii-taint-llm]

 ────────────────────────────────────────────────────────
 Summary:  3 findings  (1 CRITICAL · 2 HIGH · 0 MEDIUM · 0 LOW)
 ────────────────────────────────────────────────────────
```

---

## Security Modules

### 🔬 Secrets Auditor
Detects exposed API keys and tokens before they reach your repository history.

- High-fidelity regex patterns for OpenAI, Anthropic, HuggingFace, AWS, GCP, and 40+ other providers
- Shannon entropy analysis catches keys with non-standard prefixes
- `--validate-keys` performs a **read-only, non-destructive** authentication check to confirm whether discovered tokens are still active (no data is read or written — the check only tests auth)

### 📦 Dependency Hallucination Guard
The scanner built for the age of AI-assisted development.

AI coding assistants occasionally generate `import` statements or manifest entries for packages that do not exist on npm or PyPI. Attackers register these names to serve malicious code to anyone who runs `npm install`. Aegis cross-references your `package.json` and `requirements.txt` against live registries to surface:

- Packages that return `404` on npm/PyPI (likely hallucinated)
- Packages registered fewer than 30 days ago (elevated squatting risk)

### 🧬 Prompt Injection Auditor
Audits system prompt boundaries and instruction separation in your codebase.

- Static analysis of prompt construction patterns for injection-vulnerable concatenation
- `--run-fuzzing` sends sandboxed adversarial payloads to your configured endpoint to actively probe for jailbreak vectors (isolated environment; requires explicit opt-in)

### ⚖️ PII Compliance Taint Tracker
Traces sensitive data flows from origin to LLM API call.

Statically follows variables tagged with PII field names (`user_email`, `phone_number`, `ssn`, `dob`, etc.) through your call graph. Flags any path where PII reaches a model completion endpoint without passing through a recognized tokenization or masking function. Useful for GDPR, HIPAA, and SOC 2 compliance posture.

### 🥅 Topology Gatekeeper
Audits your agent configuration for architectural safety issues.

- Verifies the presence of moderation filter middleware (e.g. LlamaGuard, OpenAI Moderation API) in agent pipelines
- Detects agent graph topologies that can produce unbounded recursive loops
- Flags missing max-iteration guards on tool-calling chains

---

## CI/CD Integration

Aegis is designed to be a hard gate in your pipeline. Add it to GitHub Actions, GitLab CI, or a pre-commit hook with a single line.

### GitHub Actions

```yaml
- name: Aegis Security Scan
  run: npx @optimistotaku/aegis-scan . --fail-on HIGH --format markdown --output aegis-report.md

- name: Upload Aegis Report
  uses: actions/upload-artifact@v3
  with:
    name: aegis-security-report
    path: aegis-report.md
```

### Pre-commit Hook

```bash
# .git/hooks/pre-commit
aegis-scan . --fail-on CRITICAL
```

### CLI Reference

| Flag | Description |
|---|---|
| `--fail-on [CRITICAL\|HIGH\|MEDIUM\|LOW]` | Exit with code 1 if findings meet or exceed this severity |
| `--format [terminal\|markdown\|json]` | Output format (default: terminal) |
| `--output <filename>` | Write report to file |
| `--validate-keys` | Perform safe, read-only live validation of discovered tokens |
| `--run-fuzzing` | Enable sandboxed prompt red-team fuzzing (requires endpoint config) |
| `--ignore-dependencies` | Skip package manifest analysis |

---

## Suppressing False Positives

### Line-level suppression

Append `# aegis-ignore: <finding-id>` to any line to suppress a known safe exception:

```python
# This key is a non-privileged read-only public token
MAPBOX_PUBLIC_TOKEN = "pk.eyJ1IjoiZXhhbXBsZSJ9..."  # aegis-ignore: exposed-api-key
```

### File-level suppression

Add `# aegis-ignore: global` within the first 20 lines to exclude an entire file:

```python
# aegis-ignore: global
# Fixture file for integration tests — intentional test values only
```

Target specific checks at the file level:

```python
# aegis-ignore: global-dep-hallucination
```

### Directory and pattern exclusions (`.aegisignore`)

Create a `.aegisignore` file at your project root:

```
/tests
/dist
/node_modules
*.log
fixtures/
```

---

## Configuration

Create an `.aegisrc` file in your project root for persistent settings:

```json
{
  "failOn": "HIGH",
  "format": "terminal",
  "ignoreModules": [],
  "fuzzingEndpoint": "http://localhost:3000/api/chat"
}
```

---

## Contributing

Contributions are welcome. Please open an issue before submitting a pull request for new detection modules or significant changes.

```bash
git clone https://github.com/optimistotaku/aegis
cd aegis
npm install
npm test
```

---

## License

Licensed under the [Apache-2.0 License](LICENSE).
