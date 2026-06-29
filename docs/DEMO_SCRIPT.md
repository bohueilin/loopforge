# LoopForge — 60-Second Demo Video Script

**Surface:** `http://localhost:5199` · **Mode:** Recorded (default on load) · **Model:** `gemma-4-31b` on Cerebras Inference

The demo runs in **Recorded mode** — a deterministic replay of real captured `gemma-4-31b` runs, so judging never rides on conference wifi. Every number on screen (tok/s, `time_info`, image tokens, gate verdicts) is a measured value, not a prop.

---

## Recording setup (do this first)

- Hide all notifications, browser tabs, bookmarks, extensions. **No secrets, emails, or API keys on screen.**
- Window at **1440×900**, browser zoom **100%**, system Do-Not-Disturb on.
- Load `http://localhost:5199` — it opens in Recorded mode and the **Speed Race + Repair Loop animations auto-play once on load**.
- **"Run demo"** (the primary button) scrolls to top and **replays the animations** — use it to start a clean take.
- Do one silent dry-run to rehearse the scroll timing, then record the voiceover in a single take over the scripted scroll.

---

## Shot-by-shot (≈150 spoken words ≈ 60s)

| Time | On-screen action | Number to land | Voiceover |
|------|------------------|----------------|-----------|
| **0:00–0:06** | Open on **Command Center**. The production-readiness strip is visible. Cursor on **Run demo**. | "Enterprise Agent Repair OS" · 10/10 gates | "Production AI agents silently regress — and nobody can diagnose, patch, and *prove* a fix while the incident is still hot." |
| **0:06–0:10** | Click **Run demo** — view snaps to top, animations restart. | Diagnose → Patch → Simulate → Verify → Repair | "LoopForge closes that loop end to end — every step on one model, gemma-4-31b." |
| **0:10–0:18** | Hold on **Speed Race**. Cerebras lane sprints and shows **finished first**; the GPU lane crawls. The "GPU field" strip is visible. | **1,299 vs 200 tok/s · 6.5× vs OpenAI gpt-oss-120b · 65× vs DeepSeek** | "On Cerebras the entire loop finishes in 1.4 seconds — six times faster than OpenAI's 120-billion-parameter model on a GPU." |
| **0:18–0:26** | Scroll to **Multimodal Ingest**. The support-console screenshot sits beside the extracted incident fields. | **270 image tokens · 195ms** | "Gemma 4 vision reads the support console and returns structured incident JSON in milliseconds." |
| **0:26–0:33** | Scroll through **Failure Cluster** → **Root Cause** (the AOP gap). | "AOP logic gap: escalation fires before identity / charge / eligibility" | "It clusters the failures and names the root cause — escalation firing *before* the safety checks." |
| **0:33–0:38** | Scroll past **Workflow Diff** → **Simulations**. | Semantic patch + adversarial simulations | "It proposes a semantic patch and stress-tests it with adversarial simulations." |
| **0:38–0:48** | **REPAIR LOOP** — the hero. Left card shows **5 gates RED**; the auto-repair connector spins; the right card and the flip rows go **RED → GREEN**. Hold on the flip. | **5 unsafe behaviors → 0 · ~1.9s** | "The first patch fails five safety gates — so it auto-repairs on Cerebras and re-verifies, flipping red to green." |
| **0:48–0:54** | Scroll to **Validation Gates** — all ten tiles green. | **10 / 10 gates · fact-based, deterministic** | "Ten deterministic gates judge the *actual tool action* from the facts — the model proposes, the gates dispose." |
| **0:54–0:60** | Scroll to **Evidence Pack** (approval-ready). End on this frame. | **Approval-ready · 6.5× faster · verification is free** | "Out comes an approval-ready evidence pack — because Cerebras makes verification free, the safety loop runs every cycle." |

**Close on:** the **Evidence Pack** "Approval-ready rollout packet" header. The proof (validated fix) and the differentiator (6.5×) in one frame.

---

## The one line for judge Q&A

> "This is the rare demo where the hardware is the product: at 1,299 tok/s the verify-and-repair loop is *free*, so the Guardian runs every cycle — at GPU latency the same loop is a ~9-second slideshow."

## Optional B-roll (if you want a 5s side-by-side insert)
Split-screen the Speed Race lanes alone, looping the moment Cerebras hits "finished first" while the GPU bar is still ~25% — that clip is also your Track-2 (People's Choice) post.
