import Skill from "./Skill";
import Experience from "./Experience";
import Project from "./Project";
import Descri from "./Descri";
import School from "./School";
function Portfolio() {
    return (
        <div className='py-10 px-5 space-y-5'>
            <div className='grid grid-cols-1 md:grid-cols-8 sm:space-y-1 space-y-5'>
                <div className="col-span-2">
                    <div className="card bg-base-100 shadow-xl !sticky !top-[20%]">
                        <div className="text-center py-3">
                            Skill
                        </div>
                        <figure><img src="https://source.unsplash.com/300x300/?man,businessman" className="rounded-xl w-9/12" alt="Photo" /></figure>
                        <div className="card-body text-center">
                            <h2 className="card-title font-extrabold flex justify-center">Name</h2>
                            <p>Mail</p>
                            <div className="card-actions justify-center">
                                <div className="flex my-2">
                                    <a target="_blank" href="#" className="w-12 h-12 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block" >
                                        <svg viewBox="0 0 24 24">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g id="Brand" transform="translate(-336.000000, -50.000000)">
                                                    <g id="linkedin_fill" transform="translate(336.000000, 48.000000)">
                                                        <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero">

                                                        </path>
                                                        <path d="M18,3 C19.6569,3 21,4.34315 21,6 L21,18 C21,19.6569 19.6569,21 18,21 L6,21 C4.34315,21 3,19.6569 3,18 L3,6 C3,4.34315 4.34315,3 6,3 L18,3 Z M8,10 C7.44772,10 7,10.4477 7,11 L7,16 C7,16.5523 7.44772,17 8,17 C8.55228,17 9,16.5523 9,16 L9,11 C9,10.4477 8.55228,10 8,10 Z M11,9 C10.4477,9 10,9.44772 10,10 L10,16 C10,16.5523 10.4477,17 11,17 C11.5523,17 12,16.5523 12,16 L12,12.3398 C12.3049,11.9955 12.8207,11.5921 13.3933,11.3472 C13.7261,11.2048 14.2268,11.1479 14.5751,11.2574 C14.7274,11.3053 14.8143,11.3726 14.868,11.4451 C14.9201,11.5157 15,11.6707 15,12 L15,16 C15,16.5522 15.4477,17 16,17 C16.5523,17 17,16.5522 17,16 L17,12 C17,11.3292 16.8298,10.7342 16.4758,10.2556 C16.1232,9.77907 15.6476,9.4981 15.1749,9.34949 C14.2732,9.06594 13.2739,9.22295 12.6067,9.50837 C12.395,9.59892 12.1863,9.70435 11.9841,9.82128 C11.8998,9.35427 11.4913,9 11,9 Z M8,7 C7.44772,7 7,7.44772 7,8 C7,8.55228 7.44772,9 8,9 C8.55228,9 9,8.55228 9,8 C9,7.44772 8.55228,7 8,7 Z" id="形状" fill="#09244B">

                                                        </path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                    <a target="_blank" href="#" className="w-12 h-12 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block" >
                                        <i className="fa fa-instagram"></i >
                                    </a>
                                    <a target="_blank" href="#" className="w-12 h-12 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block" >
                                        <i className="fa fa-facebook"></i >
                                    </a>
                                    <a target="_blank" href="#" className="w-12 h-12 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block" >
                                        <i className="fa fa-linkedin"></i >
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 space-y-5">
                    <div className="pl-5">
                        <Descri />
                    </div>
                    <div className="pl-5">
                        <Skill />
                    </div>
                    <div className="pl-5">
                        <Experience />
                    </div>
                    <div className="pl-5">
                        <School />
                    </div>
                    <div className="pl-5">
                        <Project />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;