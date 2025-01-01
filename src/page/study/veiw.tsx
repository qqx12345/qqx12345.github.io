import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import styles from "./view.module.css";
const ArticlePreview = () => {
  const [content, setContent] = useState("");
  const {article} =useParams();
    useEffect(() => {
    if (article) {
      fetch(`/${article}`)
        .then((res) => res.text())
        .then((text) => setContent(text))
        .catch((error) => console.error("Error loading markdown:", error));
    }
  }, [article]);
  
  return (
    <div className={styles.show}>
      {article ? (
        <ReactMarkdown>{content}</ReactMarkdown>
      ) : (
        <p>Select an article to preview</p>
      )}
    </div>
  );
};

export default ArticlePreview;
