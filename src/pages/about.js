import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import '../styles/about.scss'

const AboutPage = () => (
  <Layout>
     <div className="about">
      <div className="hero">
        <div className="hero-text">
          <h1>Tentang </h1>
          <p>SMA Negeri 6 Cimahi</p>
        </div>
      </div>
      <div className="container">
        <section className="history">
          <h2>Sejarah Singkat Sekolah</h2>
          <StaticImage
            src="../images/sejarah.webp"
            alt="Sejarah Sekolah Kita"
            placeholder="blurred"
            layout="constrained"
            width={600}
          />
          <p>SMA Negeri 6 Cimahi sebelumnya disebut sebagai SMAN 13 Bandung. Angkatan pertama SMAN 13 Bandung pada saat itu masih bergabung dengan SMAN 4 Bandung di Jalan Gardujati no. 20 Bandung. Karena SMAN 13 Bandung masih baru dan masih bergabung dengan SMAN 4 Bandung maka belum bisa berjalan sendiri dalam menampung siswa didiknya. Begitu juga para staf pengajar kebanyakan masih guru-guru SMAN 4 Bandung. Pada saat itu Kepala Sekolah SMAN 13 Bandung adalah juga Kepala Sekolah SMAN 4 Bandung yaitu Ibu. Dra. Nani Soekartini.</p>
        </section>
        <section className="vision-mission">
          <h2>Visi dan Misi</h2>
          <div className="vision">
            <h3>Visi</h3>
            <StaticImage
                src="../images/Visi.png"
                alt="Visi"
                placeholder="blurred"
                layout="constrained"
                width={500}
              />
            <p>Menjadi lembaga pendidikan unggul yang menghasilkan generasi penerus berbudi pekerti luhur, berlandaskan iman dan takwa.</p>
          </div>
          <div className="mission">
            <h3>Misi</h3>
            <StaticImage
                src="../images/Misi.png"
                alt="Misi"
                placeholder="blurred"
                layout="constrained"
                width={500}
              />
            <ol>
              <li>Membangun budaya berbudi pekerti luhur: Kami berkomitmen untuk menciptakan lingkungan belajar yang mendorong perkembangan karakter dan nilai-nilai moral yang tinggi. Melalui pendekatan yang holistik, kami akan mengintegrasikan pembelajaran akademik dengan pembentukan sikap, perilaku, dan nilai-nilai luhur seperti kejujuran, kerjasama, rasa empati, dan tanggung jawab.</li>
              <li>Memperkuat fondasi iman dan takwa: Kami memahami pentingnya pengembangan spiritualitas dan nilai-nilai keagamaan dalam kehidupan siswa. Kami akan menyediakan lingkungan yang mendukung dan mendorong siswa untuk memperdalam pemahaman mereka tentang ajaran agama dan menerapkan nilai-nilai keagamaan dalam kehidupan sehari-hari.</li>
              <li>Menyediakan pendidikan berkualitas: Kami bertekad untuk memberikan pendidikan berkualitas yang mempersiapkan siswa untuk menghadapi tantangan dunia modern. Melalui kurikulum yang komprehensif dan inovatif, kami akan mendorong pembelajaran aktif, kreativitas, kritis, dan kolaboratif sehingga siswa dapat mengembangkan potensi akademik dan non-akademik mereka secara optimal.</li>
              <li>Membangun kemitraan yang kuat dengan orang tua dan masyarakat: Kami percaya bahwa pendidikan yang sukses melibatkan partisipasi aktif dari orang tua dan dukungan dari masyarakat. Kami akan menjalin hubungan yang erat dengan orang tua siswa, berkolaborasi dalam mendukung perkembangan siswa secara holistik, serta menggandeng masyarakat dalam menyelenggarakan kegiatan-kegiatan yang memperkaya pengalaman belajar siswa di luar kelas.</li>
              <li>Mendorong kepemimpinan dan pelayanan sosial: Kami akan menginspirasi siswa untuk menjadi pemimpin yang berintegritas dan berdedikasi dalam melayani masyarakat. Melalui program pengembangan kepemimpinan dan kegiatan pelayanan sosial, kami akan mempersiapkan siswa untuk menjadi agen perubahan yang positif dan memberikan kontribusi nyata dalam membangun masyarakat yang lebih baik.</li>
            </ol>
          </div>
        </section>
        <section className="team">
          <h2>Kepala Sekolah & Guru</h2>
          <div className="team-members">
            <div className="team-member">
              <StaticImage
                src="../images/kepala sekolah.jpg"
                alt="Kepala Sekolah"
                placeholder="blurred"
                layout="constrained"
                width={200}
              />
              <h3>Drs. Deden Musa</h3>
              <p>Kepala Sekolah</p>
            </div>
            <div className="team-member">
              <StaticImage
                src="../images/Guru-Matematika.png"
                alt="Guru Matematika"
                placeholder="blurred"
                layout="constrained"
                width={200}
              />
              <h3>Dra. Marthalina T B</h3>
              <p>Guru Matematika</p>
            </div>
            <div className="team-member">
              <StaticImage
                src="../images/Guru-Biologi.png"
                alt="Guru Biologi"
                placeholder="blurred"
                layout="constrained"
                width={200}
              />
              <h3>Deddi Farid Kurniawan, S.Pd., MM.</h3>
              <p>Guru Biologi</p>
            </div>
            <div className="team-member">
              <StaticImage
                src="../images/Guru-Fisika.png"
                alt="Guru Fisika"
                placeholder="blurred"
                layout="constrained"
                width={200}
              />
              <h3>Yuli Yulianti, S.Pd.</h3>
              <p>Guru Fisika</p>
            </div>
            <div className="team-member">
              <StaticImage
                src="../images/Guru-Penjas.png"
                alt="Guru Penjas"
                placeholder="blurred"
                layout="constrained"
                width={200}
              />
              <h3>Asep Ratman, S.Pd.</h3>
              <p>Guru Penjasorkes</p>
            </div>
            <div className="team-member">
              <StaticImage
                src="../images/Guru-Mtk.png"
                alt="Guru Matematika"
                placeholder="blurred"
                layout="constrained"
                width={200}
              />
              <h3>Bima Gusti Ramadhan, M.Pd.</h3>
              <p>Guru Matematika</p>
            </div>
            <div className="team-member">
              <StaticImage
                src="../images/Guru-Sedbud.png"
                alt="Guru Seni Budaya"
                placeholder="blurred"
                layout="constrained"
                width={200}
              />
              <h3>Tri Hutomo Harianto, S.Pd.</h3>
              <p>Guru Seni Budaya</p>
            </div>
            <div className="team-member">
              <StaticImage
                src="../images/Guru-Konseling.png"
                alt="Guru Bimbingan Konseling"
                placeholder="blurred"
                layout="constrained"
                width={200}
              />
              <h3>Zaky Fuad Busro Anam, S.Pd.I., M.Pd</h3>
              <p>Guru Bimbingan Konseling</p>
            </div>
            <div className="team-member">
              <StaticImage
                src="../images/Guru-Sunda.png"
                alt="Guru Bahasa Sunda"
                placeholder="blurred"
                layout="constrained"
                width={200}
              />
              <h3>Naufal Julian Rizki, S.Pd</h3>
              <p>Guru Bahasa Sunda</p>
            </div>
            <div className="team-member">
              <StaticImage
                src="../images/Guru-Sejarah.png"
                alt="Guru Sejarah"
                placeholder="blurred"
                layout="constrained"
                width={200}
              />
              <h3>Wulan Dwi Lestari, M.Pd</h3>
              <p>Guru Sejarah</p>
            </div>
          </div>
        </section>
      </div>
      </div>
  </Layout>
)

export default AboutPage