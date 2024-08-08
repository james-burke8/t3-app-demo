import Link from "next/link";
import { mock } from "node:test";

const mockUrls = [
  "https://utfs.io/f/dcef94fc-1bd7-43ff-8adf-9ba4d564af7a-el9xca.jpg",
  "https://utfs.io/f/2b8a1909-92b5-4e13-b1db-dba4a1619b9d-sfu3n9.jpg",
  "https://utfs.io/f/0955d2aa-1713-4e7b-8d08-d70132b47772-k3ozy.jpg"

]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className='w-48'>
            <img src={image.url} />
          </div>
        ))}  
      </div>
    </main>
  );
}
