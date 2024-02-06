import React from "react";
import { useParams } from "react-router-dom";

const TargetPage = () => {
  const { articleId } = useParams();
  console.log("Article ID from URL:", articleId);

  return (
    <div>
      <h1>Target Page</h1>
    </div>
  );
};

export default TargetPage;
