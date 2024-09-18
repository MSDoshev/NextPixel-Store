export default function UnorederedList({ children, className }) {
  return (
    <ul className={`flex flex-col gap-2 mt-5 w-[100%] ${className}`}>
      {children}
    </ul>
  );
}
