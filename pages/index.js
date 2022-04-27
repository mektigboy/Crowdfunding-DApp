import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout.js';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return ({
        header: address,
        description: <a>View campaign</a>,
        fluid: true,
        style: {margin: '0px 0px 10px 0px'}
      });
    });

    return (
      <Card.Group items={items} style={{ margin: '0px' }}/>
    );
  }

  render() {
    return (
      <Layout>
        <h3>Open Campaigns</h3>
        <Button
          floated='right'
          content='Create Campaign'
          icon='add circle'
          primary
          labelPosition='left'
          style={{ marginLeft: '10px' }}
        />
        {this.renderCampaigns()}
      </Layout>
    );
  }
}

export default CampaignIndex;
