import React from 'react'
import Layout from '../components/layout'
import '../styles/program.scss'

const Program = () => {
  return (
    <Layout>
      <div className="program">
        <div className="sarana">
          <div className="hero-text">
            <h1>Sarana Prasarana</h1>
            <p>SMA Negeri 6 Cimahi</p>
          </div>
        </div>
        <div className="program-container">
          <div className="card">
            <h2>Program<br />Sarana Prasarana</h2>
            <hr />
            <ol>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</li>
              <li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
              <li>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
            </ol>
          </div>
          <div className="card">
            <h2>Agenda<br />Sarana Prasarana</h2>
            <hr />
            <ol>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</li>
              <li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
              <li>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
            </ol>
          </div>
          <div className="card">
            <h2>Prestasi<br />Sarana Prasarana</h2>
            <hr />
            <ol>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</li>
              <li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
              <li>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Program;