import { Card } from 'antd';

export default function Show({ product }) {
    return (
        <Card title="Şirkət Məlumatları" className="max-w-md mx-auto">
            <p><strong>ID:</strong> {product.id}</p>
            <p><strong>Ad:</strong> {product.title}</p>
            <p><strong>Qiymət:</strong> {product.price}</p>
        </Card>
    );
}
