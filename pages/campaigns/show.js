import React, { Component } from 'react';
import Layout from '../../components/Layout';
import campaignFile from '../../ethereum/campaign';

class CampaignShow extends Component {
  static async getInitialProps(props){
    const campaign = campaignFile(props.query.address);
    const summary = await campaign.methods.getSummary().call();

    console.log(summary);
    
    return {};
  }

  render() {
    return(
      <Layout>
        <h3>Campaign Details</h3>
      </Layout>
    );
  }
}

export default CampaignShow;
