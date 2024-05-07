"use client";

import { Menu } from "antd";
import type { MenuProps } from "antd";
import { sidebarTree } from "@/common/main/layout/sidebar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MainLayoutSidebar = () => {
  const pathname = usePathname();

  const [defaultKey, setDefaultKey] = useState<string[]>([
    window.location.pathname,
  ]);

  //   const handleClickMenuItem: MenuProps["onClick"] = ({ key }) => {
  //     setDefaultKey([key]);
  //   };

  useEffect(() => {
    setDefaultKey([pathname]);
  }, [pathname]);

  return (
    <Menu
      theme="light"
      mode="inline"
      selectedKeys={defaultKey}
      items={sidebarTree}
      className="max-w-[260px]"
    />
  );
};

export default MainLayoutSidebar;
