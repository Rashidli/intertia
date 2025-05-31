import { useForm } from '@inertiajs/react';
import { Button, Form, Input, Card } from 'antd';

export default function Edit({ product }) {
    const { data, setData, put, processing, errors } = useForm({
        title: product.title || '',
        price: product.price || '',
    });

    const submit = () => {
        put(route('products.update', product.id));
    };

    return (
        <Card title="Məhsul Redaktə Et" className="max-w-md mx-auto">
            <Form layout="vertical" onFinish={submit}>
                <Form.Item label="Məhsul Adı" validateStatus={errors.title && 'error'} help={errors.title}>
                    <Input value={data.title} onChange={e => setData('title', e.target.value)} />
                </Form.Item>
                <Form.Item label="Qiyməti" validateStatus={errors.price && 'error'} help={errors.price}>
                    <Input value={data.price} onChange={e => setData('price', e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={processing}>
                        Yadda saxla
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
}
