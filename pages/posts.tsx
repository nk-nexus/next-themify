import { useEffect, useState } from "react";

interface IPost {
  id: number;
  title: string;
}

function Posts() {
  const [posts, setPosts] = useState<IPost[]>([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       alert("posts are aready, update state!");
  //       setPosts(data);
  //       console.log(data);
  //     });
  // }, []);

  useEffect(() => {
    let isCancelled = false;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        if (!isCancelled) {
          alert("posts are aready, update state!");
          setPosts(data);
          console.log(data);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div>
      {posts?.map((p) => (
        // eslint-disable-next-line react/no-unknown-property
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}

export default Posts;
