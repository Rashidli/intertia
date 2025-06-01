import {useForm, usePage} from '@inertiajs/react';
import { Button, Form, Input, Card, Select } from 'antd';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        price: '',
        company_id: '',
    });
    console.log(data)
    const { companies } = usePage().props;

    const submit = () => {
        post(route('products.store'));
    };

    return (
        <Card title="Yeni Şirkət Yarat" className="max-w-md mx-auto">
            <Form layout="vertical" onFinish={submit}>
                <Form.Item label="Məhsul Adı" validateStatus={errors.title && 'error'} help={errors.title}>
                    <Input  onChange={e => setData('title', e.target.value)} />
                </Form.Item>
                <Form.Item label="Qiyməti" validateStatus={errors.price && 'error'} help={errors.price}>
                    <Input  onChange={e => setData('price', e.target.value)} />
                </Form.Item>
                <Form.Item label="Şirkəti seç" validateStatus={errors.company_id && 'error'} help={errors.company_id}>
                    <Select
                        onChange={value => setData('company_id', value)}
                        showSearch
                        placeholder="Şirkəti seçin"
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options ={
                            companies.map((company) => {return {value: company.id, label: company.title}})
                        }
                    />
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
