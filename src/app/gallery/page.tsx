"use client";

import { useEffect, useState } from "react";
import { db, collection, getDocs } from "@/lib/firebase";

export default function GalleryPage() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "images"));
        const imageUrls = querySnapshot.docs.map((doc: any) => doc.data().imageUrl);
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []); // Runs only once

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((url, index) => (
          <img key={index} src={url} alt={`Uploaded ${index}`} className="w-full h-auto rounded-lg shadow" />
        ))}
      </div>
    </div>
  );
}
