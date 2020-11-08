import React from "react";
import NavBar from "./NavBar";
import { Form, Input, Typography, Modal, Button } from "antd";
import "antd/dist/antd.css";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import monsterRegister from "../images/monsterRegister.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Button as ButtonReacstrap } from "reactstrap";

const { Title, Paragraph } = Typography;

export default class Login extends React.Component {
  state = { visibleModal: false };

  render() {
    const layout = {
      labelCol: {
        span: 5,
      },
      wrapperCol: {
        span: 15,
      },
    };

    const siteLayoutContent = {
      minHeight: "280px",
      padding: "24px",
      background: "#fff",
      maxWidth: "350px",
      margin: "40px",
      marginLeft: "auto",
      marginRight: "auto",
    };

    const onFinish = (values) => {
      localStorage.setItem("userRegistered", JSON.stringify(values));
      this.setState({
        visibleModal: true,
      });
    };

    const cerrarModal = () => {
      this.setState({
        visibleModal: false,
      });
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    return (
      <div>
        <Modal
          title="Registro exitoso"
          visible={this.state.visibleModal}
          onOk={cerrarModal}
          onCancel={cerrarModal}
          footer={null}
        >
          <img
            src={monsterRegister}
            alt=""
            className="img-fluid"
            style={{ padding: "50px" }}
          />
          <Title level={4}>
            <center>Registro de usuario realizado correctamente</center>
          </Title>
          <center>
            <Link to="/login">
              <ButtonReacstrap color="primary">
                <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon> Iniciar{" "}
                <strong> Speakly </strong>
              </ButtonReacstrap>
            </Link>
          </center>
        </Modal>
        {document.body.setAttribute("style", "background-color: #F0F2F5;")}
        <NavBar />
        <div style={siteLayoutContent}>
          <Title level={2}>Registro de usuario</Title>
          <Paragraph style={{ marginTop: "-15px" }}>
            Para acceder a los servicios de <strong>Speakly</strong>
          </Paragraph>
          <Form
            {...layout}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "¡Debes insertar tu nombre!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Nombre"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "¡Debes insertar tu correo!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Correo electrónico"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "¡Debes insertar tu contraseña!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Contraseña"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Registrarse
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
