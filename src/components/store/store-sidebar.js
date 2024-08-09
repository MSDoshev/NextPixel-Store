import Link from "next/link";
import ListItem from "../ui/ListItem";
import UnorederedList from "../ui/UnorderedList";

export default function StoreSidebar() {
  return (
    <div className="w-[20%]  bg-stone-100 pt-10">
      <h3 className="flex justify-center font-bold text-xl">Categories</h3>
      <UnorederedList>
        <ListItem>
          <Link href={""}>Some Link</Link>
        </ListItem>
        <ListItem>
          <Link href={""}>Some Link</Link>
        </ListItem>
        <ListItem>
          <Link href={""}>Some Link</Link>
        </ListItem>
        <ListItem>
          <Link href={""}>Some Link</Link>
        </ListItem>
        <ListItem>
          <Link href={""}>Some Link</Link>
        </ListItem>
        <ListItem>
          <Link href={""}>Some Link</Link>
        </ListItem>
        <ListItem>
          <Link href={""}>Some Link</Link>
        </ListItem>
      </UnorederedList>
    </div>
  );
}
