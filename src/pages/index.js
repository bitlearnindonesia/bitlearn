import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <div className="mx-auto">
        <h2 className="md:text-6xl text-3xl text-center font-bold mb-8">
        Kesulitan dalam mengoperasikan Google Education? Hubungi kami untuk mendapatkan bantuan profesional!
        </h2>
        <p className="">
        Bitlearn dapat membantu anda untuk mengoperasikan Google Education. Mulai dari membagian materi, menjadwalkan pertemuan kelas, sampai asesmen pencapaian siswa dapat kami urus. Tanpa perlu repot mengurus semua itu, anda tinggal menyusun rencana pembelajaran dan kami yang lakukan sisanya.
        </p>
        <button className="bg-gray-300 text-gray-800 text-sm sm:text-md font-bold my-8 py-2 px-4 rounded">Hubungi kami</button>
      </div>
      <div>
        <h2 className="md:text-6xl text-3xl text-center font-bold my-4">
        Menghemat tenaga dan waktu agar bisa lebih fokus dalam mendidik
        </h2>
        <p>
        Rumitnya proses persiapan pembelajaran pada media daring mengurangi tingkat efektivitas guru dalam menyampaikan ilmunya. Kami dapat mempersingkat waktu dan menghemat tenaga anda agar ilmu dapat langsung disampaikan. Kolaborasi antara guru dan bitlearn akan menghasilkan ekosistem belajar yang sempurna, hemat waktu dan ramah pengguna.
        </p>
      </div>
      <div>
        <h2 className="md:text-6xl text-3xl text-center font-bold my-4">
        Selalu menggunakan teknologi terkini dari Google, mengikuti perkembangan zaman
        </h2>
        <p>
        Tanpa perlu repot memasukkan bahan ajar satu persatu, guru hanya perlu memberikan rencana pembelajaran. Bitlearn akan menyediakan ruang kelasnya. Pengajaran multi kelas menjadi lebih mudah dan tidak repot.
        </p>
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
