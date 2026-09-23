# Brag Plan: Chatty

## What is this app?
Chatty is a full-stack real-time messaging app — sign up, see who's online, pick a contact, and chat with text and images over Socket.IO, with 32 switchable DaisyUI theme skins.

## The angle
This isn't a demo or a prototype. It's a complete chat app with live presence indicators, image sharing, profile management, and 32 visual themes — built as a personal project. The video treats it with the same confidence as a shipping product: clean reveals, real UI, no apologies.

## Hook (first 2-3 seconds)
The Chatty logo (MessageSquare icon) fades in on a warm dark background. Two lines appear sequentially: **"Real conversations."** then **"Real time."** — short, specific, earns the next 17 seconds.

## Key moments (the middle)
- The sidebar fills with contacts — each with an avatar and a green online dot pulsing beside their name. A contact gets selected.
- Chat bubbles animate in: a back-and-forth conversation with avatars, timestamps, and a message with an image attachment. The message input bar is visible at the bottom.
- The Settings page theme grid — 32 swatches — appears, and 3-4 themes apply in quick succession, transforming the live chat preview widget from coffee → synthwave → nord → valentine.

## Outro / punchline
The Chatty logo scales in center-screen. Below it: **"32 themes. Image sharing. Live presence."** Hold. Clean fade.

## User flow worth showing
Sign in (email typed into form) → See contacts with green online dots → Tap a contact → Messages appear one by one in real time (chat bubbles with avatars)

## Tone
- Preset: polished
- Creative direction: warm product film for an earnest personal project
- Interpretation: Fewer scenes, longer holds. Confidence through restraint. The UI is strong enough to carry itself — no irony, no hype. Transitions are soft crossfades. Typography is clean, mixed-case, generous spacing.

## Format: landscape — 1920x1080
## Duration: 19 seconds (target)

