import { Card } from 'antd';

export default function Show({ company }) {
    return (
        <Card title="Şirkət Məlumatları" className="max-w-md mx-auto">
            <p><strong>ID:</strong> {company.id}</p>
            <p><strong>Ad:</strong> {company.title}</p>
        </Card>
    );
}
