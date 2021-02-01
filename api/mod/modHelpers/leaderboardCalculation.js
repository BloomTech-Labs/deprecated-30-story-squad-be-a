const db = require('../../../data/db-config');

/**
 * Iterates through all children and calculates + saves the accumulated points to the Childrens table
 * @param {'WRITING' | 'DRAWING} type The type of Submission that we want to calculate by
 * @returns {Promise} returns a promise that resolves to an array of Children and their accumulated points
 */
const accumulatePoints = async (type = null) => {
  // select from the Childrens table so that we process every Child
  const query = db('Children as C')
    // Grab the Child ID, so that we know what Child record to update
    .select('C.ID as ChildID')

    // We're only grabbing the name for debugging purposes, it's not necessary
    .select('C.Name as ChildName')

    // Retrieve the sum of ALL points the child has earned and store it in a variable called "TotalPoints"
    // COALESCE is used to ensure that Children who have never received points do not return NULL, and instead we
    // return a total sum of 0
    .select(db.raw(`COALESCE(SUM("F"."Points"), 0) as "TotalPoints"`))

    // Join the Submissions table by Child ID so that we can get the relevant faceoffs
    .join('Submissions as S', 'S.ChildID', 'C.ID')

    // Join the Faceoff table by SubmissionID. We have to make sure we only select the SubmissionID that is relevant
    // We do a left join because if there are no Faceoffs for a particular child, we still want the child to be part of the result set
    .leftJoin(
      'Faceoffs as F',

      // We use an "OR" statement here because it's possible to be in either SubmissionID1 or SubmissionID2
      // We also want to make sure we retrieve the Faceoffs where the child has won
      db.raw(`
        ("F"."Winner" = 1 and "F"."SubmissionID1" = "S"."ID")
        OR
        ("F"."Winner" = 2 and "F"."SubmissionID2" = "S"."ID")
      `)
    )

    // We group by the Child and Submission ID to ensure that the children do not come back as duplicate records
    .groupBy('C.ID');

  if (type) {
    query.groupBy('C.ID', 'F.Type');
    query.where('F.Type', type);
  }

  const childrenPoints = await query;

  // Update all children's points
  await Promise.all(
    childrenPoints.map((record) => {
      const updateQuery = db('Children').where('ID', record.ChildID);
      let updateColumn = 'Total_Points';
      console.log('CHILDREN POINTS: ', childrenPoints);

      if (type && type === 'DRAWING') {
        updateColumn = 'Drawing_Points';
      } else if (type && type === 'WRITING') {
        updateColumn = 'Writing_Points';
      }

      return updateQuery.update(updateColumn, parseInt(record.TotalPoints));
    })
  );

  // This is just here for debugging
  // console.log('ACCUMULATED CHILDREN W/ POINTS', childrenPoints);

  return childrenPoints;
};

/**
 * Iterates through all children and calculates + saves the accumulated points to the Childrens table
 * @returns {Promise} returns a promise that resolves to void
 */
const leaderboardCalculation = async () => {
  await accumulatePoints();

  // Uncomment after we create the Drawing_Points and Writing_Points columns on the Childrens table
  // await accumulatePoints('DRAWING');
  // await accumulatePoints('WRITING');
};

module.exports = leaderboardCalculation;
