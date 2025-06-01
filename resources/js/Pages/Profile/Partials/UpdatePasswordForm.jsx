import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';

const { Title, Text } = Typography;

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const [form] = Form.useForm();
    const [showSaved, setShowSaved] = useState(false);

    const updatePassword = () => {
        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setShowSaved(true);
                setTimeout(() => setShowSaved(false), 3000);
            },
            onError: (errs) => {
                if (errs.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }

                if (errs.current_password) {
                    reset('current_password');
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <Title level={4}>Şifrəni Yenilə</Title>
            <Text type="secondary">
                Hesabınızın təhlükəsizliyi üçün uzun və təsadüfi şifrə istifadə edin.
            </Text>

            <Form
                form={form}
                layout="vertical"
                onFinish={updatePassword}
                style={{ marginTop: 16 }}
                initialValues={{
                    current_password: data.current_password,
                    password: data.password,
                    password_confirmation: data.password_confirmation,
                }}
            >
                <Form.Item
                    label="Cari Şifrə"
                    validateStatus={errors.current_password ? 'error' : ''}
                    help={errors.current_password}
                    rules={[{ required: true, message: 'Cari şifrə tələb olunur' }]}
                >
                    <Input.Password
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) => setData('current_password', e.target.value)}
                        autoComplete="current-password"
                        disabled={processing}
                    />
                </Form.Item>

                <Form.Item
                    label="Yeni Şifrə"
                    validateStatus={errors.password ? 'error' : ''}
                    help={errors.password}
                    rules={[{ required: true, message: 'Yeni şifrə tələb olunur' }]}
                >
                    <Input.Password
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        autoComplete="new-password"
                        disabled={processing}
                    />
                </Form.Item>

                <Form.Item
                    label="Şifrəni Təsdiqlə"
                    validateStatus={errors.password_confirmation ? 'error' : ''}
                    help={errors.password_confirmation}
                    rules={[{ required: true, message: 'Şifrəni təsdiqləyin' }]}
                >
                    <Input.Password
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        autoComplete="new-password"
                        disabled={processing}
                    />
                </Form.Item>

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
