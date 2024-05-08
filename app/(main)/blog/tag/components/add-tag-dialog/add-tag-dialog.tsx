import { Button, Form, Input, Modal } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";

interface FormItemType {
  tagName: string;
  tagDesc: string;
}

export interface AddBlogTagDialogRef {
  handleOpen(id: string): void;
}

const AddBlogTagDialog = forwardRef<AddBlogTagDialogRef>((_, ref) => {
  const [form] = Form.useForm<FormItemType>();
  const [title, setTitle] = useState("新增标签");
  const [visible, setVisible] = useState(false);

  const handleOpen = (id: string) => {
    if (id) {
      setTitle("修改标签");
    }
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };

  const handleSubmit = (value: FormItemType) => {
    console.log(value);
  };

  useImperativeHandle(ref, () => ({
    handleOpen,
  }));

  return (
    <>
      <Modal
        title={title}
        open={visible}
        onCancel={handleClose}
        onOk={() => {
          form.submit();
        }}
      >
        <Form form={form} labelCol={{ span: 4 }} onFinish={handleSubmit}>
          <Form.Item<FormItemType>
            label="标签名"
            name="tagName"
            rules={[{ required: true, message: "输入名称" }]}
          >
            <Input autoComplete="off" />
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
