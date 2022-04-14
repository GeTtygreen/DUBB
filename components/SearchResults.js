import Image from "next/image";

export default function SearchResults(props) {
  const { PhotoUrl, FirstName, LastName, Position } = props;
  return (
    <div className="max-w-full min-h- flex  border-b-[1px] border-solid px-2 py-2 items-center relative ">
      <div className="w-auto max-h-full flex flex-1 ">
        <Image
          src={PhotoUrl}
          height={30}
          width={30}
          alt="playerPhoto"
          className="w-auto max-h-full"
        />
      </div>
      <h3 className="text-xl ml-3 flex flex-2">{FirstName} </h3>
      <h3 className="text-xl ml-3 flex flex-2">{LastName}</h3>
      <span className="text-[green] text-lg flex flex-[0.4]">{Position}</span>
    </div>
  );
}
