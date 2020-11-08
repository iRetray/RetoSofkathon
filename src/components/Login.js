import React from "react";
import NavBar from "./NavBar";
import { Form, Input, Typography, Modal, Button } from "antd";
import "antd/dist/antd.css";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import badRequest from "../images/badRequest.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Button as ButtonReacstrap } from "reactstrap";

const { Title, Paragraph } = Typography;

export default class Login extends React.Component {
  state = {
    visibleModalBadCredentials: false,
    visibleModalNoRegistered: false,
  };

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
      maxWidth: "500px",
      margin: "40px",     
      marginLeft: "15px",
      marginRight: "15px",
    };

    const onFinish = (values) => {
      console.log("llegan valores correctos");
      if (localStorage.getItem("userRegistered")) {
        let usuarioRecuperado = JSON.parse(
          localStorage.getItem("userRegistered")
        );
        const { email, password } = values;
        console.log(email, password);
        if (
          usuarioRecuperado.email === email &&
          usuarioRecuperado.password === password
        ) {
          localStorage.setItem(
            "userSession",
            JSON.stringify(usuarioRecuperado)
          );
          window.location = "/reporter";
        } else {
          this.setState({
            visibleModalBadCredentials: true,
          });
        }
      } else {
        this.setState({
          visibleModalNoRegistered: true,
        });
      }
    };

    const cerrarModal = () => {
      this.setState({
        visibleModalBadCredentials: false,
        visibleModalNoRegistered: false,
      });
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    return (
      <div>
        <Modal
          title="No estas registrado"
          visible={this.state.visibleModalNoRegistered}
          onOk={cerrarModal}
          onCancel={cerrarModal}
          footer={null}
        >
          <img
            src={badRequest}
            alt=""
            className="img-fluid"
            style={{ padding: "50px", marginLeft: "20px" }}
          />
          <Title level={4}>
            <center>No estas registrado en Speakly</center>
          </Title>
          <center>
            <Link to="/register">
              <ButtonReacstrap color="primary">
                <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon> Registrarme
              </ButtonReacstrap>
            </Link>
          </center>
        </Modal>

        <Modal
          title="Credenciales incorrectas"
          visible={this.state.visibleModalBadCredentials}
          onOk={cerrarModal}
          onCancel={cerrarModal}
        >
          <img
            src={badRequest}
            alt=""
            className="img-fluid"
            style={{ padding: "50px", marginLeft: "20px" }}
          />
          <Title level={4}>
            <center>
              Las credenciales ingresadas no corresponden con las registradas,
              intentalo de nuevo.
            </center>
          </Title>
        </Modal>

        {document.body.setAttribute("style", "background-color: #F0F2F5;")}
        <NavBar />
        <div style={siteLayoutContent}>
          <Title level={2}>Inicio de sesión</Title>
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
                Iniciar sesión
              </Button>
            </Form.Item>
          </Form>
          <center>
            <Paragraph>
              ¿No tienes una cuenta de <strong>Speakly</strong>? <br />
              <Link to="/register">Registrarme</Link>
            </Paragraph>
          </center>
        </div>
      </div>
    );
  }
}
