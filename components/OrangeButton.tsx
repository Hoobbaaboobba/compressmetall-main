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
      } py-2 px-5 bg-orange-bg boxshadow underline text-white`}
    >
      {label}
      {mark ? "" : <CheckCircleOutlineIcon fontSize="small" className="ml-2" />}
    </button>
  );
};

export default OrangeButton;
