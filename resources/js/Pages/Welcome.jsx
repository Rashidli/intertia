import { Head, Link } from '@inertiajs/react';
import { Layout, Typography, Space, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Content, Header } = Layout;

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <Layout style={{ minHeight: '100vh' }}>
                <Header style={{ backgroundColor: '#fff', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Title level={3} style={{ margin: 0, color: '#FF2D20' }}>
                        Rezervasiya Sistemi
                    </Title>
                    <Space size="middle">
                        {auth.user ? (
                            <Link href={route('dashboard')}>
                                <Button type="primary" icon={<ArrowRightOutlined />}>
                                    Dashboard
                                </Button>
                            </Link>
                        ) : (
                            <>
                                <Link href={route('login')}>
                                    <Button>Login</Button>
                                </Link>
                                <Link href={route('register')}>
                                    <Button type="primary">Register</Button>
                                </Link>
                            </>
                        )}
                    </Space>
                </Header>

                <Content style={{ padding: '48px 24px', maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
                    <Title>Rezervasiya və Hesabat Sisteminə Xoş Gəlmisiniz</Title>
                    <Paragraph style={{ fontSize: 16, color: 'rgba(0,0,0,0.65)', marginBottom: 32 }}>
                        Bu sistem vasitəsilə siz müştərilərin gündəlik rezervasiyalarını izləyə, yeni rezervasiyalar yarada və
                        hesabatlar vasitəsilə satışları və müştəri fəaliyyətini izləyə bilərsiniz.
                    </Paragraph>

                    <Paragraph style={{ fontSize: 14, color: 'rgba(0,0,0,0.45)' }}>
                        <ul style={{ listStyle: 'inside disc', textAlign: 'left', maxWidth: 400, margin: 'auto' }}>
                            <li>Müştəri qeydiyyatı və idarəetməsi</li>
                            <li>Gündəlik və aktiv rezervasiyaların idarəsi</li>
                            <li>Ətraflı hesabatlar və statistikalar</li>
                            <li>Bildirişlər və sistem xəbərləri</li>
                        </ul>
                    </Paragraph>

                    {!auth.user && (
                        <Space size="large" style={{ marginTop: 40 }}>
                            <Link href={route('login')}>
                                <Button size="large">Daxil ol</Button>
                            </Link>
                            <Link href={route('register')}>
                                <Button type="primary" size="large">
                                    Qeydiyyatdan keç
                                </Button>
                            </Link>
                        </Space>
                    )}
                </Content>
            </Layout>
        </>
    );
}
