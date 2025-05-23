"use client";

import * as React from "react";
import { use } from "react";
import productsData from "@/app/data/productsData.json";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/types/productsTypes";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const products: Product[] = productsData.products;

  console.log("slug, ", slug);

  const label = slug
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ")!;

  console.log("label", label);
  const list = products.filter(
    (p) => p.category.toLowerCase() === label.toLowerCase()
  );
  console.log("list", list);

  const itemDetails = (product: Product) => {
    console.log("e", product);
  };
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">{label}</h1>

      {list.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        <ul className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          {list.map((item) => (
            <li
              key={item.id}
              className="border border-transparent  rounded-lg p-2 flex flex-col items-center transition-shadow duration-300 hover:shadow-lg"
              onClick={() => itemDetails(item)}
              style={{
                boxShadow: "0 0 0 1px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 10px rgba(59, 130, 246, 0.5)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 0 1px")
              }
            >
              <Link
                className="w-full h-[250px] relative overflow-hidden rounded-md"
                target="_blank"
                href={item.image!}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </Link>
              <p className="mt-2 font-semibold text-center">{item.name}</p>
              <p className="text-sm text-gray-500">₹{item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
