'use client'
import Quill from 'quill'
import { useEffect } from 'react'

const BlogEditPage = () => {
  useEffect(() => {
    const quill = new Quill('#editor', {
      debug: 'info',
      modules: {
        toolbar: true
      },
      theme: 'snow'
    })
  }, [])

  return (
    <div className="w-full">
      <div id="editor-toolbar">
        <span className="ql-formats">
          <button className="ql-bold"></button>
        </span>
      </div>
      <div id="editor">edit</div>
      <div id="editor1">edit</div>
    </div>
  )
}

export default BlogEditPage
