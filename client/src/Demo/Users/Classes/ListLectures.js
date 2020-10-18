import React from 'react';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import axios from 'axios';
import config from '../../../config';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Loader from '../../../App/layout/Loader';
import { connect } from 'react-redux';

class ListVideoLectures extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
			deletedRowId: null,
			showModal: false,
			handleCloseModal: false,
            isValid: {
                value: false,
                text: ''   
            },
            data: [],
            class_id: ''
        }
    }

    componentDidMount = async () => {
        if (this.props && this.props.user && this.props.user.id && this.props.match && this.props.match.params && this.props.match.params.id) {
            await this.setState({ class_id: this.props.match.params.id })
            this.getLecturesList();
        }
    }
    
    getLecturesList() {
        this.setState({ isLoading: true });
		axios.get(`${config.prod}/api/class/${this.state.class_id}/lecture/list`)
			.then(response => {
				this.setState({ data: response.data.data, isLoading: false });
			})
			.catch(err => {
				this.setState({ isLoading: false });
				console.log('Error: getting data from db ', err.response);
                this.createNotification('error', 'Error while Getting data from db');
			});
    }

    createNotification = (type, value) => {
        switch (type) {
            case 'info':
                NotificationManager.info(value,'', 5000);
                break;
            case 'success':
                NotificationManager.success(value, '', 5000);
                break;
            case 'warning':
                NotificationManager.warning(value, '', 5000);
                break;
            case 'error':
                NotificationManager.error(value, '', 5000);
                break;
            default: break;
        }
    };
    
    render() {
        return (
            <Aux>
                {this.state.isLoading && <Loader />}
			    <Row>
                    <NotificationContainer/>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Lectures List</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        {
                                            this.state.data.map((elem, i) => (
                                                <Col key={elem.id}>
                                                    <Card>
                                                        <Card.Header><b># {i+1}: {elem.name}</b></Card.Header>
                                                        <Card.Body>
                                                            <Row>
                                                                <Col sm={6}>
                                                                    <video controls style={{ maxWidth: '100%', maxHeight: '100%' }}>
                                                                        <source src={`${config.prod}/${elem.file}`} />
                                                                        Sorry, your browser doesn't support embedded videos.
                                                                    </video>
                                                                </Col>
                                                                <Col sm={6}>
                                                                    <h5>Description</h5>
                                                                    <hr />
                                                                    <p>
                                                                        {elem.description}
                                                                    </p>
                                                                </Col>
                                                            </Row>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))
                                        }
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.userDetails.user
    }
}

export default connect(mapStateToProps, null)(ListVideoLectures);
