import { APIError } from 'better-auth/api';
import { formatSI } from 'format-si-prefix';
import parseUnit from 'parseunit';

export function formatNumber(size: number, unit: string) {
  const [value, unitPrefix] = parseUnit(formatSI(size));
  return `${value} ${unitPrefix}${unit}`;
}

export function formatAPIErrorMessage(message: APIError['message']) {
  return message.replace(/^API Error: \S+ /, '');
}
