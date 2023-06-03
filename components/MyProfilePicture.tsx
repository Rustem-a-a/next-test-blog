import React from 'react';
import Image from "next/image";
const MyProfilePicture = () => {
    return (
        <section>
            <Image
            className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
            src="/images/avatar.jpg"
            width={400}
            height={400}
            alt="Rustem Abdulaev"
            priority={true}
            />
        </section>
    );
};

export default MyProfilePicture;
