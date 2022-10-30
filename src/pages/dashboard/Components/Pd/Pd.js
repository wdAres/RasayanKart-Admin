import './pd.css';
import Img from '../../../../assets/product.png' ;
import Img2 from '../../../../assets/product2.png' ;
import { useState, useRef } from 'react';
import ReactImageMagnify from 'react-image-magnify';


function Pd(props) {

    const images = [
        props.img,
        props.img2,
        props.img,
        props.img2
    ];

    const [img, setImg] = useState(images[0]);
    const hoverHandler = (image, i) => {
        setImg(image);
        refs.current[i].classList.add('active');
        for (var j = 0; j < images.length; j++) {
            if (i !== j) {
                refs.current[j].classList.remove('active');
            }
        }
    };
    const refs = useRef([]);
    refs.current = [];
    const addRefs = (el) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    return (
        <div className="container-pd">  
            <div className="left">
                <div className="left_1">
                    {images.map((image, i) => (
                        <div
                            className={i === 0 ? 'img_wrap active' : 'img_wrap'}
                            key={i}
                            onMouseOver={() => hoverHandler(image, i)}
                            ref={addRefs}
                        >
                            <img  src={image} alt="" />
                        </div>
                    ))}
                </div>
                <div className="left_2">
                    <img src={img} alt="" />
                 {/* <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: ' ',
                                // isFluidWidth: true,
                                // src: img,
                            },
                            largeImage: {
                                // src: img,
                                // width: 1200,
                                // height: 1800,
                            },
                            enlargedImageContainerDimensions: {
                                // width: '150%',
                                // height: '150%',
                            },
                        }}
                    /> */}
                </div>
            </div>
            <div className="right"></div>
        </div>
    );
}

export default Pd;
