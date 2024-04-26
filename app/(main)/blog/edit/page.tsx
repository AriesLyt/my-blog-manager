// import Editor from '@/components/global/editor/quill'
import EditContent from './components/edit-content'

const BlogEditPage = () => {
  return (
    <div className="w-full p-4">
      <p>编辑</p>
      <div className="w-full h-16 px-4 my-4 leading-16 border-b border-primary">
        <input
          type="text"
          placeholder="标题"
          className="w-full h-full text-2xl outline-none"
        />
      </div>
      <EditContent />
      {/* <Editor /> */}
    </div>
  )
}

export default BlogEditPage
