import {bg_img, bg_item} from "./components/bg_img"
import products from "./db/products.json"
import hair_products from "./db/hair_products.json"
import SubstackFeed from "./components/blog"
import { w_number } from "./components/whatsapp_number"

export const Site = () => {
    return (
        <div className="wrapper">
            <div className="h-100 text-center d-flex justify-content-center align-items-center " style={bg_img("https://ngratesc.sirv.com/HB%20Luxury/2859.jpg")}>
                <div>

                    <h1 className="display-1 glow  text-white text-shadow">HB LUXURY HAIR</h1>
                    <a href="#shop"><button className="btn btn-outline-light  rounded-0">Shop Now</button></a>
                </div>

            </div>

            <div className="">
                <div className="row h-100">
                   
                    <div className="col-sm h-100 p-5 d-flex justify-content-center align-items-center bg-white">
                        <div className="text-center p-3 purple_border  d-flex justify-content-center align-items-center">
                            <div className="text-center">
                                <h1>Weaves</h1>
                                <p>Crafted to perfection, our Brazilian weaves are soft, natural-looking, and made to last. They blend seamlessly with all hair types, offering you the ultimate styling flexibility.

                                    Braids: Our collection of braids of</p>
                                <a href="#shop"><button className="btn btn-outline-warning" >View</button></a>
                            </div>

                        </div>

                    </div>
                    <div className="col-sm  h-100  p-5  d-flex justify-content-center align-items-center text-white">
                        <div className="p-3 gold_border d-flex justify-content-center align-items-center">


                            <div className="text-center">
                                <h1 className="text-center">Hair Products</h1>
                                <p>Maintain the health and vibrancy of your hair with our specially curated hair care line. From nourishing oils to styling essentials, we’ve got everything you need to keep your hair looking its best.</p>
                                <a href="#hair_products"><button className="btn btn-outline-light">View</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-100 row text-center"  style={bg_img("https://ngratesc.sirv.com/HB%20Luxury/16740.jpg")} >
                
                <div className="h-100  p-5 text-white d-flex align-items-center justify-content-center">
                    <div className="purple_bg p-5">
                    <h1 className="display-1">Natural Looking</h1>
                    <p>At <span className="text-warning glow">HB Luxury Hair</span>, we believe that every woman deserves to look and feel her best. That’s why we offer only the finest 100% natural hair, and a range of high-quality hair products designed to elevate your beauty routine. Whether you're looking for sleek, natural, or voluminous hair, our luxurious collections provide versatility and unmatched quality.</p>
                    <a href={`https://wa.me/c/${w_number}`} target="_blank"><button className="btn btn-outline-warning">View Catalogue</button></a>
                    </div>
                </div>
            </div>
            <div className="bg-white text-center" >
                <div >
                    <h1 className="display-1 ">Our Hair</h1>
                </div>
                <div className="container-fluid " id="shop">
                <div className=" row justify-content-center gap-2">
                    {
                        products.map((i,index)=>{
                            return(
                                <div className="col-md-3 mb-2" key={index}>
                                <div className=" d-flex gap-2 flex-row mt-5" >
                                    <div className="img-fluid " style={{...bg_item(i.img),width:'15vw'}}>
                                      
                                    </div>
                                    <div className="text-start w-100">
                                        <h5>{i.item}</h5>
                                        <div className="d-flex flex-row justify-content-between">
                                            <span><small>{i.size} inch</small></span>
                                            <span className="text-success"><small>${i.amount.toFixed(2)}</small></span>
                                        </div>


                                    </div>
                                   
                                </div>
                                <div className="mt-2">
                                    <a href={`https://wa.me/${w_number}?text=Good day can i get more information on ${i.item}`} target="_blank"><button className="btn btn-outline-dark w-100">View</button></a>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
                <div className="mt-3 mb-5 pb-5">
                    <a href={`https://wa.me/c/${w_number}`} target="_blank"><button className=" btn btn-outline-warning">View More</button></a>
                </div>

            </div>
            <div className="h-100 text-center d-flex align-items-center" style={bg_img("https://ngratesc.sirv.com/HB%20Luxury/909.jpg", "top")}>
                <div className="m-3 p-3 text-white bg-warning bg-opacity-75">
                    <h1 className="display-1">The Luxury Line</h1>
                    <p>Indulge in the ultimate hair experience with HB Luxury Hair’s exclusive Luxury Line. Our Luxury Line features the finest selection of 100% natural hair, carefully sourced and handpicked for its superior quality. Each strand is silky, soft, and tangle-free, offering unmatched durability and shine that lasts. Whether you desire long, flowing waves or sleek, straight styles, our Luxury Line is designed to provide a flawless finish that elevates your look.
                   </p>
                </div>
            </div>
            <div className="bg-white text-center" id="hair_products">
                <div >
                    <h1 className="display-1 ">Our Hair Products</h1>
                </div>
                <div className="container-fluid ">
                <div className=" row justify-content-center gap-2">
                    {
                        hair_products.map((i,index)=>{
                            return(
                                <div className="col-md-4 mb-2" key={index}>
                                <div className=" d-flex gap-2 flex-row mt-5" >
                                    <div className="img-fluid " style={{...bg_item(i.img),width:'10vw'}}>
                                      
                                    </div>
                                    <div className="text-start w-100">
                                        <h5>{i.item}</h5>
                                        <div className="d-flex flex-row justify-content-between">
                                            <span className="text-success"><small>${i.amount.toFixed(2)}</small></span>
                                        </div>


                                    </div>
                                   
                                </div>
                                <div className="mt-2">
                                    <a href={`https://wa.me/${w_number}?text=Good day can I get more information on ${i.item}`} target="_blank"><button className="btn btn-outline-dark w-100">View</button></a>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
                <div className="mt-3 mb-5 pb-5">
                    <a href={`https://wa.me/c/${w_number}`} target="_blank"><button className=" btn btn-outline-warning">View More</button></a>
                </div>

            </div>
            <div className="h-100" style={bg_img("https://ngratesc.sirv.com/HB%20Luxury/derrick-payton-9eq4KD3I4uw-unsplash.jpg")}>

            </div>
            <div  className="bg-white ">
                 <div className="mt-5">
                    <h1 className="display-1  text-center">Blog</h1>   
                    <div className="mt-4">
                    <SubstackFeed/>
                    </div> 
                </div>   
            </div>
            <div className="row ">
                    <div className="col-sm  w-100 p-3 text-white">
                        <form>
                        <div>
                            <h1 className="display-1 text-md-start text-center">Contact Us</h1>
                        </div>
                        <div className="row ">
                            <div className="col-sm mb-2">
                                <span>First Name</span>
                                <input type="" required className=" form-control rounded-0"/>
                            </div>
                            <div className="col-sm mb-2">
                                <span>Last Name</span>
                                <input type="" required className="form-control rounded-0"/>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-sm mb-2">
                                <span>Email</span>
                                <input type="" required className="form-control rounded-0"/>
                            </div>
                            <div className="col-sm mb-2">
                                <span>Contact Number</span>
                                <input type="" required className="form-control rounded-0"/>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-sm mb-2">
                                <span>Your Message</span>
                                <textarea required className="form-control rounded-0"/>
                            </div>
                           
                        </div>
                        <div>
                            <button className="btn btn-outline-light w-100">Send</button>
                        </div>
                        </form>
                    </div>
                    <div className="col-sm" style={bg_img("https://ngratesc.sirv.com/HB%20Luxury/2b52fcca38582c20bbb8f3db032b0477.jpg", "top")}>

                    </div>
            </div>
            <div className="container-fluid w-100 ">

            <div className="row text-white d-flex justify-content-md-start justify-content-center">
                 
                    <div className="col-sm d-flex justify-content-md-center justify-content-center align-items-center mb-5">
                        <div className="d-flex flex-column text-md-start text-center">

                        <p>Contact Us</p>
                        <a href="tel:+263783558645">+263 78 355 8645</a>
                        <a href="tel:+263717743355">+263 71 774 3355</a>
                        <a href="mailto:info@hbluxuryhair.co.zw">info@hbluxuryhair.co.zw</a>
                        </div>

                    </div>
                    <div className="col-sm d-flex justify-content-md-center justify-content-center align-items-center mb-5">
                        <div className="d-flex flex-column text-md-start text-center">

                        <p>Our Socials</p>
                        <a href="https://www.facebook.com/hbluxuryhairzw" target="_blank">Facebook</a>
                        <a href="">Instgram</a>
                        <a href="">Pinterest</a>
                        </div>

                    </div>
                    <div className="col-sm d-flex justify-content-md-center justify-content-center">
                        <img src="https://ngratesc.sirv.com/HB%20Luxury/hb_long_logo.png" className="img-fluid"/>
                    </div>
                   
                    <div className="col-sm d-flex justify-content-md-center justify-content-center align-items-center">
                        <div className="rounded">

                        <iframe src="https://hbluxuryhair.substack.com/embed" className="bg-black rounded img-fluid"   frameBorder="0" scrolling="no"></iframe>
                        </div>

                    </div>
                   
            </div>
            </div>

        

        </div>
    )
}

export default Site