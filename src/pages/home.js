import React from "react";

function Home(){
    return(
        <div>
            <div className="apply-modal">
                <div className="apply-container">
                    <div>
                        <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62ce0d3f91000047c49fdf9b_gummy-doodle.png" 
                        loading="lazy" width="120" sizes="100vw" 
                        srcset="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62ce0d3f91000047c49fdf9b_gummy-doodle-p-500.png 500w, 
                        https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62ce0d3f91000047c49fdf9b_gummy-doodle-p-800.png 800w, 
                        https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62ce0d3f91000047c49fdf9b_gummy-doodle-p-1080.png 1080w, 
                        https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62ce0d3f91000047c49fdf9b_gummy-doodle-p-1600.png 1600w, 
                        https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62ce0d3f91000047c49fdf9b_gummy-doodle.png 1703w" alt=""/>
                        <h1>Apply to Join</h1>
                    </div>
                    <p className="text-size-largest no-margin">We're slowly growing our small community. 
                    To be considered, please follow us on Twitter, and fill out this form. 
                    If you're pre-selected, you'll get a message from our official account inviting you to a quick chat.</p>
                    <div className="combo-buttons">
                        <a data-w-id="24f2970a-cd47-bda9-69d3-73344b12fe07" href="/careers" className="btn is--white-border w-button">Explore Careers</a>
                        <a href="https://forms.bueno.art/humankind" className="btn is--white w-button">Apply as a Member</a>
                    </div>
                </div>
                <div className="apply-investor">
                    <p className="text-size-regular gray">
                        Interested in becoming an investor?<br/>
                    </p>
                    <a href="https://buenonft.typeform.com/humankind" target="_blank">Apply as a Partner</a>
                </div>
                <div data-w-id="cf53c354-585c-8306-cb6c-2af856c2cebd" className="close-area"></div>
                <div data-w-id="e713494b-f4b5-f6a3-aa2e-1c0acd2f7dfb" className="close-button">
                    <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d8a278426f5965b6e38712_icons8-close.svg" 
                    loading="lazy" alt=""/>
                </div>
            </div>
            <div className="page-wrapper">
            <div data-animation="default" className="navbar w-nav" data-collapse="medium">
                    <div className="nav_container">
                        <div className="nav_left">
                            <a href="/" aria-current="page" className="nav_brand-link w-nav-brand w--current">
                                <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62c34c43823219cb54a56164_icon.svg" 
                                loading="eager" alt="" className="nav_logo-img"/>
                                <div className="nav_brand-wordmark">humankind</div>
                            </a>
                        </div>
                        <nav role="navigation" className="nav_menu w-nav-menu">
                            <div className="nav_link-wrapper">
                                <a href="/art" className="nav_link w-nav-link">Art</a>
                                {/* To access the link of the website - <a href="https://www.humankind.art/" className="nav_link w-nav-link">Art</a> */}
                            </div>
                            <div className="nav_link-wrapper">
                                <a href="/collectibles" className="nav_link w-nav-link">Collectibles</a>
                                {/* To access the link of the website - <a href="https://www.humankind.art/collectibles" className="nav_link w-nav-link">Art</a> */}
                            </div>
                            <div className="nav_link-wrapper">
                                <a href="/studios" className="nav_link w-nav-link">Studios</a>
                                {/* To access the link of the website - (<a href="https://www.humankind.art/studios" className="nav_link w-nav-link">Art</a>) */}
                            </div>
                            <div data-hover="true" data-delay="0" data-w-id="ce99d782-0795-8513-992f-7482938eb4e5" 
                            className="nav_link is--dropdown w-dropdown">
                                <div className="nav_dropdown w-dropdown-toggle">
                                    <div>Community</div>
                                    <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62c1e461b44ea9b9a18dbfae_chevron-down.svg" 
                                    loading="lazy" alt="" className="nav_dropdown-icon"/>
                                </div>
                                <nav className="nav_dropdown-list w-dropdown-list">
                                    <a href="/fund" className="dropdown-link w-dropdown-link">Fund</a>
                                    {/* To access the link of the website - <a href="https://www.humankind.art/fund" className="dropdown-link w-dropdown-link">Fund</a> */}
                                    <a href="/careers" className="dropdown-link w-dropdown-link">Careers</a>
                                    {/* To access the link of the website - <a href="https://www.humankind.art/careers" className="dropdown-link w-dropdown-link">Careers</a> */}
                                    <a href="/about" className="dropdown-link w-dropdown-link">About</a>
                                    {/* To access the link of the website - <a href="https://www.humankind.art/about" className="dropdown-link w-dropdown-link">About</a> */}
                                    <a href="/open-doodles" className="dropdown-link w-dropdown-link">Daily Doodles</a>
                                    {/* To access the link of the website - <a href="https://www.humankind.art/open-doodles" className="dropdown-link w-dropdown-link">Daily Doodles</a> */}
                                    <a href="https://discord.gg/humankind" target="_blank" className="dropdown-link w-dropdown-link">Discord</a>
                                </nav>
                            </div>
                            <div className="nav_menu-btn-wrap"></div>
                            <div className="nav_link-wrapper">
                                <a href="https://mailchi.mp/humankind/letters" target="_blank" className="nav_link w-nav-link">Subscribe</a>
                            </div>
                            <div className="nav_menu-btn-wrap">
                                <a href="https://app.humankind.art/" className="nav_btn w-button">Burn a Lunchbox</a>
                            </div>
                        </nav>
                        <div className="nav_right show-tablet">
                            <div className="nav_menu-btn w-nav-button">
                                <div className="nav_menu-btn-grid">
                                    <div className="div-block"></div>
                                    <div className="div-block center"></div>
                                    <div className="div-block"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            
                <main className="main-wrapper">
                    <section data-w-id="715ae16f-7b76-2f7a-c1b7-2a57201a0a80" className="section-home-hero wf-section">
                        <div className="page-padding">
                            <div className="padding-vertical padding-custom1">
                                <div className="hero_comp">
                                    <div className="hero_img-wrapper">

                                        <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d1b8e2c048c969e47514c7_hero-top.png" 
                                        loading="eager" sizes="(max-width: 767px) 100vw, (max-width: 3478px) 92vw, 3200px" 
                                        srcset="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d1b8e2c048c969e47514c7_hero-top-p-500.png 500w, 
                                        https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d1b8e2c048c969e47514c7_hero-top-p-800.png 800w, 
                                        https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d1b8e2c048c969e47514c7_hero-top-p-1080.png 1080w, 
                                        https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d1b8e2c048c969e47514c7_hero-top-p-1600.png 1600w, 
                                        https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d1b8e2c048c969e47514c7_hero-top.png 3200w" 
                                        alt="" className="hero-img-top"/>

                                        <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d1b8e32e16f6b524514c60_hero-bottom.png" 
                                        loading="eager" sizes="(max-width: 767px) 100vw, (max-width: 3478px) 92vw, 3200px" 
                                        srcset="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d1b8e32e16f6b524514c60_hero-bottom-p-500.png 500w, 
                                        https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d1b8e32e16f6b524514c60_hero-bottom-p-800.png 800w, 
                                        https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d1b8e32e16f6b524514c60_hero-bottom-p-1080.png 1080w, 
                                        https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d1b8e32e16f6b524514c60_hero-bottom-p-1600.png 1600w, 
                                        https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d1b8e32e16f6b524514c60_hero-bottom.png 3200w" 
                                        alt="" className="hero-img-bottom"/>
                                    </div>
                                    <div className="hero-cta">
                                        <h1 className="text-size-largest">Creating a magical world...</h1>
                                        <div className="div-block-12 padding-small">
                                            <a href="https://opensea.io/collection/humankind-lunchboxes" target="_blank" 
                                            className="btn is--white w-button">Get a Lunchbox</a>
                                            <a href="https://app.humankind.art/" className="btn w-button">Burn a Lunchbox</a>
                                        </div>
                                        <div className="text-size-large">Lunchbox burn starts on 15th July, 2023</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section data-w-id="1c907b48-4a6c-117f-cb95-cc22e69935f3" className="wf-section">
                        <div className="page-padding">
                            <div className="container-large">
                                <div className="padding-vertical">
                                    <div className="fund-block">
                                        <a href="/fund" className="w-inline-block">
                                            <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/63e09ea82ae9b06d12ea9b91_028-band-playing.png" 
                                            loading="eager" sizes="(max-width: 479px) 81vw, (max-width: 767px) 43vw, 42vw" 
                                            srcset="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/63e09ea82ae9b06d12ea9b91_028-band-playing-p-500.png 500w, 
                                            https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/63e09ea82ae9b06d12ea9b91_028-band-playing-p-800.png 800w,
                                            https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/63e09ea82ae9b06d12ea9b91_028-band-playing-p-1080.png 1080w,
                                            https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/63e09ea82ae9b06d12ea9b91_028-band-playing-p-1600.png 1600w, 
                                            https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/63e09ea82ae9b06d12ea9b91_028-band-playing-p-2000.png 2000w, 
                                            https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/63e09ea82ae9b06d12ea9b91_028-band-playing-p-2600.png 2600w, 
                                            https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/63e09ea82ae9b06d12ea9b91_028-band-playing.png 3000w" alt=""/>
                                        </a>
                                        <div id="w-node-_1c907b48-4a6c-117f-cb95-cc22e69935f8-49ca3d44" className="chero_content-wrap">
                                            <a href="/fund" className="w-inline-block ">
                                                <h3>Bring your ideas to life with the Humankind Fund</h3>
                                            </a>
                                            <p className="text-size-large">The Humanity Fund is a grassroots initiative that 
                                            provides funding for initiatives that uphold the principles and goals of the Humankind brand.
                                            Join us as we share innovative concepts with the world.</p>
                                            <a href="/fund" className="nav_link w-nav-link btn is--yellow w-button">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section data-w-id="481f02c2-4db7-51a3-0896-f66b3c58f749" className="section-multi wf-section">
                        <div className="page-padding">
                            <div className="container-large">
                                <div id="tab-1" className="padding-vertical padding-xhuge">
                                    <div className="multi_comp">
                                        <div id="w-node-_481f02c2-4db7-51a3-0896-f66b3c58f74e-49ca3d44" className="multi_img-wrap">
                                            <a href="https://mint.humankind.art" className="w-inline-block">
                                                <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/63769a6d9860171f31131050_Maya%20and%20Dallas%20Running.png" 
                                                loading="lazy" 
                                                sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, (max-width: 991px) 90vw, (max-width: 1771px) 76vw, 1346px" 
                                                srcset="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/63769a6d9860171f31131050_Maya%20and%20Dallas%20Running-p-500.png 500w,
                                                https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/63769a6d9860171f31131050_Maya%20and%20Dallas%20Running-p-800.png 800w,
                                                https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/63769a6d9860171f31131050_Maya%20and%20Dallas%20Running-p-1080.png 1080w, 
                                                https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/63769a6d9860171f31131050_Maya%20and%20Dallas%20Running.png 1346w" 
                                                alt="" className="multi_img is--1"/>
                                            </a>
                                        </div>
                                        <div className="multi_content-wrap">
                                            <a id="w-node-_48c658ee-2b1b-e7d3-5584-4f0186a5608a-49ca3d44" href="https://mint.humankind.art" className="w-inline-block">
                                                <h2>The Land of Kinds is in Danger!</h2>
                                            </a>
                                            <div id="w-node-_481f02c2-4db7-51a3-0896-f66b3c58f753-49ca3d44" className="mutli_right-wrap">
                                                <p className="text-size-largest">Chiquito Village has been attacked by the giant Mechas. 
                                                Maya and Dallas need you to join the adventure.</p>
                                                <a href="https://mint.humankind.art" className="nav_btn w-button btn is--white w-button rich-text ">Assist them in their journey!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-project wf-section">
                        <div className="page-padding">
                            <div className="container-medium">
                                <div id="tab-1" className="padding-vertical padding-xhuge">
                                    <div className="art-char_comp">
                                        <div className="bio-grid">
                                            <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/63765b76de5f1356947d9d23_Lunchboxes.gif" 
                                            loading="lazy" id="w-node-_2f693565-e295-d112-6993-a2ac918378dc-49ca3d44" alt="" className="character-img"/>
                                            <div id="w-node-_2f693565-e295-d112-6993-a2ac918378dd-49ca3d44" 
                                            data-w-id="2f693565-e295-d112-6993-a2ac918378dd" className="read-more">
                                                <div className="rich-text initial w-richtext">
                                                    <h2>Grab your lunchbox. It will be a long journey.</h2>
                                                    <p>We are delighted that you're finally joining our adventure alongside Maya and Dallas. 
                                                        It all starts with a simple and nostalgic object: a lunchbox. A lunchbox? What for? Well,
                                                        it's gonna be a long journey! </p>
                                                    <p>Every lunchbox will unlock a Humankind on a brave quest. You'll be able to claim your Kind with them. 
                                                        We've made our generative lunchboxes with art we've been creating for the last year. 
                                                    </p>
                                                </div>
                                                <div className="combo-buttons left">
                                                    <a href="https://opensea.io/collection/humankind-lunchboxes" target="_blank" 
                                                    className="btn wrap w-button">Get one from Opensea</a>
                                                    <a href="/collectibles" className="btn wrap is--white w-button">Learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section data-w-id="4015af70-ca02-f430-c338-c15b1950e3d1" className="section-collectibles wf-section">
                        <div className="page-padding">
                            <div className="container-medium">
                                <div id="tab-1" className="padding-vertical padding-xhuge">
                                    <div className="div-block-11">
                                        <div className="nft-container">
                                            <div className="nft-image-container">
                                                <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d0eba9fd0791f1321f3463_hk-8.png" loading="lazy" alt="" className="nft-image"/>
                                                <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d0eba989927a42d3ecd6ec_hk-6.png" loading="lazy" alt="" className="nft-image"/>
                                                <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d0eba9f0c56e0e31430767_hk-7.png" loading="lazy" alt="" className="nft-image"/>
                                                <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d0eba96e8bedb0f11027d1_hk-4.png" loading="lazy" alt="" className="nft-image"/>
                                                <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d0eba95f70f42c84d7e993_hk-5.png" loading="lazy" alt="" className="nft-image"/>
                                                <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d0ecf6c5c447164d6d3ecf_hk-9.png" loading="lazy" alt="" className="nft-image"/>
                                                <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d0eba94995fa159bccd55a_hk-1.png" loading="lazy" alt="" className="nft-image"/>
                                                <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d0eba9d6c0094dc3a98be3_hk-2.png" loading="lazy" alt="" className="nft-image"/>
                                                <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d0eba9fc73b73c7088094d_hk-3.png" loading="lazy" alt="" className="nft-image"/>
                                            </div>
                                            <h2>Humankind Collectibles</h2>
                                            <div className="max-width-large text-size-large">
                                                We're launching a set of diverse and unique art collectibles featuring the Humankind species, 
                                                the most prevalent in The Land of Kinds.
                                            </div>
                                            <div className="button-set">
                                                <a href="/collectibles" className="btn is--white-border w-button">Learn More</a>
                                                <a href="https://opensea.io/collection/humankind-collectibles" 
                                                target="_blank" className="btn is--white w-button">Get one from Opensea</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section data-w-id="5e25e7e5-1314-6705-b7be-a5b6730b53f4" className="section-story wf-section">
                        <div className="page-padding">
                            <div className="container-large">
                                <div className="padding-vertical padding-xhuge">
                                    <div className="story_comp">
                                        <div className="story_card-wrap">
                                            <h2 className="text-size-jumbo">Art and kindness are our tools of trade</h2>
                                            <p className="text-size-large">
                                                Humankind is a creative force developing relatable characters and epic stories for a global audience
                                                across various formats powered by decentralization.<br/>
                                            </p>
                                            <a href="/about" className="btn is--white w-button">Learn About Us</a>
                                        </div>
                                        <div id="w-node-_56f14bea-343e-da0c-12e5-151ad66ec55f-49ca3d44" className="story_img-wrap mecha">
                                            <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/6310a4518beef1d8f521fd6a_mechaWEBbaja.gif" 
                                            loading="lazy" alt="" className="story_img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section data-w-id="4d6df341-de09-cd17-d030-984311bae3d4" className="section-multi wf-section">
                        <div className="page-padding">
                            <div className="container-large">
                                <div className="padding-vertical padding-xhuge">
                                    <div className="multi_comp">
                                        <div id="w-node-_13a59644-1d15-0e2c-5d17-c99ad047ad9a-49ca3d44" className="multi_img-wrap">
                                            <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d769d7aeaf6503ae33a1d2_kinds.png" 
                                            loading="lazy" sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, (max-width: 2608px) 92vw, 2400px" 
                                            srcset="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d769d7aeaf6503ae33a1d2_kinds-p-500.png 500w, 
                                            https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d769d7aeaf6503ae33a1d2_kinds-p-800.png 800w, 
                                            https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d769d7aeaf6503ae33a1d2_kinds-p-1080.png 1080w, 
                                            https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d769d7aeaf6503ae33a1d2_kinds-p-1600.png 1600w, 
                                            https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d769d7aeaf6503ae33a1d2_kinds.png 2400w" 
                                            alt="" className="multi_img"/>
                                        </div>
                                        <div className="multi_content-wrap">
                                            <h2>Creation of a new Universe</h2>
                                            <div id="w-node-d8f9d81f-aabd-c50a-6743-3e7795903007-49ca3d44" className="div-block-3">
                                                <p className="text-size-largest">We're building the Humankind brand, its world, stories, and characters. 
                                                Our goal is to capture the hearts and minds of kids and adults worldwide with epic creations and with unique vision.</p>
                                                <a href="/art" className="btn is--white w-button">Discover the Art</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section data-w-id="c0e11342-295d-d6ed-1146-1344cf376461" className="section-projects wf-section">
                        <div className="collection-container">
                            <div className="project_card-wrap max-width-xlarge">
                                <a href="/studios" className="project-card_comp w-inline-block">
                                    <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62bff77773892535e8a14d13_Studios.png" 
                                    loading="lazy" alt="Illustration of animal characters" className="project-card_img"/>
                                    <h3>Humankind Studios</h3>
                                    <p className="text-align-left">A creative studio designing the tales, the world, and the brand of Humankind.</p>
                                </a>
                                <a href="/art-fund" className="project-card_comp w-inline-block">
                                    <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62bff77649a83b488feffb57_Fund.png" 
                                    loading="lazy" alt="Illustration of animal characters" className="project-card_img"/>
                                    <h3>Humankind Fund</h3>
                                    <p className="text-align-left">A fund that helps artists conceive their creations free of economic dependencies.</p>
                                </a>
                            </div>
                            <div className="super-human-kind">stayhuman</div>
                            <div className="collection-bg"></div>
                        </div>
                    </section>
                    <section data-w-id="8812c2fb-f203-0d27-231a-fc5d9e813b7e" className="section-build wf-section">
                        <div id="w-node-aa7bec7c-d6ed-2509-7b03-f1f336ba7562-49ca3d44" className="build_img-wrap">
                            <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d76a66cddf7a1a50d2a8b9_teamwork.png" 
                            loading="lazy" id="w-node-aa7bec7c-d6ed-2509-7b03-f1f336ba7563-49ca3d44" 
                            sizes="(max-width: 991px) 100vw, 71vw" 
                            srcset="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d76a66cddf7a1a50d2a8b9_teamwork-p-500.png 500w, 
                            https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d76a66cddf7a1a50d2a8b9_teamwork-p-800.png 800w, 
                            https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d76a66cddf7a1a50d2a8b9_teamwork-p-1080.png 1080w, 
                            https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d76a66cddf7a1a50d2a8b9_teamwork.png 2400w" 
                            alt="" className="custom_img-wrapper"/>
                        </div>
                        <div className="build_right-wrap">
                            <div className="build_content-wrap">
                                <h2>Building together</h2>
                                <p className="text-size-largest">Our mission is to entertain and inspire people 
                                all over the globe through the power of art, kindness, and unique storytelling.</p>
                                <a href="/careers" className="btn is--white w-button">Career Exploration</a>
                            </div>
                        </div>
                    </section>
                    <section data-w-id="fba1e3fb-60ac-0bfa-f85c-3d5de9d02247" className="section-join wf-section">
                        <div className="page-padding">
                            <div className="container-large">
                                <div id="tab-1" className="padding-vertical padding-xhuge">
                                    <div className="join_comp">
                                        <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62bfedd174a366f04445ae7a_your-back%201.png" 
                                        loading="lazy" sizes="(max-width: 767px) 93vw, (max-width: 991px) 66vw, 53vw" 
                                        srcset="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62bfedd174a366f04445ae7a_your-back%201-p-500.png 500w, 
                                        https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62bfedd174a366f04445ae7a_your-back%201-p-800.png 800w, 
                                        https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62bfedd174a366f04445ae7a_your-back%201.png 1280w" 
                                        alt="Illustration of small girl & big girl with swords" className="join_img"/>
                                        <div className="join_text-wrap">
                                            <h2>Join our adventure</h2>
                                            <div className="text-size-large">Despite the many evil forces in the world, there is hope.
                                            We can still make a positive difference through art and community. 
                                            We're looking for other geeks, punks, and freaks like us who believe in the power of storytelling to be a part of our quest.</div>
                                            <a href="https://discord.gg/humankind" target="_blank" className="btn w-button">Join our Discord</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer data-w-id="698fc33f-e79e-2303-2ba3-00ad73b8ee3b" className="section-footer wf-section">
                    <div className="page-padding">
                        <div className="container-large">
                            <div className="padding-vertical padding-xhuge footer-padding">
                                <div className="footer_comp">
                                    <div id="w-node-_698fc33f-e79e-2303-2ba3-00ad73b8ee40-73b8ee3b" className="footer_content-wrap">
                                        <div className="footer_content-text-wrap">
                                            <h2 className="heading-1">humankind</h2>
                                            <div className="text-size-huge">stay human. be kind.</div>
                                        </div>
                                        <div className="footer_social-group">
                                            <a data-w-id="698fc33f-e79e-2303-2ba3-00ad73b8ee47" href="#" className="social-link w-inline-block">
                                                <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62bae5cb17d544e7f6288958_discord.svg" loading="lazy" alt=""/>
                                                <div className="hide">Our Discord Page</div>
                                            </a>
                                            <a href="https://twitter.com/humankindart" target="_blank" className="social-link w-inline-block">
                                                <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62bae5cc1647601a516b845a_twitter_squared.svg" loading="lazy" alt=""/>
                                                <div className="hide">Our Twitter Page</div>
                                            </a>
                                            <a href="https://www.instagram.com/humankind.art/" target="_blank" className="social-link w-inline-block">
                                                <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d8a8b45ba814e93a968a58_icons8-instagram.svg" loading="lazy" width="32" alt=""/>
                                                <div className="hide">Send a mail</div>
                                            </a>
                                            <a href="https://www.linkedin.com/company/humankindart/" target="_blank" className="social-link w-inline-block">
                                                <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/63110e27a37cd09493dd6637_icons8-linkedin.svg" loading="lazy" width="32" alt=""/>
                                                <div className="hide">Send a mail</div>
                                            </a>
                                            <a href="https://opensea.io/collection/humankind-lunchboxes" target="_blank" className="social-link w-inline-block">
                                                <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/63765eeec1b3276b14eebe49_OpenSea.svg" loading="lazy" width="32" alt=""/>
                                                <div className="hide">Send a mail</div>
                                            </a>
                                        </div>
                                        <div className="combo-buttons left">
                                            <a href="https://mint.humankind.art" data-w-id="36de2ab7-a5c4-c335-a63e-0cf4d3e1b1f2" 
                                            className="btn small w-button">Burn a Lunchbox</a>
                                            <a href="https://discord.com/invite/humankind" data-w-id="993a5636-4b15-5ab4-17b9-71d5103ca048" 
                                            target="_blank" className="btn small outline w-button">Join our Discord</a>
                                        </div>
                                        <div className="text-size-tiny">Humankind Industries Inc. 2023</div>
                                    </div>
                                    <div id="w-node-_9dbabc92-ecd3-1ad8-50e1-e8cf62b91efa-73b8ee3b" className="footer_img">
                                        <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62bfedd27389251b68a114f7_maya-sitting%201.png" 
                                        loading="lazy" id="w-node-_698fc33f-e79e-2303-2ba3-00ad73b8ee4d-73b8ee3b" alt="" 
                                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 66vw, (max-width: 991px) 65vw, (max-width: 2383px) 59vw, 1406px" 
                                        srcset="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62bfedd27389251b68a114f7_maya-sitting%201-p-500.png 500w, 
                                        https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62bfedd27389251b68a114f7_maya-sitting%201-p-800.png 800w, 
                                        https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62bfedd27389251b68a114f7_maya-sitting%201.png 1406w" 
                                        className="footer_img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="div-block-13">
                                <div className="text-size-tiny">Powered by</div>
                                <a id="w-node-_849acb8c-142b-eed4-ebc6-8c09265ad8e4-73b8ee3b" 
                                href="https://nft.bueno.art" target="_blank" className="w-inline-block">
                                    <img src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/63988f4e787e410a776a1718_Bueno-logo.svg" 
                                    loading="lazy" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Home;
