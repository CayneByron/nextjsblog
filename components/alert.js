import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div id="icon-bar" className='flex-container'>
          <div><a href='https://www.instagram.com/caynebyron/' target="_blank"><img src="https://res.cloudinary.com/di12po0kz/image/upload/v1682565220/instagram_ulnzfm.png" alt="Girl in a jacket" width="20" height="20"></img></a></div>
          <div><a href='https://www.linkedin.com/in/caynebutt/' target="_blank"><img src="https://res.cloudinary.com/di12po0kz/image/upload/v1682565738/linkedin_lxyrck.png" alt="Girl in a jacket" width="20" height="20"></img></a></div>
          <div><a href='https://github.com/caynebyron' target="_blank"><img src="https://res.cloudinary.com/di12po0kz/image/upload/v1682565738/github_efabo0.png" alt="Girl in a jacket" width="20" height="20"></img></a></div>
          <div><a href='https://drive.google.com/file/d/1Cu-iPZ-mscUCG7ImhaM7vK8XX4iNPLhf/view?usp=share_link' target="_blank"><img src="https://res.cloudinary.com/di12po0kz/image/upload/v1682566308/resume_mkm7iq.png" alt="Girl in a jacket" width="20" height="20"></img></a></div>
        </div>
      </Container>
    </div>
  )
}
