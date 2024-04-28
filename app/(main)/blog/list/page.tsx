import { Button } from "antd";
import Link from "next/link";

const BlogListPage = () => {
  return (
    <div>
      <div>
        <Link href="/blog/edit-md">
          <Button>新建Md解析文档</Button>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default BlogListPage;
