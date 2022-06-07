import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  imageUrl: string;
  articleUrl: string;
  published: boolean;
};

const Post: React.FC<{ fiction: PostProps }> = ({ fiction }) => {
  const authorName = fiction.author ? fiction.author.name : "Unknown author";
  return (
      <div onClick={() => Router.push("/p/[id]", `/p/${fiction.id}`)}>
        <h2>{fiction.title}</h2>
        <small>By {authorName}</small>
        <ReactMarkdown children={fiction.content} />
        <a href={fiction.articleUrl}><img src={fiction.imageUrl} alt={fiction.title} width={150} height="auto" /></a>
        <style jsx>{`
          div {
            color: inherit;
            padding: 2rem;
          }
        `}</style>
    </div>
  );
};

export default Post;
