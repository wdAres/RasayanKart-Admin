import StarIcon from '@mui/icons-material/Star';

function Reviews() {
    return ( <section className="landing-sec-5">
    <h1 className="h-t-h">Whats Our Clients Says</h1>
        <p className="h-t-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, culpa?</p>

        <div className="reviews-container">
            {/* <div className="review-card">
                <div className="review-stars-box">
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti nostrum modi quidem natus aliquam ipsa alias dicta, repellendus velit nihil autem aperiam accusamus vel labore, illum vitae iusto! Eligendi, saepe corrupti. Reprehenderit, nemo? Modi!
                </p>
                <div className="reviewer-profile">
                    <div className="reviewer-dp"></div>
                    <div className="review-name-date">
                        <div className="reviewer-name">Puneet Shrivastav</div>
                        <div className="review-date">13/08/2002</div>
                    </div>
                </div>
            </div>
            <div className="review-card">
                <div className="review-stars-box">
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti nostrum modi quidem natus aliquam ipsa alias dicta, repellendus velit nihil autem aperiam accusamus vel labore, illum vitae iusto! Eligendi, saepe corrupti. Reprehenderit, nemo? Modi!
                </p>
                <div className="reviewer-profile">
                    <div className="reviewer-dp"></div>
                    <div className="review-name-date">
                        <div className="reviewer-name">Puneet Shrivastav</div>
                        <div className="review-date">13/08/2002</div>
                    </div>
                </div>
            </div>
            <div className="review-card">
                <div className="review-stars-box">
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti nostrum modi quidem natus aliquam ipsa alias dicta, repellendus velit nihil autem aperiam accusamus vel labore, illum vitae iusto! Eligendi, saepe corrupti. Reprehenderit, nemo? Modi!
                </p>
                <div className="reviewer-profile">
                    <div className="reviewer-dp"></div>
                    <div className="review-name-date">
                        <div className="reviewer-name">Puneet Shrivastav</div>
                        <div className="review-date">13/08/2002</div>
                    </div>
                </div>
            </div> */}
            <ReviewsCard name='Puneet Shrivastav' date='13/08/22'/>
            <ReviewsCard name='Shivam Yogi' date='13/09/22'/>
            <ReviewsCard name='Tushar Alagh' date='03/08/22'/>
        </div>
    </section> );
}

function ReviewsCard(props ) {
    return ( 
        <div className="review-card">
                <div className="review-stars-box">
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti nostrum modi quidem natus aliquam ipsa alias dicta, repellendus velit nihil autem aperiam accusamus vel labore, illum vitae iusto! Eligendi, saepe corrupti. Reprehenderit, nemo? Modi!
                </p>
                <div className="reviewer-profile">
                    <div className="reviewer-dp"></div>
                    <div className="review-name-date">
                        <div className="reviewer-name">{props.name}</div>
                        <div className="review-date">{props.date}</div>
                    </div>
                </div>
            </div>
     );
}

export default Reviews;