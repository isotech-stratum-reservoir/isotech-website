import Image from 'next/image';
import Link from 'next/link';
import Subpage from '@/components/Subpage';
import keith from '@/public/images/staff/Keith_Hackley.jpg';
import myles from '@/public/images/staff/Myles_Moore.jpg';
import Modal from '@/components/Modal';

export const metadata = {
    title: "Interpretive Services | Services | Isotech",
    description: "Our team composes interpretive reports for clients to assess natural gas and water and determine remediation, monitoring, and extraction strategies.",
};

export default function Interpretive() {
    const breadcrumbs = ["Services", "Interpretive Services"];

    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Interpretive Services</h1>

            <p>Our team composes interpretive reports for clients to assess the source, fate, and transport of natural gas and water in the vadose zone, surface water, groundwater aquifers, and oil and gas reservoirs to determine remediation, monitoring, and extraction strategies. We present data using diagnostic plots to identify contaminant sources, assess storage gas operations, or to enhance gas production from reservoirs for clients.</p>

            <p>You can call our facility, and we can discuss with you which types of samples you should collect and which analyses to perform to address your environmental issue or to enhance extraction capabilities. By providing us with site maps of where samples were collected and a background on what you are trying to understand using geochemical analyses, we can put together a report with proven sourcing diagrams/mixing calculations and citations to address a variety of geochemical conundrums.</p>

            <h2 className='mt-4'>Our Team</h2>
            <div className="row">
                <div className="col-12 col-md-6">
                    <Image 
                        priority
                        src={keith}
                        width={200}
                        height={280}
                        alt="Keith Hackley"
                        className="mb-3"
                    />

                    <h3 className="fs-5 mb-1">Dr. Keith C. Hackley</h3>
                    
                    <p className="mb-1">Senior Geochemist</p>

                    <Modal buttonTxt="About Dr. Hackley" modalTitle="Dr. Keith C. Hackley">
                        <p>Before joining Isotech in 2012, Dr. Hackley was the section head of the Isotope Geochemistry Section at the Illinois State Geological Survey (ISGS) where he worked for 29 years. He attended the University of Wyoming for two years and transferred to Pennsylvania State University where he received his B.S. degree in geology, followed later by a M.S. degree in geology and a Ph.D. in geochemistry from the University of Illinois at Urbana-Champaign. Besides the academic courses taken for the degree programs, he has also attended additional workshops and short courses involving petroleum geochemistry, groundwater geochemistry, applications of environmental isotopes to hydrologic and geochemical problems, and groundwater quality issues surrounding municipal solid waste landfills.</p>

                        <p>Dr. Hackley was PI and co-Pi of multiple projects with at the ISGS and has over 165 published articles and abstracts in the areas of groundwater, coal, natural gas, and environmental geochemistry. Besides the published articles, he has written numerous unpublished reports for various clients concerning such issues gas migration at landfills, stray gas issues related to utility pipeline situations, natural seeps, storage gas sites, oil/gas wells both onshore and offshore, and identification of the sources of gas within the annulus spaces of oil/gas wells throughout the United States and other countries. Other unpublished reports have involved groundwater studies investigating sources of nitrate contamination and landfill leachate migration. More recently, he has also been involved with the application of environmental isotopes to help verify the geographic origin of cotton. He is a Licensed Professional Geologist in Illinois and a member of American Association of Petroleum Geologists, Geological Society of America, and the National Ground Water Association.</p>
                    </Modal>
                </div>

                <div className="col-12 col-md-6">
                    <Image 
                        priority
                        src={myles}
                        width={200}
                        height={280}
                        alt="Myles Moore"
                        className="mb-3"
                    />

                    <h3 className="fs-5 mb-1">Dr. Myles T. Moore</h3>

                    <p className="mb-1">Geochemist</p>

                    <Modal buttonTxt="About Dr. Moore" modalTitle="Dr. Myles T. Moore">
                        <p>Dr. Moore received his B.S. degree in water resource management with a minor in chemistry from the State University of New York at Oneonta, followed by a M.S. degree in earth science and a Ph.D. in geochemistry from the Ohio State University. He then went on to do post-doctoral research at Colorado School of Mines. After which he was a hydrologist with the US Geological Survey, Ohio-Kentucky-Indiana Water Science Center in Indianapolis, Indiana, prior to becoming a Geochemist at Stratum Reservoir Isotech LLC. He has significant experience in using isotopic and trace element analytical results to determine the origin of substances. He has published the results of his findings in high impact chemical journals such as Applied Geochemistry, American Chemical Society Science & Technology, American Association of Petroleum Geologists and Geochimica et Cosmochimica Acta and presented his research at conferences such as Goldschmidt, the American Geophysical Union, and the International Association of Geochemistry.</p>

                        <p>Specifically, he has worked on allocating production from coalbed methane reservoirs versus migration from deeper shale units in the Illinois Basin. He has developed improved techniques to collect gas samples from pressurized cores containing gas hydrates and published on sourcing methane in gas hydrate formations using noble gas and hydrocarbon geochemistry. He has a great deal of experience of sourcing stray gas in the vadose zone and in groundwater wells and has published on specific cases sourcing where dissolved methane was from in groundwater wells in West Virginia and in Western New York. He has also published on identifying the source of contamination in water sources, such as the source of mercury, molybdenum, nitrate, brine, or flowback fluids in surface water and groundwater.</p>
                    </Modal>
                </div>
            </div>

            <h2 className='mt-4'>Some issues addressed by our interpretive team</h2>
            <ul className="questions">
                <li>Is stray natural gas from a leaking pipeline, an underground gas storage reservoir, a swamp, microbial drift gas, coal mining, decomposition of an oil spill, leaking from an abandoned well, a producing oil or gas well, or a landfill?</li>
                <li>What are the sources and processes controlling the presence of methane and brine in groundwater wells?</li>
                <li>Where is water sourced from that is contaminated with nitrate/toxic metals?</li>
                <li>Is subsurface carbon sequestration successfully trapping dissolved carbon dioxide in the subsurface?</li>
                <li>Did storage gas enter a producing well? If so, what proportion of gas is storage gas and native gas in producing well?</li>
                <li>Is gas from the tubing of a well leaking into the annulus spacing of the well? Could gas in the annulus space of a well be from shallower hydrocarbon bearing units or from microbial activity?</li>
            </ul>

            <h2 className="mt-4">Select publications from members of our interpretive team</h2>

            <p><strong>Bold font</strong> indicates Isotech team member.</p>
            
            <ol>
                <li><strong>Hackley, K.C.</strong>, C.L. Liu, and D.D. Coleman. 1992. <Link href="https://www.cambridge.org/core/journals/radiocarbon/article/14c-dating-of-groundwater-
containing-microbial-ch4/8640140DDD97208F8E5B44BC5769026C"><sup>14</sup>C Dating of groundwater containing microbial CH<sub>4</sub></Link>. <em>Radiocarbon</em>, v. 34, no. 3, p. 686-695.</li>

                <li>Coleman, D.D., C.L. Liu, <strong>K.C. Hackley</strong>, and <strong>S.R. Pelphrey</strong>. 1995. <Link href="https://archives.datapages.com/data/deg/1995/002002/95_deg020095.htm">Isotope identification of landfill methane</Link>. <em>Environmental Geosciences</em>, v. 2, no. 2, p. 95-103. </li>

                <li><strong>Hackley, K.C.</strong>, C.L. Liu, and D.D. Coleman. 1996. <Link href="https://ngwa.onlinelibrary.wiley.com/doi/10.1111/j.1745-6584.1996.tb02077.x">Environmental isotope characteristics of landfill leachates and gases</Link>.  <em>Groundwater</em>, v. 34, no. 5, p. 827-836.</li>

                <li>Panno, S.V., <strong>K.C. Hackley</strong>, H.H. Hwang, and W.R. Kelly. 2001. <Link href="https://www.sciencedirect.com/science/article/pii/S0009254101003187?casa_token=_T
gsj_rcmjYAAAAA:p4CSKr2-
B77hpfKAKgBsDJJOxQ6IvUiG7tzwt7eqZeKsOos7pAdukP5tHP0HgYUj_Ej1QwEkeg">Determination of the sources of nitrate contamination in karst springs using isotopic and chemical indicators</Link>. <em>Chemical Geology</em>, v. 179, p. 113-128.</li>

                <li>Panno, S.V., <strong>K.C. Hackley</strong>, H.H. Hwang, S.E. Greenberg, I.G. Krapac, S. Landsberger, and D.J. O&lsquo;Kelly. 2006. <Link href="https://ngwa.onlinelibrary.wiley.com/doi/10.1111/j.1745-6584.2005.00127.x">Characterization and identification of Na-Cl sources in ground water</Link>. <em>Groundwater</em>, 44, p. 176-187.</li>

                <li>Panno, S.V., <strong>K.C. Hackley</strong>, W.R. Kelly, and H.H. Hwang. 2006. <Link href="https://acsess.onlinelibrary.wiley.com/doi/full/10.2134/jeq2005.0012?casa_token=zfv8Ur
Z3lWEAAAAA%3AaGJ4M3ZH28ShCY3RoGxzuupGynE69Spigf_gpT1UlrV6NWBH_jZn
KfPmVqLA4v6Chp6XjZysgF5CXfo">Isotopic evidence of nitrate sources and denitrification in the Mississippi River, Illinois</Link>. <em>Journal of Environmental Quality</em>, v. 35, p. 495-504.</li>

                <li>Panno, S.V., W. R. Kelly, <strong>K.C. Hackley</strong>, H.H. Hwang, and A.T. Martinsek. 2008. <Link href="https://www.sciencedirect.com/science/article/pii/S0022169408003259?casa_token=I53
zIfp52GUAAAAA:m8wGA9ZBiG0PWVfPgLy_k2Gf-JvB7JYua6IuG-
tlfHzwZlWzYpddWMgEtbNYUPwAuN0M4VtuXw">Sources and fate of nitrate in the Illinois River Basin, Illinois</Link>. <em>Journal of Hydrology</em>, v. 359, issues 1-2, p. 174-188.</li>

                <li>Kelly, W.R., S.V. Panno, <strong>K.C. Hackley</strong>, H.H. Hwang, A.T. Martinsek, and M. Markus. 2010. <Link href="https://www.sciencedirect.com/science/article/pii/S0883292710000399?casa_token=5f1
zpnsz0XAAAAAA:s0sLm2sq6MjN6umOiTZpzQAFWBx9QUyXHxYGRba1akH5BXVKT
CJQ2hhLI0RJ7M_gAe7JjVVYSw">Using chloride and other ions to trace sewage and road salt in the Illinois Waterway</Link>. <em>Applied Geochemistry</em>, v. 25, p. 661-673.</li>

                <li>Hwang, H.H., S.V. Panno, and <strong>K.C. Hackley</strong>, 2015. <Link href="https://pubs.geoscienceworld.org/aeg/eeg/article-abstract/21/2/75/60564/Sources-and-
Changes-in-Groundwater-Quality-with">Sources and changes in groundwater quality with increasing urbanization, northeastern Illinois</Link>. <em>Environmental and Engineering Geoscience</em>, v. 21, no. 2, p. 75-90.</li>

                <li>Harkness, J.S., T.H. Darrah, <strong>M.T. Moore</strong>, C.J. Whyte, P.D. Mathewson, T. Cook, and A. Vengosh, 2017 <Link href="https://pubs.acs.org/doi/full/10.1021/acs.est.7b03716?casa_token=flzYasW_WtAAAAA
Link%3AirTVUxyhgdjqU3lNHfV51d_kb_yTN3rqUXo2qpxHUeuwZq8vzdd9BKVZJWXxBSb
MvDslxfzQxdSkzF4">Naturally occurring versus anthropogenic sources of elevated molybdenum in groundwater: evidence for geogenic contamination from southeast Wisconsin, United States</Link>. <em>Environmental Science & Technology</em> v. 51, p. 12190-12199.</li>

                <li>Di Stefano, G., G. Romeo, A. Mazzini, A. Iarocci, S. Hadi, <strong>S. Pelphrey</strong>, 2017. <Link href="https://www.sciencedirect.com/science/article/pii/S0264817217302611?casa_token=H5
SEXWGt_9oAAAAA:OrQJ_ocG8KtOPkRrHf9mLJU4AK2niJDcTJNPPFbyBhHIraYFoatu
LmE2taYKvAybfyIpCY40UA">The Lusi drone: A multidisciplinary tool to access extreme environments</Link>. <em>Marine and Petroleum Geology</em>, v. 90, p. 26-37.</li>

                <li>Harkness, J.S., T.H. Darrah, N.R. Warner, C.J. Whyte, <strong>M.T. Moore</strong>, R. Millot, W. Kloppmann, R.B. Jackson, and A. Vengosh, 2017. <Link href="https://www.sciencedirect.com/science/article/pii/S0016703717302004?casa_token=Fc
WfnY9sZUEAAAAA:Mhvgz-
VtdjWqWhLB6nPEpmlZOrTq52_5LizGPNx1go7BD4wVmvOjLL5cnutn4bMJi-Zpq9n_HA">The geochemistry of naturally occurring methane and saline groundwater in an area of unconventional shale gas development</Link>. <em>Geochimica et Cosmochimica Acta</em> v. 208, p. 302-334.</li>

                <li>Eymold, W.K., K. Swana, <strong>M.T. Moore</strong>, C.J. Whyte, J.S. Harkness, S. Talma, R. Murray, J.B. Moortgat, J. Miller, A. Vengosh, and T.H. Darrah, 2018. <Link href="https://ngwa.onlinelibrary.wiley.com/doi/full/10.1111/gwat.12637?casa_token=arD7mifRp
aYAAAAA%3AG5uNyZaei17sGVPIL07e5QT80w9iSGP6kw9XQfyziAhwlJupWF0DFm-
BLysLvZmfC_z8UakrcjdGfR0">Hydrocarbon-rich groundwater above shale-gas formations: A Karoo Basin Case Study</Link>. <em>Groundwater</em>, v. 56, p. 204-224.</li>

                <li>Kreuzer, R.L., T.H. Darrah, B.S. Grove, <strong>M.T. Moore</strong>, N.R. Warner, W.K. Eymold, C.J. Whyte, G. Mitra, R.B. Jackson, A. Vengosh, and R.J. Poreda, 2018. <Link href="https://ngwa.onlinelibrary.wiley.com/doi/full/10.1111/gwat.12638?casa_token=uKsmJGZ
JArwAAAAA%3AI9WciH0DyUM8KHU35h_DoiFVgfNoqOdkFdGQAzUrDmSwOoiF64x_l
T_R1ffOUx4tf2BisWPi6oIIxos">Structural and hydrogeological controls on hydrocarbon and brine migration into drinking water aquifers in southern New York</Link>. <em>Groundwater</em>, v. 56, p. 225-244.</li>

                <li><strong>Moore, M.T.</strong>, D.S. Vinson, C.J. Whyte, W.K. Eymold, T.B. Walsh, and T.H. Darrah, 2018. <Link href="https://pubs.geoscienceworld.org/gsl/books/edited-volume/2119/chapter-abstract/115206607/Differentiating-between-biogenic-and-thermogenic?redirectedFrom=fulltext">Differentiating between biogenic and thermogenic sources of natural gas in coalbed methane reservoirs from the Illinois Basin using noble gas and hydrocarbon geochemistry</Link>. <em>Geological Society, London, Special Publications</em>, v. 468, p. 151.</li>

                <li><strong>Moore, M. T.</strong>, S.C. Phillips, A.E. Cook, and T.H. Darrah, 2022. <Link href="https://archives.datapages.com/data/bulletns/2022/05may/BLTN20087/bltn20087.html?doi=10.1306%2F05272120087">Integrated geochemical approach to determine source of methane in gas hydrate from Green Canyon Block 955 in the Gulf of Mexico</Link>. <em>AAPG Bulletin</em> v. 106, 5, p. 949-980</li>

                <li><strong>Moore, M. T.</strong>, M. Mugivhi, and <strong>K.C. Hackley</strong>, 2024. <Link href="https://conf.goldschmidt.info/goldschmidt/2024/meetingapp.cgi/Paper/24497">Baseline assessment of groundwater quality in the Karoo Basin, South Africa</Link>. Naturally occurring contaminants in drinking water and source water. <em>Goldschmidt Conference</em>. Chicago, Illinois</li>
            </ol>
        </Subpage>
    );
}