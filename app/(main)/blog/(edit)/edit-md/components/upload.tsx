import { Upload, UploadProps } from "antd";
import { RcFile } from "antd/es/upload";
import { forwardRef, useImperativeHandle, useState } from "react";
import markdownIt from "markdown-it";

export interface UploadMdProps {
  onChange(content: ReadPromise): void;
}

interface ReadPromise {
  name: string;
  result: string;
}

const md = markdownIt();

const UploadMd: React.FC<UploadMdProps> = (props) => {
  const readFile = (file: RcFile) => {
    return new Promise<ReadPromise | null>((resolve) => {
      const fileLoader = new FileReader();
      fileLoader.onload = (event) => {
        if (event.target?.result) {
          resolve({
            name: file.name,
            result: event.target?.result as string,
          });
        } else {
          resolve(null);
        }
      };
      fileLoader.readAsText(file);
    });
  };

  const beforeUpload: UploadProps["beforeUpload"] = (file) => {
    readFile(file).then((res) => {
      if (res) {
        const content = md.render(res.result);
        props.onChange({
          name: res.name,
          result: content,
        });
      }
    });
    return false;
  };

  const uploadProps: UploadProps = {
    maxCount: 1,
    accept: ".md",
    beforeUpload,
  };

  return (
    <>
      <Upload.Dragger {...uploadProps} className="block w-[300px] h-24">
        <span>点击或者拖拽进入</span>
      </Upload.Dragger>
      {/* <div dangerouslySetInnerHTML={{ __html: mdHtml }}></div> */}
    </>
  );
};

export default UploadMd;
