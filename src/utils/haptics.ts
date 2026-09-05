/**
 * Synthesised UI feedback — a short filtered sine "tick" played on hover.
 * Nothing is downloaded; every sound is generated with the Web Audio API.
 */

const THROTTLE_MS = 35
const MUTE_KEY = 'muted'

let ctx: AudioContext | null = null
let master: GainNode | null = null
let lastPlayed = 0

const getContext = () => {
  if (ctx) return ctx
  const Ctor =
    window.AudioContext ??
    (window as unknown as { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext
  if (!Ctor) return null
  ctx = new Ctor()
  master = ctx.createGain()
  master.gain.value = 1
  master.connect(ctx.destination)
  return ctx
}

/** Browsers start the context suspended until the page sees a real gesture. */
export const unlock = () => {
  const context = getContext()
  if (context?.state === 'suspended') context.resume()
}

const running = () => {
  const context = getContext()
  return context?.state === 'running' ? context : null
}

export const isMuted = () => {
  try {
    return localStorage.getItem(MUTE_KEY) === '1'
  } catch {
    return false
  }
}

export const setMuted = (muted: boolean) => {
  try {
    localStorage.setItem(MUTE_KEY, muted ? '1' : '0')
  } catch {}
}

/** Pointer-driven sound only makes sense with a real hovering cursor. */
export const canPlay = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches

interface TickOptions {
  frequency?: number
  gain?: number
  duration?: number
  filter?: number
  glideTo?: number
}

const tick = ({
  frequency = 184,
  gain = 0.05,
  duration = 0.05,
  filter = 540,
  glideTo = 0,
}: TickOptions = {}) => {
  const context = running()
  if (!context || !master || isMuted()) return

  const start = context.currentTime + 0.001
  const osc = context.createOscillator()
  const envelope = context.createGain()
  const lowpass = context.createBiquadFilter()

  lowpass.type = 'lowpass'
  lowpass.frequency.value = filter

  osc.type = 'sine'
  osc.frequency.setValueAtTime(frequency, start)
  if (glideTo)
    osc.frequency.exponentialRampToValueAtTime(glideTo, start + duration)

  // Fast attack, exponential decay — reads as a tap rather than a beep.
  envelope.gain.setValueAtTime(0, start)
  envelope.gain.linearRampToValueAtTime(gain, start + 0.005)
  envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration)

  osc.connect(lowpass).connect(envelope).connect(master)
  osc.start(start)
  osc.stop(start + duration + 0.03)
}

/** Rapid pointer sweeps across a list of links would otherwise machine-gun. */
export const hoverTick = () => {
  const now = performance.now()
  if (now - lastPlayed < THROTTLE_MS) return
  lastPlayed = now
  tick()
}
