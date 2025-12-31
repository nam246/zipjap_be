import { Level } from 'src/generated/prisma/enums';

export const grammarData = [
  {
    pattern: '〜ます',
    structure: '動詞ます形',
    meaning: 'Thể lịch sự của động từ',
    explanation: 'Dùng để diễn đạt hành động một cách lịch sự, trang trọng',
    notes: 'Thể cơ bản trong giao tiếp hàng ngày',
    level: Level.N5,
    examples: [
      {
        title: '私は毎日日本語を勉強します。',
        description: 'Tôi học tiếng Nhật mỗi ngày.',
      },
      {
        title: '明日学校に行きます。',
        description: 'Mai tôi đi học.',
      },
    ],
  },
  {
    pattern: '〜ません',
    structure: '動詞ます形 + ません',
    meaning: 'Phủ định lịch sự của động từ',
    explanation: 'Dùng để phủ định hành động một cách lịch sự',
    notes: 'Thể phủ định của ます',
    level: Level.N5,
    examples: [
      {
        title: '今日は働きません。',
        description: 'Hôm nay tôi không làm việc.',
      },
      {
        title: '肉を食べません。',
        description: 'Tôi không ăn thịt.',
      },
    ],
  },
  {
    pattern: '〜ました',
    structure: '動詞ます形 + ました',
    meaning: 'Thể quá khứ lịch sự',
    explanation: 'Diễn đạt hành động đã xảy ra trong quá khứ',
    notes: 'Quá khứ của ます',
    level: Level.N5,
    examples: [
      {
        title: '昨日映画を見ました。',
        description: 'Hôm qua tôi đã xem phim.',
      },
      {
        title: '先週京都に行きました。',
        description: 'Tuần trước tôi đã đi Kyoto.',
      },
    ],
  },
  {
    pattern: '〜たい',
    structure: '動詞ます形 + たい',
    meaning: 'Muốn làm gì đó',
    explanation: 'Diễn đạt mong muốn, ước muốn của bản thân',
    notes: 'Chỉ dùng cho người nói (ngôi thứ nhất)',
    level: Level.N5,
    examples: [
      {
        title: '日本に行きたいです。',
        description: 'Tôi muốn đi Nhật.',
      },
      {
        title: 'ラーメンが食べたいです。',
        description: 'Tôi muốn ăn ramen.',
      },
    ],
  },
  {
    pattern: '〜てください',
    structure: '動詞て形 + ください',
    meaning: 'Xin hãy làm gì đó (nhờ vả, yêu cầu)',
    explanation:
      'Dùng để nhờ vả hoặc yêu cầu ai đó làm điều gì đó một cách lịch sự',
    notes: 'Câu mệnh lệnh lịch sự',
    level: Level.N5,
    examples: [
      {
        title: 'ちょっと待ってください。',
        description: 'Xin hãy đợi một chút.',
      },
      {
        title: '窓を開けてください。',
        description: 'Xin hãy mở cửa sổ.',
      },
    ],
  },
  {
    pattern: '〜ている',
    structure: '動詞て形 + いる',
    meaning: 'Đang làm gì / trạng thái',
    explanation: 'Diễn đạt hành động đang diễn ra hoặc trạng thái hiện tại',
    notes: 'Thể tiếp diễn hoặc trạng thái kết quả',
    level: Level.N5,
    examples: [
      {
        title: '今、勉強しています。',
        description: 'Bây giờ tôi đang học.',
      },
      {
        title: '彼は結婚しています。',
        description: 'Anh ấy đã kết hôn (đang ở trạng thái đã kết hôn).',
      },
    ],
  },
  {
    pattern: '〜ことができる',
    structure: '動詞辞書形 + ことができる',
    meaning: 'Có thể làm gì đó',
    explanation: 'Diễn đạt khả năng hoặc khả thi của một hành động',
    notes: 'Cách nói lịch sự về khả năng',
    level: Level.N4,
    examples: [
      {
        title: '日本語を話すことができます。',
        description: 'Tôi có thể nói tiếng Nhật.',
      },
      {
        title: '泳ぐことができません。',
        description: 'Tôi không thể bơi.',
      },
    ],
  },
  {
    pattern: '〜なければならない',
    structure: '動詞ない形 + なければならない',
    meaning: 'Phải làm gì đó',
    explanation: 'Diễn đạt nghĩa vụ, bắt buộc phải làm',
    notes: 'Dạng nghĩa vụ mạnh',
    level: Level.N4,
    examples: [
      {
        title: '宿題をしなければなりません。',
        description: 'Tôi phải làm bài tập về nhà.',
      },
      {
        title: '薬を飲まなければならない。',
        description: 'Phải uống thuốc.',
      },
    ],
  },
  {
    pattern: '〜たら',
    structure: '動詞た形 + ら',
    meaning: 'Nếu... thì / Khi... thì',
    explanation: 'Diễn đạt điều kiện hoặc thời điểm trong tương lai',
    notes: 'Dạng điều kiện phổ biến nhất',
    level: Level.N4,
    examples: [
      {
        title: '春になったら、花見に行きましょう。',
        description: 'Nếu đến mùa xuân, hãy đi ngắm hoa anh đào nhé.',
      },
      {
        title: '時間があったら、映画を見ます。',
        description: 'Nếu có thời gian, tôi sẽ xem phim.',
      },
    ],
  },
  {
    pattern: '〜そうだ',
    structure: '動詞ます形 + そうだ',
    meaning: 'Trông có vẻ... / Có vẻ như...',
    explanation: 'Diễn đạt cảm nhận, dự đoán dựa trên quan sát',
    notes: 'Biểu hiện vẻ ngoài',
    level: Level.N4,
    examples: [
      {
        title: '雨が降りそうです。',
        description: 'Trông có vẻ như sắp mưa.',
      },
      {
        title: 'このケーキは美味しそうです。',
        description: 'Cái bánh này trông có vẻ ngon.',
      },
    ],
  },
  {
    pattern: '〜ように',
    structure: '動詞辞書形/ない形 + ように',
    meaning: 'Để... / Sao cho...',
    explanation: 'Diễn đạt mục đích hoặc cầu mong',
    notes: 'Khác với ために (mục đích có ý chí)',
    level: Level.N3,
    examples: [
      {
        title: '忘れないように、メモしておきます。',
        description: 'Để không quên, tôi ghi chú lại.',
      },
      {
        title: '合格できるように頑張ります。',
        description: 'Tôi sẽ cố gắng để có thể đỗ.',
      },
    ],
  },
  {
    pattern: '〜ばかり',
    structure: '動詞て形/名詞 + ばかり',
    meaning: 'Chỉ toàn... / Suốt ngày...',
    explanation: 'Diễn đạt việc chỉ làm một việc, lặp đi lặp lại',
    notes: 'Có ý nghĩa hơi tiêu cực',
    level: Level.N3,
    examples: [
      {
        title: 'ゲームばかりしています。',
        description: 'Suốt ngày chỉ chơi game.',
      },
      {
        title: '文句ばかり言わないでください。',
        description: 'Đừng chỉ toàn than phiền.',
      },
    ],
  },
  {
    pattern: '〜わけではない',
    structure: '動詞普通形 + わけではない',
    meaning: 'Không phải là... / Không hẳn là...',
    explanation: 'Phủ định một phần, không hoàn toàn phủ định',
    notes: 'Dùng để làm mềm lời nói',
    level: Level.N3,
    examples: [
      {
        title: '嫌いなわけではありません。',
        description: 'Không phải là tôi ghét.',
      },
      {
        title: '分からないわけではないが、難しい。',
        description: 'Không phải là tôi không hiểu, nhưng nó khó.',
      },
    ],
  },
  {
    pattern: '〜にもかかわらず',
    structure: '名詞/動詞普通形 + にもかかわらず',
    meaning: 'Mặc dù... nhưng...',
    explanation: 'Diễn đạt sự đối lập bất ngờ, trang trọng',
    notes: 'Văn viết',
    level: Level.N2,
    examples: [
      {
        title: '雨にもかかわらず、試合は行われた。',
        description: 'Mặc dù mưa nhưng trận đấu vẫn được tổ chức.',
      },
      {
        title: '努力したにもかかわらず、失敗した。',
        description: 'Mặc dù đã cố gắng nhưng vẫn thất bại.',
      },
    ],
  },
  {
    pattern: '〜ざるを得ない',
    structure: '動詞ない形(ない→ざる) + を得ない',
    meaning: 'Không thể không... / Buộc phải...',
    explanation: 'Diễn đạt tình huống bắt buộc',
    notes: 'する → せざるを得ない',
    level: Level.N2,
    examples: [
      {
        title: '状況を考えると、認めざるを得ない。',
        description: 'Xét về tình hình, không thể không thừa nhận.',
      },
      {
        title: '反対せざるを得ません。',
        description: 'Buộc phải phản đối.',
      },
    ],
  },
  {
    pattern: '〜かねない',
    structure: '動詞ます形 + かねない',
    meaning: 'Có khả năng... (điều xấu)',
    explanation: 'Diễn đạt khả năng xảy ra điều tiêu cực',
    notes: 'Chỉ dùng cho tình huống xấu',
    level: Level.N2,
    examples: [
      {
        title: 'そんなことを言ったら、誤解されかねない。',
        description: 'Nếu nói như vậy, có thể bị hiểu lầm.',
      },
      {
        title: '油断すると、事故を起こしかねません。',
        description: 'Nếu chủ quan, có thể gây tai nạn.',
      },
    ],
  },
  {
    pattern: '〜に越したことはない',
    structure: '動詞辞書形/ない形/い形容詞 + に越したことはない',
    meaning: 'Không gì tốt hơn...',
    explanation: 'Diễn đạt điều tốt nhất',
    notes: 'Thể hiện sự ưu tiên',
    level: Level.N2,
    examples: [
      {
        title: '早いに越したことはない。',
        description: 'Sớm càng tốt.',
      },
      {
        title: '安全に越したことはありません。',
        description: 'Không gì tốt hơn là an toàn.',
      },
    ],
  },
  {
    pattern: '〜ないことはない',
    structure: '動詞ない形 + ことはない',
    meaning: 'Không phải là không...',
    explanation: 'Khẳng định yếu (double negative)',
    notes: 'Không chắc chắn lắm',
    level: Level.N2,
    examples: [
      {
        title: '分からないことはないが、自信がない。',
        description: 'Không phải là không hiểu, nhưng không tự tin.',
      },
      {
        title: 'できないことはないです。',
        description: 'Không phải là không làm được.',
      },
    ],
  },
  {
    pattern: '〜てやまない',
    structure: '動詞て形 + やまない',
    meaning: 'Không ngừng...',
    explanation: 'Diễn đạt cảm xúc mạnh, liên tục',
    notes: 'Văn viết, trang trọng',
    level: Level.N1,
    examples: [
      {
        title: '世界平和を願ってやみません。',
        description: 'Tôi không ngừng mong ước hòa bình thế giới.',
      },
      {
        title: 'ご成功をお祈りしてやみません。',
        description: 'Tôi không ngừng cầu nguyện cho sự thành công.',
      },
    ],
  },
  {
    pattern: '〜をものともせず',
    structure: '名詞 + をものともせず',
    meaning: 'Bất chấp...',
    explanation: 'Diễn đạt vượt qua khó khăn mạnh mẽ',
    notes: 'Văn viết, văn học',
    level: Level.N1,
    examples: [
      {
        title: '困難をものともせず、前進した。',
        description: 'Bất chấp khó khăn, tiến về phía trước.',
      },
      {
        title: '批判をものともせず、信念を貫いた。',
        description: 'Không màng chỉ trích, kiên trì niềm tin.',
      },
    ],
  },
];
