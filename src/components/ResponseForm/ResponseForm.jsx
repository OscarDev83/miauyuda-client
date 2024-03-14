import { useState } from "react"
import { Container, Button, Form, Col, Row } from "react-bootstrap"
import requestServices from "../../services/request.services"
import './../../components/NewRequestForm/NewRequestForm.css'
import { useNavigate } from "react-router-dom"

const ResponseForm = ({ requestId, loadRequests }) => {

    const [responseData, setResponseData] = useState({
        response: ""
    })

    const navigate = useNavigate()

    const handleFormSubmit = (event) => {

        event.preventDefault()

        requestServices
            .editRequest(requestId, responseData)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    const handleInputChange = (event) => {
        const { value, name } = event.target
        setResponseData({ ...responseData, [name]: value })
    }

    return (
        <div className="containerForm">
            <h3>
                Responder a la consulta:
            </h3>
            <Container className="NewRequestForm">
                <Row className="mb-3 mt-3">
                    <Form onSubmit={handleFormSubmit} className="RequestForm">
                        <Form.Group as={Col} controlId="formGridQuestion">
                            <Form.Label className="ResponseFormLabel">Respuesta:</Form.Label>
                            <Form.Control
                                as="textarea"
                                className="ResponseFormSelect"
                                type="text"
                                placeholder="Escribe aquí tu respuesta..."
                                onChange={handleInputChange}
                                value={responseData.response}
                                name={"response"}
                            />
                        </Form.Group>
                        <Button className="ResponseFormButton" type="submit">Enviar respuesta</Button>
                    </Form>
                </Row>
            </Container >
        </div>
    )

}

export default ResponseForm
