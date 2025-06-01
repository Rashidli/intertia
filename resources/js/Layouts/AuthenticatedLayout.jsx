// resources/js/Layouts/AuthenticatedLayout.jsx

import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    LogoutOutlined,
    ApartmentOutlined,
    HomeOutlined,
    DownOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, Dropdown, Space, Avatar, theme } from 'antd';
import { Link, usePage } from '@inertiajs/react';

const { Header, Sider, Content } = Layout;

export default function AuthenticatedLayout({ children }) {
    const { auth } = usePage().props;
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const sidebarItems = [
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

    const userMenu = {
        items: [
            {
                key: 'profile',
                icon: <UserOutlined />,
                label: <Link href={route('profile.edit')}>Profil</Link>,
            },
            {
                type: 'divider',
            },
            {
                key: 'logout',
                icon: <LogoutOutlined />,
                label: (
                    <Link href={route('logout')} method="post" >
                        <Button icon={<LogoutOutlined />}></Button>
                    </Link>
                ),
            },
        ],
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div
                    style={{
                        height: 64,
                        margin: 16,
                        background: 'rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 18,
                    }}
                >
                    Reservation
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['dashboard']}
                    items={sidebarItems}
                />
            </Sider>

            <Layout>
                <Header
                    style={{
                        padding: '0 16px',
                        background: colorBgContainer,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 48,
                            height: 48,
                        }}
                    />

                    <Dropdown menu={userMenu} placement="bottomRight">
                        <Space className="cursor-pointer">
                            <Avatar
                                icon={<UserOutlined />}
                                src={auth.user.profile_photo_url}
                                alt={auth.user.name}
                            />
                            <span>{auth.user.name}</span>
                            <DownOutlined style={{ fontSize: 10 }} />
                        </Space>
                    </Dropdown>
                </Header>

                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}
