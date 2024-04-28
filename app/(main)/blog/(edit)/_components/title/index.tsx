import { FormEventHandler } from "react";

export interface EditContentTitleProps {
  content: string;
  onInput: FormEventHandler<HTMLInputElement>;
}

const EditContentTitle: React.FC<EditContentTitleProps> = (props) => {
  return (
    <div className="w-full h-16 px-4 my-4 leading-16 border-b border-primary">
      <input
        value={props.content}
        type="text"
        placeholder="标题"
        className="w-full h-full text-2xl outline-none"
        onInput={props.onInput}
      />
    </div>
  );
};
export default EditContentTitle;
