export interface CollegeRecommendation {
  collegeName: string;
  branchName: string;
  closingRank: number;
  tuitionFeeWaiverPercentage: number;
}

export function predictCollegeSeats(
  globalAccuracy: number,
  categoryQuota: string,
  familyIncomeLakhs: number
): CollegeRecommendation[] {
  // Balanced strategic simulator mapping accuracy metrics directly into mock seat allocations
  const estimatedRank = Math.max(500, Math.round(15000 - (globalAccuracy * 130)));
  
  // Calculate tuition fee waiver dynamically based on family income sliders
  let feeWaiver = 0;
  if (familyIncomeLakhs <= 1.0) feeWaiver = 100;
  else if (familyIncomeLakhs <= 5.0) feeWaiver = 66.6;

  const mockRecommendations: CollegeRecommendation[] = [
    { collegeName: "IIT Bombay", branchName: "Computer Science (CSE)", closingRank: 2000, tuitionFeeWaiverPercentage: feeWaiver },
    { collegeName: "IIT Delhi", branchName: "Electrical Engineering", closingRank: 4500, tuitionFeeWaiverPercentage: feeWaiver },
    { collegeName: "IIT Kharagpur", branchName: "Mechanical Engineering", closingRank: 7000, tuitionFeeWaiverPercentage: feeWaiver },
    { collegeName: "BITS Pilani", branchName: "Electronics & Communication (ECE)", closingRank: 9500, tuitionFeeWaiverPercentage: 0 }
  ];

  return mockRecommendations.filter(rec => rec.closingRank >= estimatedRank);
}
