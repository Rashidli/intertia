import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import {Button, Form, Input, Card, Row, Col} from 'antd';
import {PlusOutlined} from "@ant-design/icons";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        phone: '',
        car_model: '',
        car_make: '',
        car_number: '',
    });

    const submit = () => {
        post(route('customers.store'));
    };

    return (
        <AuthenticatedLayout>
            <Row>
                <Col span={24}>
                    <Card title="Yeni Xidmət Yarat" className="max-w-md mx-auto">
                        <Form layout="vertical" onFinish={submit}>
                            <Row gutter={24}>
                                <Col span={12}>
                                    <Form.Item label="Müştəri Adı" validateStatus={errors.name && 'error'} help={errors.name}>
                                        <Input value={data.name} onChange={e => setData('name', e.target.value)} />
                                    </Form.Item>
                                    <Form.Item label="Maşın modeli" validateStatus={errors.car_make && 'error'} help={errors.car_make}>
                                        <Input value={data.car_make} onChange={e => setData('car_make', e.target.value)} />
                                    </Form.Item>

                                    <Form.Item label="Maşın nömrəsi" validateStatus={errors.car_number && 'error'} help={errors.car_number}>
                                        <Input value={data.car_number} onChange={e => setData('car_number', e.target.value)} />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Müştəri telefonu" validateStatus={errors.phone && 'error'} help={errors.phone}>
                                        <Input value={data.phone} onChange={e => setData('phone', e.target.value)} />
                                    </Form.Item>
                                    <Form.Item label="Maşın markası" validateStatus={errors.car_model && 'error'} help={errors.car_model}>
                                        <Input value={data.car_model} onChange={e => setData('car_model', e.target.value)} />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" iicon={<PlusOutlined />} htmlType="submit" loading={processing}>
                                            Yarat
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </AuthenticatedLayout>
    );
}
