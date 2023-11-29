import React, {Component} from 'react';
import Card from './CardUI';
import img1 from '../card-imgs/8.jpg';
import img2 from '../card-imgs/44.jpg';
import img3 from '../card-imgs/9.jpg';

class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card 
                        imgsrc={img1} 
                        title="Angie" 
                        description="I was in desperate need of my house cleaned before Thanksgiving dinner. I was able to find someone to
                        clean my house and within 1 hour they were at my house starting their service! They offer great prices for
                        great services with great people! "
                        />
                    </div>
                    <div className="col-md-4">
                        <Card 
                        imgsrc={img2} 
                        title="Drew"

                        description="I was out of town but needed my pool cleaned before I got home. I logged in, found a servicer near me
                        and was able to get my pool cleaned so my kids could enjoy it when we got home from out of town!"
                        />
                    </div>
                    <div className="col-md-4">
                        <Card 
                        imgsrc={img3} 
                        title="Kim"
                        description="I had a hard week and was in need of getting my lawn mowed before my guests arrived for Thanksgiving
                        Dinner. Sure enough I was able to find someone to get my lawn in tip-top shape before my guests arrived!"
                        />
                    </div>
                </div>
            </div>
            );
    }
}


export default Cards;