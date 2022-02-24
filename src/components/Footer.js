import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import logo from '/src/images/logo-footer.svg'

const Footer = () => {
  return (
    <body className="" id="kontak">
      <div className="hidden sm:grid grid-cols-6 max-w-6xl px-6 py-24 mx-auto">
        <div className="col-span-3">
          <h2 className="md:text-3xl text-2xl text-primary font-bold my-4">
            Tertarik bekerja sama dengan kami?
          </h2>
          <ul>
            <li>M. Wierdy Bagus Nugrahaien</li>
            <li>+62 878 8190 3463</li>
            <li>wierdybagus@gmail.com</li>
          </ul>
        </div>
          <div className="col-span-3">
        </div>
      </div>
      <div className="bg-accent2">
        <main className="max-w-6xl grid grid-cols-2 sm:grid-cols-6 p-6 mx-auto items-center">
          <div className="sm:hidden col-span-2 text-xl text-center font-bold py-4">Hubungi Kami</div>
          <ul className="sm:hidden col-span-2 max-w-xs mx-auto px-4 ">
            <li className="flex space-x-2 items-center">
              <FontAwesomeIcon icon={faPhone} />
              <p>+62 878 8190 3463 - Wierdy</p>
            </li>
            <li className="flex space-x-2 items-center">
              <FontAwesomeIcon icon={faWhatsapp} />
              <p>+62 878 8190 3463 - Wierdy</p>
            </li>
            <li className="flex space-x-2 items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>wierdybagus@gmail.com</p>
            </li>
          </ul>
          <img src={logo} className="col-span-2 w-36 sm:w-48 py-12 mx-auto sm:ml-0" alt="placeholder"/>
          <div className='col-span-2 sm:col-span-4' id='about'>
            <div className="sm:hidden text-xl text-center font-bold py-4">Tentang Bitlearn</div>
            <div className="text-lg text-justify">Kami memiliki tujuan dasar untuk membantu pendidikan di Indonesia menjadi lebih baik. Menggunakan teknologi, kami berharap dapat membantu guru untuk memberikan pelajaran dengan lebih mudah agar murid dapat menyerap ilmu dengan yang diajarkan lebih sempurna.</div>
          </div>
        </main>
      </div>
      <div className="bg-primary text-white text-center text-sm py-2">© {new Date().getFullYear()} Tim Bitlearn. All Rights Reserved</div>
    </body>
  )
}
export default Footer