import { PostModel } from '../models/post.model.ts';

interface PostItemProps {
  post: PostModel,
  onPostDelete: (id: number) => void
}

export function PostItem({ post, onPostDelete }: PostItemProps) {

  const divStyle = {
    position: 'relative',
    backgroundImage: 'url(' + post.previewUrl + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '200px',
    width: '100%'
  } as const;

  const articleStyle = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    border: '1px solid #eaeaea',
    boxShadow: '0 0.5rem 1.2rem rgba(0,0,0,.2)',
    padding: '0.75rem 1.25rem'
  } as const;

  return (
    <article style={articleStyle}>
      <div style={divStyle}>
        <button style={{position: 'absolute', right: 0, background: 'white'}} onClick={() => onPostDelete(post.id)}>&times;</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>{post.title}</span>
        <span>{post.author}</span>
      </div>
    </article>
  )
}
