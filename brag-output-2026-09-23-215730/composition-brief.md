# Hyperframes Composition Brief: Chatty

## Objective
Create a short launch-style brag video for Chatty — a real-time messaging web app with 32 DaisyUI themes, image sharing, and live presence.

## Output
- Composition directory: `brag-output-2026-09-23-215730/composition/`
- Rendered video: `brag-output-2026-09-23-215730/brag.mp4`
- Format: landscape — 1920x1080
- Duration: 19 seconds (15-25s range)

## Source Material
- Project root: `c:\Users\nikhi\OneDrive\Desktop\PROJECTS\CHATTY`
- Primary files read: App.jsx, all pages (LoginPage, HomePage, SettingsPage, ProfilePage, SignUpPage), all components (Sidebar, ChatContainer, ChatHeader, MessageInput, NoChatSelected, NavBar, AuthImagePattern), all stores (useAuthStore, useChatStore, useThemeStore), tailwind.config.mjs, constants/index.js
- Product name: Chatty
- Tagline / strongest claim: "Connect with friends, share moments, and stay in touch with your loved ones." / "Welcome to Chatty!"
- Key UI or visual moment to recreate:
  1. The main chat view: Sidebar (contacts with green online dots) + ChatContainer (bubbles with avatars, timestamps, image messages)
  2. The Settings page theme grid (32 DaisyUI swatches + live chat preview widget)
  3. The login page split-screen (form + animated 3×3 grid pattern)
- Copy that must appear verbatim:
  - "Real conversations." (hook)
  - "Real time." (hook)
  - "Chatty" (logo text, outro)
  - "32 themes. Image sharing. Live presence." (outro tagline)
  - "Hey! How's it going?" (chat bubble)
  - "Doing great! Just shipped a new feature 🚀" (chat bubble)
  - "Check this out!" (chat bubble with image)
  - "Sign In" (login page heading)

## Creative Direction
- Tone preset: polished
- Creative direction: warm product film for an earnest personal project
- Interpretation: Fewer scenes, longer holds. Confidence through restraint. Soft crossfade transitions (0.6-0.8s). Clean Inter typography, mixed-case, generous spacing. No irony, no hype — the UI carries itself.
- Angle: Chatty is a complete, full-featured real-time chat app — not a demo or a prototype. The video treats it as a shipping product. The centerpiece is the working chat interface with live message animation, bookended by a confident hook and a theme-switching flex.
- Hook: Two-line text reveal ("Real conversations." / "Real time.") over Chatty logo icon on dark background — first 3 seconds
- Outro / punchline: Chatty logo scales in confidently, name and tagline appear beneath. Clean fade to black.
- Avoid:
  - Generic SaaS language ("streamline your workflow", "excited to share")
  - Abstract filler visuals (color washes, particle systems, generic motion graphics)
  - Unrelated visual redesign (use the actual DaisyUI coffee theme colors)

