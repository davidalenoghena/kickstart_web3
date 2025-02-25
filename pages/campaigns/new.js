import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react'; }
class CampaignNew extends Component {
    render() {
        return (
            <Layout>
                <h1>New Campaign!</h1>

                <Form>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input label="wei" labelPosition="right" />
                    </Form.Field>

                    <Message
                        error
                        header="Oops!"
                        content="Something went wrong!"
                    />
                    <Button primary>Create!</Button>
                </Form>
            </Layout>
        );
    }
}

export default CampaignNew;