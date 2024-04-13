import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const SimpleCard = () => {
    return (
        <div className="profile-card flex flex-row">
            <Image
                className="w-[130px] aspect-square rounded-full m-[10px]"
                src="/images/advisory.png"
                alt=""
                width={130}
                height={130}
            />
            <div className="text-start ms-2 flex flex-col justify-center">
                <div className="heading2 pt-3">Guy Hawkins</div>
                <div className="paragraph py-2">Medical Assistant</div>
            </div>
        </div>
    )
}

export default SimpleCard