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
     問題データ（16問）
     分野配分: ストラテジ5 / マネジメント4 / テクノロジ7
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
    {
      id: 14,
      category: "ストラテジ",
      year: "令和5年4月",
      question:
        "DX（デジタルトランスフォーメーション）を推進する際の、最も重要な要素として適切なものはどれか。",
      choices: [
        "最新のクラウド基盤への全面的な移行と、それに伴うシステム再構築のみに注力する。",
        "既存の経営戦略を根本から見直し、デジタル技術を活用した新たなビジネスモデルや価値提供を実現する。",
        "すべての業務プロセスをRPA（Robotic Process Automation）で自動化し、人間の判断を排除する。",
        "顧客データを大量に収集し、個人情報の徹底的な活用に注力する。",
      ],
      answerIndex: 1,
      explanation:
        "DXは単なるIT導入ではなく、デジタル技術を通じて企業の事業・文化・組織全体を変革し、新たな価値を創造することである。経営戦略の見直しが最も本質的な要素である。",
    },
    {
      id: 15,
      category: "マネジメント",
      year: "令和4年10月",
      question:
        "PDCAサイクルの各段階について、正しい説明の組合せはどれか。",
      choices: [
        "Plan（計画）で目標を定め、Do（実行）で結果を分析する。",
        "Check（確認）で成果を評価し、Act（改善）で計画の改定と改善を行う。",
        "Act（改善）で新たな目標を立て、Plan（計画）で実行前の検証を行う。",
        "Do（実行）で問題の根本原因を分析し、Check（確認）で改善内容の有効性を判定する。",
      ],
      answerIndex: 1,
      explanation:
        "PDCAサイクルは、Plan（計画→目標設定）→ Do（実行）→ Check（確認・評価）→ Act（改善・改定）の順序で、継続的改善を実現する管理手法である。",
    },
    {
      id: 16,
      category: "テクノロジ",
      year: "令和3年4月",
      question:
        "クラウドコンピューティングの利点として、最も適切なものはどれか。",
      choices: [
        "自社でサーバを保有・運用する場合と比べ、初期投資が低く、必要に応じた容量調整が容易である。",
        "通信遅延がないため、リアルタイム取引やストリーミング配信に適している。",
        "データセンターの規模が小さいため、セキュリティリスクが著しく低減される。",
        "ベンダー企業の技術支援が不要となり、完全に独立した運用が可能になる。",
      ],
      answerIndex: 0,
      explanation:
        "クラウドコンピューティングの主な利点は、ハードウェア投資が不要になる、スケーラビリティが高い、保守運用の負担が軽減されることである。",
    },
    {
      id: 17,
      category: "ストラテジ",
      year: "令和6年10月",
      question:
        "マイケル・ポーターが提唱した競争戦略の三つの基本戦略として、最も適切な組合せはどれか。",
      choices: [
        "コスト・リーダーシップ戦略と差別化戦略とニッチ（集中）戦略",
        "攻撃戦略と防衛戦略と協調戦略",
        "成長戦略と安定戦略と縮小戦略",
        "短期戦略と中期戦略と長期戦略",
      ],
      answerIndex: 0,
      explanation:
        "ポーターの三つの基本戦略は、コスト・リーダーシップ（低コスト化）、差別化（独自性）、ニッチ（焦点化）である。企業はこのいずれかの基本方針を選択して競争優位を実現する。",
    },
    {
      id: 18,
      category: "マネジメント",
      year: "令和5年4月",
      question:
        "品質保証（QA）と品質管理（QC）の関係について、最も適切な説明はどれか。",
      choices: [
        "QAは製造過程での品質検査を行い、QCは製品の最終検査を行う。",
        "QAは品質問題の防止に重点を置き、QCは検出された不具合の改善に重点を置く。",
        "QCはプロセス設計段階で品質基準を定め、QAは実際の生産工程で遵守状況を確認する。",
        "QAはISO取得を目指す活動であり、QCは顧客満足度の測定を目的とする。",
      ],
      answerIndex: 1,
      explanation:
        "品質保証（QA）はプロセスの改善によって品質問題を事前に防止することに重点を置き、品質管理（QC）は検査・測定により不具合を検出して改善することに重点を置く。",
    },
    {
      id: 19,
      category: "テクノロジ",
      year: "令和4年4月",
      question:
        "正規表現を用いてテキストから特定のパターンに合致する文字列を抽出する場合、メタ文字の説明として、最も適切なものはどれか。",
      choices: [
        "\\d は任意の文字を表し、[0-9] は0から9までの数字を表す。",
        "* は直前の文字が0回以上繰り返されることを表し、+ は1回以上繰り返されることを表す。",
        ". は小数点のみを表し、\\. は任意の1文字を表す。",
        "^ は行の末尾を表し、$ は行の先頭を表す。",
      ],
      answerIndex: 1,
      explanation:
        "正規表現の * は直前の文字が0回以上の繰り返し、+ は1回以上の繰り返しを表す。\\d は数字、. は任意の1文字、^ は行頭、$ は行末をそれぞれ表す。",
    },
    {
      id: 20,
      category: "ストラテジ",
      year: "令和6年4月",
      question:
        "市場競争の中で自社の経営資源を最適配分する際に用いるABC分析の説明として、最も適切なものはどれか。",
      choices: [
        "売上高や利益の貢献度が高い順に商品やサービスをA・B・Cの三つのグループに分類し、経営資源配分の優先度を決定する管理手法。",
        "顧客満足度・品質・コストの三要素を均等に評価し、それぞれのスコアに基づいて事業戦略を立案する手法。",
        "過去3年間の売上推移をA期・B期・C期に分け、季節性や周期性を分析する予測手法。",
        "サプライチェーン上の3つのレイヤー（仕入先・製造・流通）のリスクを同等に評価する分類法。",
      ],
      answerIndex: 0,
      explanation:
        "ABC分析は、売上や利益への貢献度が高い順にA・B・Cの三分類に振り分け、Aグループに経営資源を集中させる優先順位付けの手法である。",
    },
    {
      id: 21,
      category: "マネジメント",
      year: "令和5年10月",
      question:
        "組織の変革を進める際に発生する抵抗感を最小化するために必要な対策として、最も適切なものはどれか。",
      choices: [
        "変革の必要性を充分に説明し、従業員の理解と合意を得た上で段階的に実施する。",
        "経営層の決定として一方的に指示し、速やかに強制実行することで反発を抑止する。",
        "変革の詳細を従業員に開示せず、完了後に結果のみを報告して納得させる。",
        "変革対象部門の全職員を入替え、新たなメンバーで組織を再編成する。",
      ],
      answerIndex: 0,
      explanation:
        "組織変革の成功には、変更の意義を十分に周知し、関係者の信頼と協力を得ることが重要である。段階的で透明性の高い進め方が抵抗を低減させる。",
    },
    {
      id: 22,
      category: "テクノロジ",
      year: "令和4年10月",
      question:
        "無線ネットワーク（Wi-Fi）の利点と課題の関係について、最も適切な説明はどれか。",
      choices: [
        "有線ネットワークに比べて導入コストが高いが、セキュリティは飛躍的に向上する。",
        "配線工事が不要で移動性に優れるが、電波の干渉や周囲の障害物による信号減衰の影響を受けやすい。",
        "通信速度が光ファイバーと同程度で、カバー範囲も無制限に拡大可能である。",
        "複数の周波数帯を同時使用すれば、セキュリティ脅威がほぼ完全に排除される。",
      ],
      answerIndex: 1,
      explanation:
        "Wi-Fiは配線が不要で導入が簡単な反面、電波環境による影響を受けやすく、セキュリティも有線より配慮が必要な無線技術である。",
    },
    {
      id: 23,
      category: "ストラテジ",
      year: "令和3年4月",
      question:
        "イノベーションの分類において、既存製品を改良・改善する場合の用語として正しいものはどれか。",
      choices: [
        "ディスラプティブイノベーション（破壊的イノベーション）",
        "インクリメンタルイノベーション（漸進的イノベーション）",
        "ラジカルイノベーション（根本的イノベーション）",
        "オープンイノベーション（開放型イノベーション）",
      ],
      answerIndex: 1,
      explanation:
        "インクリメンタルイノベーションは既存技術・製品の段階的な改良を指し、一方ディスラプティブは全く新しい価値を創造する革新的なイノベーションである。",
    },
    {
      id: 24,
      category: "マネジメント",
      year: "令和6年4月",
      question:
        "リスク管理プロセスにおいて、発生可能性と影響度のマトリクスを用いた分析方法を何というか。",
      choices: [
        "リスク評価",
        "リスク軽減",
        "リスク回避",
        "リスク移転",
      ],
      answerIndex: 0,
      explanation:
        "リスク評価は、リスクの発生確率と影響度を定量的に分析し、優先順位を付けるプロセスである。この結果に基づいて対応策を検討する。",
    },
    {
      id: 25,
      category: "テクノロジ",
      year: "令和5年4月",
      question:
        "NoSQLデータベースの特徴として、最も適切なものはどれか。",
      choices: [
        "関係型データベース同様にテーブル構造でデータを厳密に管理し、スケーラビリティは劣る。",
        "データのスキーマ定義が柔軟で、膨大な非構造化データの処理に向いている。",
        "複雑なトランザクション制御が必須であり、分散処理には対応していない。",
        "SQLコマンドが必ず利用でき、すべてのリレーショナルDBと互換性がある。",
      ],
      answerIndex: 1,
      explanation:
        "NoSQLはスキーマレスで柔軟、大規模データの分散処理に適した非関係型データベースであり、ビッグデータやIoTデータの処理に用いられる。",
    },
    {
      id: 26,
      category: "ストラテジ",
      year: "令和4年4月",
      question:
        "グローバル化に対応した企業戦略として、各国の市場特性に合わせた商品展開を行う戦略を何というか。",
      choices: [
        "スタンダード化戦略",
        "ローカライゼーション戦略",
        "フランチャイズ戦略",
        "アウトソーシング戦略",
      ],
      answerIndex: 1,
      explanation:
        "ローカライゼーション戦略は、国や地域の文化・法制度・消費者嗜好に適応させた製品やサービスを提供する国際展開の手法である。",
    },
    {
      id: 27,
      category: "テクノロジ",
      year: "令和5年10月",
      question:
        "マルウェア対策として、既知の脅威に対する防御を高めるために用いられる最新の脅威情報を、何というか。",
      choices: [
        "ホワイトリスト",
        "脅威インテリジェンス",
        "サンドボックス",
        "ペネトレーションテスト",
      ],
      answerIndex: 1,
      explanation:
        "脅威インテリジェンスは、既知・未知のセキュリティ脅威に関する情報を収集・分析し、防御策の強化に活用する情報セキュリティの手法である。",
    },
    {
      id: 28,
      category: "マネジメント",
      year: "令和3年10月",
      question:
        "ソフトウェア開発における統合テスト（IT）の目的として、最も適切なものはどれか。",
      choices: [
        "個別モジュールの仕様が仕様書に合致していることを確認する。",
        "複数のモジュール間の相互作用が正常に機能し、システム全体の動作が要件を満たしていることを確認する。",
        "実運用環境下で本番データを用いて全機能を検証する。",
        "コード行ごとの品質指標（カバレッジ等）を測定し、バグの存在確率を計算する。",
      ],
      answerIndex: 1,
      explanation:
        "統合テスト（IT）は、複数のコンポーネント・モジュールを組合せた時の相互作用と、システム全体の動作がシステム要件に適合しているかを検証するテストフェーズである。",
    },
    {
      id: 29,
      category: "テクノロジ",
      year: "令和6年10月",
      question:
        "仮想マシン（VM）技術の利点として、最も適切なものはどれか。",
      choices: [
        "物理的なサーバ1台につき1つのOSのみ実行可能であるため、リソース競合が発生しない。",
        "1つの物理サーバ上で複数の異なるOSやアプリケーション環境を独立して実行できる。",
        "ハードウェア性能が物理マシンと比べて常に2倍以上高速化される。",
        "ネットワーク設定が簡潔で、ファイアウォールが不要になる。",
      ],
      answerIndex: 1,
      explanation:
        "仮想マシンは、ホストOS上で複数のゲストOSを隔離された環境で同時実行でき、サーバ統合やテスト環境の構築に有効である。",
    },
    {
      id: 30,
      category: "ストラテジ",
      year: "令和6年4月",
      question:
        "ビジネスモデル・キャンバス（BMC）を活用する利点として、最も適切なものはどれか。",
      choices: [
        "会社全体の組織図を自動的に生成し、人事配置を最適化できる。",
        "ビジネスの主要な構成要素を視覚的に整理し、戦略立案の検討材料にできる。",
        "製品やサービスの詳細な仕様書を作成する際に必須となる。",
        "市場動向を自動的に予測し、競合他社の戦略を分析できる。",
      ],
      answerIndex: 1,
      explanation:
        "ビジネスモデル・キャンバスは、価値提案・顧客セグメント・収益化など9つの構成要素を1シートに整理し、ビジネスの全体像を簡潔に可視化するツール。",
    },
    {
      id: 31,
      category: "ストラテジ",
      year: "令和5年10月",
      question:
        "アンゾフの成長戦略マトリクスにおいて、新規市場に新規製品を提供する戦略は何と呼ばれるか。",
      choices: [
        "市場浸透",
        "市場開発",
        "製品開発",
        "多角化",
      ],
      answerIndex: 3,
      explanation:
        "アンゾフの成長戦略マトリクスでは、新規市場と新規製品の組合せを『多角化』と呼ぶ。多角化は最もハイリスクで、市場調査と綿密な計画が必要である。",
    },
    {
      id: 32,
      category: "ストラテジ",
      year: "令和6年10月",
      question:
        "グローバル化により日本企業が直面する課題として、最も適切なものはどれか。",
      choices: [
        "国内市場での競争が減少し、ビジネスチャンスが低下する。",
        "為替変動による収益変動リスクや、異文化対応のための人材育成が必要になる。",
        "すべての国で同じ製品を販売するため、開発コストが必ず削減される。",
        "国際的な営業網により、販売管理業務が単純化される。",
      ],
      answerIndex: 1,
      explanation:
        "グローバル化は為替リスク、現地化対応、異文化理解など複数の課題をもたらす。人材の育成・確保も重要な経営課題である。",
    },
    {
      id: 33,
      category: "ストラテジ",
      year: "令和5年4月",
      question:
        "サプライチェーン全体の効率を最大化する経営戦略として、最も関連が深いものはどれか。",
      choices: [
        "地域限定での少量多品種生産",
        "調達・生産・流通・販売の全段階をデータでつなぎ、需給を最適化する。",
        "単一メーカーへの依存度を高め、納期を短縮する。",
        "完成品の在庫を最大限に確保し、急な需要変動に対応する。",
      ],
      answerIndex: 1,
      explanation:
        "サプライチェーン・マネジメント（SCM）は、調達から販売までの全プロセスを統合し、情報共有により在庫・コスト・納期を最適化する戦略。",
    },
    {
      id: 34,
      category: "ストラテジ",
      year: "令和6年4月",
      question:
        "経営層の意思決定を支援する情報システムとして、最も適切なものはどれか。",
      choices: [
        "電子メールシステム",
        "会計仕訳システム",
        "経営情報システム（MIS）・経営分析ツール",
        "在庫管理システム",
      ],
      answerIndex: 2,
      explanation:
        "MIS（経営情報システム）やダッシュボード・BI（ビジネスインテリジェンス）は、経営層の戦略的意思決定を支援するための統計分析・予測を提供する。",
    },
    {
      id: 35,
      category: "ストラテジ",
      year: "令和5年10月",
      question:
        "競争優位を確保するためのポジショニング戦略として、最も適切なものはどれか。",
      choices: [
        "すべての顧客層に対して標準的な製品を提供する。",
        "同じ機能の製品であれば、最も低い価格で販売する。",
        "特定の顧客セグメントのニーズに特化した製品・サービスを提供する。",
        "できるだけ多くの競合企業と同じビジネスモデルを採用する。",
      ],
      answerIndex: 2,
      explanation:
        "ポジショニング戦略では、市場内で独自の位置を確立することが重要。特定セグメントへの集中戦略やコスト・差別化によって競争優位を実現する。",
    },
    {
      id: 36,
      category: "ストラテジ",
      year: "令和6年10月",
      question:
        "イノベーションを組織的に実現するために、企業が重視すべき要素として、最も適切なものはどれか。",
      choices: [
        "既存事業の規模拡大に集中し、新規事業には投資しない。",
        "新規事業部門を既存組織から完全に独立させ、権限も制限する。",
        "失敗を許容し、実験的な取組みを推奨する文化・環境の構築。",
        "開発部門のみが新規事業を検討し、他部門の意見は求めない。",
      ],
      answerIndex: 2,
      explanation:
        "イノベーションの創出には、チャレンジを奨励し失敗を学習機会とする組織文化、部門横断的な協働、実験のための予算確保が重要である。",
    },
    {
      id: 37,
      category: "マネジメント",
      year: "令和6年4月",
      question:
        "プロジェクトマネジメントの初期段階で最も重要なのは、次のうちどれか。",
      choices: [
        "チームメンバーの給与体系を決定する。",
        "プロジェクトのスコープ・目標・成功基準を明確に定義する。",
        "すぐに開発を開始し、後から修正する。",
        "できるだけ短いスケジュールを無理にでも実現する。",
      ],
      answerIndex: 1,
      explanation:
        "プロジェクト企画段階でスコープ（範囲）・目標・QCD（品質・コスト・納期）・ステークホルダーを明確に定義することが、後続フェーズの混乱を防ぐ。",
    },
    {
      id: 38,
      category: "マネジメント",
      year: "令和5年10月",
      question:
        "組織の創造性と革新性を高めるため、マネジャーが採るべき行動として、最も適切なものはどれか。",
      choices: [
        "メンバーの行動をすべて指定し、細かく管理する。",
        "メンバーに主体的に考え提案する機会を与え、意見を積極的に聞く。",
        "問題が発生したとき、すぐに上司に報告させる。",
        "既存のやり方を変えずに、効率性のみを追求する。",
      ],
      answerIndex: 1,
      explanation:
        "メンバーのエンパワーメント（権限委譲）と心理的安全性の確保により、創意工夫と改善提案が促進される。",
    },
    {
      id: 39,
      category: "マネジメント",
      year: "令和6年10月",
      question:
        "変化への対応が求められる環境で、組織の機能を維持するために必要なのは、次のうちどれか。",
      choices: [
        "管理層による一方的な指示と命令",
        "情報の透明性、内部コミュニケーション、適応的な組織体制",
        "競合企業との協力関係の構築",
        "すべての業務を集中管理し、権限の分散は避ける。",
      ],
      answerIndex: 1,
      explanation:
        "変化への適応には、経営層からの情報発信、部門間の情報共有、柔軟な権限配置が不可欠である。",
    },
    {
      id: 40,
      category: "マネジメント",
      year: "令和5年4月",
      question:
        "品質管理（QC）と品質保証（QA）の関係について、最も適切なものはどれか。",
      choices: [
        "QCのみで十分であり、QAは不要である。",
        "QAのみで十分であり、QCは不要である。",
        "QCは個々のロット・製品の検査、QAはプロセス全体の品質を確保する仕組み。",
        "QCとQAはまったく無関係である。",
      ],
      answerIndex: 2,
      explanation:
        "QC（品質管理）は完成品の検査、QA（品質保証）は企画・設計・製造・販売のプロセス全体で品質を確保する仕組み。両者は相互補完的。",
    },
    {
      id: 41,
      category: "マネジメント",
      year: "令和6年4月",
      question:
        "情報セキュリティ対策における『情報セキュリティポリシー』の役割として、最も適切なものはどれか。",
      choices: [
        "個別のシステム障害を修復する技術的な手段である。",
        "企業全体のセキュリティ方針を定め、全従業員が従うべき行動基準を明示する。",
        "外部の攻撃者を完全に排除できる保証を与える。",
        "経営層のみが知識として持つべき情報である。",
      ],
      answerIndex: 1,
      explanation:
        "セキュリティポリシーは、経営方針に基づいたセキュリティの目的・方針・基本方針を定め、全従業員に周知・徹底する重要な文書。",
    },
    {
      id: 42,
      category: "マネジメント",
      year: "令和5年10月",
      question:
        "リスク管理プロセスにおいて、リスク軽減の優先順位をつける際の判断基準として、最も適切なものはどれか。",
      choices: [
        "発生確率が低いリスクから順に対応する。",
        "影響度と発生確率を組み合わせて評価し、優先度の高いものから対応する。",
        "対応コストが最も低いリスクから順に対応する。",
        "経営層の気になるリスクのみを対応する。",
      ],
      answerIndex: 1,
      explanation:
        "リスク軽減の優先順位は、リスク = 発生確率 × 影響度 で評価し、総合的なリスク値の高いものから対応する。",
    },
    {
      id: 43,
      category: "マネジメント",
      year: "令和6年10月",
      question:
        "ステークホルダー分析において、高い影響力と高い関心度を持つステークホルダーに対して、採るべき戦略はどれか。",
      choices: [
        "最小限の情報のみを提供する。",
        "定期的に協議し、意思決定に参画させる。",
        "なるべく情報を隠す。",
        "独立して判断させ、報告は不要である。",
      ],
      answerIndex: 1,
      explanation:
        "高影響力・高関心のステークホルダーは『主要管理者』として、定期的なコミュニケーションと意思決定への参画が必須である。",
    },
    {
      id: 44,
      category: "テクノロジ",
      year: "令和6年4月",
      question:
        "プログラムの安全性と信頼性を向上させるため、開発段階で最も効果的な活動はどれか。",
      choices: [
        "できるだけ多くの機能を短期間で実装する。",
        "本番環境で実際のデータを用いて最初のテストを行う。",
        "コードレビュー・単体テスト・統合テストを開発プロセスに組み込む。",
        "テスト環境でのテストは最小化し、本番リリース後に問題を修正する。",
      ],
      answerIndex: 2,
      explanation:
        "開発段階でのコードレビュー・各種テストにより、欠陥を早期に検出し、修正コストを抑制できる。",
    },
    {
      id: 45,
      category: "テクノロジ",
      year: "令和5年10月",
      question:
        "データベース設計における正規化の主な目的として、最も適切なものはどれか。",
      choices: [
        "データの重複を排除し、更新時の矛盾（異常）を防ぐ。",
        "できるだけ多くのデータを1つのテーブルに集約する。",
        "クエリの処理速度を最大限に高速化する。",
        "すべてのテーブルを同じ構造にする。",
      ],
      answerIndex: 0,
      explanation:
        "正規化は、データの重複や冗長性を排除し、データの一貫性・整合性を保つための設計プロセス。",
    },
    {
      id: 46,
      category: "テクノロジ",
      year: "令和6年10月",
      question:
        "クラウドサービスの『IaaS』『PaaS』『SaaS』の関係として、最も適切なものはどれか。",
      choices: [
        "すべて同じサービス形態であり、区別は不要である。",
        "インフラ・プラットフォーム・アプリケーション層の違いに基づき、提供範囲が異なる。",
        "IaaSが最も新しく、PaaS・SaaSは古い技術である。",
        "SaaSがすべての機能を提供するため、他の2つは不要である。",
      ],
      answerIndex: 1,
      explanation:
        "IaaS：インフラ提供、PaaS：開発・実行環境提供、SaaS：アプリケーション提供。層別により利用者の負担範囲が異なる。",
    },
    {
      id: 47,
      category: "テクノロジ",
      year: "令和5年4月",
      question:
        "セキュアな通信を実現するSSL/TLS について、最も適切なものはどれか。",
      choices: [
        "ネットワーク層のプロトコルであり、アプリケーション層には影響しない。",
        "通信内容の暗号化・認証・改ざん検知により、安全な通信路を確立する。",
        "すべての通信を自動的に高速化する。",
        "ファイアウォール機能を含むため、ファイアウォールは不要である。",
      ],
      answerIndex: 1,
      explanation:
        "SSL/TLSは、暗号化・サーバー認証・データ完全性検証を通じて、安全な通信を実現するプロトコル層のセキュリティ。",
    },
    {
      id: 48,
      category: "テクノロジ",
      year: "令和6年4月",
      question:
        "ソフトウェアの脆弱性情報を共通言語で管理・評価するための国際的な標準として、最も関連が深いものはどれか。",
      choices: [
        "CVE（Common Vulnerabilities and Exposures）",
        "HTTP（Hypertext Transfer Protocol）",
        "DNS（Domain Name System）",
        "DHCP（Dynamic Host Configuration Protocol）",
      ],
      answerIndex: 0,
      explanation:
        "CVEは、脆弱性に一意の識別番号を付与し、情報共有・対応を統一する国際的なシステム。セキュリティ対応の基盤となる。",
    },
    {
      id: 49,
      category: "テクノロジ",
      year: "令和5年10月",
      question:
        "ブロックチェーン技術の特徴として、最も適切なものはどれか。",
      choices: [
        "単一の管理者が全データを一元管理し、改ざんが容易である。",
        "複数の参加者がデータを分散保有し、過去の取引記録の改ざんが困難である。",
        "データ処理速度の高速化だけが目的の技術である。",
        "インターネットに接続せずに運用する必要がある。",
      ],
      answerIndex: 1,
      explanation:
        "ブロックチェーンは、複数ノードによる分散管理、暗号学的チェーン構造により、改ざん耐性と透明性を実現する。",
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
