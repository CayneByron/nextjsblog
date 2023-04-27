import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        &#123; this too shall parse &#125;
      </h1>

    </section>
  )
}
