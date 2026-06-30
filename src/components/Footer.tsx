import { ArrowUpRight, Code2 } from 'lucide-react'
import { track } from '../lib/analytics'
import { CONTACT_HREF } from './TopBar'

const REPO_HREF = 'https://github.com/bohueilin/loopforge'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <img src="/favicon.svg" alt="" width="34" height="34" />
        <div>
          <strong>LoopForge</strong>
          <p>
            The Enterprise Agent Repair OS — detect, diagnose, fix, and prove a broken production AI
            agent is safe, the whole loop in ~1.4s on Cerebras.
          </p>
        </div>
      </div>

      <div className="footer-actions">
        <a
          className="footer-cta"
          href={CONTACT_HREF}
          onClick={() => track('book_teardown', { location: 'footer' })}
        >
          Book a 20-min teardown
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <a className="footer-link" href={REPO_HREF} target="_blank" rel="noreferrer">
          <Code2 size={14} aria-hidden="true" />
          Source
        </a>
        <a className="footer-link" href="/privacy">
          Privacy &amp; Cookies
        </a>
      </div>

      <p className="footer-credit">
        Built by Bo-Huei Lin for the Cerebras × Google DeepMind Gemma 4 hackathon — Track 3,
        Enterprise Impact. Powered by Gemma 4 on Cerebras.
      </p>
    </footer>
  )
}