## Visual identity (from the project)
- Background: DaisyUI `coffee` theme — deep warm brown (#20161F base, #120C12 darker)
- Accent: DaisyUI `coffee` primary — warm amber/gold (#DB924B)
- Text: Light cream (#E8D5C4) on dark
- Display font: Inter (fallback — no custom font loaded in the project)
- Body font: Inter
- Strongest visual element: The chat bubble layout with side-by-side avatars, green online presence dots, and the 32-theme grid on the Settings page

## Share copy (draft)
Built Chatty — real-time messaging with 32 themes, image sharing, and live presence. React + Socket.IO.

## Audio direction
- Role: warm bed
- Music: `happy-beats-business-moves-vol-12-by-ende-dot-app.mp3` (steady and clean, 109.96 BPM)
- Music treatment: start at 0s, volume 0.30-0.35, gentle fade-in over first 0.5s, fade-out over final 1.5s. Let the track breathe underneath without competing with the visuals.
- Music cue guidance: bundled preset at `.agents/skills/brag/assets/music/cues/happy-beats-business-moves-vol-12-by-ende-dot-app.music-cues.json`. Tempo 109.96 BPM. Strong cues for major moments:
  - **8.74s** (0.99) — target for chat interface reveal (Scene 3 entrance)
  - **17.47s** (0.99) — target for outro logo entrance (Scene 5)
  - Beat-grid window for message bubbles: beats at 9.29, 9.83, 10.37, 10.93 — use for sequential message reveals (every other beat to maintain readability: 9.29s and 10.37s)
  - Beat-grid window for theme switches: beats at 13.64, 14.20, 14.73, 15.29 — snap theme transitions to these
- Audio-reactive treatment: subtle; use music RMS/bass to make the chat container background warmth and logo glow breathe slightly. No waveform/equalizer visuals.
- SFX posture: sparse; 2-3 cues maximum. Professional restraint — this is `polished` tone.
- Audio-coupled moments:
  - Scene 2 (Sign In) — simulated typing with subtle keyboard ticks
  - Scene 3 (Chat Reveal) — soft drop sound when each chat bubble appears
  - Scene 4 (Theme Flex) — gentle click when each theme swatch activates
  - Scene 5 (Outro) — one bell for logo payoff
- Restraint rule: audio must not compete with the UI. No aggressive hits, no stacked SFX. If a moment doesn't need sound, leave it silent.

## Storyboard

### Scene 1 — Hook — 3s
Dark warm background (coffee theme base). The Chatty logo icon (MessageSquare in a rounded-xl container, primary/10 background) fades in and settles center-screen. Text appears below: **"Real conversations."** (0.8s hold) then **"Real time."** (0.8s hold). Both lines in clean Inter, mixed-case, generous letter-spacing.
Sequential/interaction: yes — two text lines appear one after the other with a 0.3s stagger
Audio intent: quiet anticipation building, music bed fading in
Audio-coupled idea: none — let the music bed establish itself
Music: warm bed fading in, low volume
Transition mood: soft → Scene 2

### Scene 2 — Sign In — 3s
Recreated Chatty login page. Left half: the form with email field, password field, and "Sign In" button. The Lock icon sits above "Sign In" heading. Right half: the animated 3×3 grid of rounded squares (AuthImagePattern) with alternating pulse animation. Simulated typing in the email field: "alex@chatty.io" appears character by character. Then the Sign In button gets a subtle hover glow.
Sequential/interaction: yes — simulated typing in email field, ~8 characters per second
Audio intent: subtle activity, the product coming alive
Audio-coupled idea: typed characters with gentle key ticks from keyboard/ set (2-3 key sounds, not every character — every 3rd character to avoid clutter at polished tone)
Music: bed continues, still understated
Transition mood: soft crossfade → Scene 3

### Scene 3 — Chat Reveal — 5s
The main chat interface appears. Left: the Sidebar with 4 contacts — each with an avatar circle, name, and "Online"/"Offline" status. Two contacts have green online dots. A contact ("Sarah") gets selected (subtle highlight ring). Right: the ChatContainer fills with a conversation:
- Bubble 1 (chat-start): "Hey! How's it going?" — avatar, timestamp "2:14 PM"
- Bubble 2 (chat-end): "Doing great! Just shipped a new feature 🚀" — avatar, timestamp "2:14 PM"
- Bubble 3 (chat-start): An image message (a small photo thumbnail) with text "Check this out!"
The NavBar is visible at top: Chatty logo + Settings + Profile + Logout.
Sequential/interaction: yes — contact gets selected, then 3 chat bubbles appear one by one (~0.8s apart for readability)
Audio intent: the product doing its thing — this is the centerpiece
Audio-coupled idea: soft drop sound (interface/drop_001 or drop_002) when each bubble appears, matched to the visual entrance
Music: bed at full presence (0.30-0.35)
Transition mood: soft crossfade → Scene 4

### Scene 4 — Theme Flex — 4s
The Settings page: the 32-theme swatch grid (4×8 layout of small rounded color blocks). Below it, the live chat preview widget. Show 3-4 theme switches in quick succession:
1. coffee (current) → synthwave (purple/pink neon)
2. synthwave → nord (cool blue/gray)
3. nord → valentine (pink/rose)
The preview widget morphs colors each time — the chat header, bubbles, input, and send button all transform. The swatch grid itself is the visual anchor.
Sequential/interaction: yes — each theme swatch is "clicked" and the preview morphs. 3 themes switch at ~1.1s intervals.
Audio intent: satisfying visual transformation, the "wow" moment
Audio-coupled idea: gentle click (interface/click_003) when each theme swatch activates; snap to beat grid at 13.64, 14.73, 15.84
Music: bed continues
Transition mood: soft crossfade → Scene 5

### Scene 5 — Outro — 4s
Dark warm background. The Chatty logo (MessageSquare icon in primary/10 rounded container) scales in from 0.8→1.0 with a confident ease-out. **"Chatty"** appears in bold, large Inter below the icon. After 0.5s hold, the tagline fades up: **"32 themes. Image sharing. Live presence."** in smaller, lighter text. Hold the full composition for 1.5s. Gentle fade to black over final 0.5s.
Sequential/interaction: yes — logo scales in, name appears, then tagline fades up
Audio intent: confident landing, final beat
Audio-coupled idea: one bell (impactBell_heavy_004) when the logo fully lands; beat-lock to strong cue at 17.47s
Music: bed fading out over final 1.5s
Transition mood: fade to black (end)

**Music mood for this video:** warm, steady, clean — professional confidence
**Audio summary:** A low-volume music bed (vol-12, 0.30-0.35) fades in over the hook, sustains through the chat reveal and theme flex as the centerpiece, then fades out under the outro. 2-3 sparse key-tick sounds on the sign-in typing, soft drop sounds for chat bubble arrivals, gentle clicks for theme switches, and a single bell for the logo payoff. Audio-reactive glow breathes subtly on the chat container and logo. Total SFX count: ~8-10, all quiet and motion-matched.
