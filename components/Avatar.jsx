import Image from "next/image";

const Avatar = () => {
  return (
    <div className="pointer-events-none flex h-full w-full select-none items-start justify-center sm:items-center xl:items-end xl:max-w-none">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={737}
        height={678}
        className="h-full w-full translate-z-0 object-contain object-[center_top] sm:object-center xl:object-bottom"
      />
    </div>
  );
};

export default Avatar;
