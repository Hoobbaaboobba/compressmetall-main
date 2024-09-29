import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface OrangeButtonProps {
  label: string;
  mark?: boolean;
  full?: boolean;
}

const OrangeButton: React.FC<OrangeButtonProps> = ({ label, mark, full }) => {
  return (
    <button
      className={`${
        full && "w-full"
      } p-4 rounded-md bg-orange-bg hover:bg-orange-bg/90 flex justify-center items-center h-[40px] text-black`}
    >
      {label}
      {mark ? "" : <CheckCircleOutlineIcon fontSize="small" className="ml-2" />}
    </button>
  );
};

export default OrangeButton;
