import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, usePage, router } from '@inertiajs/react';
import { Table, Button, Space } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';

export default function Index() {
    const { products } = usePage().props;

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Məhsul Adı',
            dataIndex: 'title',
        },
        {
            title: 'Məhsul qiyməti',
            dataIndex: 'price',
        },
        {
            title: 'Əməliyyatlar',
            render: (_, record) => (
                <Space>
                    <Link href={route('products.edit', record.id)}>
                        <Button type="primary" icon={<EditOutlined />} />
                    </Link>

                    <Link
                        href={route('products.destroy', record.id)}
                        method="delete"
                        as="button"
                        onBefore={() => confirm('Məhsuli silmək istədiyinizə əminsiniz?')}
                    >
                        <DeleteOutlined />
                    </Link>
                </Space>
            ),
        },
    ];

    const handleTableChange = (pagination) => {
        router.get(
            route('products.index'),
            { page: pagination.current },
            { preserveState: true, replace: true }
        );
    };

    return (
        <AuthenticatedLayout>
            <div style={{ padding: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <h1 style={{ fontSize: 24, fontWeight: 'bold' }}>Məhsullar</h1>
                    <Link href={route('products.create')}>
                        <Button type="primary" icon={<PlusOutlined />}>Əlavə et</Button>
                    </Link>
                </div>

                <Table
                    bordered
                    dataSource={products.data}
                    columns={columns}
                    rowKey="id"
                    pagination={{
                        current: products.current_page,
                        pageSize: products.per_page,
                        total: products.total,
                        showSizeChanger: false,
                    }}
                    onChange={handleTableChange}
                />
            </div>
        </AuthenticatedLayout>
    );
}
