interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm rounded-full border ${
        isActive
          ? "bg-blue-600 text-white border-blue-600"
          : "text-gray-700 border-gray-300 hover:border-blue-400 hover:text-blue-600"
      } transition`}
    >
      {label}
    </button>
  );
};

export default Pill;
