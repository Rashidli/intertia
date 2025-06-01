import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Card } from 'antd';

export default function Show({ company }) {
    return (
        <AuthenticatedLayout>
            <Card title="Şirkət Məlumatları" className="max-w-md mx-auto">
                <p><strong>ID:</strong> {company.id}</p>
                <p><strong>Ad:</strong> {company.title}</p>
            </Card>
        </AuthenticatedLayout>
    );
}
