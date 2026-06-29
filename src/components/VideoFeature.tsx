import type { ReactNode } from 'react'

type VideoFeatureProps = {
  src: string
  kicker: string
  title: ReactNode
  caption?: string
  reverse?: boolean
  children: ReactNode
}

export function VideoFeature({ src, kicker, title, caption, reverse, children }: VideoFeatureProps) {
  return (
    <section className={reverse ? 'video-feature reverse' : 'video-feature'}>
      <figure className="video-feature-media">
        <video src={src} autoPlay muted loop playsInline preload="metadata" />
        {caption ? <figcaption>{caption}</figcaption> : null}
      </figure>
      <div className="video-feature-copy">
        <p className="section-kicker">{kicker}</p>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  )
}
