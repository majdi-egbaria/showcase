import { Layout, Tabs } from 'antd'
import { Outlet, useNavigate } from 'react-router'

const { Content } = Layout

function MainLayout(): React.JSX.Element {
  const navigate = useNavigate()
  return (
    <Layout style={{ height: '100vh', padding: '0 10px' }}>
      <Tabs
        type="line"
        items={[
          { key: '/', label: 'Home' },
          { key: '/create', label: 'Create' },
          { key: '/validate', label: 'Validate' },
          { key: '/about', label: 'About' }
        ]}
        onTabClick={(key) => {
          navigate(key)
        }}
      />
      <Content style={{ maxHeight: 'calc(100vh - 62px)', width: '100%', overflowY: 'auto' }}>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default MainLayout
