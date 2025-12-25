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

  useEffect(() => {
    async function getData() {
      const response = await fetch(url)
      const json = await response.json()
      setFinalData(json)
    }

    getData()
  }, [url])

  return {
    finalData
  }
}
