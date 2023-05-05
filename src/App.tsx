import { useState } from 'react'
import './App.css'
import { Header } from './Header/Header.tsx';
import { PostModel } from './models/post.model.ts';
import { initialPosts } from './models/data.ts';
import { PostItem } from './PostItem/PostItem.tsx';
import { AddPost } from './AddPost/AddPost.tsx';

function App() {
  const [posts, setPosts] = useState<PostModel[]>(initialPosts);
  const [showForm, setShowForm] = useState(false);

  function deletePost(id: number) {
    setPosts(prevState => prevState.filter(post => post.id !== id));
  }

  function addPost(newPost: PostModel) {
    setPosts([...posts, newPost]);
  }

  return (
    <>
     <Header/>
      <div className="toolbar">
        <span><strong>All Posts</strong> </span>
        <button onClick={() => setShowForm(!showForm) }>Add Post</button>
      </div>
      <div className="card-list">
        { posts.map(post => <PostItem key={post.id} post={post} onPostDelete={deletePost}/>) }
      </div>
      { showForm && <AddPost onAddPost={addPost}/> }
      <footer>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </footer>
    </>
  )
}

export default App
