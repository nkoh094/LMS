import React from 'react';
import { Row, Col, Card, Button, Modal, Table } from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import axios from 'axios';
import config from '../../../config';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Loader from '../../../App/layout/Loader';
import { connect } from 'react-redux';

class ListTopic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
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
            this.getTopicsList();
        }
    }
    
    openDiscussionForum(value) {
        console.log(`/user/class/${this.state.class_id}/topic/${value.id}/discussion`)
        this.props.history.push(`/user/class/${this.state.class_id}/topic/${value.id}/discussion`);
    }

    getTopicsList() {
        this.setState({ isLoading: true });
		axios.get(`${config.prod}/api/users/class/${this.state.class_id}/topic/list`)
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

    cancelDownload() {
		this.setState({ 
            showModal: false,
			title: ''
		});
    }
    
    render() {
        return (
            <Aux>
                {this.state.isLoading && <Loader />}
			    <Row>
                    <NotificationContainer/>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Class Specific Topics List</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Table striped bordered hover responsive>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Title</th>
                                                    <th>Description</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.data.map((elem, i) => (
                                                        <tr key={i}>
                                                            <td>{i}</td>
                                                            <td>{elem.name}</td>
                                                            <td style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{ elem.description }</td>
                                                            <td>
                                                                <Button onClick={(e) => this.openDiscussionForum(elem)} variant='primary'>Open Forum</Button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </Table>
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

export default connect(mapStateToProps, null)(ListTopic);
