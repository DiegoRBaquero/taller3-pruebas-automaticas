'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 3000;

class LoadAudit extends Audit {
  static get meta() {
    return {
      category: 'MyPerformance',
      name: 'api-audit',
      description: 'Fist API response done',
      failureDescription: 'First API response was slow',
      helpText: 'Used to measure time from navigationStart to first API response',

      requiredArtifacts: ['TimeToAPI']
    };
  }

  static audit(artifacts) {
    const loadedTime = artifacts.TimeToAPI;

    const belowThreshold = loadedTime <= MAX_CARD_TIME;

    return {
      rawValue: loadedTime,
      score: belowThreshold
    };
  }
}

module.exports = LoadAudit;