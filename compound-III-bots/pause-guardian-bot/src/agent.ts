import {
  BlockEvent,
  Finding,
  Initialize,
  HandleBlock,
  HandleTransaction,
  HandleAlert,
  AlertEvent,
  TransactionEvent,
  FindingSeverity,
  FindingType,
} from 'forta-agent';

let txEvent: TransactionEvent;

const handleTransaction: HandleTransaction = async (txEvent: TransactionEvent) => {
  const findings: Finding[] = [];

  return findings;
};

export function provideHandleTransaction() {
  return handleTransaction;
}

export default {
  provideHandleTransaction,
  handleTransaction: provideHandleTransaction,
};
