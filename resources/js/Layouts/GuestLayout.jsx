import { Layout, Card } from 'antd';
// import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

const { Content } = Layout;

export default function GuestLayout({ children }) {
    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <Content className="flex flex-col items-center justify-center pt-12 sm:pt-0">
                {/*<div className="mb-6">*/}
                {/*    <Link href="/">*/}
                {/*        <ApplicationLogo className="h-20 w-20 text-gray-500" />*/}
                {/*    </Link>*/}
                {/*</div>*/}

                <Card
                    className="w-full sm:max-w-md"
                    style={{
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                    }}
                >
                    {children}
                </Card>
            </Content>
        </Layout>
    );
}
