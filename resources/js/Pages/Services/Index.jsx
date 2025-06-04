import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, usePage, router } from '@inertiajs/react';
import { Table, Button, Space } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';

export default function Index() {
    const { services } = usePage().props;

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Xidmət Adı',
            dataIndex: 'title',
        },
        {
            title: 'Xidmət qiyməti',
            dataIndex: 'price',
        },
        {
            title: 'Əməliyyatlar',
            render: (_, record) => (
                <Space>
                    <Link href={route('services.edit', record.id)}>
                        <Button type="primary" icon={<EditOutlined />} />
                    </Link>

                    <Link
                        href={route('services.destroy', record.id)}
                        method="delete"
                        as="button"
                        onBefore={() => confirm('Xidməti silmək istədiyinizə əminsiniz?')}
                    >
                        <DeleteOutlined />
                    </Link>
                </Space>
            ),
        },
    ];

    const handleTableChange = (pagination) => {
        router.get(
            route('services.index'),
            { page: pagination.current },
            { preserveState: true, replace: true }
        );
    };

    return (
        <AuthenticatedLayout>
            <div style={{ padding: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <h1 style={{ fontSize: 24, fontWeight: 'bold' }}>Xidmətlər</h1>
                    <Link href={route('services.create')}>
                        <Button type="primary" icon={<PlusOutlined />}>Əlavə et</Button>
                    </Link>
                </div>

                <Table
                    bordered
                    dataSource={services.data}
                    columns={columns}
                    rowKey="id"
                    pagination={{
                        current: services.current_page,
                        pageSize: services.per_page,
                        total: services.total,
                        showSizeChanger: false,
                    }}
                    onChange={handleTableChange}
                />
            </div>
        </AuthenticatedLayout>
    );
}
