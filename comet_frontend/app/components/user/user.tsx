import { useAppStore } from "@/app/lib/hooks";

export default function User() {
  const user = useAppStore().getState().user;
  return (
    <>
      <p>user: {user.firstName}</p>
      <p>id: {user.id}</p>
    </>
  );
}
