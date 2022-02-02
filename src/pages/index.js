import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import placeholder from '/src/images/placeholder.png'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Bitlearn" />

      <div className="grid grid-cols-1 gap-6">
        {/* CTA */}
        <div className="container mx-auto text-center px-4 py-36 space-y-12 max-w-4xl">
          <h2 className="md:text-4xl text-3xl text-center font-bold mb-8">
          Kesulitan dalam mengoperasikan Google Education? Hubungi kami untuk mendapatkan bantuan profesional!
          </h2>
          <p className="text-xl">Bitlearn dapat membantu anda untuk mengoperasikan Google Education. Mulai dari membagian materi, menjadwalkan pertemuan kelas, sampai asesmen pencapaian siswa dapat kami urus. Tanpa perlu repot mengurus semua itu, anda tinggal menyusun rencana pembelajaran dan kami yang lakukan sisanya.</p>
          <button className="bg-gray-300 text-gray-800 text-lg sm:text-md font-bold my-8 py-2 px-4">Hubungi kami</button>
        </div>

        {/* Features 1 */}
        <div  className="grid grid-cols-2 sm:grid-cols-6 px-6 py-24 items-center">
          <div className="sm:hidden col-span-2 items-center">
            <img src={placeholder} className="block w-48 mx-auto" alt="placeholder"/>
          </div>
          <div className="col-span-4">
            <h2 className="md:text-4xl text-3xl text-center sm:text-left font-bold my-4">Menghemat tenaga dan waktu agar bisa lebih fokus dalam mendidik</h2>
            <p className="text-lg">Rumitnya proses persiapan pembelajaran pada media daring mengurangi tingkat efektivitas guru dalam menyampaikan ilmunya. Kami dapat mempersingkat waktu dan menghemat tenaga anda agar ilmu dapat langsung disampaikan. Kolaborasi antara guru dan bitlearn akan menghasilkan ekosistem belajar yang sempurna, hemat waktu dan ramah pengguna.</p>
          </div>
          <div className="col-span-2 items-center">
            <img src={placeholder} className="hidden sm:block w-48 ml-auto" alt="placeholder"/>
          </div>
        </div>

        {/* Features 2 */}
        <div  className="grid grid-cols-2 sm:grid-cols-6 px-6 py-24 items-center">
          <div className="col-span-2 items-center">
            <img src={placeholder} className="block w-48 mx-auto sm:ml-0" alt="placeholder"/>
          </div>
          <div className="col-span-4">
            <h2 className="md:text-4xl text-2xl text-center sm:text-left font-bold my-4">Selalu menggunakan teknologi terkini dari Google, mengikuti perkembangan zaman</h2>
            <p className="text-lg">Tanpa perlu repot memasukkan bahan ajar satu persatu, guru hanya perlu memberikan rencana pembelajaran. Bitlearn akan menyediakan ruang kelasnya. Pengajaran multi kelas menjadi lebih mudah dan tidak repot.</p>
          </div>
        </div>

        {/* Product showcase section */}
        <div className="p-6 space-y-6">
          <h2 className="md:text-4xl text-3xl text-center font-bold my-4">
          Produk yang Kami Kelola
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            <div className="col-span-2 text-center p-8 space-y-4 border-2 border-black">
              <h3 className="md:text-3xl text-2xl text-center font-bold my-4" >Google Classroom</h3>
              <img src={placeholder} className="block mx-auto" alt="placeholder"/>
              <p>Ruang kelas utama anda. Disini anda dapat memindahkan seluruh kegiatan di kelas menjadi daring. Tidak perlu repot mengisi absen, semua akan terekam secara otomatis.</p>
            </div>
            <div className="col-span-2 text-center p-8 space-y-4 border-2 border-black">
              <h3 className="md:text-3xl text-2xl text-center font-bold my-4" >Google Drive</h3>
              <img src={placeholder} className="block mx-auto" alt="placeholder"/>
              <p>Perpustakaan untuk murid anda. Disini anda dapat memberikan modul, buku, bahkan video pembelajaran yang mampu meningkatkan keseruan belajar.</p>
            </div>
            <div className="col-span-2 text-center p-8 space-y-4 border-2 border-black">
              <h3 className="md:text-3xl text-2xl text-center font-bold my-4" >Google Meet</h3>
              <img src={placeholder} className="block mx-auto" alt="placeholder"/>
              <p>Pengajaran tatap muka sekarang bisa dilakukan lewat layar gawai anda. Pembelajaran dapat dilakukan secara sinkron seperti di ruang kelas konvensional.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            <div className="hidden sm:grid"></div>
            <div className="col-span-2 text-center p-8 space-y-4 border-2 border-black">
              <h3 className="md:text-3xl text-2xl text-center font-bold my-4" >Google Form</h3>
              <img src={placeholder} className="block mx-auto" alt="placeholder"/>
              <p>Tanpa menggunakan kertas, tanpa menggunakan pensil. Pengambilan nilai dapat anda lakukan menggunakan google form, tentunya secara aman dan bebas dari kecurangan.</p>
            </div>
            <div className="col-span-2 text-center p-8 space-y-4 border-2 border-black">
              <h3 className="md:text-3xl text-2xl text-center font-bold my-4" >Google Calendar</h3>
              <img src={placeholder} className="block mx-auto" alt="placeholder"/>
              <p>Jadwalkan seluruh kegiatan kelas secara terpadu. Siswa dapat memantau jadwal kelas,  batas akhir pengumpulan tugas, dan jadwal ujian tanpa repot.</p>
            </div>
            <div></div>
          </div>
        </div>

        {/* Contact section */}
        <div className="hidden sm:grid grid-cols-6 px-6 py-24 border-2 border-black">
          <div className="col-span-2">
          </div>
          <div className="col-span-4">
            <h2 className="md:text-3xl text-2xl font-bold my-4">
              Tertarik bekerja sama dengan kami?
            </h2>
            <ul>
              <li>Figo Muhammad</li>
              <li>+62 815 1702 1248</li>
              <li>figomuhammad9@protonmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
