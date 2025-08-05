import { Modal } from 'antd';
import { useState, memo, useEffect } from 'react';
import type { ModalProps } from "../../interface"
import { Form, Input, Button, Row, Col, Radio, message } from 'antd';
import { useSelector } from 'react-redux';
import { editUser } from '@/api/userList';

function UserForm(props: ModalProps) {
  console.log('渲染子组件');
  const { isModalOpen, hideModal, title, loadData } = props;
  const { userData } = useSelector((state: any) => state.userReducer);
  useEffect(() => {
    if (!userData.id) {
      console.log('userData', userData);

      form.resetFields()
      return
    }
    form.setFieldsValue(userData)
  }, [isModalOpen])

  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false)
  const handleOk = () => {
    form.validateFields().then(async (values) => {

      setLoading(true)
      const params = userData.id ? { ...values, id: userData.id } : values
      const { data } = await editUser(params)
      setLoading(false)
      message.success(data || '编辑成功')
      hideModal()
      loadData()
    }).catch(err => {
      console.log('err', err);
    })
  };

  const handleCancel = () => {
    hideModal();
  };

  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      forceRender
    >
      <Form layout="horizontal" form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="客户名称" name="name" rules={[{ required: true, message: '客户名称是必填' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="联系电话" name="tel" rules={[{ required: true, message: '联系电话是必填' }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="经营状态" name="status" rules={[{ required: true, message: '经营状态不能为空' }]}>
              <Radio.Group>
                <Radio value="1">营业中</Radio>
                <Radio value="2">暂停营业</Radio>
                <Radio value="3">已关闭</Radio>
              </Radio.Group>

            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="所属行业" name="tel" rules={[{ required: true, message: '所属行业不能为空' }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="邮箱" name="email" rules={[{ required: true, message: '邮箱是必填' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="统一信用代码" name="creditCode" rules={[{ required: true, message: '统一信用代码不能为空' }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="工商注册号"
              name="industryNum"
              rules={[{ required: true, message: "工商注册号不能为空" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="组织机构代码"
              name="organizationCode"
              rules={[{ required: true, message: "组织机构代码不能为空" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="法人名"
              name="legalPerson"
              rules={[{ required: true, message: "法人名不能为空" }]}
            >
              <Input />
            </Form.Item>
          </Col>

        </Row>


      </Form>
    </Modal>
  )

}

export default memo(UserForm);
