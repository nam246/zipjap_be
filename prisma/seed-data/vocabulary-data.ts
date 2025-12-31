import { Level, WordType } from 'src/generated/prisma/client';

const vocabularyData = [
  {
    word: '学生',
    kana: 'がくせい',
    romaji: 'gakusei',
    meaning: 'Học sinh, sinh viên',
    wordType: WordType.NOUN,
    level: Level.N5,
    examples: [
      {
        title: '私は大学の学生です。',
        description: 'Tôi là sinh viên đại học.',
      },
      {
        title: 'あの学生は日本人です。',
        description: 'Học sinh kia là người Nhật.',
      },
    ],
  },
  {
    word: '食べる',
    kana: 'たべる',
    romaji: 'taberu',
    meaning: 'Ăn',
    wordType: WordType.VERB,
    level: Level.N5,
    examples: [
      {
        title: '朝ごはんを食べます。',
        description: 'Tôi ăn cơm sáng.',
      },
      {
        title: '何を食べたいですか。',
        description: 'Bạn muốn ăn gì?',
      },
    ],
  },
  {
    word: '美しい',
    kana: 'うつくしい',
    romaji: 'utsukushii',
    meaning: 'Đẹp',
    wordType: WordType.I_ADJECTIVE,
    level: Level.N4,
    examples: [
      {
        title: '富士山は美しいです。',
        description: 'Núi Phú Sĩ thật đẹp.',
      },
      {
        title: '美しい景色を見ました。',
        description: 'Tôi đã xem phong cảnh đẹp.',
      },
    ],
  },
  {
    word: '静か',
    kana: 'しずか',
    romaji: 'shizuka',
    meaning: 'Yên tĩnh',
    wordType: WordType.NA_ADJECTIVE,
    level: Level.N5,
    examples: [
      {
        title: '図書館は静かです。',
        description: 'Thư viện yên tĩnh.',
      },
      {
        title: '静かな場所が好きです。',
        description: 'Tôi thích nơi yên tĩnh.',
      },
    ],
  },
  {
    word: '勉強',
    kana: 'べんきょう',
    romaji: 'benkyou',
    meaning: 'Học tập',
    wordType: WordType.NOUN,
    level: Level.N5,
    examples: [
      {
        title: '毎日日本語の勉強をします。',
        description: 'Mỗi ngày tôi học tiếng Nhật.',
      },
      {
        title: '勉強が好きです。',
        description: 'Tôi thích học.',
      },
    ],
  },
  {
    word: '考える',
    kana: 'かんがえる',
    romaji: 'kangaeru',
    meaning: 'Suy nghĩ, cân nhắc',
    wordType: WordType.VERB,
    level: Level.N4,
    examples: [
      {
        title: '将来のことを考えています。',
        description: 'Tôi đang suy nghĩ về tương lai.',
      },
      {
        title: 'よく考えてから決めます。',
        description: 'Tôi sẽ suy nghĩ kỹ rồi mới quyết định.',
      },
    ],
  },
  {
    word: '便利',
    kana: 'べんり',
    romaji: 'benri',
    meaning: 'Tiện lợi',
    wordType: WordType.NA_ADJECTIVE,
    level: Level.N4,
    examples: [
      {
        title: 'この辞書は便利です。',
        description: 'Quyển từ điển này tiện lợi.',
      },
      {
        title: '便利な道具を買いました。',
        description: 'Tôi đã mua công cụ tiện lợi.',
      },
    ],
  },
  {
    word: '環境',
    kana: 'かんきょう',
    romaji: 'kankyou',
    meaning: 'Môi trường',
    wordType: WordType.NOUN,
    level: Level.N3,
    examples: [
      {
        title: '環境問題について話し合いました。',
        description: 'Chúng tôi đã thảo luận về vấn đề môi trường.',
      },
      {
        title: '環境を守ることは大切です。',
        description: 'Bảo vệ môi trường là điều quan trọng.',
      },
    ],
  },
  {
    word: '実現',
    kana: 'じつげん',
    romaji: 'jitsugen',
    meaning: 'Thực hiện, hiện thực hóa',
    wordType: WordType.NOUN,
    level: Level.N2,
    examples: [
      {
        title: '夢を実現するために努力します。',
        description: 'Tôi cố gắng để hiện thực hóa ước mơ.',
      },
      {
        title: '計画の実現は難しいです。',
        description: 'Việc thực hiện kế hoạch rất khó.',
      },
    ],
  },
  {
    word: '困難',
    kana: 'こんなん',
    romaji: 'konnan',
    meaning: 'Khó khăn',
    wordType: WordType.NA_ADJECTIVE,
    level: Level.N3,
    examples: [
      {
        title: '困難な状況を乗り越えました。',
        description: 'Đã vượt qua tình huống khó khăn.',
      },
      {
        title: 'この問題は困難です。',
        description: 'Vấn đề này khó khăn.',
      },
    ],
  },
  {
    word: '説明',
    kana: 'せつめい',
    romaji: 'setsumei',
    meaning: 'Giải thích',
    wordType: WordType.NOUN,
    level: Level.N4,
    examples: [
      {
        title: '先生の説明はわかりやすいです。',
        description: 'Lời giải thích của giáo viên dễ hiểu.',
      },
      {
        title: '詳しく説明してください。',
        description: 'Xin hãy giải thích chi tiết.',
      },
    ],
  },
  {
    word: '協力',
    kana: 'きょうりょく',
    romaji: 'kyouryoku',
    meaning: 'Hợp tác, cộng tác',
    wordType: WordType.NOUN,
    level: Level.N3,
    examples: [
      {
        title: 'みんなで協力して仕事を終えました。',
        description: 'Mọi người hợp tác hoàn thành công việc.',
      },
      {
        title: 'ご協力ありがとうございます。',
        description: 'Cảm ơn sự hợp tác của bạn.',
      },
    ],
  },
  {
    word: '伝統',
    kana: 'でんとう',
    romaji: 'dentou',
    meaning: 'Truyền thống',
    wordType: WordType.NOUN,
    level: Level.N3,
    examples: [
      {
        title: '日本の伝統文化を学んでいます。',
        description: 'Tôi đang học văn hóa truyền thống Nhật Bản.',
      },
      {
        title: '伝統を守ることは重要です。',
        description: 'Bảo tồn truyền thống là điều quan trọng.',
      },
    ],
  },
  {
    word: '発展',
    kana: 'はってん',
    romaji: 'hatten',
    meaning: 'Phát triển',
    wordType: WordType.NOUN,
    level: Level.N2,
    examples: [
      {
        title: '経済が発展しています。',
        description: 'Nền kinh tế đang phát triển.',
      },
      {
        title: '技術の発展は著しいです。',
        description: 'Sự phát triển công nghệ thật đáng kể.',
      },
    ],
  },
  {
    word: '影響',
    kana: 'えいきょう',
    romaji: 'eikyou',
    meaning: 'Ảnh hưởng',
    wordType: WordType.NOUN,
    level: Level.N3,
    examples: [
      {
        title: '天気は気分に影響します。',
        description: 'Thời tiết ảnh hưởng đến tâm trạng.',
      },
      {
        title: '悪い影響を受けました。',
        description: 'Đã bị ảnh hưởng xấu.',
      },
    ],
  },
];

export default vocabularyData;
