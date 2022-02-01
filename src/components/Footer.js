import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <body className="flex container bg-gray-300 mx-auto md:px-6 px-4 py-4 mt-32">
      <main className="container align-center">
        <div className="text-xl text-center font-bold py-4">Hubungi Kami</div>
        <ul className="max-w-xs mx-auto px-4 ">
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
        <div className="text-xl text-center font-bold py-4">Tentang Bitlearn</div>
        <div>Kami memiliki tujuan dasar untuk membantu pendidikan di Indonesia menjadi lebih baik. Menggunakan teknologi, kami berharap dapat membantu guru untuk memberikan pelajaran dengan lebih mudah agar murid dapat menyerap ilmu dengan yang diajarkan lebih sempurna.</div>
        <div className="text-center text-sm mt-8">© {new Date().getFullYear()} Tim Bitlearn. All Rights Reserved</div>
      </main>
    </body>
  )
}
export default Footer