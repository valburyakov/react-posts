import { ChangeEvent, FormEvent, useState } from 'react';
import { PostModel } from '../models/post.model.ts';

interface AddPostProps {
  onAddPost: (post: PostModel) => void
}

export function AddPost({onAddPost}: AddPostProps) {

  const initialState = {
    title: '',
    description: '',
    author: '',
    previewUrl: '',
    id: Math.random()
  };
  const [newPost, setPostData] = useState<PostModel>(initialState);

  const setTitle = (e: ChangeEvent<HTMLInputElement>) => setPostData({...newPost, title: e.target.value});
  const setDescription = (e: ChangeEvent<HTMLTextAreaElement>) => setPostData({...newPost, description: e.target.value});
  const setAuthor = (e: ChangeEvent<HTMLInputElement>) => setPostData({...newPost, author: e.target.value});
  const setPreview = (e: ChangeEvent<HTMLInputElement>) => setPostData({...newPost, previewUrl: e.target.value});

  function submit(event: FormEvent) {
    event.preventDefault();
    onAddPost(newPost);
    setPostData(initialState);
  }

  return (
    <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={(e)=> submit(e)}>
      <label>
        Title:
        <input type="text" value={newPost.title} onChange={setTitle} />
      </label>
      <label>
        Description:
        <textarea value={newPost.description} onChange={setDescription} />
      </label>
      <label>
        Preview:
        <input type="text" value={newPost.previewUrl} onChange={setPreview}/>
      </label>
      <label>
        Author:
        <input type="text" value={newPost.author} onChange={setAuthor}/>
      </label>
      <button style={{alignSelf: 'flex-start'}} type="submit">Create</button>
    </form>
  )
}
