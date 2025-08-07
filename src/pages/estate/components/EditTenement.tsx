import { Form, Input, Modal, Row, Col } from 'antd';
import { useCallback } from 'react';
import { DataType } from '../interface';

interface EditTenementProps {
    visible: boolean;
    hideModal: () => void;
    title: string;
    getList: () => void;
    rowData?: DataType;
}

function EditTenement(props: EditTenementProps) {
    const { visible, hideModal, title, getList, rowData } = props;

    const [form] = Form.useForm();

    const handleOk = useCallback(() => {
        // form.getFieldsError().forEach((item) => {
        //     const  { name, errors, warnings } = item
        //     console.log(item);
        // })

        form.validateFields().then((values) => {
            console.log(values);
            hideModal()
            getList()
        }).catch(err => {
            console.log('err', err);
        });
    }, [form, hideModal, getList])

    const handleCancel = useCallback(() => {
        hideModal()
    }, [hideModal])

    return (
        <Modal
            title={title}
            open={visible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Form form={form} initialValues={rowData} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item name="name" label="楼宇名称" rules={[{ required: true, message: '请输入楼宇名称' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="manager" label="负责人" rules={[{ required: true, message: '请输入负责人' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="phone" label="负责人电话" rules={[{ required: true, message: '请输入负责人电话' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="status" label="状态" rules={[{ required: true, message: '请选择状态' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item name="propertyRate" label="物业费率" rules={[{ required: true, message: '请输入物业费率' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="emptyRate" label="空巢率" rules={[{ required: true, message: '请输入空巢率' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                
            </Form>
        </Modal>
    )
}

export default EditTenement;