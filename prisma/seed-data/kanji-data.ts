import { Level } from 'src/generated/prisma/client';

export const kanjisData = [
  {
    character: '日',
    kana: 'ひ / にち',
    onyomi: 'ニチ, ジツ',
    kunyomi: 'ひ, び, か',
    meaning: 'Ngày, mặt trời',
    level: Level.N5,
    strokeCount: 4,
    lessonId: null,
    examples: [
      {
        title: '毎日日本語を勉強します。',
        description: 'Tôi học tiếng Nhật mỗi ngày.',
      },
      {
        title: '日曜日は休みです。',
        description: 'Chủ nhật là ngày nghỉ.',
      },
    ],
  },
  {
    character: '人',
    kana: 'ひと',
    onyomi: 'ジン, ニン',
    kunyomi: 'ひと',
    meaning: 'Người',
    level: Level.N5,
    strokeCount: 2,
    lessonId: null,
    examples: [
      {
        title: 'あの人は先生です。',
        description: 'Người kia là giáo viên.',
      },
      {
        title: '日本人です。',
        description: 'Tôi là người Nhật.',
      },
    ],
  },
  {
    character: '学',
    kana: 'まな',
    onyomi: 'ガク',
    kunyomi: 'まな',
    meaning: 'Học',
    level: Level.N5,
    strokeCount: 8,
    lessonId: null,
    examples: [
      {
        title: '日本語を学びます。',
        description: 'Tôi học tiếng Nhật.',
      },
      {
        title: '大学で勉強しています。',
        description: 'Tôi đang học ở đại học.',
      },
    ],
  },
  {
    character: '行',
    kana: 'い',
    onyomi: 'コウ, ギョウ',
    kunyomi: 'い, ゆ',
    meaning: 'Đi',
    level: Level.N5,
    strokeCount: 6,
    lessonId: null,
    examples: [
      {
        title: '学校に行きます。',
        description: 'Tôi đi học.',
      },
      {
        title: '来年日本へ行きたいです。',
        description: 'Tôi muốn sang Nhật vào năm sau.',
      },
    ],
  },
  {
    character: '食',
    kana: 'た',
    onyomi: 'ショク',
    kunyomi: 'た, く',
    meaning: 'Ăn',
    level: Level.N5,
    strokeCount: 9,
    lessonId: null,
    examples: [
      {
        title: 'ご飯を食べます。',
        description: 'Tôi ăn cơm.',
      },
      {
        title: '何を食べたいですか。',
        description: 'Bạn muốn ăn gì?',
      },
    ],
  },
  {
    character: '飲',
    kana: 'の',
    onyomi: 'イン',
    kunyomi: 'の',
    meaning: 'Uống',
    level: Level.N5,
    strokeCount: 12,
    lessonId: null,
    examples: [
      {
        title: '水を飲みます。',
        description: 'Tôi uống nước.',
      },
      {
        title: 'コーヒーを飲みません。',
        description: 'Tôi không uống cà phê.',
      },
    ],
  },
  {
    character: '見',
    kana: 'み',
    onyomi: 'ケン',
    kunyomi: 'み',
    meaning: 'Nhìn, xem',
    level: Level.N5,
    strokeCount: 7,
    lessonId: null,
    examples: [
      {
        title: '映画を見ました。',
        description: 'Tôi đã xem phim.',
      },
      {
        title: 'テレビを見ています。',
        description: 'Tôi đang xem TV.',
      },
    ],
  },
  {
    character: '書',
    kana: 'か',
    onyomi: 'ショ',
    kunyomi: 'か',
    meaning: 'Viết',
    level: Level.N5,
    strokeCount: 10,
    lessonId: null,
    examples: [
      {
        title: '漢字を書きます。',
        description: 'Tôi viết chữ Hán.',
      },
      {
        title: '名前を書いてください。',
        description: 'Xin hãy viết tên.',
      },
    ],
  },
  {
    character: '読',
    kana: 'よ',
    onyomi: 'ドク',
    kunyomi: 'よ',
    meaning: 'Đọc',
    level: Level.N5,
    strokeCount: 14,
    lessonId: null,
    examples: [
      {
        title: '本を読みます。',
        description: 'Tôi đọc sách.',
      },
      {
        title: '新聞を読んでいます。',
        description: 'Tôi đang đọc báo.',
      },
    ],
  },
];
