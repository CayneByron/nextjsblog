import Link from 'next/link';
import Avatar from '../components/avatar';
import DateComponent from '../components/date';
import PreviewImage from './preview-image';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="grid grid-cols-4 gap-8">
      <div className="mb-5 col-span-1 rounded">
        <PreviewImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="mb-5 col-span-3">
        <h6 className="text-2xl mb-3 leading-snug">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h6>
        <div className="text-base mb-4">
          <DateComponent dateString={date} />
        </div>
        <p className="text-base leading-relaxed mb-4">{excerpt}…</p>
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
    </div>
  )
}
