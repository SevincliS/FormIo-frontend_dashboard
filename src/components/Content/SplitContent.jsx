import React, {Component} from 'react';
import Slider from "react-slick";
import SlideA from '../../assets/img/slides/promo-a.png'
import SlideB from '../../assets/img/slides/promo-b.png'
import SlideC from '../../assets/img/slides/promo-c.png'

class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };
      return (
        <div>
          <Slider {...settings}>
          <div class="slider-item">
                        <div class="nk-feature nk-feature-center">
                            <div class="nk-feature-img">
                                <img class="round" src={SlideA} srcset={SlideA} alt=""/>
                            </div>
                            <div class="nk-feature-content py-4 p-sm-5">
                                <h4>Dashlite</h4>
                                <p>You can start to create your products easily with its user-friendly design & most completed responsive layout.</p>
                            </div>
             </div>
            </div>
            <div class="slider-item">
                        <div class="nk-feature nk-feature-center">
                            <div class="nk-feature-img">
                                <img class="round" src={SlideB}  srcset={SlideB} alt=""/>
                            </div>
                            <div class="nk-feature-content py-4 p-sm-5">
                                <h4>Dashlite</h4>
                                <p>You can start to create your products easily with its user-friendly design & most completed responsive layout.</p>
                            </div>
                        </div>
                    </div>
            


                    <div class="slider-item">
                        <div class="nk-feature nk-feature-center">
                            <div class="nk-feature-img">
                                <img class="round" src={SlideC} srcset={SlideC} alt=""/>
                            </div>
                            <div class="nk-feature-content py-4 p-sm-5">
                                <h4>Dashlite</h4>
                                <p>You can start to create your products easily with its user-friendly design & most completed responsive layout.</p>
                            </div>
                        </div>
                    </div>
            
          </Slider>
        </div>
      );
    }
  }

class SplitContent extends React.Component {

    render(){
        return (
            <div class="nk-split-content nk-split-stretch bg-lighter d-flex toggle-break-lg toggle-slide toggle-slide-right" data-content="athPromo" data-toggle-screen="lg" data-toggle-overlay="true">
            <div class="slider-wrap w-100 w-max-550px p-3 p-sm-5 m-auto">
                <div class="slider-init" data-slick='{"dots":true, "arrows":false}'>
                    

                   <SimpleSlider/>
                    
                </div>
               
                <div class="slider-arrows"></div>
            </div>
        </div>
            
        )
    }
}
    

export default SplitContent