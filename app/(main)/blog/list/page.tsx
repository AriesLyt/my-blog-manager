import { Button } from 'antd'
import Link from 'next/link'

const BlogListPage = () => {
  return (
    <div>
      <div>
        <Link href="/blog/edit">
          <Button>新建</Button>
        </Link>
      </div>
      <div></div>
    </div>
  )
}

export default BlogListPage
