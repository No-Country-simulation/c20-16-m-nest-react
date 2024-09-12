/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IoLocation } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

export default function VeterinaryCard({
  place,
}: {
  place: google.maps.places.PlaceResult;
}) {
  const rating = Math.round(place.rating || 0);
  const stars = Array(rating).fill("⭐");
  console.log(place);

  const addressComponents = place.address_components || [];
  const streetNumber =
    addressComponents.find((component) =>
      component.types.includes("street_number")
    )?.long_name || "";
  const streetName =
    addressComponents.find((component) => component.types.includes("route"))
      ?.long_name || "";
  const city =
    addressComponents.find((component) =>
      component.types.includes("administrative_area_level_1")
    )?.short_name || "";

  const formattedAddress = `${streetName} ${streetNumber}, ${city}`;

  return (
    <div className="flex justify-start p-2 w-full gap-2 rounded-md border shadow-sm">
      {place.photos && place.photos[0] ? (
        <img
          src={place.photos[0].getUrl()}
          alt={place.name}
          className="size-32 rounded-sm"
        />
      ) : (
        <img
          src="/images/cat-and-dog/amico.svg"
          alt="Imagen predeterminada"
          className="size-32"
        />
      )}
      <div>
        <Link
          href={place.url as string}
          className="flex gap-1 items-center text-lg font-bold hover:cursor-pointer"
          target="_blank"
        >
          <p className="hover:underline">{place.name}</p>
          <FaExternalLinkSquareAlt className="text-sm" />
        </Link>
        <p>
          {stars.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        </p>
        <div className="flex gap-1 items-center text-sm">
          <IoLocation className="text-[#1C71E1]" />
          <p>{formattedAddress}</p>
        </div>
      </div>
    </div>
  );
}
