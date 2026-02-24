import { useState } from 'react'
import projectsData from './data/projects.json'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <header className="hero">
        <div className="container">
          <h1 className="hero-title">過去作品集</h1>
          <p className="hero-subtitle">
            業務効率化のために作成したマクロ・VBAツールの記録です。
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">作品を見る</a>
            <a href="#about" className="btn btn-secondary">自己紹介</a>
          </div>
        </div>
      </header>

      <main>
        <section id="projects" className="projects-section">
          <div className="container">
            <h2 className="section-title">過去の作品</h2>
            <p className="section-description">
              これまでに開発した自動化ツールや業務改善ソリューションの一部をご紹介します。
            </p>

            <div className="projects-grid">
              {projectsData.map(project => (
                <article key={project.id} className="project-card">
                  {project.imageUrl && (
                    <img src={project.imageUrl} alt={project.title} className="project-image" />
                  )}
                  <div className="project-card-header">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  <div className="project-card-body">
                    <p className="project-desc">{project.description}</p>
                    <div className="project-impact">
                      <strong>✨ 効果:</strong> {project.impact}
                    </div>
                    <div className="project-skills">
                      {project.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container">
            <h2 className="section-title">自己紹介 / スキル</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  VBAを活用した業務効率化やデータ集計の自動化に加え、製造現場におけるNCマクロ（Mazak等）の作成も得意としています。
                  現場の課題をヒアリングし、本当に使いやすいツール・プログラムを設計・開発することを心掛けています。
                </p>
                <p>
                  また、2D CADでの図面作成・治具設計や、3D CAD（CATIA）を用いたモデリングにも対応可能です。
                </p>
                <p>
                  現在、平日は夜1〜2時間程度、休日は短納期案件であれば終日対応が可能です。
                  どのような業務の自動化が可能か、お気軽にご相談ください。
                </p>
              </div>
              <div className="skill-list">
                <h3>Core Skills</h3>
                <ul>
                  <li>Excel VBA / マクロ構築</li>
                  <li>データクレンジング・集計自動化</li>
                  <li>NCマクロ / Gコードプログラミング</li>
                  <li>2D CAD（図面作成・治具設計）</li>
                  <li>3D CADモデリング（CATIA対応可）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container">
          <h2>ご依頼・お問い合わせ</h2>
          <p>お仕事のご依頼やご相談は、以下の各種プラットフォーム経由で承っております。</p>
          <div className="hero-actions mt-4" style={{ justifyContent: 'center' }}>
            <a href="https://crowdworks.jp/public/employees/6740234?ref=share_url_wkprofile" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ margin: '0 10px' }}>クラウドワークスへ</a>
            <a href="https://coconala.com/users/5916422" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ margin: '0 10px', background: 'var(--color-surface)', color: 'var(--color-primary)' }}>ココナラへ</a>
          </div>
          <p className="copy">&copy; {new Date().getFullYear()} VBA Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
