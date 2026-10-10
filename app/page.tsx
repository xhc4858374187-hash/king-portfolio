const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#work">
        跳到作品
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="返回顶部">
          K<span>/</span>GCD
        </a>
        <nav aria-label="主导航">
          <a href="#work">作品</a>
          <a href="#process">过程</a>
          <a href="#about">关于</a>
        </nav>
        <p>PORTFOLIO PROTOTYPE · 2026</p>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            GAME SYSTEMS <span>×</span> CONCEPT DEVELOPMENT
          </p>
          <h1 id="hero-title">
            <span className="outline">KING</span>
            <span>设计可玩的</span>
            <span>规则与世界。</span>
          </h1>
          <div className="hero-intro">
            <p>
              游戏系统 / 玩法策划方向。以长期项目为核心，
              从规则假设、纸面原型到真实测试，再把机制转化为明确的视觉语言。
            </p>
            <a className="text-link" href="#work">
              查看项目 <Arrow />
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="《油》卡牌视觉占位构图">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="card card-back">
            <span>PLAYTEST</span>
            <strong>油</strong>
            <small>HIDDEN / SYSTEM / RISK</small>
          </div>
          <div className="card card-front">
            <div className="card-index">01</div>
            <div className="gesture-mark">
              <i />
              <b />
              <em />
            </div>
            <p>OIL = LEVEL = LIFE</p>
          </div>
          <div className="art-caption">
            <span>01</span>
            <p>
              FEATURED PROJECT
              <br />
              PHYSICAL CARD GAME
            </p>
          </div>
        </div>
      </section>

      <section className="work-intro" id="work" aria-labelledby="work-title">
        <div>
          <p className="section-index">01 / SELECTED WORK</p>
          <h2 id="work-title">项目不是结果陈列，而是判断过程的证据。</h2>
        </div>
        <p>
          当前原型先用结构化占位画面呈现。最终版本将替换为实体测试照片、机制图、
          设定板与原型录屏。
        </p>
      </section>

      <article className="featured-project">
        <div className="project-visual oil-visual" aria-label="《油》项目图片占位区域">
          <div className="placeholder-label">
            IMAGE PLACEHOLDER / PLAYTEST MATERIAL
          </div>
          <div className="mini-card mini-one">R</div>
          <div className="mini-card mini-two">B</div>
          <div className="mini-card mini-three">Y</div>
          <p className="visual-word">OIL</p>
        </div>
        <div className="project-copy">
          <div className="project-meta">
            <span>01</span>
            <p>实体卡牌 / 系统设计 / 持续测试</p>
          </div>
          <h3>《油》</h3>
          <p className="project-lead">
            一套围绕资源、等级、生命与隐藏信息展开的实体卡牌系统。
            设计重点不是堆叠效果，而是让每次暗置、保留与出牌都暴露玩家判断。
          </p>
          <dl className="project-facts">
            <div>
              <dt>ROLE</dt>
              <dd>规则设计 / 测试组织 / 视觉系统</dd>
            </div>
            <div>
              <dt>STATUS</dt>
              <dd>实体测试版 · 迭代中</dd>
            </div>
            <div>
              <dt>FOCUS</dt>
              <dd>信息博弈 / 资源取舍 / 新手可读性</dd>
            </div>
          </dl>
          <a className="project-link" href="#process">
            查看设计过程 <Arrow />
          </a>
        </div>
      </article>

      <section className="project-grid" aria-label="更多项目">
        <article className="secondary-project waterwar-project">
          <div className="secondary-visual waterwar-visual" aria-label="WaterWar 场景概念占位图">
            <div className="placeholder-label">SCENE PLACEHOLDER / FPS PROTOTYPE</div>
            <div className="water-sun" />
            <div className="water-building building-a" />
            <div className="water-building building-b" />
            <div className="water-ground" />
            <div className="water-gun">
              <span />
              <i />
            </div>
            <p>WETNESS<br />NOT HP</p>
          </div>
          <div className="secondary-copy">
            <p className="project-number">02 / GAME CONCEPT</p>
            <h3>WaterWar<br />on Campus</h3>
            <p>
              校园第一人称水枪游戏。用“湿度”取代传统血量：
              不同部位被击中会改变移动、瞄准与视野，阳光则成为恢复资源。
            </p>
            <ul>
              <li>FPS / 单机原型优先</li>
              <li>身体部位状态反馈</li>
              <li>天气、室内外与水源共同塑造战术</li>
            </ul>
            <div className="project-status">
              <span>STATUS</span>
              <b>概念框架 / 待原型验证</b>
            </div>
          </div>
        </article>

        <article className="secondary-project concept-project">
          <div className="secondary-visual concept-visual" aria-label="概念设计设定板占位图">
            <div className="placeholder-label">ARTWORK PLACEHOLDER / DESIGN SHEET</div>
            <div className="sheet-main">
              <span>EXECUTIONER</span>
              <div className="armor armor-head" />
              <div className="armor armor-body" />
              <div className="armor armor-blade" />
            </div>
            <div className="sheet-side side-a">FRONT</div>
            <div className="sheet-side side-b">DETAIL</div>
            <div className="annotation-line line-a" />
            <div className="annotation-line line-b" />
          </div>
          <div className="secondary-copy">
            <p className="project-number">03 / CONCEPT DESIGN</p>
            <h3>角色与<br />硬表面设定</h3>
            <p>
              以轮廓、受力关系和功能分区建立角色记忆点。
              当前占位内容对应《处刑者》与《幻影》设定板，最终将替换为原始三视图与装备拆解。
            </p>
            <ul>
              <li>角色轮廓与装备逻辑</li>
              <li>三视图 / 武器 / 材质分区</li>
              <li>技术档案式信息排版</li>
            </ul>
            <div className="project-status">
              <span>STATUS</span>
              <b>课程作品 / 待整理重排</b>
            </div>
          </div>
        </article>
      </section>

      <section className="process-section" id="process" aria-labelledby="process-title">
        <div className="process-heading">
          <p className="section-index">02 / DESIGN PROCESS</p>
          <h2 id="process-title">从模糊想法，到可以被反驳的原型。</h2>
          <p>
            这里展示的不是一条完美直线，而是每轮测试怎样迫使设计改变。
            正式版将补入规则快照、玩家原话与修改前后对照。
          </p>
        </div>

        <ol className="process-steps">
          <li>
            <span>01</span>
            <div>
              <h3>提出问题</h3>
              <p>先定义想验证的体验，而不是先堆功能。</p>
            </div>
            <small>QUESTION</small>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>拆解系统</h3>
              <p>把资源、信息、风险与反馈画成可检查的关系。</p>
            </div>
            <small>SYSTEM MAP</small>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>最低成本原型</h3>
              <p>先让核心循环能被玩，再决定哪些内容值得制作。</p>
            </div>
            <small>PROTOTYPE</small>
          </li>
          <li>
            <span>04</span>
            <div>
              <h3>真实测试</h3>
              <p>记录玩家行为、误解与犹豫，不用主观解释替代证据。</p>
            </div>
            <small>PLAYTEST</small>
          </li>
          <li>
            <span>05</span>
            <div>
              <h3>删减与重构</h3>
              <p>保留有效判断，删除只增加说明成本的机制。</p>
            </div>
            <small>REFINE</small>
          </li>
        </ol>

        <div className="language-block">
          <div className="language-title">
            <p className="section-index">VISUAL LANGUAGE</p>
            <h3>视觉不是包装，<br />是规则的第二层说明。</h3>
          </div>
          <div className="language-grid">
            <article className="language-card hand-card">
              <span>01</span>
              <strong>HAND</strong>
              <p>第一人称手势、强轮廓、动作符号化。</p>
            </article>
            <article className="language-card system-card">
              <span>02</span>
              <strong>SYSTEM</strong>
              <p>几何分区与信息层级直接服务判定。</p>
            </article>
            <article className="language-card proof-card">
              <span>03</span>
              <strong>PROOF</strong>
              <p>用测试记录和版本差异证明设计判断。</p>
            </article>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="about">
        <div className="footer-kicker">
          <span>03</span>
          <p>ABOUT / CONTACT</p>
        </div>
        <h2>
          不展示“会多少软件”，
          <br />
          展示如何把想法变成可玩的系统。
        </h2>
        <div className="footer-bottom">
          <div>
            <p>目标方向</p>
            <strong>游戏系统 / 玩法策划实习</strong>
          </div>
          <div>
            <p>联系信息</p>
            <strong>EMAIL / WECHAT — PLACEHOLDER</strong>
          </div>
          <a href="#top">
            返回顶部 <Arrow />
          </a>
        </div>
        <p className="footer-note">
          本站为内容确认原型。项目图像、个人简介、联系方式与下载文件将在下一轮替换。
        </p>
      </footer>
    </main>
  );
}
