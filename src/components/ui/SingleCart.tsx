import { useUserBookingQuery } from "@/redux/api/bookingApi";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleCart = ({
  cart,
  removeCartHandler,
}: {
  cart: any;
  removeCartHandler: (cart: any) => void;
}) => {
  const service = cart?.service;
  const { data: BookData } = useUserBookingQuery(service?.id);
  console.log("🚀  BookData:", BookData);

  return (
    <div
      key={service?.title}
      className="shadow-lg px-2 py-3 flex justify-between items-cente rounded max-w-[36rem] mx-auto"
    >
      <section>
        <Image
          className="rounded"
          src={service?.img}
          height={140}
          width={200}
          alt="cart"
        />
      </section>

      <section className="flex flex-col">
        <h3>{service?.title}</h3>
        <h5>Price: {service?.price}</h5>
        <h5>Contact:{service?.contact}</h5>
        <h5>Address:{service?.address}</h5>
        <h5>Service Date:{service?.serviceDate}</h5>
      </section>

      <section className="flex flex-col gap-2">
        {BookData ? (
          <Button disabled>Booked</Button>
        ) : (
          <Link
            href={`/user/booking/${service?.id}`}
            className="bg-primary p-2 font-bold rounded text-white"
          >
            Book
          </Link>
        )}
        <Button onClick={() => removeCartHandler(cart)} type="primary" danger>
          Remove
        </Button>
      </section>
    </div>
  );
};

export default SingleCart;
