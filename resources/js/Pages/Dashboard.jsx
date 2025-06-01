import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Typography } from 'antd';
import { Column } from '@ant-design/charts';

export default function Dashboard() {
    // Sadə nümunə data - günlər üzrə rezervasiya sayı
    const data = [
        { day: 'Bazar ertəsi', reservations: 10 },
        { day: 'Çərşənbə axşamı', reservations: 15 },
        { day: 'Çərşənbə', reservations: 9 },
        { day: 'Cümə axşamı', reservations: 20 },
        { day: 'Cümə', reservations: 18 },
        { day: 'Şənbə', reservations: 25 },
        { day: 'Bazar', reservations: 12 },

    ];

    const config = {
        data,
        xField: 'day',
        yField: 'reservations',
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoRotate: false,
            },
        },
        meta: {
            day: { alias: 'Gün' },
            reservations: { alias: 'Rezervasiyalar' },
        },
        height: 300,
        color: '#FF2D20',
    };

    return (
        <AuthenticatedLayout
            header={<Typography.Title level={4}>Dashboard</Typography.Title>}
        >
            <Head title="Dashboard" />

            <Typography.Paragraph>Saytda olan rezervasiyaların həftəlik statistikasına baxa bilərsiniz.</Typography.Paragraph>

            <Column {...config} />

        </AuthenticatedLayout>
    );
}
