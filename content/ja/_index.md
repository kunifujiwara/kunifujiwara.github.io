---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    id: about
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: CV をダウンロード
        url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: vegvoxcity.png
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: markdown
    id: experience
    content:
      title: 経歴
      text: |-
        <style>
        /* Custom container for experience and awards sections */
        .wide-container {
          max-width: 100%;
          margin: 0 auto;
          font-size: 0.9rem;
        }

        .experience-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 2rem;
        }
        .logo-container {
          flex: 0 0 80px;
          margin-right: 20px;
        }
        .logo-container img {
          width: 60px;
          height: auto;
        }
        .content-container {
          flex: 1;
        }
        .content-container h4 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }
        .content-container h5 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }
        .content-container p {
          margin: 0;
          font-size: 0.85rem;
        }
        </style>

        <div class="wide-container" style="max-width: 100%; font-size: 0.9rem;">
          <div class="experience-item">
            <div class="logo-container">
              <a href="https://ual.sg/" target="_blank">
                <img src="/media/icons/ual.png" alt="Urban Analytics Lab logo">
              </a>
            </div>
            <div class="content-container">
              <h4>客員研究員</h4>
              <h5><a href="https://ual.sg/" target="_blank">Urban Analytics Lab</a>, <a href="https://www.nus.edu.sg/" target="_blank">シンガポール国立大学</a></h5>
              <p>2023年4月 – 現在</p>
            </div>
          </div>

          <div class="experience-item">
            <div class="logo-container">
              <a href="https://www.takenaka.co.jp/rd/" target="_blank">
                <img src="/media/icons/takenaka.png" alt="Takenaka Corporation logo">
              </a>
            </div>
            <div class="content-container">
              <h4>研究主任</h4>
              <h5><a href="https://www.takenaka.co.jp/rd/" target="_blank">技術研究所</a>, <a href="https://www.takenaka.co.jp/" target="_blank">竹中工務店</a></h5>
              <p>2018年4月 – 現在</p>
            </div>
          </div>

          <div class="experience-item">
            <div class="logo-container">
              <a href="https://www.takenaka.co.jp/rd/" target="_blank">
                <img src="/media/icons/takenaka.png" alt="Takenaka Corporation logo">
              </a>
            </div>
            <div class="content-container">
              <h4>研究員</h4>
              <h5><a href="https://www.takenaka.co.jp/rd/" target="_blank">技術研究所</a>, <a href="https://www.takenaka.co.jp/" target="_blank">竹中工務店</a></h5>
              <p>2014年4月 – 2017年3月</p>
            </div>
          </div>

          <div class="experience-item">
            <div class="logo-container">
              <a href="https://www.takenaka.co.jp/" target="_blank">
                <img src="/media/icons/takenaka.png" alt="Takenaka Corporation logo">
              </a>
            </div>
            <div class="content-container">
              <h4>設備設計、設備施工管理</h4>
              <h5><a href="https://www.takenaka.co.jp/design/" target="_blank">設計部</a>, <a href="https://www.takenaka.co.jp/" target="_blank">竹中工務店</a></h5>
              <p>2017年4月 – 2018年3月, 2013年 – 2014年3月</p>
            </div>
          </div>
        </div>
    design:
      columns: '1'
  - block: markdown
    id: awards
    content:
      title: 受賞歴
      text: |-
        <style>
          /* Remove default bullets and align icon + text on one line */
          .award-list{
            list-style:none;
            padding-left:0;
          }
          .award-list li{
            display:flex;
            align-items:center;
            gap:.4rem;        /* space between icon and text */
            margin-bottom:.5rem;
            font-size: 0.95rem;
          }
        </style>
        <div class="wide-container" style="max-width: 100%; font-size: 0.95rem;">
          <ul class="award-list">
            <li>{{< icon name="hero/trophy" class="w-5 h-5 text-yellow-500" >}} 奨励特別賞、一般財団法人 エンジニアリング協会、2023</li>
            <li>{{< icon name="hero/trophy" class="w-5 h-5 text-yellow-500" >}} 技術賞、日本ヒートアイランド学会、2023</li>
            <li>{{< icon name="hero/trophy" class="w-5 h-5 text-yellow-500" >}} 銅賞、アーバンデータチャレンジ、2023</li>
            <li>{{< icon name="hero/trophy" class="w-5 h-5 text-yellow-500" >}} ポスター賞、第17回ヒートアイランド学会全国大会、2022</li>
            <li>{{< icon name="hero/trophy" class="w-5 h-5 text-yellow-500" >}} 優秀賞、アーバンインフラテクノロジー推進会議、2021</li>
          </ul>
        </div>
    design:
      columns: "1"
  - block: collection
    id: publications
    content:
      title: 主な論文
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: article-grid
      columns: 2
  - block: collection
    id: recent-publications
    content:
      title: 最新の論文
      text: ""
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation
  - block: markdown
    id: talks
    content:
      title: 招待講演
      text: |-
        <style>
          /* Remove default bullets and align icon + text on one line */
          .talks-list{
            list-style:none;
            padding-left:0;
          }
          .talks-list li{
            display:flex;
            align-items:center;
            gap:.4rem;        /* space between icon and text */
            margin-bottom:.8rem;
            font-size: 0.95rem;
          }
        </style>
        <div class="wide-container" style="max-width: 100%; font-size: 0.95rem;">
          <ul class="talks-list">
            <li>{{< icon name="hero/presentation-chart-bar" class="w-5 h-5 text-green-500" >}} 基調講演者、Urban-M4シンポジウム、ワーゲニンゲン大学（オランダ）、2025年2月24日</li>
            <li>{{< icon name="hero/presentation-chart-bar" class="w-5 h-5 text-green-500" >}} ゲスト講演者、プライムセミナー、日本ヒートアイランド学会、オンライン、2024年3月22日</li>
            <li>{{< icon name="hero/presentation-chart-bar" class="w-5 h-5 text-green-500" >}} ゲスト講演者、ディスカッションセミナー、Climate Change AI、オンライン、2024年10月11日</li>
            <li>{{< icon name="hero/presentation-chart-bar" class="w-5 h-5 text-green-500" >}} ゲスト講演者、社会デザインFSセミナー、横浜国立大学、オンライン、2024年10月18日</li>
          </ul>
        </div>
    design:
      columns: "1"
  - block: markdown
    id: patents
    content:
      title: 特許
      text: |-
        <style>
          /* Remove default bullets and align icon + text on one line */
          .patent-list{
            list-style:none;
            padding-left:0;
          }
          .patent-list li{
            display:flex;
            align-items:center;
            gap:.4rem;        /* space between icon and text */
            margin-bottom:.8rem;
            font-size: 0.95rem;
          }
          .patent-status {
            display: inline-block;
            margin-left: 0.3rem;
            padding: 0.1rem 0.3rem;
            border-radius: 3px;
            font-size: 0.7rem;
          }
          .patent-active {
            background-color: #d4edda;
            color: #155724;
          }
          .patent-pending {
            background-color: #fff3cd;
            color: #856404;
          }
        </style>
        <div class="wide-container" style="max-width: 100%; font-size: 0.95rem;">
          <ul class="patent-list">
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} <a href="https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2024-176023/11/ja" target="_blank">地中熱利用冷却構造</a> <span class="patent-status patent-pending">出願中</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} <a href="https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2024-047391/11/ja" target="_blank">水位推定装置および水位推定プログラム</a> <span class="patent-status patent-pending">出願中</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} <a href="https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2024-041500/11/ja" target="_blank">情報処理装置および情報処理プログラム</a> <span class="patent-status patent-pending">出願中</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} <a href="https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2023-146835/11/ja" target="_blank">循環評価支援装置、循環評価支援システム、及びプログラム</a> <span class="patent-status patent-pending">出願中</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} <a href="https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2023-146834/11/ja" target="_blank">循環度推定装置、循環度推定システム、およびプログラム</a> <span class="patent-status patent-pending">出願中</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} <a href="https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2023-116300/11/ja" target="_blank">微気象要素推定装置及び微気象要素推定プログラム</a> <span class="patent-status patent-pending">出願中</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} <a href="https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2022-154447/11/ja" target="_blank">景観分析支援装置及び景観分析支援プログラム</a> <span class="patent-status patent-active">登録済</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} <a href="https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2022-114957/11/ja" target="_blank">モチーフ類似度計算装置およびモデル学習装置</a> <span class="patent-status patent-active">登録済</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} <a href="https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2022-076416/11/ja" target="_blank">気象予測装置及び気象予測モデル学習装置</a> <span class="patent-status patent-active">登録済</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} <a href="https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2022-063658/11/ja" target="_blank">生育評価制御装置、生育評価方法、生育評価制御プログラム</a> <span class="patent-status patent-active">登録済</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} <a href="https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2022-055164/11/ja" target="_blank">空間評価支援装置、空間評価支援システム、及び空間評価支援プログラム</a> <span class="patent-status patent-active">登録済</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} <a href="https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2022-055163/11/ja" target="_blank">空間評価支援装置、空間評価支援システム、及び空間評価支援プログラム</a> <span class="patent-status patent-pending">出願中</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} <a href="https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2022-055162/11/ja" target="_blank">空間評価支援装置、空間評価支援システム、及び空間評価支援プログラム</a> <span class="patent-status patent-active">登録済</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} <a href="https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2021-005212/11/ja" target="_blank">建物設計支援装置及び建物設計支援プログラム</a> <span class="patent-status patent-active">登録済</span></li>
            <li>{{< icon name="hero/document-text" class="w-5 h-5 text-blue-500" >}} <a href="https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2017-181088/11/ja" target="_blank">推奨度導出装置、省エネルギー推進装置、及びプログラム</a> <span class="patent-status patent-active">登録済</span></li>
          </ul>
        </div>
--- 