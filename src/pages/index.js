import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import cta from '/src/images/cta.svg'
import feature1 from '/src/images/feature1.svg'
import feature2 from '/src/images/feature2.svg'
import gcalendar from '/src/images/calendar.svg'
import gclassroom from '/src/images/classroom.svg'
import gdrive from '/src/images/drive.svg'
import gforms from '/src/images/forms.svg'
import gmeet from '/src/images/meet.svg'

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Bitlearn" />

      <div className="grid grid-cols-1 gap-16 sm:gap-36">
        {/* CTA */}
        <div className="bg-gray-100">
          <div className="grid grid-cols-2 sm:grid-cols-6 items-end mx-auto px-4 py-12 sm:py-36 space-y-12 max-w-6xl">
            <div className="col-span-2 sm:col-span-4">
              <h2 className="sm:text-3xl text-2xl font-bold mb-8">
              Kesulitan dalam mengoperasikan Google Education? Hubungi kami untuk mendapatkan bantuan profesional!
              </h2>
              <p className="text-sm sm:text-lg">Bitlearn dapat membantu anda untuk mengoperasikan Google Education. Mulai dari membagian materi, menjadwalkan pertemuan kelas, sampai asesmen pencapaian siswa dapat kami urus. Tanpa perlu repot mengurus semua itu, anda tinggal menyusun rencana pembelajaran dan kami yang lakukan sisanya.</p>
              <button className="bg-primary hover:bg-secondary text-white text-md sm:text-md font-medium my-8 py-2 px-4 rounded-lg"><Link to="/#kontak">Hubungi kami</Link></button>
            </div>
            <div className="col-span-2">
              <img src={cta} className="hidden sm:block w-full ml-auto" alt="cta"/>
            </div>
          </div>
        </div>
        

        {/* Features 1 */}
        <div  className="grid grid-cols-2 sm:grid-cols-6 p-6 items-center max-w-6xl mx-auto">
          <div className="sm:hidden col-span-2 items-center">
            <img src={feature1} className="block w-48 mx-auto" alt="placeholder"/>
          </div>
          <div className="col-span-4">
            <h2 className="md:text-3xl text-3xl text-center sm:text-left font-bold my-4">Menghemat tenaga dan waktu agar bisa lebih fokus dalam mendidik</h2>
            <p className="text-lg text-justify sm:text-left">Rumitnya proses persiapan pembelajaran pada media daring mengurangi tingkat efektivitas guru dalam menyampaikan ilmunya. Kami dapat mempersingkat waktu dan menghemat tenaga anda agar ilmu dapat langsung disampaikan. Kolaborasi antara guru dan bitlearn akan menghasilkan ekosistem belajar yang sempurna, hemat waktu dan ramah pengguna.</p>
          </div>
          <div className="col-span-2 items-center">
            <img src={feature1} className="hidden sm:block w-3/4 ml-auto" alt="placeholder"/>
          </div>
        </div>

        {/* Features 2 */}
        <div  className="grid grid-cols-2 sm:grid-cols-6 p-6 items-center max-w-6xl mx-auto">
          <div className="col-span-2 items-center">
            <img src={feature2} className="block w-3/4 mx-auto sm:ml-0" alt="placeholder"/>
          </div>
          <div className="col-span-4">
            <h2 className="md:text-3xl text-2xl text-center sm:text-left font-bold my-4">Selalu menggunakan teknologi terkini dari Google, mengikuti perkembangan zaman</h2>
            <p className="text-lg text-justify sm:text-left">Tanpa perlu repot memasukkan bahan ajar satu persatu, guru hanya perlu memberikan rencana pembelajaran. Bitlearn akan menyediakan ruang kelasnya. Pengajaran multi kelas menjadi lebih mudah dan tidak repot.</p>
          </div>
        </div>

        {/* Product showcase section */}
        <div className="bg-gray-100 px-6 py-16 space-y-6" id='products'>
          <div className="max-w-6xl mx-auto">
            <h2 className="md:text-4xl text-3xl text-center font-bold my-4">
            Produk yang Kami Kelola
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 py-6">
              <div className="col-span-2 text-center items-center bg-white px-8 py-16 space-y-12 rounded-2xl">
                <h3 className="md:text-3xl text-2xl text-center font-bold my-4" >Google Classroom</h3>
                <img src={gclassroom} className="w-32 mx-auto" alt="google classroom"/>
                <p className="text-center">Ruang kelas utama anda. Disini anda dapat memindahkan seluruh kegiatan di kelas menjadi daring. Tidak perlu repot mengisi absen, semua akan terekam secara otomatis.</p>
              </div>
              <div className="col-span-2 text-center bg-white px-8 py-16 space-y-12 rounded-2xl">
                <h3 className="md:text-3xl text-2xl text-center font-bold my-4" >Google Drive</h3>
                <img src={gdrive} className="w-32 mx-auto" alt="google drive"/>
                <p className="text-center">Perpustakaan untuk murid anda. Disini anda dapat memberikan modul, buku, bahkan video pembelajaran yang mampu meningkatkan keseruan belajar.</p>
              </div>
              <div className="col-span-2 text-center bg-white px-8 py-16 space-y-12 rounded-2xl">
                <h3 className="md:text-3xl text-2xl text-center font-bold my-4" >Google Meet</h3>
                <img src={gmeet} className="w-32 mx-auto" alt="google meet"/>
                <p className="text-center">Pengajaran tatap muka sekarang bisa dilakukan lewat layar gawai anda. Pembelajaran dapat dilakukan secara sinkron seperti di ruang kelas konvensional.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              <div className="hidden sm:grid"></div>
              <div className="col-span-2 text-center bg-white px-8 py-16 space-y-12 rounded-2xl">
                <h3 className="md:text-3xl text-2xl text-center font-bold my-4" >Google Form</h3>
                <img src={gforms} className="w-24 mx-auto" alt="google form"/>
                <p className="text-center">Tanpa menggunakan kertas, tanpa menggunakan pensil. Pengambilan nilai dapat anda lakukan menggunakan google form, tentunya secara aman dan bebas dari kecurangan.</p>
              </div>
              <div className="col-span-2 text-center bg-white px-8 py-16 space-y-12 rounded-2xl">
                <h3 className="md:text-3xl text-2xl text-center font-bold my-4" >Google Calendar</h3>
                <img src={gcalendar} className="w-32 mx-auto" alt="google calendar"/>
                <p className="text-center">Jadwalkan seluruh kegiatan kelas secara terpadu. Siswa dapat memantau jadwal kelas,  batas akhir pengumpulan tugas, dan jadwal ujian tanpa repot.</p>
              </div>
              <div></div>
            </div>
          </div>
          
        </div>
      </div>
      
    </Layout>
  )
}

export default Index

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
