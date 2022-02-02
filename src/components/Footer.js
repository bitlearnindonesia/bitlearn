import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import placeholder from '/src/images/placeholder.png'

const Footer = () => {
  return (
    <body className="flex bg-gray-300 mx-auto md:px-6 px-4 py-16 mt-32">
      <main className="max-w-6xl grid grid-cols-2 sm:grid-cols-6 p-6 mx-auto items-center">
        <div className="sm:hidden col-span-2 text-xl text-center font-bold py-4" id="contact">Hubungi Kami</div>
        <ul className="sm:hidden col-span-2 max-w-xs mx-auto px-4 ">
          <li className="flex space-x-2 items-center">
            <FontAwesomeIcon icon={faPhone} />
            <p>+62 815 1702 1248 - Figo</p>
          </li>
          <li className="flex space-x-2 items-center">
            <FontAwesomeIcon icon={faWhatsapp} />
            <p>+62 815 1702 1248 - Figo</p>
          </li>
          <li className="flex space-x-2 items-center">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>bitlearn.indonesia@gmail.com</p>
          </li>
        </ul>
        <img src={placeholder} className="col-span-2 w-36 sm:w-48 py-12 mx-auto sm:ml-0" alt="placeholder"/>
        <div className='col-span-2 sm:col-span-4' id='about'>
          <div className="sm:hidden text-xl text-center font-bold py-4">Tentang Bitlearn</div>
          <div className="text-lg text-justify">Kami memiliki tujuan dasar untuk membantu pendidikan di Indonesia menjadi lebih baik. Menggunakan teknologi, kami berharap dapat membantu guru untuk memberikan pelajaran dengan lebih mudah agar murid dapat menyerap ilmu dengan yang diajarkan lebih sempurna.</div>
        </div>
        <div className="sm:hidden col-span-2 text-center text-sm mt-8">© {new Date().getFullYear()} Tim Bitlearn. All Rights Reserved</div>
      </main>
    </body>
  )
}
export default Footer