"use client";

import { useState } from "react";
import { useSession } from "next-auth/react"; //Know which user is logged in
import { useRouter } from "next/navigation";

import Form from "@components/Form";
import { findDOMNode } from "react-dom";

const CreatePrompt = () => {
  const [Submitting, setSubmitting] = useState(false);
  const [Post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={Post}
      setPost={setPost}
      Submitting={Submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
