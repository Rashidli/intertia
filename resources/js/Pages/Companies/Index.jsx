import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, usePage, router } from '@inertiajs/react';
import { Table, Button, Space } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';

export default function Index() {
    const { companies } = usePage().props;

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Şirkət Adı',
            dataIndex: 'title',
        },
        {
            title: 'Əməliyyatlar',
            render: (_, record) => (
                <Space>
                    <Link href={route('companies.edit', record.id)}>
                        <Button type="primary" icon={<EditOutlined />} />
                    </Link>

                    <Link
                        href={route('companies.destroy', record.id)}
                        method="delete"
                        as="button"
                        onBefore={() => confirm('Şirkəti silmək istədiyinizə əminsiniz?')}
                    >
                        <DeleteOutlined />
                    </Link>
                </Space>
            ),
        },
    ];

    const handleTableChange = (pagination) => {
        router.get(
            route('companies.index'),
            { page: pagination.current },
            { preserveState: true, replace: true }
        );
    };

    return (
        <AuthenticatedLayout>
            <div style={{ padding: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <h1 style={{ fontSize: 24, fontWeight: 'bold' }}>Şirkətlər</h1>
                    <Link href={route('companies.create')}>
                        <Button type="primary" icon={<PlusOutlined />}>Əlavə et</Button>
                    </Link>
                </div>

                <Table
                    bordered
                    dataSource={companies.data}
                    columns={columns}
                    rowKey="id"
                    pagination={{
                        current: companies.current_page,
                        pageSize: companies.per_page,
                        total: companies.total,
                        showSizeChanger: false,
                    }}
                    onChange={handleTableChange}
                />
            </div>
        </AuthenticatedLayout>
    );
}
