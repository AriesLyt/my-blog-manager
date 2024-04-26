'use client'
import './index.css'

import Quill from 'quill'
import { useEffect, useState } from 'react'

import uploadImage from './modules/upload-image'
import { Delta } from 'quill/core'

const SizeClass: any = Quill.import('attributors/class/size')
SizeClass.whitelist = [...SizeClass.whitelist, '40px']
console.log(SizeClass)
Quill.register(SizeClass, true)

const SizeStyle: any = Quill.import('attributors/style/size')
SizeStyle.whitelist = [...SizeStyle.whitelist, '40px']
console.log(SizeStyle)
Quill.register(SizeStyle, true)

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image', 'formula'],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  [{ direction: 'rtl' }], // text direction

  [{ size: ['10px', false, '18px', '32px', '40px'] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: ['Open_sans'] }],
  [{ align: [] }],

  ['clean'] // remove formatting button
]

const Editor = () => {
  const [editorInstance, setEditorInstance] = useState<InstanceType<
    typeof Quill
  > | null>(null)

  const clearToolbar = (container: Element) => {
    const toolbar = container?.querySelector('.ql-toolbar')
    if (toolbar) {
      toolbar.remove()
    }
  }

  const initEditor = () => {
    setEditorInstance(
      new Quill('#editor', {
        debug: 'info',
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              image: uploadImage
            }
          }
        },
        theme: 'snow'
      })
    )
  }

  const destroyEditor = () => {
    const wrapper = document.querySelector('#editor-wrapper')
    if (wrapper) {
      clearToolbar(wrapper)
      const editor = wrapper.querySelector('#editor')
      if (editor) {
        editor.innerHTML = ''
      }
    }
    setEditorInstance(null)
  }

  useEffect(() => {
    initEditor()
    return () => {
      destroyEditor()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div id="editor-wrapper" className="w-full">
      <div id="editor"></div>
    </div>
  )
}

export default Editor
