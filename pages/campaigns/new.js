import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
class CampaignNew extends Component {
    state = {
        minimumContribution: ''
    };

    onSubmit = async event => {
        event.preventDefault();

        try {
            // Get the accounts
            const accounts = await web3.eth.getAccounts();
            // Create a new campaign
            await factory.methods.createCampaign(this.state.minimumContribution).send({
                from: accounts[0]
            });
        } catch (err) {
            this.setState({ errorMessage: err.message });
    };
    render() {
        return (
            <Layout>
                <h1>New Campaign!</h1>

                <Form
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input
                            label="wei"
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event => this.setState({ minimumContribution: event.target.value })}
                        />
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
