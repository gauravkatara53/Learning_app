import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "Just finished a great book on React!",
      timestamp: "2024-06-21 14:32:00",
      comments: [],
      default: true,
    },
    {
      id: 2,
      content: "Looking forward to the upcoming JavaScript conference.",
      timestamp: "2024-06-20 11:15:00",
      comments: [],
      default: true,
    },
    {
      id: 3,
      content: "Started a new project using TypeScript. Any tips?",
      timestamp: "2024-06-19 09:45:00",
      comments: [],
      default: true,
    },
  ]);
  const [postContent, setPostContent] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [showFullContent, setShowFullContent] = useState(false);

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (postContent.trim()) {
      const newPost = {
        id: Date.now(),
        content: postContent,
        timestamp: new Date().toLocaleString(),
        comments: [],
        default: false,
      };
      setPosts([newPost, ...posts]);
      setPostContent("");
    }
  };

  const handleAddComment = (postId, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { text: comment, timestamp: new Date().toLocaleString() },
              ],
            }
          : post
      )
    );
    setCommentContent("");
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        {!showFullContent && (
          <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-200 to-gray-400">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-800">Coming Soon</h1>
              <p className="mt-4 text-2xl text-gray-600">
                We are working hard to bring you something amazing. Stay tuned!
              </p>
              <button
                onClick={() => setShowFullContent(true)}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
              >
                View Trial Mode
              </button>
            </div>
          </div>
        )}

        {showFullContent && (
          <>
            <h1 className="text-3xl font-bold mb-6 text-center">Community</h1>
            <form
              onSubmit={handleCreatePost}
              className="mb-6 bg-white p-6 rounded-lg shadow-md"
            >
              <textarea
                className="w-full p-4 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
                placeholder="Share something with the community..."
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
              >
                Post
              </button>
            </form>

            <div className="space-y-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 border rounded-lg shadow-md bg-white"
                >
                  <p className="text-lg">{post.content}</p>
                  <p className="text-xs text-gray-500 mt-2">{post.timestamp}</p>
                  <div className="flex items-center mt-4">
                    {!post.default && (
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="text-red-500 mr-4 hover:underline"
                      >
                        Delete
                      </button>
                    )}
                    <button className="text-blue-500 hover:underline">
                      Share
                    </button>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleAddComment(post.id, commentContent);
                    }}
                    className="mt-4"
                  >
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Add a comment..."
                      value={commentContent}
                      onChange={(e) => setCommentContent(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg transition duration-200"
                    >
                      Comment
                    </button>
                  </form>

                  {post.comments.map((comment, index) => (
                    <div key={index} className="mt-4 p-2 border-t">
                      <p>{comment.text}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {comment.timestamp}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Community;
