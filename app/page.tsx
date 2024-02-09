import { Room } from "./Room";
import { CollaborativeApp } from "./CollaborativeApp";

export default function Page() {
  console.log(process.env.LIVEBLOCKS_PUBLIC_KEY);
  return (
    <>
      <Room>
        <CollaborativeApp />
      </Room>
    </>
  );
}
