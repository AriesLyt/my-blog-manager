import type { MenuProps } from "antd";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

const pathToLink = (items: { label: string; key: string }): MenuItem => {
  return {
    label: <Link href={items.key}>{items.label}</Link>,
    key: items.key,
  };
};

export const sidebarTree: MenuProps["items"] = [
  pathToLink({
    label: "首页",
    key: "/",
  }),
  {
    label: "文章",
    key: "blog",
    children: [
      pathToLink({
        label: "列表",
        key: "/blog/list",
      }),
      pathToLink({
        label: "标签",
        key: "/blog/tag",
      }),
    ],
  },
];
