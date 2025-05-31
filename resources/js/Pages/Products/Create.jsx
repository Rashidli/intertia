import { useForm } from '@inertiajs/react';
import { Button, Form, Input, Card } from 'antd';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        price: '',
    });

    const submit = () => {
        post(route('products.store'));
    };

    return (
        <Card title="Yeni Şirkət Yarat" className="max-w-md mx-auto">
            <Form layout="vertical" onFinish={submit}>
                <Form.Item label="Məhsul Adı" validateStatus={errors.title && 'error'} help={errors.title}>
                    <Input value={data.title} onChange={e => setData('title', e.target.value)} />
                </Form.Item>
                <Form.Item label="Qiyməti" validateStatus={errors.price && 'error'} help={errors.price}>
                    <Input value={data.price} onChange={e => setData('price', e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={processing}>
                        Yarat
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
}
