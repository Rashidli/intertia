import { Link, usePage } from '@inertiajs/react';
import { Table, Button, Space } from 'antd';

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
            title: 'Qiyməti',
            dataIndex: 'price',
        },
        {
            title: 'Əməliyyatlar',
            render: (_, record) => (
                <Space>
                    <Link href={route('products.edit', record.id)}>
                        <Button type="link">Redaktə</Button>
                    </Link>
                    <Link href={route('products.show', record.id)}>
                        <Button type="link">Bax</Button>
                    </Link>
                    <Link
                        href={route('products.destroy', record.id)}
                        method="delete"
                        as="button"
                        onBefore={() => confirm('Delete this post?')}>
                        Sil
                    </Link>
                </Space>
            ),
        },
    ];

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Məhsullar</h1>
                <Link href={route('products.create')}>
                    <Button type="primary">Yeni Məhsul</Button>
                </Link>
            </div>

            <Table dataSource={products} columns={columns} rowKey="id" />
        </div>
    );
}
