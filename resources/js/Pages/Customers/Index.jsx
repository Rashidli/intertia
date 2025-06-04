import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, usePage, router } from '@inertiajs/react';
import { Table, Button, Space } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';

export default function Index() {
    const { customers } = usePage().props;

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Müştəri Adı',
            dataIndex: 'name',
        },
        {
            title: 'Nömrəsi',
            dataIndex: 'phone',
        },
        {
            title: 'Maşın markası',
            dataIndex: 'car_model',
        },
        {
            title: 'Maşın modeli',
            dataIndex: 'car_make',
        },
        {
            title: 'Maşın nömrəsi',
            dataIndex: 'car_number',
        },
        {
            title: 'Əməliyyatlar',
            render: (_, record) => (
                <Space>
                    <Link href={route('customers.edit', record.id)}>
                        <Button type="primary" icon={<EditOutlined />} />
                    </Link>

                    <Link
                        href={route('customers.destroy', record.id)}
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
            route('customers.index'),
            { page: pagination.current },
            { preserveState: true, replace: true }
        );
    };

    return (
        <AuthenticatedLayout>
            <div style={{ padding: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <h1 style={{ fontSize: 24, fontWeight: 'bold' }}>Xidmətlər</h1>
                    <Link href={route('customers.create')}>
                        <Button type="primary" icon={<PlusOutlined />}>Əlavə et</Button>
                    </Link>
                </div>

                <Table
                    bordered
                    dataSource={customers.data}
                    columns={columns}
                    rowKey="id"
                    pagination={{
                        current: customers.current_page,
                        pageSize: customers.per_page,
                        total: customers.total,
                        showSizeChanger: false,
                    }}
                    onChange={handleTableChange}
                />
            </div>
        </AuthenticatedLayout>
    );
}
