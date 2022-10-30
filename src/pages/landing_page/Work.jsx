function Work() {
    return (<section className="landing-sec-4">
        <h1 className="h-t-h">How it is works</h1>
        <p className="h-t-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, culpa?</p>

        <div className="work-card-container">
            {/* <div className="work-card">
            <div className="work-card-img"></div>
            <div className="work-card-details">
                <h1>Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis nihil qui adipisci mollitia! Ab deleniti corporis tempore maiores nobis?</p>
            </div>
        </div>
        <div className="work-card">
            <div className="work-card-img"></div>
            <div className="work-card-details">
                <h1>Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis nihil qui adipisci mollitia! Ab deleniti corporis tempore maiores nobis?</p>
            </div>
        </div>
        <div className="work-card">
            <div className="work-card-img"></div>
            <div className="work-card-details">
                <h1>Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis nihil qui adipisci mollitia! Ab deleniti corporis tempore maiores nobis?</p>
            </div>
        </div> */}
            <WorkCard title='Card-1' />
            <WorkCard title='Card-2' />
            <WorkCard title='Card-3' />
        </div>
    </section>);




}

function WorkCard(props) {
    return (
        <div className="work-card">
            <div className="work-card-img"></div>
            <div className="work-card-details">
                <h1>{props.title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis nihil qui adipisci mollitia! Ab deleniti corporis tempore maiores nobis?</p>
            </div>
        </div>
    );
}



export default Work;