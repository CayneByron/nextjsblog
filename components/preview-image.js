import ContentfulImage from './contentful-image'
import Link from 'next/link'
import cn from 'classnames'

export default function PreviewImage({ title, url, slug }) {
  const image = (
    <ContentfulImage
      width={400}
      height={125}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', 'rounded-lg', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={url}
    />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
