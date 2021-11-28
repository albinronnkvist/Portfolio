import DotLoader from "react-spinners/DotLoader";

export default function Loading() {
  return (
    <div className="h-1/3 flex items-center">
      <DotLoader color="#34D399" size={45} />
    </div>
  )
}