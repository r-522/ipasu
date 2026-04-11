/* ============================================================
   ITパスポート 学習  —  用語 + クイズ ロジック
   ============================================================ */

(function () {
  "use strict";

  /* ------------------------------------------------------------
     重要用語
     ストラテジ / マネジメント / テクノロジ の三分野からの横断
     ------------------------------------------------------------ */
  const TERMS = [
    {
      term: "PDCAサイクル",
      description:
        "Plan・Do・Check・Actの4段階を繰り返し、業務や品質を継続的に改善する管理手法。",
    },
    {
      term: "BCP",
      description:
        "Business Continuity Plan。災害や障害などの不測の事態でも事業を継続・早期復旧させるための計画。",
    },
    {
      term: "SWOT分析",
      description:
        "自社の強み・弱みと、外部環境の機会・脅威を整理し、経営戦略の立案に用いるフレームワーク。",
    },
    {
      term: "KPI",
      description:
        "Key Performance Indicator。目標達成度を測るために設定する、定量的な業績評価指標。",
    },
    {
      term: "DX",
      description:
        "デジタルトランスフォーメーション。デジタル技術を用いて製品・サービスやビジネスモデルを変革する取組み。",
    },
    {
      term: "アジャイル開発",
      description:
        "短い反復（イテレーション）で計画・開発・テストを繰り返し、要求変化に柔軟に対応する開発手法。",
    },
    {
      term: "ITIL",
      description:
        "ITサービスマネジメントのベストプラクティスを体系化したフレームワーク。",
    },
    {
      term: "SLA",
      description:
        "Service Level Agreement。サービス提供者と利用者の間で、サービス品質の水準を明文化した合意。",
    },
    {
      term: "プロジェクトマネジメント",
      description:
        "QCD（品質・コスト・納期）などの制約下で、計画・実行・監視を通じて目的を達成する活動。",
    },
    {
      term: "CPU",
      description:
        "Central Processing Unit。命令の解釈と演算を行う、コンピュータの中核装置。",
    },
    {
      term: "RAM",
      description:
        "Random Access Memory。電源を切るとデータが失われる、高速に読み書き可能な主記憶装置。",
    },
    {
      term: "TCP/IP",
      description:
        "インターネットで標準的に用いられる通信プロトコル群。アプリケーション〜ネットワーク層まで階層化されている。",
    },
    {
      term: "HTTPS",
      description:
        "HTTP通信をSSL/TLSで暗号化したプロトコル。盗聴・改ざん・なりすましを防ぐ。",
    },
    {
      term: "SQL",
      description:
        "リレーショナルデータベースを操作するための、問合せ・更新・定義を行う標準言語。",
    },
    {
      term: "ファイアウォール",
      description:
        "ネットワーク境界で通信を監視し、許可された通信のみを通過させるセキュリティ機構。",
    },
    {
      term: "二要素認証",
      description:
        "知識・所持・生体のうち、異なる二つの要素を組み合わせて本人確認を行う認証方式。",
    },
    {
      term: "公開鍵暗号方式",
      description:
        "暗号化と復号で異なる鍵を用いる方式。公開鍵で暗号化した情報は、対となる秘密鍵でのみ復号できる。",
    },
    {
      term: "AI",
      description:
        "人工知能。学習・推論・判断など、人間の知的活動をコンピュータで実現する技術。",
    },
    {
      term: "IoT",
      description:
        "Internet of Things。さまざまな「モノ」がネットワークに接続し、情報をやり取りする仕組み。",
    },
    {
      term: "クラウドコンピューティング",
      description:
        "ネットワーク経由でサーバ・ストレージ・アプリケーションなどの計算資源を必要な分だけ利用する形態。",
    },
    {
      term: "RAID",
      description:
        "複数の物理ディスクを束ねて、高速化や冗長化を実現する技術。RAID0〜RAID6などの方式がある。",
    },
    {
      term: "DHCP",
      description:
        "端末にIPアドレスなどのネットワーク設定を自動で割り当てるプロトコル。",
    },
    {
      term: "VPN",
      description:
        "公衆回線上に暗号化された仮想的な専用線を構築し、安全に通信する技術。",
    },
    {
      term: "ランサムウェア",
      description:
        "感染した端末のデータを暗号化するなどして利用を妨げ、復旧と引換えに金銭を要求する不正プログラム。",
    },
  ];

  /* ------------------------------------------------------------
     問題データ（10問）
     分野配分: ストラテジ3 / マネジメント2 / テクノロジ5
     出典: ITパスポート試験 過去問題（参照: 過去問道場）
     ------------------------------------------------------------ */
  const QUESTIONS = [
    {
      id: 1,
      category: "ストラテジ",
      year: "令和5年4月",
      question:
        "企業の経営戦略を策定する際に用いるSWOT分析において、自社の内部環境を表すものの組合せはどれか。",
      choices: [
        "強み（Strength）と 機会（Opportunity）",
        "強み（Strength）と 弱み（Weakness）",
        "機会（Opportunity）と 脅威（Threat）",
        "弱み（Weakness）と 脅威（Threat）",
      ],
      answerIndex: 1,
      explanation:
        "SWOT分析では、内部環境を強み（S）と弱み（W）、外部環境を機会（O）と脅威（T）として整理する。",
    },
    {
      id: 2,
      category: "ストラテジ",
      year: "令和4年4月",
      question:
        "CSR（Corporate Social Responsibility）の説明として、最も適切なものはどれか。",
      choices: [
        "企業が社会的な責任を果たすために行う、環境保全や人権尊重などの活動。",
        "企業の顧客満足度を高めるために実施する、製品やサービスの品質向上活動。",
        "企業の経営資源を効率的に活用して利益を最大化する経営手法。",
        "企業の従業員に対する福利厚生制度を整備する活動。",
      ],
      answerIndex: 0,
      explanation:
        "CSRは「企業の社会的責任」と訳され、企業が利益追求だけでなく、環境・人権・地域社会などに対する責任を果たそうとする考え方である。",
    },
    {
      id: 3,
      category: "ストラテジ",
      year: "令和3年10月",
      question:
        "BPR（Business Process Reengineering）の目的として、最も適切なものはどれか。",
      choices: [
        "既存の業務プロセスを部分的に改善し、作業効率を高める。",
        "業務プロセスを抜本的に見直し、再設計することで劇的な経営改善を図る。",
        "情報システムをクラウド環境へ段階的に移行する。",
        "従業員のスキル向上を目的とした教育研修を体系化する。",
      ],
      answerIndex: 1,
      explanation:
        "BPRは業務プロセスを根本から再設計（リエンジニアリング）し、コスト・品質・サービス・スピードなどを劇的に改善することを目的とする。",
    },
    {
      id: 4,
      category: "マネジメント",
      year: "令和5年10月",
      question:
        "アジャイル開発の特徴として、最も適切なものはどれか。",
      choices: [
        "開発の初期段階で、要件を詳細かつ網羅的に確定させてから実装に入る。",
        "短い期間の反復開発を繰り返し、利用者のフィードバックを取り入れながら進める。",
        "成果物ごとに独立した専門チームを編成し、前工程の完了後に次工程へ引き渡す。",
        "大規模なドキュメント作成を最優先し、設計書に基づいて実装を行う。",
      ],
      answerIndex: 1,
      explanation:
        "アジャイル開発は、短いイテレーションを繰り返しながら、利用者と対話を重ねて変化に柔軟に対応する開発手法である。",
    },
    {
      id: 5,
      category: "マネジメント",
      year: "令和4年10月",
      question:
        "ITサービスマネジメントにおいて、提供するサービスの品質や範囲を事前に定め、利用者との間で合意する文書はどれか。",
      choices: [
        "NDA",
        "RFP",
        "SLA",
        "WBS",
      ],
      answerIndex: 2,
      explanation:
        "SLA（Service Level Agreement）は、サービス提供者と利用者の間で、サービス品質の水準を明文化する合意書である。",
    },
    {
      id: 6,
      category: "テクノロジ",
      year: "令和5年4月",
      question:
        "公開鍵暗号方式における送信者と受信者の鍵の使い方として、正しいものはどれか。",
      choices: [
        "送信者は受信者の公開鍵で暗号化し、受信者は自分の秘密鍵で復号する。",
        "送信者は自分の秘密鍵で暗号化し、受信者は送信者の公開鍵で復号する。",
        "送信者は自分の公開鍵で暗号化し、受信者は自分の公開鍵で復号する。",
        "送信者と受信者は同一の秘密鍵を共有して暗号化・復号を行う。",
      ],
      answerIndex: 0,
      explanation:
        "公開鍵暗号方式で機密性を確保する場合、送信者は受信者の公開鍵で暗号化し、受信者のみが保持する秘密鍵で復号する。",
    },
    {
      id: 7,
      category: "テクノロジ",
      year: "令和4年4月",
      question:
        "ネットワーク上でIPアドレスなどの設定情報を、接続した端末へ自動的に割り当てるプロトコルはどれか。",
      choices: [
        "DHCP",
        "DNS",
        "FTP",
        "SMTP",
      ],
      answerIndex: 0,
      explanation:
        "DHCP（Dynamic Host Configuration Protocol）は、IPアドレス・サブネットマスク・デフォルトゲートウェイなどを端末へ自動で払い出すプロトコルである。",
    },
    {
      id: 8,
      category: "テクノロジ",
      year: "令和3年10月",
      question:
        "リレーショナルデータベースで、表に格納された行を一意に識別するために設定する列（またはその組合せ）を何というか。",
      choices: [
        "外部キー",
        "候補キー",
        "主キー",
        "副キー",
      ],
      answerIndex: 2,
      explanation:
        "主キー（Primary Key）は、表中の各行を一意に識別するために設定される列またはその組合せである。NULL値は許容されない。",
    },
    {
      id: 9,
      category: "テクノロジ",
      year: "令和5年10月",
      question:
        "情報セキュリティの3要素である「機密性」「完全性」「可用性」のうち、完全性を維持するための対策として、最も適切なものはどれか。",
      choices: [
        "サーバを冗長化し、障害時にも継続して利用できるようにする。",
        "データへのアクセス権限を最小化し、閲覧者を限定する。",
        "データにディジタル署名を付与し、改ざんを検知できるようにする。",
        "通信経路を暗号化し、第三者による盗聴を防ぐ。",
      ],
      answerIndex: 2,
      explanation:
        "完全性（Integrity）は、データが改ざんされていない正確な状態を保つ性質。ディジタル署名やハッシュ値による改ざん検知が代表的な対策である。",
    },
    {
      id: 10,
      category: "テクノロジ",
      year: "令和4年10月",
      question:
        "IoT（Internet of Things）の事例として、最も適切なものはどれか。",
      choices: [
        "オフィスのPCを社内LANに接続し、ファイルを共有する。",
        "スマートフォンのアプリストアから、動画配信サービスを利用する。",
        "センサを内蔵した農業機械がインターネットに接続し、収集した生育データを自動で送信する。",
        "データセンター内のサーバ群を仮想化技術で統合し、運用効率を高める。",
      ],
      answerIndex: 2,
      explanation:
        "IoTは「モノのインターネット」であり、従来インターネットに接続されていなかった機器やセンサがネットワークに繋がり、データをやり取りする仕組みを指す。",
    },
    {
      id: 11,
      category: "ストラテジ",
      year: "令和6年4月",
      question:
        "事業継続計画（BCP）を策定する際に、最初に実施するべきものはどれか。",
      choices: [
        "災害時に従業員が安全に避難できるルートを整備する。",
        "地震やサイバー攻撃など、想定される事業継続を脅かす事態を分析・把握する。",
        "代替施設の確保やシステムの冗長化など、具体的な対策を導入する。",
        "定期的に訓練を実施し、計画の有効性を確認する。",
      ],
      answerIndex: 1,
      explanation:
        "BCPの策定プロセスでは、まずリスク分析により企業の脅威を特定し、その後に対策の優先順位を決める。事前の分析が、効果的なBCP設計の基礎となる。",
    },
    {
      id: 12,
      category: "マネジメント",
      year: "令和5年10月",
      question:
        "プロジェクトマネジメントにおいて、スコープ・時間・コストなどの制約条件のバランスを管理するフレームワークを何というか。",
      choices: [
        "QC七つ道具",
        "プロジェクト・マネジメント・トライアングル",
        "ガントチャート",
        "アーンドバリュー分析",
      ],
      answerIndex: 1,
      explanation:
        "プロジェクト・マネジメント・トライアングルは、品質・コスト・納期（QCD）の三制約のバランスを可視化し、トレードオフを管理するために用いられる。",
    },
    {
      id: 13,
      category: "テクノロジ",
      year: "令和4年4月",
      question:
        "ブロックチェーン技術において、取引データの改ざんが困難である理由として、最も適切なものはどれか。",
      choices: [
        "中央管理者が厳重にデータを保護しているため、不正アクセスが防止される。",
        "各ブロックがハッシュ値で連鎖しており、1つのデータを改ざんすると以後のハッシュ値も変わることで、改ざんが検知される。",
        "すべてのデータが256ビット以上の暗号化キーで保護されており、解読が不可能である。",
        "取引の承認前に複数段階の検証プロセスを経るため、偽造データの紛れ込みが防止される。",
      ],
      answerIndex: 1,
      explanation:
        "ブロックチェーンは分散台帳技術であり、各ブロックが前のブロックのハッシュ値を含むため、過去のデータを改ざんするとチェーン全体の整合性が失われ、改ざんが即座に検知される仕組みである。",
    },
  ];

  /* ------------------------------------------------------------
     State
     ------------------------------------------------------------ */
  const CHOICE_LABELS = ["ア", "イ", "ウ", "エ"];

  const state = {
    screen: "terms", // "terms" | "quiz" | "result"
    order: [],
    cursor: 0,
    score: 0,
    answered: false,
    // 現在の問題の選択肢をシャッフルした結果。
    // 各要素は { origIndex, text, isAnswer } を保持する。
    displayChoices: [],
  };

  /* ------------------------------------------------------------
     Helpers
     ------------------------------------------------------------ */
  function $(selector) {
    return document.querySelector(selector);
  }

  function clear(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ------------------------------------------------------------
     用語画面の描画
     ------------------------------------------------------------ */
  function renderTerms() {
    const list = $("#terms-list");
    clear(list);

    TERMS.forEach(function (item) {
      const row = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = item.term;
      dd.textContent = item.description;
      row.appendChild(dt);
      row.appendChild(dd);
      list.appendChild(row);
    });
  }

  /* ------------------------------------------------------------
     クイズ画面の描画
     ------------------------------------------------------------ */
  function currentQuestion() {
    const idx = state.order[state.cursor];
    return QUESTIONS[idx];
  }

  function renderQuiz() {
    const q = currentQuestion();

    $("#quiz-category").textContent = q.category;
    $("#quiz-progress").textContent =
      state.cursor + 1 + " / " + state.order.length;
    $("#quiz-question").textContent = q.question;
    $("#quiz-year").textContent = q.year + " 出題";

    // 選択肢の表示順をシャッフルし、ア/イ/ウ/エ を再割当てする
    const shuffledIndices = shuffle(
      q.choices.map(function (_, i) {
        return i;
      })
    );
    state.displayChoices = shuffledIndices.map(function (origIndex) {
      return {
        origIndex: origIndex,
        text: q.choices[origIndex],
        isAnswer: origIndex === q.answerIndex,
      };
    });

    const choicesNode = $("#quiz-choices");
    clear(choicesNode);

    state.displayChoices.forEach(function (choice, displayIndex) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice";
      const label = CHOICE_LABELS[displayIndex] || "";
      btn.textContent = label + "  " + choice.text;
      btn.addEventListener("click", function () {
        handleAnswer(displayIndex);
      });
      choicesNode.appendChild(btn);
    });

    $("#quiz-feedback").hidden = true;
    $("#feedback-label").textContent = "";
    $("#feedback-label").className = "feedback-label";
    $("#feedback-explanation").textContent = "";

    const nextBtn = $("#next-btn");
    nextBtn.disabled = true;
    nextBtn.textContent =
      state.cursor + 1 === state.order.length ? "結果を見る" : "次へ";

    state.answered = false;
  }

  function handleAnswer(selectedDisplayIndex) {
    if (state.answered) return;
    state.answered = true;

    const q = currentQuestion();
    const selected = state.displayChoices[selectedDisplayIndex];
    const isCorrect = selected.isAnswer;
    if (isCorrect) state.score += 1;

    const buttons = document.querySelectorAll("#quiz-choices .choice");
    buttons.forEach(function (btn, i) {
      btn.disabled = true;
      const choice = state.displayChoices[i];
      if (choice.isAnswer) {
        btn.classList.add("is-correct");
      } else if (i === selectedDisplayIndex) {
        btn.classList.add("is-wrong");
      } else {
        btn.classList.add("is-dimmed");
      }
    });

    const label = $("#feedback-label");
    label.textContent = isCorrect ? "正解" : "不正解";
    label.classList.add(isCorrect ? "is-correct" : "is-wrong");

    $("#feedback-explanation").textContent = q.explanation;
    $("#quiz-feedback").hidden = false;
    $("#next-btn").disabled = false;
    $("#next-btn").focus();
  }

  /* ------------------------------------------------------------
     結果画面の描画
     ------------------------------------------------------------ */
  function renderResult() {
    const total = state.order.length;
    const score = state.score;

    $("#result-score").textContent = String(score);
    $("#result-total").textContent = String(total);

    const ratio = score / total;
    let msg;
    if (ratio === 1) {
      msg = "全問正解です。知識が確かに定着しています。";
    } else if (ratio >= 0.7) {
      msg = "合格圏に入っています。誤答した分野を静かに振り返りましょう。";
    } else if (ratio >= 0.4) {
      msg = "もう一歩です。用語集に戻り、基本を確認してみてください。";
    } else {
      msg = "焦らず、用語集を丁寧に読み直すところから始めましょう。";
    }
    $("#result-message").textContent = msg;
  }

  /* ------------------------------------------------------------
     画面切替
     ------------------------------------------------------------ */
  function showScreen(name) {
    state.screen = name;
    $("#screen-terms").hidden = name !== "terms";
    $("#screen-quiz").hidden = name !== "quiz";
    $("#screen-result").hidden = name !== "result";
    updateNavActive(name);
    window.scrollTo(0, 0);
  }

  function updateNavActive(name) {
    const termsBtn = $("#nav-terms-btn");
    const quizBtn = $("#nav-quiz-btn");
    if (!termsBtn || !quizBtn) return;
    termsBtn.classList.toggle("is-active", name === "terms");
    quizBtn.classList.toggle("is-active", name === "quiz" || name === "result");
  }

  function goToTerms() {
    showScreen("terms");
  }

  function startQuiz() {
    state.order = shuffle(QUESTIONS.map(function (_, i) {
      return i;
    }));
    state.cursor = 0;
    state.score = 0;
    state.answered = false;
    showScreen("quiz");
    renderQuiz();
  }

  function nextQuestion() {
    if (!state.answered) return;
    state.cursor += 1;
    if (state.cursor >= state.order.length) {
      showScreen("result");
      renderResult();
    } else {
      renderQuiz();
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  /* ------------------------------------------------------------
     Init
     ------------------------------------------------------------ */
  function init() {
    renderTerms();

    // 画面内ボタン
    $("#start-btn").addEventListener("click", startQuiz);
    $("#next-btn").addEventListener("click", nextQuestion);
    $("#restart-btn").addEventListener("click", startQuiz);
    $("#back-to-terms-btn").addEventListener("click", goToTerms);
    $("#quiz-back-btn").addEventListener("click", goToTerms);

    // 共通ヘッダー
    $("#home-btn").addEventListener("click", goToTerms);
    $("#nav-terms-btn").addEventListener("click", goToTerms);
    $("#nav-quiz-btn").addEventListener("click", startQuiz);

    // 共通フッター
    $("#footer-terms-btn").addEventListener("click", goToTerms);
    $("#to-top-btn").addEventListener("click", scrollToTop);

    showScreen("terms");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
