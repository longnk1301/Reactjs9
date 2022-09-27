import Button from './Button';
import './BreadCrumb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';

const BreadCrumb = () => {
    const [isOverlay, setIsOverlay] = useState('');

    return (
        <div className='breadcrumb'>
            <div className={`hide--overlay ${isOverlay}`}></div>

            <div className='breadcrumb__banner'>
                <div className='breadcrumb__banner--content'>
                    <div className='breadcrumb__content--state'>
                        <div></div>
                        Open Now
                    </div>

                    <div className='breadcrumb__content--title'>
                        <h1>The Season Ticket NFT: Sale Open</h1>
                    </div>

                    <div className='breadcrumb__content--description'>
                        <p>Claim your place in line to purchase your Season Ticket NFT today.</p>
                        <ul>
                            <li>Please only 1 tab at a time, and do not use Incognito mode.</li>
                            <li>
                                Questions? <a href='/#'>email</a> or join our a <a href='/#'>Discord</a> for live help!
                            </li>
                        </ul>
                    </div>

                    <div className='breadcrumb__content--action'>
                        <Button bgColor='#ff4637' justify='center' color='#ff4637'>
                            Buy Now
                        </Button>
                        <Button bgColor='inherit' text='start' color='#f5f5f5'>
                            View Roadmap
                        </Button>
                    </div>
                </div>
            </div>

            <div className='breadcrumb__poster'>
                <div className='breadcrumb__poster--image'>
                    <img
                        src='https://autograph.io/_nuxt/img/play-white.acc6e27.png'
                        alt='?'
                        width='30rem'
                        onClick={() => setIsOverlay('show--overlay')}
                    />
                </div>

                <div className='breadcrumb__poster--content'>
                    <div className='breadcrumb__poster--title'>
                        <h1>Ready to join the inner circle?</h1>
                        <p>
                            Our newest collaboration with the legendary Tom Brady gives fans unique access to exclusive
                            content, digital collectibles, custom-made merchandise, and private, in-person events.
                        </p>
                    </div>

                    <div className='breadcrumb__poster--btn'>
                        <button>
                            Watch Video
                            <span>
                                <i class='fa-solid fa-arrow-right'></i>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;
