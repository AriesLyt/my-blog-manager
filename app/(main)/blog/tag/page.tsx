"use client";

import { Button } from "antd";
import AddBlogTagDialog, {
  type AddBlogTagDialogRef,
} from "./components/add-tag-dialog/add-tag-dialog";

import { useRef } from "react";

const BlogTagPage = () => {
  const addBlogTagDialogRef = useRef<AddBlogTagDialogRef>(null);

  const handleClickAddTag = () => {
    addBlogTagDialogRef.current?.handleOpen();
  };

  return (
    <>
      <Button onClick={handleClickAddTag}>新增标签</Button>
      <AddBlogTagDialog ref={addBlogTagDialogRef} />
    </>
  );
};

export default BlogTagPage;
