import './sellerprofile.css'

function SellerProfile(props) {
    return ( 
        <div className="sellerprofile">
            <div className="sellerbanner"></div>
            <div className="sellerdp">
                <img src={props.img} alt="" />
            </div>
            <h1>VOXCO Pigments And Chemicals Pvt Ltd.</h1>
            <p className="sellerlocation">Mumbai, Maharashtra</p>
            <div className="seller-num-mail">
                <div className="sellerne">9702946450</div>
                <div className="sellerne">Sales@vovlo.com</div>
            </div>
        </div>
     );
}

export default SellerProfile;