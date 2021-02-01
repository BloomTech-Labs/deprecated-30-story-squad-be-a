const points = [
  { WritingPoints: 50, DrawingPoints: 15, MemberID: 1, SubmissionID: 1 },
  { WritingPoints: 25, DrawingPoints: 10, MemberID: 1, SubmissionID: 2 },
  { WritingPoints: 30, DrawingPoints: 30, MemberID: 2, SubmissionID: 1 },
  { WritingPoints: 10, DrawingPoints: 30, MemberID: 2, SubmissionID: 2 },
  { WritingPoints: 40, DrawingPoints: 20, MemberID: 3, SubmissionID: 3 },
  { WritingPoints: 20, DrawingPoints: 20, MemberID: 3, SubmissionID: 4 },
  { WritingPoints: 50, DrawingPoints: 20, MemberID: 4, SubmissionID: 3 },
  { WritingPoints: 10, DrawingPoints: 20, MemberID: 4, SubmissionID: 4 },
  { WritingPoints: 50, DrawingPoints: 15, MemberID: 5, SubmissionID: 5 },
  { WritingPoints: 25, DrawingPoints: 10, MemberID: 5, SubmissionID: 6 },
  { WritingPoints: 30, DrawingPoints: 30, MemberID: 6, SubmissionID: 5 },
  { WritingPoints: 10, DrawingPoints: 30, MemberID: 6, SubmissionID: 6 },
  { WritingPoints: 40, DrawingPoints: 20, MemberID: 7, SubmissionID: 7 },
  { WritingPoints: 20, DrawingPoints: 20, MemberID: 7, SubmissionID: 8 },
  { WritingPoints: 50, DrawingPoints: 20, MemberID: 8, SubmissionID: 7 },
  { WritingPoints: 10, DrawingPoints: 20, MemberID: 8, SubmissionID: 8 },
  { WritingPoints: 40, DrawingPoints: 20, MemberID: 9, SubmissionID: 9 },
  { WritingPoints: 20, DrawingPoints: 20, MemberID: 9, SubmissionID: 10 },
  { WritingPoints: 50, DrawingPoints: 20, MemberID: 10, SubmissionID: 9 },
  { WritingPoints: 10, DrawingPoints: 20, MemberID: 10, SubmissionID: 10 },
  { WritingPoints: 40, DrawingPoints: 20, MemberID: 11, SubmissionID: 11 },
  { WritingPoints: 20, DrawingPoints: 20, MemberID: 11, SubmissionID: 12 },
  { WritingPoints: 50, DrawingPoints: 20, MemberID: 12, SubmissionID: 11 },
  { WritingPoints: 10, DrawingPoints: 20, MemberID: 12, SubmissionID: 12 },
  { WritingPoints: 40, DrawingPoints: 20, MemberID: 13, SubmissionID: 13 },
  { WritingPoints: 20, DrawingPoints: 20, MemberID: 13, SubmissionID: 14 },
  { WritingPoints: 50, DrawingPoints: 20, MemberID: 14, SubmissionID: 13 },
  { WritingPoints: 10, DrawingPoints: 20, MemberID: 14, SubmissionID: 14 },
  { WritingPoints: 40, DrawingPoints: 20, MemberID: 15, SubmissionID: 15 },
  { WritingPoints: 20, DrawingPoints: 20, MemberID: 15, SubmissionID: 16 },
  { WritingPoints: 50, DrawingPoints: 20, MemberID: 16, SubmissionID: 15 },
  { WritingPoints: 10, DrawingPoints: 20, MemberID: 16, SubmissionID: 16 },
];

exports.seed = function (knex) {
  // Inserts seed entries
  return knex('Points').insert(points);
};
