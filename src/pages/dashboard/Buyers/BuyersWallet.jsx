import './buyers.css';
import Navbar from '../Components/Navbar/Navbar';
import BuyersSidebar from '../Components/BuyerSidebar/BuyersSidebar';
import { HalfPieChart } from "half-pie-chart";
import React, { Component } from "react";

function Rti3({ arrhead, arrdata }) {



    return (
        <div className="rit3-table">
            <div className="rit3-header">
                {
                    arrhead.map((arrhead, index) => (
                        <div key={index} className="">{arrhead.name}</div>
                    ))
                }
            </div>
            <div className="rit3-body">
                {
                    arrdata.map((arrdata, index) => (
                        <div key={index} className="rit3-row">
                            <div className="rit3-info">{arrdata.index}</div>
                            <div className="rit3-info">{arrdata.id}</div>
                            <div className="rit3-info">{arrdata.product}</div>
                            <div className="rit3-info">{arrdata.amount}</div>
                            <div className="rit3-info bb-btn">View</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        right: [
          {
            value: 20000,
            displayValue: "20000 ",
            text: "Used",
            color: "#fff",
          },
        ],
        left: [
          {
             value: 80000,
            displayValue: "80000",
            text: "Pending",
            color: "#006ff2",
          },
        ],
      };
    }
    render() {
      return (
        <HalfPieChart
          name="Wallet"
          right={this.state.left}
          left={this.state.right}
          dark={false}
          title="Wallet"
          fontStyle="Montserrat"
          centerText={"Total"}
          centerPostText={" "}
        />
      );
    }
}


function BuyersWallet() {
    let heads = [
        { name: 'Serial  No.' },
        { name: 'Order Id' },
        { name: 'Product' },
        { name: 'Amount' },
        { name: 'Details' }
    ]

    let content = [
        {
            index: 1,
            id: 'ASD8000153',
            product: 'Adani ltd',
            amount: '12000',
        },
        {
            index: 2,
            id: 'ASD8000154',
            product: 'Adani ltd',
            amount: '50000',
        },
        {
            index: 3,
            id: 'ASD8000152',
            product: 'Adani ltd',
            amount: '10000',
        }
    ]


    return (
        <section className="buyers-section">
            <Navbar />
            <div className="buyers-section-div">
                <div className="bsd-left">
                    <BuyersSidebar n={4} />
                </div>
                <div className="bsd-right">
                    <div className="buyers-profile-box">
                        <div className='bw-container'>
                            <App />
                            <strong className='swallet'>Recent Transaction</strong>
                            <Rti3 arrhead={heads} arrdata={content} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BuyersWallet;