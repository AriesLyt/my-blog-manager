import { Range } from 'quill'
import Quill, { Delta } from 'quill/core'

/**
 * 将文件从File转化成base64
 * @param files 需要转化的文件列表
 * @returns { Promise<string[]> }
 */
const transformFile2Base = (files: FileList): Promise<string[]> => {
  const promises = Array.from(files).map((file) => {
    return new Promise<string>((resolve) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        resolve(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    })
  })
  return Promise.all(promises)
}

/**
 * 内容更新器
 * @param range
 * @param files
 * @returns
 */
const updater = (range: Range, files: string[]) => {
  console.log(range, files)
  return files.reduce((prev, cur) => {
    return prev.insert(
      {
        image: cur
      },
      {
        style: 'width: 100px;'
      }
    )
  }, new Delta().retain(range.index).delete(range.length))
}

function uploadImage(this: any) {
  let fileSelect: HTMLInputElement =
    this.container.querySelector('.upload-image')

  if (fileSelect == null) {
    fileSelect = document.createElement('input')
    fileSelect.type = 'file'

    fileSelect.style.setProperty('display', 'none')
    fileSelect.classList.add('upload-image')
    fileSelect.addEventListener('change', async (value) => {
      console.dir(fileSelect)
      if (fileSelect.files) {
        const files = await transformFile2Base(fileSelect.files)
        console.log(files)
        const [range] = this.quill.selection.getRange()
        this.quill.updateContents(updater(range, files), Quill.sources.API)
      }
    })
    this.container.appendChild(fileSelect)
  }

  fileSelect.click()
}

export default uploadImage
