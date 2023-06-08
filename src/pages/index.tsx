import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-lg">
            <img
              src=""
              className="w-full h-48 object-cover object-center"
            ></img>
            <div className="p-4">
              <p className="text-lg font-semibold mb-2">
                ROG Phone 6 Diablo Immortal Edition
              </p>
              <div className="border-t-1 border border-black-500"></div>
              <p className="text-gray-700 mt-2">Harga Asus</p>
              <p className="text-red-700 mb-2">Rp 16.999.000</p>
              <div className="border-t-1 border border-black-500"></div>
              <ul className="list-none mt-2">
                <li>Qualcomm Snapdragon 8+ Gen 1</li>
                <li>LPDDR5 18GB</li>
                <li>UFS3.1 512GB</li>
                <li>Baterai 6000mAh</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg">
            <img
              src=""
              className="w-full h-48 object-cover object-center"
            ></img>
            <div className="p-4">
              <p className="text-lg font-semibold mb-2">
                ASUS Zenbook S 13 OLED (UX5304)
              </p>
              <div className="border-t-1 border border-black-500"></div>
              <p className="text-gray-700 mt-2">Harga Asus</p>
              <p className="text-red-700 mb-2">Rp 22.999.000</p>
              <div className="border-t-1 border border-black-500"></div>
              <ul className="list-none mt-2">
                <li>Windows 11 Pro - ASUS</li>
                <li>13th Gen Intel® Core™ i7 Processor</li>
                <li>13.3” 2.8K OLED HDR NanoEdge</li>
                <li>Up to 1 TB SSD</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg">
            <img
              src=""
              className="w-full h-48 object-cover object-center"
            ></img>
            <div className="p-4">
              <p className="text-lg font-semibold mb-2">ROG Phone 6 Pro</p>
              <div className="border-t-1 border border-black-500"></div>
              <p className="text-gray-700 mt-2">Harga Asus</p>
              <p className="text-red-700 mb-2">Rp 18.999.000</p>
              <div className="border-t-1 border border-black-500"></div>
              <ul className="list-none mt-2">
                <li>Qualcomm Snapdragon 8+ Gen 1</li>
                <li>LPDDR5 18GB</li>
                <li>UFS3.1 512GB</li>
                <li>Baterai 6000mAh</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid col-1 bg-white h-80 shadow-xl mt-32"></div>
      </>
    </main>
  );
}
