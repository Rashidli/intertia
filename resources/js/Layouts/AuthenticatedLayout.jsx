// resources/js/Layouts/AuthenticatedLayout.jsx

import { Layout, Menu } from 'antd';
import {
    HomeOutlined,
    ApartmentOutlined,
} from '@ant-design/icons';
import { Link, usePage } from '@inertiajs/react';

const { Header, Content, Sider, Footer } = Layout;

export default function AuthenticatedLayout({ children, header }) {
    const { auth } = usePage().props;

    // Yeni Menu strukturu (items array)
    const menuItems = [
        {
            key: 'dashboard',
            icon: <HomeOutlined />,
            label: <Link href={route('dashboard')}>Dashboard</Link>,
        },
        {
            key: 'companies',
            icon: <ApartmentOutlined />,
            label: <Link href={route('companies.index')}>Şirkətlər</Link>,
        },
        {
            key: 'products',
            icon: <ApartmentOutlined />,
            label: <Link href={route('products.index')}>Məhsullar</Link>,
        },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider breakpoint="lg" collapsedWidth="0">
                <div className="text-white text-center text-lg font-bold py-4">
                    Admin Panel
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['dashboard']}
                    items={menuItems}
                />
            </Sider>

            <Layout>
                <Header className="bg-white shadow px-6">
                    <div className="text-xl font-semibold">{header}</div>
                </Header>

                <Content className="m-6">
                    <div className="p-6 bg-white rounded shadow-sm min-h-[300px]">
                        {children}
                    </div>
                </Content>

                <Footer className="text-center">© 2025 Brendoo Panel</Footer>
            </Layout>
        </Layout>
    );
}
