import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';

class CampaignNew extends Component {
  state = {
    minimumContribution: '',
  };

  onSubmit = async (event) => {
    event.preventDefault();

    await factory.methods
      .createCampaign(this.state.minimumContribution)
      .send({

      }); // MetaMask will take care of gas calcultation.
  };

  render() {
    return (
      <Layout>
        <h3>Create a Campaign</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Minimum contribution</label>
            <Input
              label='wei'
              labelPosition='right'
              value={this.state.minimumContribution}
              onChange={(event) =>
                this.setState({ minimumContribution: event.target.value })
              }
            />
          </Form.Field>
          <Button primary>Create</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
