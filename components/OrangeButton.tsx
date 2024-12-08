import { cn } from "@/lib/utils";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { ButtonHTMLAttributes } from "react";

interface OrangeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    mark?: boolean;
    full?: boolean;
    className?: string
}

const OrangeButton: React.FC<OrangeButtonProps> = ({ label, mark, full, className, ...props }) => {
    return (
        <button
            {...props}
            className={cn(`${full && "w-full"
                } p-4 rounded-md bg-orange-bg hover:bg-orange-bg/90 flex justify-center items-center h-[40px] text-black`, className)}
        >
            {label}
            {mark ? "" : <CheckCircleOutlineIcon fontSize="small" className="ml-2" />}
        </button>
    );
};

export default OrangeButton;
