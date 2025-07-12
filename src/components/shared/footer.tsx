import Image from "next/image";
import logo from "@/assets/brand/logoWordOrangeWhite.svg";
import Link from "next/link";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <section className="bg-[#1D1D20] py-20">
        <div className="w-full max-w-[1200px] mx-auto">
          <div>
            <Image src={logo} alt="Open Quanta" />
            <p>
              Publish your research on-chain with authorship Nft, earn
              recognition without gatekeepers, and join a global community
              redefining scientific collaboration.
            </p>

            <div className="flex gap-5 items-center">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3187_35832)">
                  <path
                    d="M5.40961 14.6797C10.8815 14.6797 13.874 9.86999 13.874 5.69963C13.874 5.46651 14.0392 5.25984 14.2516 5.16367C14.9799 4.83382 15.9245 3.92912 14.949 2.40797C14.3027 2.75545 13.7715 2.94531 13.0599 3.17417C11.9336 1.90362 10.0491 1.84238 8.85101 3.0373C8.07811 3.80788 7.75061 4.95655 7.99031 6.05273C5.59812 5.92587 2.79749 4.16535 1.28711 2.1936C0.497749 3.63601 0.900679 5.4809 2.20783 6.40771C1.73422 6.39271 1.27121 6.2571 0.857679 6.01274V6.05273C0.857679 7.55519 1.85615 8.84879 3.24401 9.14629C2.80633 9.27319 2.34685 9.29189 1.90092 9.20069C2.29089 10.4862 3.97935 11.9286 5.25233 11.9542C4.19848 12.8323 2.89722 13.3092 1.55767 13.3079C1.32087 13.3073 1.08465 13.2923 0.849609 13.2623C2.21037 14.1885 3.7932 14.6797 5.40961 14.6772V14.6797Z"
                    fill="white"
                    fill-opacity="0.8"
                    stroke="white"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3187_35832">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.0996094 0.429688)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3187_35834)">
                  <path
                    d="M13.6996 2.83047L10.4996 1.23047L9.69961 2.03047H6.49961L5.69961 1.23047L2.49961 2.83047C0.0996094 6.03047 0.0996094 8.43047 0.0996094 11.6305L4.09961 14.0305L4.89961 12.4305L4.09961 11.6305H12.0996L11.2996 12.4305L12.0996 14.0305L16.0996 11.6305C16.0996 8.43047 15.2996 5.23047 13.6996 2.83047ZM5.69961 10.0305L4.09961 8.43047L5.69961 6.83047L6.49961 8.43047L5.69961 10.0305ZM10.4996 10.0305L9.69961 8.43047L10.4996 6.83047L12.0996 8.43047L10.4996 10.0305Z"
                    fill="white"
                    fill-opacity="0.8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3187_35834">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.0996094 0.429688)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3570_30236)">
                  <g clip-path="url(#clip1_3570_30236)">
                    <g clip-path="url(#clip2_3570_30236)">
                      <path
                        d="M15.765 6.57484C15.674 6.25684 15.498 5.96984 15.254 5.74284C15.004 5.50884 14.697 5.34184 14.362 5.25684C13.111 4.93284 8.09502 4.93284 8.09502 4.93284C6.00402 4.90984 3.91402 5.01284 1.83602 5.24084C1.50102 5.33184 1.19502 5.50284 0.94402 5.73884C0.69702 5.97184 0.51902 6.25884 0.42502 6.57384C0.20102 7.75984 0.0920197 8.96384 0.10002 10.1708C0.0920197 11.3758 0.20102 12.5798 0.42502 13.7678C0.51702 14.0808 0.69502 14.3668 0.94202 14.5978C1.18902 14.8298 1.49702 14.9958 1.83602 15.0848C3.10402 15.4078 8.09502 15.4078 8.09502 15.4078C10.189 15.4318 12.282 15.3288 14.362 15.1008C14.697 15.0158 15.004 14.8488 15.254 14.6148C15.498 14.3878 15.674 14.1008 15.764 13.7828C15.994 12.5978 16.106 11.3928 16.098 10.1858C16.116 8.97384 16.004 7.76384 15.765 6.57484ZM6.50102 12.4118V7.92984L10.674 10.1708L6.50102 12.4118Z"
                        fill="white"
                        fill-opacity="0.8"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3570_30236">
                    <rect
                      width="16"
                      height="20"
                      fill="white"
                      transform="translate(0.0996094 0.429688)"
                    />
                  </clipPath>
                  <clipPath id="clip1_3570_30236">
                    <rect
                      width="16"
                      height="11"
                      fill="white"
                      transform="translate(0.0996094 4.92969)"
                    />
                  </clipPath>
                  <clipPath id="clip2_3570_30236">
                    <rect
                      width="16"
                      height="11"
                      fill="white"
                      transform="translate(0.0996094 4.92969)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width="16"
                height="21"
                viewBox="0 0 16 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3570_30242)">
                  <g clip-path="url(#clip1_3570_30242)">
                    <g clip-path="url(#clip2_3570_30242)">
                      <path
                        d="M14.3533 17.1301H11.5183V12.6881C11.5183 11.6291 11.4963 10.2661 10.0413 10.2661C8.5623 10.2661 8.3373 11.4181 8.3373 12.6101V17.1301H5.5023V7.99612H8.2253V9.24113H8.2623C8.6423 8.52313 9.5683 7.76512 10.9503 7.76512C13.8223 7.76512 14.3533 9.65613 14.3533 12.1161V17.1301ZM2.3003 6.74613C1.3873 6.74613 0.654297 6.00713 0.654297 5.09813C0.654297 4.19113 1.3883 3.45312 2.3003 3.45312C3.2093 3.45312 3.9463 4.19113 3.9463 5.09813C3.9463 6.00713 3.2093 6.74613 2.3003 6.74613ZM3.7213 17.1301H0.879297V7.99612H3.7213V17.1301Z"
                        fill="white"
                        fill-opacity="0.8"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3570_30242">
                    <rect
                      width="15"
                      height="20"
                      fill="white"
                      transform="translate(0.0996094 0.429688)"
                    />
                  </clipPath>
                  <clipPath id="clip1_3570_30242">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.0996094 2.92969)"
                    />
                  </clipPath>
                  <clipPath id="clip2_3570_30242">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.0996094 2.92969)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div>
            <div>
              <h4>Documentation</h4>
              <Link href="#">About</Link>
              <Link href="#">Team</Link>
              <Link href="#">Partners</Link>
            </div>
            <div>
              <h4>Links</h4>
              <Link href="#">Discover Research</Link>
              <Link href="#">Whitepaper</Link>
              <Link href="#">Explore Research</Link>
            </div>
            <div>
              <h4>Resources</h4>
              <Link href="#">Demo</Link>
              <Link href="#">Support Center</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1200px] mx-auto py-10 flex gap-5 justify-between">
        <div>All browser support</div>
        <div>
          <ChevronUp />
        </div>
      </section>
    </footer>
  );
}
