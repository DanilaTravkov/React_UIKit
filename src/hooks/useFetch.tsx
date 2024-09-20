import { useState, useEffect, useRef } from "react"

interface Post {
    id: number
    title: string
  }

interface ParamsProps {
    [key: string]: string | number | undefined
}

interface useFetchReturn {
    isLoading: boolean;
    fetchError: any;
    posts: Post[];
}

export const useFetch = (endpoint: string, params: ParamsProps): useFetchReturn => {
    const [isLoading, setIsLoading] = useState(false)
    const [fetchError, setFetchError] = useState()
    const [posts, setPosts] = useState<Post[]>([])
  
    const abortControllerRef = useRef<AbortController | null>(null)
  
    useEffect(() => {
      const fetchPosts = async () => {
        abortControllerRef.current?.abort()
        abortControllerRef.current = new AbortController();
  
        setIsLoading(true)  
        try {
          const response = await fetch(`${endpoint}/posts?page=${params.paginationPage}`, {
            method: "GET",
            signal: abortControllerRef.current?.signal,
          });
          const posts = await response.json() as Post[];
          setPosts(posts);
        } catch(error) {
          if (error.name === "AbortError") {
            console.log("Aborted")
            return
          }
          setFetchError(error)
        } finally {
          setIsLoading(false)
        }
      } 
      fetchPosts();
    }, [params.paginationPage]);
    
    return {isLoading, fetchError, posts}
}