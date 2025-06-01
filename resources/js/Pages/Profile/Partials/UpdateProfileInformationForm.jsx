import { useForm, usePage, Link } from '@inertiajs/react';
import { Form, Input, Button, Typography, Alert } from 'antd';
import { useState } from 'react';

const { Title, Text } = Typography;

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
    });

    const [form] = Form.useForm();
    const [showSaved, setShowSaved] = useState(false);

    const onFinish = () => {
        patch(route('profile.update'), {
            onSuccess: () => {
                setShowSaved(true);
                setTimeout(() => setShowSaved(false), 3000);
            },
        });
    };

    return (
        <section className={className}>
            <Title level={4}>Profil Məlumatları</Title>
            <Text type="secondary">
                Hesabınızın profil məlumatlarını və email ünvanını yeniləyin.
            </Text>

            <Form
                form={form}
                layout="vertical"
                initialValues={{
                    name: data.name,
                    email: data.email,
                }}
                onFinish={onFinish}
                style={{ marginTop: 16 }}
            >
                <Form.Item
                    label="Ad"
                    name="name"
                    validateStatus={errors.name ? 'error' : ''}
                    help={errors.name}
                    rules={[{ required: true, message: 'Zəhmət olmasa adınızı daxil edin' }]}
                >
                    <Input
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        disabled={processing}
                    />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    validateStatus={errors.email ? 'error' : ''}
                    help={errors.email}
                    rules={[
                        { required: true, message: 'Zəhmət olmasa email ünvanınızı daxil edin' },
                        { type: 'email', message: 'Etibarlı email ünvanı daxil edin' },
                    ]}
                >
                    <Input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        disabled={processing}
                    />
                </Form.Item>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <Alert
                        message={
                            <>
                                Email ünvanınız təsdiqlənməyib.{' '}
                                <Link
                                    href={route('verification.send')}
                                    method="post"
                                    as="button"
                                    className="underline text-blue-600 hover:text-blue-800 focus:outline-none"
                                >
                                    Təsdiq emailini yenidən göndərmək üçün buraya klikləyin.
                                </Link>
                            </>
                        }
                        type="warning"
                        showIcon
                        style={{ marginBottom: 16 }}
                    />
                )}

                {status === 'verification-link-sent' && (
                    <Alert
                        message="Yeni təsdiq linki email ünvanınıza göndərildi."
                        type="success"
                        showIcon
                        style={{ marginBottom: 16 }}
                    />
                )}

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={processing}>
                        Yadda saxla
                    </Button>
                    {showSaved && (
                        <Text type="success" style={{ marginLeft: 16 }}>
                            Yadda saxlanıldı.
                        </Text>
                    )}
                </Form.Item>
            </Form>
        </section>
    );
}
