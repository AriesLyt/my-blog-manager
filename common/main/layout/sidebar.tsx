import type { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

const pathToLink = (items: { label: string; key: string }): MenuItem => {
  return {
    label: <a href={items.key}>{items.label}</a>,
    key: items.key
  }
}

export const sidebarTree: MenuProps['items'] = [
  pathToLink({
    label: '首页',
    key: '/'
  }),
  {
    label: '文章',
    key: 'blog',
    children: [
      pathToLink({
        label: '列表',
        key: '/blog/list'
      })
    ]
  }
]
