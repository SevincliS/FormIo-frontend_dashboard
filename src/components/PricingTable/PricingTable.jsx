import React from 'react';



const PricingFeatures = [
    {
        "name": "Alias record",
        "starter": true,
        "pro": true,
        "enterprise":true,
    },
    {
        "name": "Anycast DNS",
        "starter": true,
        "pro": true,
        "enterprise":true,
    },
    {
        "name": "Full API access",
        "starter": false,
        "pro": true,
        "enterprise":true,
    },
    {
        "name": "Multiple-layered DoS defense",
        "starter": false,
        "pro": false,
        "enterprise":true,
    },


]

const PricingFeaturesRow = PricingFeatures.map((Features) => {
    return (
        <tr class="tb-ftr-item">
            <td class="tb-ftr-info">{Features.name}</td>
            <td class="tb-ftr-plan"><em class={`icon ni ${Features.starter ? `ni-check-thick` : `ni-cross`}`}></em></td>
            <td class="tb-ftr-plan"><em class={`icon ni ${Features.pro ? `ni-check-thick` : `ni-cross`}`}></em></td>
            <td class="tb-ftr-plan"><em class={`icon ni ${Features.enterprise ? `ni-check-thick` : `ni-cross`}`}></em></td>
        </tr>
    )
})

class PricingTable extends React.Component {

    render(){
        return (
            <>
            <table class="table table-features">
            <thead class="tb-ftr-head thead-light">
                <tr class="tb-ftr-item">
                    <th class="tb-ftr-info">Features</th>
                    <th class="tb-ftr-plan">Starter</th>
                    <th class="tb-ftr-plan">Pro</th>
                    <th class="tb-ftr-plan"> Enterprise</th>
                </tr>
            </thead>
            <tbody class="tb-ftr-body">
               {PricingFeaturesRow}
            </tbody>
        </table>
        </>
        )
    }
}
    

export default PricingTable



