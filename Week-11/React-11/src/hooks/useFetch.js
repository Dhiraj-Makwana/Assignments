import { useState, useEffect } from "react";

//custom hook
export function usePostTitle() {
  const [post, setPost] = useState({});

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const json = await response.json();
      setPost(json);
    }

    getPosts();
  }, []);

  return post.title;
}

export function useFetch(url) {
  const [finalData, setFinalData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      setLoading(true)
      const response = await fetch(url)
      const json = await response.json()
      setFinalData(json)
      setLoading(false)
    }

    getData()
  }, [url])

  return {
    finalData,
    loading
  }
}
