"use client";
// import Editor from '@/components/global/editor/quill'
import { ChangeEvent, FormEventHandler, useState } from "react";
import EditContentTitle from "../_components/title";
import UploadMd, { UploadMdProps } from "./components/upload";

const BlogEditPage = () => {
  const [title, setTitle] = useState("");

  const [md, setMd] = useState("");

  const handleInput: FormEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.currentTarget.value);
  };

  const handleUpdateUpload: UploadMdProps["onChange"] = (res) => {
    if (!title) setTitle(res.name);
    setMd(res.result);
  };

  return (
    <div className="w-full p-4">
      <p>md解析编辑</p>
      <EditContentTitle content={title} onInput={handleInput} />
      <UploadMd onChange={handleUpdateUpload} />
      {/* <Editor /> */}
    </div>
  );
};

export default BlogEditPage;
