'use client'

import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { sidebarTree } from '@/common/layout/main/sidebar'

const MainLayoutSidebar = () => {
  const handleClickMenuItem: MenuProps['onClick'] = ({
    item,
    key,
    keyPath,
    domEvent
  }) => {
    console.log(item, key, keyPath, domEvent)
  }

  return (
    <Menu
      theme="light"
      mode="inline"
      onClick={handleClickMenuItem}
      items={sidebarTree}
      className="max-w-[260px]"
    />
  )
}

export default MainLayoutSidebar
