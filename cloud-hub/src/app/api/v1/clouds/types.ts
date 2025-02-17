import { NextResponse } from 'next/server';

export type SuccessResponse<T> = NextResponse<{
  status: 'success';
  data: T | null;
}>;

export type FailResponse = NextResponse<{
  status: 'fail';
  data: unknown;
}>;

export type ErrorResponse = NextResponse<{
  status: 'error';
  message: string;
  code?: number;
  data?: unknown;
}>;

export type ApiResponse<T> = SuccessResponse<T> | FailResponse | ErrorResponse;

export class ApiResponseFactory {
  static success<T>(data: T | null, code: number = 200): SuccessResponse<T> {
    return NextResponse.json({ status: 'success', data }, { status: code });
  }

  static fail(data: unknown): FailResponse {
    return NextResponse.json({ status: 'fail', data });
  }

  static error(message: string, code: number = 400, data?: unknown): ErrorResponse {
    return NextResponse.json({ status: 'error', message, code, data });
  }
}
