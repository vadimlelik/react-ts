import { useGetPostsQuery } from "./entities/post";

import Button from "./components/Button";

function App() {
  const { data, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      {data?.map((post) => (
        <div key={post.id}>
          {post.title}
          <Button id={post.id}>Delete</Button>
        </div>
      ))}
    </>
  );
}

export default App;
