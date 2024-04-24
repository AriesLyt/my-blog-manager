"use client";
import Quill from "quill";
import { Delta } from "quill/core";
import { useEffect, useState } from "react";

const BlogEditPage = () => {
  const [quillIns, setQuillIns] = useState<InstanceType<typeof Quill> | null>(
    null
  );

  useEffect(() => {
    setQuillIns(
      new Quill("#editor", {
        //   debug: "info",
        modules: {
          toolbar: true,
        },
        theme: "snow",
      })
    );
    return () => {
      setQuillIns(null);
      const wrapper = document.querySelector("#editor-wrapper");
      if (!wrapper) return;
      console.log(wrapper.querySelector('div[role="toolbar"]'));
      wrapper.querySelector('div[role="toolbar"]')?.remove();
      const dom = document.querySelector("#editor");
      if (!dom) return;
      dom.innerHTML = "";
    };
  }, []);

  return (
    <div id="editor-wrapper" className="w-full">
      <div id="editor">edit</div>
    </div>
  );
};

export default BlogEditPage;
