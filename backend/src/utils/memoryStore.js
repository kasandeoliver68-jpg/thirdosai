import { createInitialState } from "./seedData.js";

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

const initialState = createInitialState();

export const store = {
  users: clone(initialState.users),
  organizations: clone(initialState.organizations),
  submissions: clone(initialState.submissions),
  signals: clone(initialState.signals),
  intelligenceBriefs: clone(initialState.intelligenceBriefs),
  ventures: clone(initialState.ventures),
  businessModels: clone(initialState.businessModels),
  validationReports: clone(initialState.validationReports),
  positioningDocuments: clone(initialState.positioningDocuments),
  investors: clone(initialState.investors),
  investorMandates: clone(initialState.investorMandates),
  investorMatches: clone(initialState.investorMatches),
  automationRuns: clone(initialState.automationRuns),
  automationSteps: clone(initialState.automationSteps),
  knowledgeItems: clone(initialState.knowledgeItems),
  reports: clone(initialState.reports),
  operators: clone(initialState.operators),
  approvalRequests: clone(initialState.approvalRequests),
  workflowLogs: clone(initialState.workflowLogs),
  notifications: clone(initialState.notifications),
  sampleSubmissionText: initialState.sampleSubmissionText
};

export function pushRecord(collectionName, record) {
  store[collectionName].unshift(record);
  return record;
}

export function replaceRecord(collectionName, id, nextRecord) {
  const collection = store[collectionName];
  const index = collection.findIndex((item) => item.id === id);

  if (index === -1) {
    return null;
  }

  collection[index] = nextRecord;
  return nextRecord;
}

export function findRecord(collectionName, id) {
  return store[collectionName].find((item) => item.id === id) ?? null;
}

export function listCollection(collectionName) {
  return [...store[collectionName]];
}
