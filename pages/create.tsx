import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import 'bootstrap/dist/css/bootstrap.css'


const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [summary, setSummary] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [articleUrl, setarticleUrl] = useState("");
 

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content, summary, imageUrl, articleUrl };
      await fetch(`/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/drafts");
    } catch (error) {
      console.error(error);
    }
  }; 

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>New Draft</h1>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          /><br />
          <input
            autoFocus
            onChange={(e) => setContent(e.target.value)}
            placeholder="Description"
            type="text"
            value={content}
          /><br />
          <textarea
            cols={25}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Write a summary of your draft"
            rows={4}
            value={summary}
          /><br />
          <input
            autoFocus
            onChange={(e) => setimageUrl(e.target.value)}
            placeholder="image link"
            type="text"
            value={imageUrl}
          /><br />
          <input
            autoFocus
            onChange={(e) => setarticleUrl(e.target.value)}
            placeholder="Link to article"
            type="text"
            value={articleUrl}
          /><br />
          <input disabled={!content || !title} type="submit" value="Create" />
          <a className="back" href="#" onClick={() => Router.push("/")}>
            or Cancel
          </a>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    // </Layout>
  );
};

export default Draft;
