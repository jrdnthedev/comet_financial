export default function EmptyData(props: any) {
  return (
    <div className="rounded-md shadow-sm inline-block p-3 border-2 flex-1 text-center flex h-full items-center justify-center">
      <p className="font-bold">{props.message}</p>
    </div>
  );
}
