import { useForm } from '@inertiajs/react';
import { Form, Input, Checkbox, Button, Alert, Typography } from 'antd';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

const { Text } = Typography;

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = () => {
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <Alert
                    message={status}
                    type="success"
                    className="mb-4"
                    showIcon
                />
            )}

            <Form
                layout="vertical"
                onFinish={submit}
                initialValues={{
                    remember: data.remember,
                }}
            >
                <Form.Item
                    label="Email"
                    validateStatus={errors.email ? 'error' : ''}
                    help={errors.email}
                >
                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        autoComplete="username"
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    validateStatus={errors.password ? 'error' : ''}
                    help={errors.password}
                >
                    <Input.Password
                        name="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        autoComplete="current-password"
                    />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox
                        checked={data.remember}
                        onChange={(e) =>
                            setData('remember', e.target.checked)
                        }
                    >
                        Remember me
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <div className="flex justify-between items-center">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-sm text-gray-600 hover:text-gray-900"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={processing}
                        >
                            Log in
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </GuestLayout>
    );
}
