// Dropdown component for selecting options
export default function DropdownSelect({
  label,
  options,
  value,
  onChange,
  width = "w-[120px]",
}) {
  return (
    <select
      className={`bg-white text-sm px-2 py-1 rounded-md outline-none ${width}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{label}</option>
      {options.map((opt) => (
        <option key={opt.value ?? opt} value={opt.value ?? opt}>
          {opt.label ?? opt}
        </option>
      ))}
    </select>
  );
}
