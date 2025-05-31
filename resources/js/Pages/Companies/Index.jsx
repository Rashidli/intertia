import { Link, usePage } from '@inertiajs/react';
import { Table, Button, Space } from 'antd';

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
                        <Button type="link">Redaktə</Button>
                    </Link>
                    <Link href={route('companies.show', record.id)}>
                        <Button type="link">Bax</Button>
                    </Link>
                    <Link
                        href={route('companies.destroy', record.id)}
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
                <h1 className="text-xl font-bold">Şirkətlər</h1>
                <Link href={route('companies.create')}>
                    <Button type="primary">Yeni Şirkət</Button>
                </Link>
            </div>

            <Table dataSource={companies} columns={columns} rowKey="id" />
        </div>
    );
}
