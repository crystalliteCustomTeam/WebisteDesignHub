import Image from "next/image";
import Link from "next/link";
// Images From Local
import liveChatIcon from "media/liveChatIcon.svg";

const Button = ({ text, icon, color, link, border, hover }) => {
    return (
        <Link className={`${color} inline-flex items-center gap-3 w-max pr-3.5 pl-3.5 h-12 rounded-md ${border} ${hover}`} href={link}>
            <span className="text-sm sm:text-lg font-medium">{text}</span>
            {icon ? <Image src={liveChatIcon} alt="liveChatIcon" /> : null}
        </Link>
    );
}

export default Button;