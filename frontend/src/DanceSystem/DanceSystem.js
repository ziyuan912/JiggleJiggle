
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
  }

  evaluatePoses() {
    // let score = Math.random();
    let score = 0;
    let visibleKeypoints = 0;

    /* Code to evaluate poses here. */
    if (this.userPoses.length > 0 && this.targetPoses.length > 0) {
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
    	console.log('user poses:');
	    console.log(userPose);
	    console.log('target poses:');
	    console.log(targetPose);
    }

    return 100 - Math.floor((score / Math.max(visibleKeypoints, 1)) * 100);
  }
}

export const danceSystem = new DanceSystem();