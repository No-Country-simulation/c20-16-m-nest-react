export default function Collage() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 grid-rows-2	gap-5 items-center pt-12 max-w-[1440px] mx-auto">
      <div className="w-full h-[305px] bg-red-300 rounded-2xl shadow-collageImage overflow-hidden">
        <img
          src="/images/image-collage-1.png"
          className="w-full h-full object-cover object-center"
          alt=""
        />
      </div>
      <div className="w-full h-[305px] bg-red-300 rounded-2xl overflow-hidden shadow-collageImage">
        <img
          src="/images/image-collage-2.png"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="w-full h-[305px] bg-red-300 rounded-2xl overflow-hidden shadow-collageImage">
        <img
          src="/images/image-collage-3.png"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="w-full h-[305px] bg-red-300 col-span-2 rounded-2xl overflow-hidden shadow-collageImage">
        <img
          src="/images/image-collage-4.png"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="w-full h-[305px] bg-red-300 rounded-2xl overflow-hidden shadow-md">
        <img
          src="/images/image-collage-5.png"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
    </section>
  );
}
