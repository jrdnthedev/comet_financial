export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-4 border-t-4 border-gray-200 h-12 w-12 rounded-full animate-spin"></div>
    </div>
  );
}
