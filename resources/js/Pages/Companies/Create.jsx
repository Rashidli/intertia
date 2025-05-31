import { useForm } from '@inertiajs/react';
import { Button, Form, Input, Card } from 'antd';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
    });

    const submit = () => {
        post(route('companies.store'));
    };

    return (
        <Card title="Yeni Şirkət Yarat" className="max-w-md mx-auto">
            <Form layout="vertical" onFinish={submit}>
                <Form.Item label="Şirkət Adı" validateStatus={errors.title && 'error'} help={errors.title}>
                    <Input value={data.title} onChange={e => setData('title', e.target.value)} />
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