## Visual Identity
- Background: DaisyUI coffee theme deep warm brown (#20161F base)
- Text: Light cream (#E8D5C4)
- Accent: DaisyUI coffee primary warm amber/gold (#DB924B)
- Display font: Inter (or system sans-serif fallback — the project loads no custom Google Font)
- Body font: Inter
- Visual references from the project:
  - MessageSquare icon in rounded-xl primary/10 container (logo)
  - Chat bubbles with DaisyUI chat-start/chat-end classes, avatars in circles
  - Sidebar with contact list, green online dots (bg-green-500 rounded-full)
  - The 32-theme swatch grid (4-column or 8-column grid of small rounded color blocks)
  - AuthImagePattern 3×3 grid of pulsing rounded squares

## Storyboard
Use the storyboard in `brag-output-2026-09-23-215730/brag-plan.md` as the creative contract.

Scene summary:
1. Hook — 3s — Chatty logo icon fades in, "Real conversations." / "Real time." appear sequentially
2. Sign In — 3s — Recreated login page, simulated typing "alex@chatty.io" into email field
3. Chat Reveal — 5s — Full chat interface: sidebar with contacts + 3 chat bubbles appearing one by one (the centerpiece)
4. Theme Flex — 4s — Settings theme grid + live preview widget switching through coffee → synthwave → nord → valentine
5. Outro — 4s — Chatty logo scales in, "Chatty" + "32 themes. Image sharing. Live presence." appear, fade to black

## Audio
- Audio role: warm bed
- Audio arc: quiet anticipation (hook) → subtle activity (sign-in typing) → confident presence (chat reveal, theme flex) → clean landing (outro fade-out)
- Music: `happy-beats-business-moves-vol-12-by-ende-dot-app.mp3`
- Music treatment: volume 0.30-0.35, gentle fade-in over first 0.5s, sustain through scenes 2-4, fade-out over final 1.5s of Scene 5
- Music cue guidance: cue source — bundled preset at `.agents/skills/brag/assets/music/cues/happy-beats-business-moves-vol-12-by-ende-dot-app.music-cues.json`. Tempo 109.96 BPM. Copy JSON to `composition/assets/music/cues/` for beat-sync. Strong cues:
  - **8.74s** for chat interface reveal (Scene 3 entrance)
  - **17.47s** for outro logo entrance (Scene 5)
  - Beat-grid for message bubbles: 9.29s, 10.37s (every other beat for readability)
  - Beat-grid for theme switches: 13.64s, 14.73s, 15.84s
- Audio-reactive treatment: subtle; use music RMS/bass to make the chat container background warmth and logo glow breathe slightly. No waveform/equalizer visuals, no strobing, no heavy pulsing.
- Audio-coupled moments:
  - Scene 2 (Sign In, ~3-6s) — typing with sparse keyboard ticks (every 3rd character)
  - Scene 3 (Chat Reveal, ~6-11s) — soft drop sound per chat bubble entrance
  - Scene 4 (Theme Flex, ~11-15s) — gentle click per theme swatch activation
  - Scene 5 (Outro, ~15-19s) — one bell for logo payoff at ~17.47s
- SFX selection guidance: use sfx-analysis.md for file selection. Prefer low-HF-risk files for all moments (polished tone). Keyboard ticks from keyboard/ set (randomized). Drop sounds from interface/drop_001 or _002. Clicks from interface/click_003. Bell from impact/impactBell_heavy_004.
- SFX analysis guidance: path to `sfx-analysis.md` is `.agents/skills/brag/assets/sfx/sfx-analysis.md`; full JSON at `sfx-analysis.json`. Use low high-frequency-risk sounds for all repeated or polished moments.
- Exact SFX choice: Hyperframes should choose filenames, timestamps, density, and volume based on the implemented animation.
- Audio files: copy the chosen music and any Hyperframes-selected SFX into `brag-output-2026-09-23-215730/composition/assets/`

## Hyperframes Instructions
Load the composition-building Hyperframes domain skills — `hyperframes-core` (composition contract + `data-*` timing), `hyperframes-animation` (motion), `hyperframes-creative` (design spec, beats, audio-reactive), `hyperframes-keyframes` (seek-safe keyframes), and `hyperframes-cli` (lint/check/render). /brag is its own workflow: do not enter the `hyperframes` entry-point intent interview and do not route into its generic promo / launch-video workflow. Prefer native Hyperframes conventions over anything in `/brag`.

Requirements:
- Show at least one real UI, copy, or visual element from the source project.
- Keep all text readable in the final render.
- Keep the video within 15-25 seconds.
- Include the planned music/SFX layer unless audio was explicitly disabled or documented as intentionally silent.
- Treat `/brag` audio notes as guidance, not a fixed cue sheet. Choose SFX after the visual animation exists.
- Treat music cue metadata as optional timing hints. Hyperframes decides exact animation timing and should ignore cues that hurt readability, scene pacing, or the product story.
- Major reveals may move toward nearby strong cues within about 0.15s. Smaller entrances may align to nearby beat points within about 0.10s. Use only 1-3 strong cue locks in a 15-25s video unless the edit clearly benefits from more.
- Use SFX to support motion and interaction: card sounds for card-like reveals, short announcement cues for major payoffs, key/click sounds for text or user actions, and restraint when the edit is already busy.
- Honor planned music treatment such as fade-outs, ducking, beat-aligned reveals, or letting a final SFX ring over the music, using the best Hyperframes-supported implementation.
- When music is present and the treatment is not `none`, consider Hyperframes audio-reactive workflow: extract audio data and use RMS/frequency bands for subtle, brand-specific motion. Good targets are glow, depth, background warmth, card presence, title emphasis, or other existing visual elements. Avoid waveform/equalizer visuals, musical-note graphics, generic particle systems, strobing, or heavy pulsing.
- Use local assets for audio and any required runtime/media dependencies when possible.
- Run `hyperframes check` before render — it is brag's single gate.
