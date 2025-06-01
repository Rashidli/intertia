import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Card, Col, Row, Typography } from 'antd';

const { Title } = Typography;

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <Title level={3} style={{ margin: 0 }}>
                    Profil Məlumatları
                </Title>
            }
        >
            <Head title="Profil" />

            <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
                <Col xs={24} md={12} lg={10}>
                    <Card title="Profil Məlumatları" bordered={false}>
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                        />
                    </Card>
                </Col>

                <Col xs={24} md={12} lg={10}>
                    <Card title="Şifrəni Yenilə" bordered={false}>
                        <UpdatePasswordForm />
                    </Card>
                </Col>

                <Col xs={24} md={12} lg={10}>
                    <Card title="Hesabı Sil" bordered={false}>
                        <DeleteUserForm />
                    </Card>
                </Col>
            </Row>
        </AuthenticatedLayout>
    );
}
