import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-14 flex flex-col lg:flex-row items-center">
          <h3 className="text-2xl lg:text-2xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Want your own blog, or maybe even an app? Contact me at <a href="mailto:caynebyron@gmail.com"><span id="email-text">caynebyron@gmail.com</span></a>
          </h3>
        </div>
      </Container>
    </footer>
  )
}
