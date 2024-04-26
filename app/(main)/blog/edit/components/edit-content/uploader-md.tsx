import { Upload } from 'antd'
import { useState } from 'react'

const EditContentUploadMd = () => {
  const [s, ss] = useState(1)
  return (
    <>
      <span
        onClick={() => {
          ss(s + 1)
        }}
      >
        {s}
      </span>
      <Upload.Dragger>upload</Upload.Dragger>
    </>
  )
}

export default EditContentUploadMd
