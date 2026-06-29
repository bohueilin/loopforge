import { ArrowUpRight } from 'lucide-react'

// Swap this for a Calendly/booking link when you have one.
export const CONTACT_HREF = 'mailto:bohueilin@gmail.com?subject=LoopForge%20teardown'

export function TopBar() {
  return (
    <header className="topbar">
      <a className="topbar-brand" href="#top" aria-label="LoopForge home">
        <img className="topbar-mark" src="/favicon.svg" alt="" width="26" height="26" />
        <span className="topbar-word">
          LoopForge
          <em>Enterprise Agent Repair OS</em>
        </span>
      </a>
      <a className="topbar-cta" href={CONTACT_HREF}>
        Book a teardown
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </header>
  )
}
