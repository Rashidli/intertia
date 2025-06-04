import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {useForm} from '@inertiajs/react';
import {Button, Form, Input, Card, Row, Col} from 'antd';

export default function Edit({customer}) {
    const {data, setData, put, processing, errors} = useForm({
        name: customer.name || '',
        phone: customer.phone || '',
        car_model: customer.car_model || '',
        car_make: customer.car_make || '',
        car_number: customer.car_number || '',
    });

    const submit = () => {
        put(route('customers.update', customer.id));
    };

    return (
        <AuthenticatedLayout>
            <Row>
                <Col span={24}>

                    <Card title="Xidməti Redaktə Et" className="max-w-md mx-auto">
                        <Form layout="vertical" onFinish={submit}>
                            <Row gutter={24}>
                                <Col span={12}>
                                    <Form.Item label="Müştəri Adı" validateStatus={errors.name && 'error'} help={errors.name}>
                                        <Input value={data.name} onChange={e => setData('name', e.target.value)}/>
                                    </Form.Item>
                                    <Form.Item label="Maşin modeli" validateStatus={errors.car_make && 'error'} help={errors.car_make}>
                                        <Input value={data.car_make} onChange={e => setData('car_make', e.target.value)}/>
                                    </Form.Item>
                                    <Form.Item label="Maşin nömrəsi" validateStatus={errors.car_number && 'error'} help={errors.car_number}>
                                        <Input value={data.car_number} onChange={e => setData('car_number', e.target.value)}/>
                                    </Form.Item>

                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Müştəri telefonu" validateStatus={errors.phone && 'error'} help={errors.phone}>
                                        <Input value={data.phone} onChange={e => setData('phone', e.target.value)}/>
                                    </Form.Item>
                                    <Form.Item label="Maşin markası" validateStatus={errors.car_model && 'error'} help={errors.car_model}>
                                        <Input value={data.car_model} onChange={e => setData('car_model', e.target.value)}/>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" loading={processing}>
                                            Yadda saxla
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
