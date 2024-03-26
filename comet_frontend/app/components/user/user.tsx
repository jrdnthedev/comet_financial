import { useAppStore } from "@/app/lib/hooks";

export default function User() {
  const user = useAppStore().getState().user.user;
  return (
    <>
      <p>user: {user.name}</p>
      <p>id: {user.id}</p>
    </>
  );
}
