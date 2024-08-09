export default function ListItem({ children, className }) {
  return (
    <li
      className={`p-2 hover:text-blue-500 hover:bg-stone-200 cursor-pointer text-lg ${className}`}
    >
      {children}
    </li>
  );
}
