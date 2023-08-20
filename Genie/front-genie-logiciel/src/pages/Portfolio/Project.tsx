import Hiadina from '../../assets/hiadina.png'
import Huit from '../../assets/8.png'
import WebMapping from '../../assets/webmapp.png'
import School from '../../assets/School.png'
import RH from '../../assets/RH-Log.png'
import AirPay from '../../assets/7.png'
function Project() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center my-6">
                <div className="text-3xl  font-extrabold">Projets</div>
            </div>
            <div className="mockup-window border">
                <div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-5">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={Hiadina} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={Huit} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={WebMapping} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={School} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={RH} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={AirPay} alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Project;