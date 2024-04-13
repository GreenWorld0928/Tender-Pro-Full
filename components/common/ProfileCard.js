import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const ProfileCard = () => {
    return (
        <div className="profile-card flex flex-row">
            <Image
                className="w-[130px] aspect-square rounded-full m-[10px]"
                src="/images/profile.png"
                alt=""
                width={130}
                height={130}
            />
            <div className="text-start ms-2">
                <div className="heading2 pt-3">John Doe</div>
                <div className="paragraph py-2">Marketing Coordinator</div>
                <Image
                    className="w-[30px] aspect-square rounded-full my-[3px]"
                    src="/images/linkedin_1.png"
                    alt=""
                    width={30}
                    height={30}
                />
                <div className="paragraph2 text-blue-700 font-bold">Read more <FontAwesomeIcon icon={faArrowRightLong} /></div>

            </div>
        </div>
    )

}

export default ProfileCard