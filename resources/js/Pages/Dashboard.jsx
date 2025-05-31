// resources/js/Pages/Dashboard.jsx

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Typography } from 'antd';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={<Typography.Title level={4}>Dashboard</Typography.Title>}
        >
            <Head title="Dashboard" />

            <Typography.Text>You’re logged in!</Typography.Text>
        </AuthenticatedLayout>
    );
}
