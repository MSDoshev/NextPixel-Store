export default function UnorederedList({ children, className }) {
  return (
    <ul className={`flex flex-col gap-2 w-[100%] ${className}`}>
      {children}
    </ul>
  );
}
