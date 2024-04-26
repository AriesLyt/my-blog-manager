'use client'
import { Group, RadioChangeEvent } from 'antd/es/radio'
import { memo, useState } from 'react'
import { radioGroup, radioGroupValues } from '@/common/main/blog/edit'
import EditContentUploadMd from './uploader-md'

const UploadMd = memo(EditContentUploadMd)

const EditContent = () => {
  const [type, setType] = useState<string>(radioGroupValues.md)

  //   TODO: 通过 display none 来控制展示哪个
  const switchComponents = (type: string) => {
    switch (type) {
      case radioGroupValues.rich:
        return <div>rich</div>
      default:
        return <UploadMd></UploadMd>
    }
  }

  const handleChangeRadio = (event: RadioChangeEvent) => {
    setType(event.target.value)
  }

  return (
    <div>
      <Group
        buttonStyle="solid"
        defaultValue={type}
        options={radioGroup}
        optionType="button"
        onChange={handleChangeRadio}
      ></Group>
      <div>{switchComponents(type)}</div>
    </div>
  )
}

export default EditContent
