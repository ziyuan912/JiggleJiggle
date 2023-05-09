
function calculateScore(a, b) {
	var score = 0;
	for (let d of ['x', 'y', 'z']) {
		score += (a[d] - b[d]) * (a[d] - b[d]);
	}
	return Math.sqrt(score)
}

class DanceSystem {
  constructor() {
    this.userPoses = []; 
    this.targetPoses = [];
    this.keypointIdx = [0, 11, 12, 13, 14, 15, 16, 23, 24, 25, 26, 27, 28];
		
		this.danceScore = 0;
		this.matchedKeypoints = 0;
		this.userPoseConfidence = 0;
		this.targetPoseConfidence = 0;
  }

  evaluatePoses() {
    let score = 0;
    let visibleKeypoints = 0;

		// No pose detected.
    if (this.userPoses.length === 0 || this.targetPoses.length === 0) { 
			this.matchedKeypoints = 0;
			this.danceScore = 0;
			this.userPoseConfidence = 0;
			this.targetPoseConfidence = 0;
			return; 
		}

    var userPose = this.userPoses[0]['keypoints3D'];
    var targetPose = this.targetPoses[0]['keypoints3D'];
    for (let idx of this.keypointIdx) {
    	var userKeypoint = userPose[idx];
    	var targetKeypoint = targetPose[idx];
    	if (userKeypoint['score'] > 0.5 && targetKeypoint['score'] > 0.5) {
    		score += calculateScore(userKeypoint, targetKeypoint);
    		visibleKeypoints += 1;
    	}
    }

		// Update states
		this.danceScore = 100 - Math.floor((score / Math.max(visibleKeypoints, 1)) * 100);
		this.matchedKeypoints = visibleKeypoints;
		this.userPoseConfidence = this.userPoses[0].score;
		this.targetPoseConfidence = this.targetPoses[0].score;
  }
}

export const danceSystem = new DanceSystem();