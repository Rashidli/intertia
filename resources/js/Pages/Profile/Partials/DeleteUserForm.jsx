import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';
import { Modal, Button, Form, Input, Typography } from 'antd';

const { Text } = Typography;

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = () => {
        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Hesabı Sil
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Hesabınız silindikdən sonra, bütün resurslar və məlumatlar
                    daimi olaraq silinəcək. Hesabınızı silməzdən əvvəl,
                    saxlamaq istədiyiniz məlumatları yükləyin.
                </p>
            </header>

            <Button danger type="primary" onClick={confirmUserDeletion}>
                Hesabı Sil
            </Button>

            <Modal
                title="Hesabı Silmək İstədiyinizə Əminsiniz?"
                visible={confirmingUserDeletion}
                onCancel={closeModal}
                onOk={deleteUser}
                okText="Hesabı Sil"
                okButtonProps={{ danger: true, loading: processing }}
                cancelText="Ləğv et"
                afterClose={() => reset()}
            >
                <p>
                    Hesabınız silindikdən sonra, bütün resurslar və məlumatlar
                    daimi olaraq silinəcək. Davam etmək üçün şifrənizi daxil
                    edin.
                </p>

                <Form layout="vertical" onFinish={deleteUser}>
                    <Form.Item
                        label="Şifrə"
                        validateStatus={errors.password ? 'error' : ''}
                        help={errors.password}
                        required
                    >
                        <Input.Password
                            id="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            autoFocus
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </section>
    );
}
