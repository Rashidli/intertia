import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {useForm} from '@inertiajs/react';
import {Button, Form, Input, Card, Row, Col} from 'antd';

export default function Edit({service}) {
    const {data, setData, put, processing, errors} = useForm({
        title: service.title || '',
        price: service.price || '',
    });

    const submit = () => {
        put(route('services.update', service.id));
    };

    return (
        <AuthenticatedLayout>
            <Row>
                <Col span={12}>

                    <Card title="Xidməti Redaktə Et" className="max-w-md mx-auto">
                        <Form layout="vertical" onFinish={submit}>
                            <Form.Item label="Xidmət Adı" validateStatus={errors.title && 'error'} help={errors.title}>
                                <Input value={data.title} onChange={e => setData('title', e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="Xidmət qiyməti" validateStatus={errors.price && 'error'} help={errors.price}>
                                <Input value={data.price} onChange={e => setData('price', e.target.value)}/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" loading={processing}>
                                    Yadda saxla
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </AuthenticatedLayout>
    );
}
