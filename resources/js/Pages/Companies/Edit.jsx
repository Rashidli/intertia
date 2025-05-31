import { useForm } from '@inertiajs/react';
import { Button, Form, Input, Card } from 'antd';

export default function Edit({ company }) {
    const { data, setData, put, processing, errors } = useForm({
        title: company.title || '',
    });

    const submit = () => {
        put(route('companies.update', company.id));
    };

    return (
        <Card title="Şirkəti Redaktə Et" className="max-w-md mx-auto">
            <Form layout="vertical" onFinish={submit}>
                <Form.Item label="Şirkət Adı" validateStatus={errors.title && 'error'} help={errors.title}>
                    <Input value={data.title} onChange={e => setData('title', e.target.value)} />
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
