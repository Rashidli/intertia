import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import {Button, Form, Input, Card, Row, Col} from 'antd';
import {PlusOutlined} from "@ant-design/icons";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        price: '',
    });

    const submit = () => {
        post(route('products.store'));
    };

    return (
        <AuthenticatedLayout>
            <Row>
                <Col span={12}>
                    <Card title="Yeni Məhsul Yarat" className="max-w-md mx-auto">
                        <Form layout="vertical" onFinish={submit}>
                            <Form.Item label="Məhsul Adı" validateStatus={errors.title && 'error'} help={errors.title}>
                                <Input value={data.title} onChange={e => setData('title', e.target.value)} />
                            </Form.Item>
                            <Form.Item label="Məhsul qiyməti" validateStatus={errors.price && 'error'} help={errors.price}>
                                <Input value={data.price} onChange={e => setData('price', e.target.value)} />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" iicon={<PlusOutlined />} htmlType="submit" loading={processing}>
                                    Yarat
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </AuthenticatedLayout>
    );
}
