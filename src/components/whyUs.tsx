import imageWhyUs from "../assets/img/whyus.png";

const WhyUs:React.FC =()=>{
    return(
        <section className="whyus max-w-8xl mx-auto mt-[100px]">
        <div className="flex flex-row">
            <div className="w-1/2">
                <img src={imageWhyUs} alt="" className="w-[635px]" />
            </div>
            <div className="flex flex-col w-1/2 justify-between">
                <div className="flex flex-col gap-y-[18px]">
                    <h2 className="text-5xl leading-[70px]">Our Development Projects are Designed not only for present but also the future</h2>
                    <p className="text-lg text-secondaryBlack font-light leading-8">Our development projects are designed for longevity, considering not just the present but also anticipating future demands. Through forward-thinking designs and sustainable features, we aim to create enduring spaces that evolve with the needs of time.</p>
                </div>
                <div>
                    <div>
                        <h3 className="text-[28px]">Interior Design Solusion</h3>
                        <p className="text-secondaryBlack font-light text-lg">Lorem ipsum dolor sit amet consectetur. Id in laoreet aenean nibh turpis. Sed phasellus pellentesque turpis vitae sollicitudin neque nisl morbi commodo.</p>
                    </div>
                    <div className="group">
                        <h3 className="text-[28px]">Property Consultant</h3>
                        <p className="text-secondaryBlack font-light text-lg hidden group-hover:block">Lorem ipsum dolor sit amet consectetur. Id in laoreet aenean nibh turpis. Sed phasellus pellentesque turpis vitae sollicitudin neque nisl morbi commodo.</p>
                    </div>
                    <div className="group">
                        <h3 className="text-[28px]">Custom Home Building</h3>
                        <p className="text-secondaryBlack font-light text-lg hidden group-hover:block">Lorem ipsum dolor sit amet consectetur. Id in laoreet aenean nibh turpis. Sed phasellus pellentesque turpis vitae sollicitudin neque nisl morbi commodo.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default WhyUs;