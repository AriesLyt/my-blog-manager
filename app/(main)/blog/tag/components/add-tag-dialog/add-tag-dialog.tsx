import { Button, Form, Input, Modal } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";

interface FormItemType {
  tagName: string;
  tagDesc: string;
}

export interface AddBlogTagDialogRef {
  handleOpen(): void;
}

const AddBlogTagDialog = forwardRef<AddBlogTagDialogRef>((_, ref) => {
  const [form] = Form.useForm<FormItemType>();
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setVisible(true);
  };

  useImperativeHandle(ref, () => ({
    handleOpen,
  }));

  return (
    <>
      <Modal
        title="新增标签"
        open={visible}
        onOk={() => {
          form.submit();
        }}
      >
        <Form
          form={form}
          labelCol={{ span: 4 }}
          onFinish={(value) => {
            console.log(value);
          }}
        >
          <Form.Item<FormItemType> label="标签名" name="tagName">
            <Input />
          </Form.Item>
          <Form.Item<FormItemType> label="标签描述" name="tagDesc">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
});

export default AddBlogTagDialog;
